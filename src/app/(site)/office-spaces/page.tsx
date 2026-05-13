import HeroSub from "@/components/shared/HeroSub";
import OfficeSpace from "@/components/Properties/OfficeSpaces";
import React from "react";
import { Metadata } from "next";
export const metadata: Metadata = {
    title: "Service & Information Kiosks | Kiosk Hub",
};

const page = () => {
    return (
        <>
            <HeroSub
                title="Service & Information Kiosks."
                description="Offer essential services with our premium kiosk spaces. Ticket booking, bill payment, customer support, ATM, printing, and self-service stations."
                badge="Kiosk Areas"
            />
            <OfficeSpace />
        </>
    );
};

export default page;
