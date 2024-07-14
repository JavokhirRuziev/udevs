import React from "react";
// import { useTranslation } from "react-i18next";
import Layout from "./components/Layout/index";
import BannerMain from "./components/Home/BannerMain";
import OurServices from "./components/Home/OurServices";
import Team from "./components/Home/Team";
import MobileApps from "./components/Home/MobileApps";
import ERP from "./components/Home/ERP";
import UIUX from "./components/Home/UIUX";
import Optimization from "./components/Home/Optimization";
import Consulting from "./components/Home/Consulting";
import Tools from "./components/Home/Tools";
import Clients from "./components/Home/Clients";
import Delever from "./components/Home/Delever";
import SmsUz from "./components/Home/SmsUz";
import GoodZone from "./components/Home/GoodZone";
import Iman from "./components/Home/Iman";
import HowWork from "./components/Home/HowWork";
import ContactUs from "./components/Home/ContactUs";

function App() {
    // const { t, i18n } = useTranslation();

    // const changeLang = (lang: string) => i18n.changeLanguage(lang);

    return (
        <Layout>
            <BannerMain />
            <div id="Direction" />
            <OurServices />
            <div id="Command" />
            <Team />
            <div id="Services" />
            <MobileApps />
            <div id="ERP" />
            <ERP />
            <div id="UXUI" />
            <UIUX />
            <div id="Optimization" />
            <Optimization />
            <div id="Consulting" />
            <Consulting />
            <div id="Tools" />
            <Tools />
            <div id="Clients" />
            <Clients />
            <div id="Portfolio" />
            <div id="Delever" />
            <Delever />
            <div id="SmsUz" />
            <SmsUz />
            <div id="GoodZone" />
            <GoodZone />
            <div id="Iman" />
            <Iman />
            <HowWork />
            <div id="Contact" />
            <ContactUs />
        </Layout>
    );
}

export default App;
