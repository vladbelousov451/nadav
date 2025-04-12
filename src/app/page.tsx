import InvestmentsPreview from "./components/InvestmentsPreview";
import RenovationsPreview from "./components/RenovationsPreview";
import TeamPreview from "./components/TeamPreview";
import PropertyManagement from "./components/PropertyManagment"
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
