"use client";

import OverviewCards from "./OverviewCards";
import PhotoChart from "./PhotoChart";
import PhotoStatistics from "./PhotoStatistics";

export default function TalentAnalytics() {
  return (
    <>
      {/* OVERVIEW */}
      <OverviewCards />

      {/* PHOTO CHART */}
      <PhotoChart />

      {/* PHOTO STATISTICS */}
      <PhotoStatistics />
    </>
  );
}
