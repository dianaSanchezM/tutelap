import { AppProps } from "next/app";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import AdditionalSection from "@/components/AdditionalSection";
import MainSection from "@/components/MainSection";

export default function Home() {
  return (
    <div>
    <MainSection/>
    <AdditionalSection/>
    </div>
  );
}
