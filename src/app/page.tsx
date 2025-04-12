import InvestmentsPreview from "./components/InvestmentsPreview";
import RenovationsPreview from "./components/RenovationsPreview";
import TeamPreview from "./components/TeamPreview";
import PropertyManagement from "./components/PropertyManagment"
import Hero from "./components/hero"
import ContactCTA from "./components/ContactCTA";
import WhyInvest  from "./components/whybudapest";
export default function HomePage() {
  return (
    <main className="bg-black text-white">
      <InvestmentsPreview />
      <RenovationsPreview />
       <PropertyManagement />
      <TeamPreview />
      <WhyInvest/>
    </main>
  );
}
