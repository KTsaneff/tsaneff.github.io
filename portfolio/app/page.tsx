"use client";
import WaterWaveWrapper from "@/components/visualEffects/water-wave-wrapper";
import LandingSection from "@/sections/landing";

export default function Home() {
  return (
    <WaterWaveWrapper
      imageUrl=""
      dropRadius="3"
      perturbance="3"
      resolution="2048"
    >
      {()=>(
        <div>
          <LandingSection/>
        </div>
      )}
  </WaterWaveWrapper>
  );
}
