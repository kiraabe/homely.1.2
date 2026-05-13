import HeroSub from "@/components/shared/HeroSub";
import Appartment from "@/components/Properties/Appartment";
import React from "react";
import { Metadata } from "next";
export const metadata: Metadata = {
    title: "Fashion & Accessories Kiosks | Kiosk Hub",
};

const page = () => {
    return (
        <>
            <HeroSub
                title="Fashion & Accessories Kiosks."
                description="Showcase your fashion and accessories with our premium kiosk locations. Jewelry, watches, bags, sunglasses, cosmetics, and clothing accessories."
                badge="Kiosk Areas"
            />
            <Appartment />
        </>
    );
};

export default page;
