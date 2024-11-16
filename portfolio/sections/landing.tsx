import Header from "@/components/navigation/header/header";
import FancyButton from "@/components/ui/fancy-button";
import LiveClock from "@/components/ui/live-clock";
import MagneticWrapper from "@/components/visualEffects/magnetic-wrapper";
import React from "react";
import { FaArrowRight } from "react-icons/fa";

export default function LandingSection() {
    return(
        <div className="relative h-screen overflow-hidden p-8">
            {/*Header*/}
            <Header/>
            {/*Show Magnetic fancy button on small screens and hide it on md screen*/}
            <div className="absolute bottom-36 left-10 z-20 md:hidden">
            <MagneticWrapper>
                <FancyButton text="Let's talk" icon={<FaArrowRight/>}/>                    
            </MagneticWrapper>
            </div>
            {/*Live clock*/}
            <div className="absolute right-10 bottom-10">
                <LiveClock timeZone="Europe/Sofia"/>
            </div>
        </div>
    )
}