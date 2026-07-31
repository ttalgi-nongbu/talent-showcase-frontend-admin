"use client";

type TabsProps = {
  activeTab: string;
  onChange: (tab: string) => void;
};

export default function Tabs({ activeTab, onChange }: TabsProps) {
  const tabs = [
    {
      value: "talent",
      label: "Talent Analytics",
    },
    {
      value: "showcase",
      label: "Showcase Analytics",
    },
    {
      value: "photo",
      label: "Photo Analytics",
    },
    {
      value: "engagement",
      label: "Engagement Analytics",
    },
  ];

  return (
    <div
      className="
        mt-6
        border-b
        border-gray-200
      "
    >
      <div className="flex gap-6">
        {tabs.map((tab) => (
          <button
            key={tab.value}
            type="button"
            onClick={() => onChange(tab.value)}
            className={`
              cursor-pointer
              border-b-2
              pb-3
              text-sm
              font-medium
              transition-colors

              ${
                activeTab === tab.value
                  ? "border-black text-black"
                  : "border-transparent text-gray-500 hover:text-black"
              }
            `}
          >
            {tab.label}
          </button>
        ))}
      </div>
    </div>
  );
}
