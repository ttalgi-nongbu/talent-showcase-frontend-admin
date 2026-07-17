"use client";

import OverviewCards from "./OverviewCards";
import RegistrationChart from "./RegistrationChart";
import RegistrationStatistics from "./RegistrationStatistics";
import Demographics from "./Demographics";
import Geography from "./Geography";

export default function TalentAnalytics() {
  return (
    <>
      {/* OVERVIEW */}
      <OverviewCards />

      {/* REGISTRATION CHART */}
      <RegistrationChart />

      {/* REGISTRATION STATISTICS */}
      <RegistrationStatistics />

      {/* DEMOGRAPHICS */}
      <Demographics />

      {/* GEOGRAPHY */}
      <Geography />
    </>
  );
}
