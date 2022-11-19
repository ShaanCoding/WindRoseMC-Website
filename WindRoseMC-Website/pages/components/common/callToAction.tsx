import React from "react";

import styles from "../../../styles/CallToAction.module.css";
import Container from "./container";

const CallToAction = () => {
  return (
    <Container>
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
    </Container>
  );
};

export default CallToAction;
