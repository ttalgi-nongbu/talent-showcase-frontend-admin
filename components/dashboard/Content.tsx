"use client";

import { useRegisteredTalents } from "@/hooks/admin/dashboard/talent";
import { useCompletedProfiles } from "@/hooks/admin/dashboard/talent";

import { usePublishedShowcases } from "@/hooks/admin/dashboard/showcase";

import { usePublishedProfilePhotos } from "@/hooks/admin/dashboard/profile-photo";

export default function Content() {
  const { registeredTalents } = useRegisteredTalents();

  const { completedProfiles } = useCompletedProfiles();

  const { publishedShowcases } = usePublishedShowcases();

  const { publishedProfilePhotos } = usePublishedProfilePhotos();

  return (
    <>
      {/* TITLE */}
      <h1
        className="
          text-3xl
          font-bold
          text-gray-800
        "
      >
        Dashboard
      </h1>

      {/* KPI CARDS */}
      <div
        className="
          mt-8
          grid
          grid-cols-1
          gap-6
          sm:grid-cols-2
          xl:grid-cols-4
        "
      >
        <div
          className="
            rounded-2xl
            border
            border-gray-200
            bg-white
            p-6
            shadow-sm
          "
        >
          <p
            className="
              text-sm
              text-gray-500
            "
          >
            Registered Talents
          </p>

          <p
            className="
              mt-3
              text-4xl
              font-bold
              text-gray-900
            "
          >
            {registeredTalents?.total ?? "-"}
          </p>
        </div>

        <div
          className="
            rounded-2xl
            border
            border-gray-200
            bg-white
            p-6
            shadow-sm
          "
        >
          <p
            className="
              text-sm
              text-gray-500
            "
          >
            Completed Profiles
          </p>

          <p
            className="
              mt-3
              text-4xl
              font-bold
              text-gray-900
            "
          >
            {completedProfiles?.total ?? "-"}
          </p>
        </div>

        <div
          className="
            rounded-2xl
            border
            border-gray-200
            bg-white
            p-6
            shadow-sm
          "
        >
          <p
            className="
              text-sm
              text-gray-500
            "
          >
            Published Showcases
          </p>

          <p
            className="
              mt-3
              text-4xl
              font-bold
              text-gray-900
            "
          >
            {publishedShowcases?.total ?? "-"}
          </p>
        </div>

        <div
          className="
            rounded-2xl
            border
            border-gray-200
            bg-white
            p-6
            shadow-sm
          "
        >
          <p
            className="
              text-sm
              text-gray-500
            "
          >
            Published Profile Photos
          </p>

          <p
            className="
              mt-3
              text-4xl
              font-bold
              text-gray-900
            "
          >
            {publishedProfilePhotos?.total ?? "-"}
          </p>
        </div>
      </div>
    </>
  );
}
