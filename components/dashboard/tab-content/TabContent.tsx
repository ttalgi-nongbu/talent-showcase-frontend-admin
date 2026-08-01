"use client";

import EngagementAnalytics from "./engagement-analytics/EngagementAnalytics";
import PhotoAnalytics from "./photo-analytics/PhotoAnalytics";
import ShowcaseAnalytics from "./showcase-analytics/ShowcaseAnalytics";
import TalentAnalytics from "./talent-analytics/TalentAnalytics";

type TabContentProps = {
  activeTab: string;
};

export default function TabContent({ activeTab }: TabContentProps) {
  return (
    <div className="mt-6">
      <div className={activeTab === "talent" ? "block" : "hidden"}>
        <TalentAnalytics />
      </div>

      <div className={activeTab === "showcase" ? "block" : "hidden"}>
        <ShowcaseAnalytics />
      </div>

      <div className={activeTab === "photo" ? "block" : "hidden"}>
        <PhotoAnalytics />
      </div>

      <div className={activeTab === "engagement" ? "block" : "hidden"}>
        <EngagementAnalytics />
      </div>
    </div>
  );
}
