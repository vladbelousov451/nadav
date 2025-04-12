import InvestmentsPreview from "./components/InvestmentsPreview";
import RenovationsPreview from "./components/RenovationsPreview";
import TeamPreview from "./components/TeamPreview";
import PropertyManagement from "./components/PropertyManagment"
import Hero from "./components/hero"
import ContactCTA from "./components/ContactCTA";
export default function HomePage() {
  return (
    <main className="bg-black text-white">
       <Hero />
      <InvestmentsPreview />
      <RenovationsPreview />
       <PropertyManagement />
      <TeamPreview />
      <ContactCTA />
    </main>
  );
}
