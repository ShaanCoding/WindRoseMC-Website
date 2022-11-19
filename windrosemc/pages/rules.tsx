import React from "react";
import Footer from "./components/common/footer";
import IpAddressLink from "./components/common/ipAddressLink";
import Modal from "./components/common/modal";
import SplashScreen from "./components/common/splashScreen";
import { useState } from "react";

import styles from "../styles/Home.module.css";
import RulesList from "./components/common/rulesList";

const rules = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className={styles.container}>
      <div className="bg-primary-background">
        <Modal showModal={showModal} setShowModal={setShowModal} />
        {/* Splashscreen */}
        <SplashScreen />
        {/* IP Address Call To Action */}
        <IpAddressLink setShowModal={setShowModal} />

        {/* Need to add rules */}
        <RulesList />

        <Footer />
      </div>
    </div>
  );
};

export default rules;
