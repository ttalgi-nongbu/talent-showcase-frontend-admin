"use client";

import EngagementChart from "./EngagementChart";
import OverviewCards from "./OverviewCards";

export default function TalentAnalytics() {
  return (
    <>
      {/* OVERVIEW */}
      <OverviewCards />

      {/* ENGAGEMENT CHART */}
      <EngagementChart />
    </>
  );
}
