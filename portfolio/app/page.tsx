"use client";
import Button from "@/components/ui/button";
import Card from "@/components/ui/card";
import WaterWaveWrapper from "@/components/visualEffects/water-wave-wrapper";
import { GoHomeFill } from "react-icons/go";
import { FaUser } from "react-icons/fa";

export default function Home() {
  return (
    <WaterWaveWrapper
      imageUrl=""
      dropRadius="3"
      perturbance="3"
      resolution="2048"
    >
      {()=><div className="w-full p-10">
        <div className="max-w-2xl mx-auto">
          <Card title="UI Components">
            <div className="grid grid-cols-4">
              <Button>
                Basic button
              </Button>
              <Button>
                <GoHomeFill/>
                Basic button
              </Button>
              <Button isIcon>
                <FaUser/>
              </Button>
              <Button link="https://www.google.com">
                Google
              </Button>
            </div>
          </Card>
        </div>        
      </div>}
  </WaterWaveWrapper>
  );
}
