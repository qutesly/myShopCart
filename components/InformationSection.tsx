"use client";
import React, { useState } from "react";

const InformationSection = () => {
  const [activeTab, setActiveTab] = useState("Description");
  const [displayText, setDisplayText] = useState("Hello");

  const tabs = [
    { label: "Description", content: "Hello" },
    { label: "Additional Information", content: "Active" },
    { label: "Reviews", content: "sure" },
  ];

  const handleClick = (tab: { label: string; content: string }) => {
    setActiveTab(tab.label);
    setDisplayText(tab.content);
  };

  return (
    <div className="mb-10 w-full md:w-[45rem]">
      <div className="w-full bg-shop_lighter_bg rounded-md flex items-center justify-between line-clamp-1 gap-2 p-1">
        {tabs.map((tab) => (
          <button
            key={tab?.label}
            onClick={() => handleClick(tab)}
            className={`w-full  px-3 py-1.5 rounded-md transition-colors hoverEffect ${activeTab === tab.label ? "bg-white border border-black" : "bg-transparent"}`}
          >
            {tab?.label}
          </button>
        ))}
      </div>
      <div className="mt-4">
        <p>{displayText}</p>
      </div>
    </div>
  );
};

export default InformationSection;
