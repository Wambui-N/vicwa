import React from "react";

const ApproachItem = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <div className="flex flex-col justify-between gap-6">
      <p className='text-lg font-bold text-orange'>{title}</p>
      <p>{description}</p>
    </div>
  );
};

export default ApproachItem;
