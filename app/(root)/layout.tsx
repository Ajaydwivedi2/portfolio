import Footer from "@/components/Footer";
import Navbar from "@/components/shared/Navbar";
import React from "react";

function layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className=" px-6 pt-[90px] md:px-20 md:pt-[180px] lg:px-24 xl:px-32">
        <Navbar />
        {children}
        <Footer />
      </div>
    </>
  );
}

export default layout;
