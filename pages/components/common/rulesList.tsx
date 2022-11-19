import React from "react";
import Container from "./container";

const RulesList = () => {
  return (
    <Container>
      <h1 className="text-red-100 font-bold text-2xl mb-4 text-center">
        Rules
      </h1>

      <ol className="text-white-100 text-xl font-minecraft list-disc list-inside">
        <li className="mb-4">
          <span className="text-base">No hate speech.</span>
          <p className="text-white-100 text-base my-4 font-sans">
            Harassment, hate speech, homophobia, transphobia, xenophobia,
            racism, sexism, and ableism, including the use of racial, religious,
            or homophobic slurs. This server has a zero-tolerance policy for
            such messages, and you may be banned immediately without warning or
            recourse.
          </p>
        </li>

        <li className="mb-4">
          <span className="text-base">
            Remain civil and considerate towards other users.
          </span>
          <p className="text-white-100 text-base my-4 font-sans">
            This includes avoiding politically inflammatory content or
            discussions or sharing anything intended or likely to cause upset or
            offense. If there is a conflict, work to defuse it instead of making
            it worse. Otherwise, ask a Mod+ so we can handle it - don&apos;t be
            a mini-mod and try to deal with it yourself!
          </p>
        </li>

        <li className="mb-4">
          <span className="text-base">No NSFW posts.</span>
          <p className="text-white-100 text-base my-4 font-sans">
            Do not post anything that is NSFW or overly suggestive. This
            includes but is not limited to discussions about such topics. If you
            are unsure if it is considered NSFW, you should refrain from posting
            it. Any posts that do not follow will be dealt with accordingly and
            you will be punished.
          </p>
        </li>

        <li className="mb-4">
          <span className="text-base">No advertising or self-promoting.</span>
          <p className="text-white-100 text-base my-4 font-sans">
            This server is not the place to announce or advertise anything you
            may own. This includes and is not limited to. Discord Servers,
            Minecraft Servers, Youtube Channels, Twitch Channels. Any type of
            self advertisement that is not approved by a Manager+ will get
            removed, and you will be punished accordingly.
          </p>
        </li>

        <li className="mb-4">
          <span className="text-base">No spamming.</span>
          <p className="text-white-100 text-base my-4 font-sans">
            This includes but is not limited to repeated use of, bot commands /
            any large block of text / any large spam of single or low character
            texts / switching voice chats repeatedly / entering and/or exiting
            voice chats repeatedly.
          </p>
        </li>

        <li className="mb-4">
          <span className="text-base">
            No special characters or impersonating staff.
          </span>
          <p className="text-white-100 text-base my-4 font-sans">
            Your nickname is a privilege, not a right. Any nickname must be
            taggable without using an excess of special characters. Any use of
            them will be removed by staff. Impersonating server staff or person
            of significance is also forbidden, Doing so will result in a name
            change, and revoking your perms to use the nick command.
          </p>
        </li>

        <li className="mb-4">
          <span className="text-base">
            No special characters or impersonating staff.
          </span>
          <p className="text-white-100 text-base my-4 font-sans">
            Your nickname is a privilege, not a right. Any nickname must be
            taggable without using an excess of special characters. Any use of
            them will be removed by staff. Impersonating server staff or person
            of significance is also forbidden, Doing so will result in a name
            change, and revoking your perms to use the nick command.
          </p>
        </li>

        <li className="mb-4">
          <span className="text-base">No use of bots, or alt accounts.</span>
          <p className="text-white-100 text-base my-4 font-sans">
            Any use of bot accounts, and/or alternate accounts to void a ban is
            not allowed. Finding an account that follows that criteria will be
            banned from the discord with no warning, and may as well result in
            an in-game ban.
          </p>
        </li>

        <li className="mb-4">
          <span className="text-base">Shop Rules.</span>
          <p className="text-white-100 text-base my-4 font-sans">
            Players who donate to our shop is not permitted or is granted
            special treatment when it comes to rule-breaking. All purchases are
            optional and not required to play or advance. All purchases are
            final and will not be refunded.
          </p>
        </li>
      </ol>
    </Container>
  );
};

export default RulesList;
