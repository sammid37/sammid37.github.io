import HeroSection from "@/components/custom/HeroSection";
import AboutSection from "@/components/custom/AboutSection";
import SkillsSection from "@/components/custom/SkillsSection";
import ExperienceTimeline from "@/components/custom/ExperienceTimeline";
import EducationSection from "@/components/custom/EducationSection";
import DevProjectsPreview from "@/components/custom/DevProjectsPreview";
import ArtGalleryPreview from "@/components/custom/ArtGalleryPreview";
import ContactSection from "@/components/custom/ContactSection";

export default function HomePage() {
    return (
        <>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ExperienceTimeline />
        <EducationSection />
        <DevProjectsPreview />
        <ArtGalleryPreview />
        <ContactSection />
        </>
    );
}
