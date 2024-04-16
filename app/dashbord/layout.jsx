'use client'
import React from "react";
import SideBar from "./components/SideBar";
import Header from "./components/Header";

export default function layout({ children }) {
  return (
    <div className="flex bg-gray-100 w-full h-screen relative">
      {/* Section fixe à gauche */}
      <div className="w-64 bg-white h-full fixed left-0 top-0 bottom-0 overflow-y-auto">
        <SideBar />
      </div>
      {/* Section principale */}
      <div className="flex flex-col w-full  ml-64">
        {/* Section fixe en haut */}
        <div className="h-24 bg-white fixed top-0 left-64 right-0 z-50">
          <Header />
        </div>
        {/* Section scrollable */}
        <div className="flex-grow overflow-y-auto p-7 px-12 mt-24">
          {children}
        </div>
      </div>
    </div>
  );
}
