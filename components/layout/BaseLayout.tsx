import Navbar from "./Navbar";
import Footer from "./Footer";

interface BaseLayoutProps {
    children: React.ReactNode;
}

export default function BaseLayout({ children }: BaseLayoutProps) {
    return (
        <>
        <Navbar />
        <main>{children}</main>
        <Footer />
        </>
    );
}
