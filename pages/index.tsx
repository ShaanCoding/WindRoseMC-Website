import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Footer from "./components/common/footer";

import CallToAction from "./components/common/callToAction";
import IntroductionBlock from "./components/common/introductionBlock";
import FrequentlyAskedQuestions from "./components/common/frequentlyAskedQuestions";
import SplashScreen from "./components/common/splashScreen";
import IpAddressLink from "./components/common/ipAddressLink";
import Modal from "./components/common/modal";
import { useState } from "react";

export default function Home() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className={styles.container}>
      <div className="bg-primary-background">
        <Modal showModal={showModal} setShowModal={setShowModal} />

        {/* Splashscreen */}
        <SplashScreen />

        {/* IP Address Call To Action */}
        <IpAddressLink setShowModal={setShowModal} />

        {/* First Introduction Block */}
        <IntroductionBlock />

        {/* Start Playing Call To Action */}
        <CallToAction setShowModal={setShowModal} />

        {/* Frequently Asked Question */}
        <FrequentlyAskedQuestions />

        <Footer />
      </div>
    </div>
  );
}
