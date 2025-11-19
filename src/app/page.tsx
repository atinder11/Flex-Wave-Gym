import Cta from "@/components/Cta";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Pricing from "@/components/Pricing";
import Program from "@/components/Program";
import Training from "@/components/Training";


export default function Home() {
  return (
    <>
    <Navbar/>
    <Program/>
    <Features/>
    <Training/>
    <Pricing/>
    <Cta/>
    <Footer/>
    </>
  );
}
