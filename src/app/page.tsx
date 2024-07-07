import Footer from "~/components/footer";
import Header from "~/components/header";
import BookingSection from "~/components/section/booking-section";
import ClientsSection from "~/components/section/clients-section";
import FAQSection from "~/components/section/faq-section";
import HeroSection from "~/components/section/hero-section";
import ServicesSection from "~/components/section/services-section";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  // const bookings = await getNextBookings();

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
