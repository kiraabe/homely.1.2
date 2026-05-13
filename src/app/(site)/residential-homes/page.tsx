import HeroSub from "@/components/shared/HeroSub";
import ResidentialList from "@/components/Properties/Residential";
import React from "react";
import { Metadata } from "next";
export const metadata: Metadata = {
    title: "Food & Beverage Kiosks | Kiosk Hub",
};

const page = () => {
    return (
        <>
            <HeroSub
                title="Food & Beverage Kiosks."
                description="Launch your food and beverage business with our premium kiosk locations. Coffee stands, snack bars, juice kiosks, and fast-food counters."
                badge="Kiosk Areas"
            />
            <ResidentialList />
        </>
    );
};

export default page;
