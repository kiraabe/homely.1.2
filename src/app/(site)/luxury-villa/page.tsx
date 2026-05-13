import HeroSub from "@/components/shared/HeroSub";
import LuxuryVillas from "@/components/Properties/LuxuryVilla";
import React from "react";
import { Metadata } from "next";
export const metadata: Metadata = {
    title: "Digital & Electronics Kiosks | Kiosk Hub",
};

const page = () => {
    return (
        <>
            <HeroSub
                title="Digital & Electronics Kiosks."
                description="Expand your tech business with our premium kiosk spaces. Mobile accessories, gadget displays, SIM card services, and device repair kiosks."
                badge="Kiosk Areas"
            />
            <LuxuryVillas />
        </>
    );
};

export default page;
