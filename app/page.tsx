import { Metadata } from "next";

import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Blog from "@/components/Blog";
import Brands from "@/components/Brands";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import { Table } from "@/components/Table";
import Testimonials from "@/components/Testimonials";
import Video from "@/components/Video";

export const metadata: Metadata = {
  title: "Timer",
  description: "This is Home for Timer",
  // other metadata
};

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      {/* <Features /> */}
      {/* <Video /> */}
      {/* <Brands /> */}
      {/* <AboutSectionOne /> */}
      {/* <AboutSectionTwo /> */}
      {/* <Testimonials /> */}
      <Table />
      <Pricing />
      {/* <Blog /> */}
      {/* <Contact /> */}
    </>
  );
}
