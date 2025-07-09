import React, { Children } from "react";
import logo from "/uclm-logo.jpg";
import InfoCard from "./InfoCard";

export default function Education() {
  return (
    <div className="flex flex-col items-start gap-4">
      <h2 className="text-2xl font-semibold">Education</h2>
      <InfoCard
        logo={logo}
        title={"University of Cebu - Lapu-lapu and Mandaue"}
        subtitle={"Bachelor's Degree In Information Technology"}
        date={"2023-2027"}
      />
      <InfoCard
        logo={logo}
        title={"University of Cebu - Lapu-lapu and Mandaue"}
        subtitle={"Senior High School - TVL ICT Strand"}
        date={"2022-2023"}
      />
    </div>
  );
}
