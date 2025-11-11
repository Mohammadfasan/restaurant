import Hero from "@/components/Hero";
import BuyRow from "@/components/BuyRow";
import OurMenus from "@/components/OurMenus";
import Chefs from "@/components/Chefs";
import MobileApps from "@/components/MobileApps";

export default function Home() {
  return (
    <div >
      <Hero />
      
      <BuyRow />
      <OurMenus />
      <Chefs />
      <MobileApps />
    </div>
  );
}
