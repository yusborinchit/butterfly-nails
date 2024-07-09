import BookingSection from "~/components/section/booking-section";
import ClientsSection from "~/components/section/clients-section";
import FAQSection from "~/components/section/faq-section";
import Footer from "~/components/section/footer";
import Header from "~/components/section/header";
import HeroSection from "~/components/section/hero-section";
import ServicesSection from "~/components/section/services-section";

export const dynamic = "force-dynamic";

export default function HomePage() {
  return (
    <>
      <Header />
      <HeroSection />
      <main>
        <ServicesSection />
        <BookingSection />
        <ClientsSection />
        <FAQSection />
      </main>
      <Footer />
    </>
  );
}
