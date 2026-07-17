"use client";

import {
  BookmarkIcon,
  ChatBubbleLeftEllipsisIcon,
  HeartIcon,
} from "@heroicons/react/24/outline";

import { useGetEngagementSummary } from "@/hooks/admin/dashboard/engagement";

export default function OverviewCards() {
  //
  // engagement summary
  //
  const { engagementSummary } = useGetEngagementSummary();

  const cards = [
    {
      title: "Showcase\nLikes",
      value: engagementSummary?.showcase_likes ?? "-",
      icon: HeartIcon,
      bg: "bg-rose-100",
      color: "text-rose-600",
    },
    {
      title: "Showcase\nComments",
      value: engagementSummary?.showcase_comments ?? "-",
      icon: ChatBubbleLeftEllipsisIcon,
      bg: "bg-blue-100",
      color: "text-blue-600",
    },
    {
      title: "Showcase\nSaves",
      value: engagementSummary?.showcase_saves ?? "-",
      icon: BookmarkIcon,
      bg: "bg-amber-100",
      color: "text-amber-600",
    },
    {
      title: "Photo\nLikes",
      value: engagementSummary?.profile_photo_likes ?? "-",
      icon: HeartIcon,
      bg: "bg-green-100",
      color: "text-green-600",
    },
    {
      title: "Photo\nSaves",
      value: engagementSummary?.profile_photo_saves ?? "-",
      icon: BookmarkIcon,
      bg: "bg-purple-100",
      color: "text-purple-600",
    },
  ];

  return (
    <div
      className="
        grid
        grid-cols-1
        gap-6
        md:grid-cols-2
        xl:grid-cols-5
      "
    >
      {cards.map((card) => {
        const Icon = card.icon;

        return (
          <div
            key={card.title}
            className="
              rounded-2xl
              border
              border-gray-200
              bg-white
              p-6
              shadow-sm
            "
          >
            <div
              className="
                flex
                items-center
                justify-between
              "
            >
              <div>
                <p
                  className="
                    h-10
                    whitespace-pre-line
                    text-sm
                    leading-tight
                    text-gray-500
                  "
                >
                  {card.title}
                </p>

                <h2
                  className="
                    mt-3
                    text-4xl
                    font-bold
                    text-gray-900
                  "
                >
                  {card.value}
                </h2>
              </div>

              <div
                className={`
                  rounded-xl
                  p-3
                  ${card.bg}
                `}
              >
                <Icon
                  className={`
                    h-7
                    w-7
                    ${card.color}
                  `}
                />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
