import React from "react";

const SectionTitle = ({ title }: { title: string }) => {
  return (
    <div>
      <div className="w-[40vw]">
        <h2>{title}</h2>
      </div>
    </div>
  );
};

export default SectionTitle;
