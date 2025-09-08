"use client";

import Header from "@/components/Header";
import React from "react";
import About from "@/components/About";

const about = () => {
  return (
    <div className="flex justify-center align-center flex-col">
      <Header></Header>
      <About></About>
    </div>
  );
};

export default about;
