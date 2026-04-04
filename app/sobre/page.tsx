import AboutFull from "@/components/custom/AboutFull";
import PersonalGallery from "@/components/custom/PersonalGallery";
import SocialSection from "@/components/custom/SocialSection";
import EducationSection from "@/components/custom/EducationSection";
import ContactSection from "@/components/custom/ContactSection";

export const metadata = {
    title: "Sobre — Samantha Medeiros",
    description: "Conheça mais sobre Samantha Medeiros, desenvolvedora e ilustradora.",
};

export default function SobrePage() {
    return (
        <>
        <AboutFull />
        <PersonalGallery />
        <SocialSection />
        <EducationSection />
        <ContactSection />
        </>
    );
}
