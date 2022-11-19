import React from "react";
import Container from "./container";

const FrequentlyAskedQuestions = () => {
  return (
    <Container>
      <h1 className="text-red-100 font-bold text-2xl mb-4 text-center">
        Frequently Asked Questions
      </h1>

      <ol className="text-white-100 text-xl font-minecraft list-disc list-inside">
        <li className="mb-4">
          <span className="text-base">What is WindroseMC</span>
          <p className="text-white-100 text-base my-4 font-sans">
            WindRoseMC is a new, semi-vanilla Minecraft server that has just
            opened up! We are friendly, have a community focus, and want
            everyone to have a great time playing on our server.
          </p>
        </li>

        <li className="mb-4">
          <span className="text-base">What are Minecraft servers?</span>
          <p className="text-white-100 text-base my-4 font-sans">
            Minecraft servers are online multiplayer game servers for the game
            of Minecraft. Players can connect to a server to play together in a
            shared game world.
          </p>
        </li>

        <li className="mb-4">
          <span className="text-base">How can I join a Minecraft Server?</span>
          <p className="text-white-100 text-base my-4 font-sans">
            You can join a Minecraft server by opening up the game client and
            selecting "Multiplayer" from the main menu. From here, you can enter
            the IP address of a server to connect to it.
          </p>
        </li>

        <li className="mb-4">
          <span className="text-base">Are Minecraft Servers safe?</span>
          <p className="text-white-100 text-base my-4 font-sans">
            Yes, our server is safe and secure. We have a no griefing policy in
            place to protect players and their builds as well as chat and player
            moderation to keep the environment friendly and welcoming for
            everyone.
          </p>
        </li>

        <li className="mb-4">
          <span className="text-base">What is a Semi-Vanilla server?</span>
          <p className="text-white-100 text-base my-4 font-sans">
            On a Semi-Vanilla server, players experience the game of Minecraft
            as close to Vanilla (unmodified) as possible, while still having
            some fun, added features for quality of life as well as grief
            prevention.
          </p>
        </li>
      </ol>
    </Container>
  );
};

export default FrequentlyAskedQuestions;
