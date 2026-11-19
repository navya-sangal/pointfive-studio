import { Contact } from "@/components/Contact";
import { ContactFab } from "@/components/ContactFab";
import { Faq } from "@/components/Faq";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Packages } from "@/components/Packages";
import { Process } from "@/components/Process";
import { Services } from "@/components/Services";
import { Work } from "@/components/Work";

export default function Home() {
  return (
    <>
      <Header />
      <main id="main">
        <Hero />
        <Services />
        <Process />
        <Packages />
        <Work />
        <Faq />
        <Contact />
      </main>
      <Footer />
      <ContactFab />
    </>
  );
}
