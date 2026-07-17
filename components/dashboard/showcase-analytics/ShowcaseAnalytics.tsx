"use client";

import OverviewCards from "./OverviewCards";
import ShowcaseChart from "./ShowcaseChart";
import ShowcaseStatistics from "./ShowcaseStatistics";

export default function TalentAnalytics() {
  return (
    <>
      {/* OVERVIEW */}
      <OverviewCards />
      {/* SHOWCASE CHART */}
      <ShowcaseChart />

      {/* SHOWCASE STATISTICS */}
      <ShowcaseStatistics />
    </>
  );
}
