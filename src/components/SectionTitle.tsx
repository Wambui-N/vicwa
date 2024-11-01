import React from "react";

const SectionTitle = ({ title }: { title: string }) => {
  return (
    <div>
      <div className="lg:w-[40vw] w-full py-4">
        <h2>{title}</h2>
      </div>
    </div>
  );
};

export default SectionTitle;
