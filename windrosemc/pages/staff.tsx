import React, { useState } from "react";
import Footer from "./components/common/footer";
import IpAddressLink from "./components/common/ipAddressLink";
import Modal from "./components/common/modal";
import RulesList from "./components/common/rulesList";
import SplashScreen from "./components/common/splashScreen";

import styles from "../styles/Staff.module.css";
import StaffList from "./components/common/staffList";

const staff = () => {
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
        <StaffList />

        <Footer />
      </div>
    </div>
  );
};

export default staff;
