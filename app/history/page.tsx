import React from "react";
import { Metadata } from "next";

import { Table } from "@/components/Table";

export const metadata: Metadata = {
  title: "History Page | Timer",
  description: "This is About Page for Startup Nextjs Template",
  // other metadata
};

const History = () => {
  return (
    <>
      <section
        id="home"
        className="dark:bg-gray-dark relative z-10 overflow-hidden bg-white pb-16 pt-[120px] md:pb-[120px] md:pt-[150px] xl:pb-[160px] xl:pt-[180px] 2xl:pb-[200px] 2xl:pt-[210px]"
      >
        <Table />
      </section>
    </>
  );
};

export default History;
