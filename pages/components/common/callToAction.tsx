import React, { useEffect, useState } from "react";

import styles from "../../../styles/CallToAction.module.css";
import Container from "./container";

import discordColorIcon from "../../../images/icons/discord-color.png";
import minecraftIcon from "../../../images/icons/minecraft.png";

import axios from "axios";

const CallToAction: React.FC<{ setShowModal: any }> = ({ setShowModal }) => {
  interface iDiscordData {
    online: number;
    instant_invite: string;
  }

  const [onlineDiscord, setOnlineDiscord] = useState<iDiscordData>({
    instant_invite: "",
    online: 0,
  });

  interface iMinecraftData {
    online: number;
    max: number;
  }

  const [onlineMinecraft, setOnlineMinecraft] = useState<iMinecraftData>({
    online: 0,
    max: 0,
  });

  useEffect(() => {
    const asyncFunc = async () => {
      let discordData = await axios.get(
        "https://discord.com/api/guilds/1018315329094561982/widget.json"
      );
      setOnlineDiscord({
        online: discordData.data.presence_count,
        instant_invite: discordData.data.instant_invite,
      });

      let minecraftData = await axios.get(
        "https://mcapi.us/server/status?ip=play.windrosemc.com"
      );
      setOnlineMinecraft({
        online: minecraftData.data.players.now,
        max: minecraftData.data.players.max,
      });
    };
    asyncFunc();
  }, []);

  return (
    <div className="2xl:flex 2xl:flex-row 2xl:items-stretch 2xl:justify-between mx-8 xl:mx-[20%]">
      <div className="bg-secondary-background px-8 py-16 sm:p-16 my-8 2xl:mr-4 2xl:w-2/3">
        <h1 className="text-white-100 text-xl font-minecraft mb-4">
          Start playing in 3 easy steps
        </h1>
        <ol className="text-white-100 text-xl font-minecraft list-decimal list-inside">
          <li className="mb-4">
            <span className="text-base">Copy our IP address above</span>
          </li>
          <li className="mb-4">
            <span className="text-base">
              In Minecraft Java Edition, go to{" "}
              <span className="text-red-100">Multiplayer</span> then{" "}
              <span className="text-red-100">Add Server</span>
            </span>
          </li>
          <li className="mb-4">
            <span className="text-base">
              In the <span className="text-red-100">Server address</span> box,
              paste our IP address
            </span>
          </li>
        </ol>
      </div>

      <div className="bg-secondary-background px-8 py-16 my-8 2xl:mr-4 2xl:w-1/3">
        <div className="flex flex-col items-center justify-center">
          <h1 className="font-minecraft text-red-100 font-bold text-lg mb-4">
            WindroseMC Status
          </h1>

          <EmbedMinecraftLink
            onlineNow={onlineMinecraft.online}
            maxPlayers={onlineMinecraft.max}
            setShowModal={setShowModal}
          />
          <EmbedDiscordLink
            onlineNow={onlineDiscord.online}
            inviteLink={onlineDiscord.instant_invite}
          />
        </div>
      </div>
    </div>
  );
};

const EmbedDiscordLink: React.FC<{ onlineNow: number; inviteLink: string }> = ({
  onlineNow,
  inviteLink,
}) => {
  return (
    <div className="flex items-center justify-between w-full p-4">
      <div className="flex items-center justify-start">
        <div>
          <img
            className="h-8 w-8 mr-4"
            src={discordColorIcon.src}
            alt="Discord Server"
          />
        </div>
        <div>
          <h1 className="text-discord-purple font-bold">Discord Server</h1>
          <p className="text-white">{onlineNow} Online Now</p>
        </div>
      </div>
      <a
        className="text-sm text-discord-purple bg-white bg-opacity-5 hover:bg-opacity-[7.5%] rounded-full py-2 px-4"
        href={inviteLink}
        target="_blank"
      >
        JOIN
      </a>
    </div>
  );
};

const EmbedMinecraftLink: React.FC<{
  onlineNow: number;
  maxPlayers: number;
  setShowModal: any;
}> = ({ onlineNow, maxPlayers, setShowModal }) => {
  return (
    <div className="flex items-center justify-between w-full p-4">
      <div className="flex items-center justify-start">
        <div>
          <img
            className="h-8 w-8 mr-4"
            src={minecraftIcon.src}
            alt="Minecraft Server"
          />
        </div>
        <div>
          <h1 className="text-minecraft-green font-bold">Minecraft Server</h1>
          <p className="text-white">
            {onlineNow}/{maxPlayers} Online Now
          </p>
        </div>
      </div>
      <button
        className="text-sm text-minecraft-green bg-white bg-opacity-5 hover:bg-opacity-[7.5%] rounded-full py-2 px-4"
        // href={inviteLink}
        onClick={() => {
          navigator.clipboard.writeText("play.windrosemc.com");
          setShowModal(true);
        }}
      >
        JOIN
      </button>
    </div>
  );
};

export default CallToAction;
