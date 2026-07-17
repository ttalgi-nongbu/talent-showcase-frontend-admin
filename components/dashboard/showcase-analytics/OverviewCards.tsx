"use client";

import {
  DocumentDuplicateIcon,
  GlobeAltIcon,
} from "@heroicons/react/24/outline";

import {
  useGetDraftShowcases,
  useGetPublishedShowcases,
} from "@/hooks/admin/dashboard/showcase";

export default function OverviewCards() {
  //
  // draft showcases
  //
  const { draftShowcases } = useGetDraftShowcases();

  //
  // published showcases
  //
  const { publishedShowcases } = useGetPublishedShowcases();

  return (
    <div
      className="
        grid
        grid-cols-1
        gap-6
        md:grid-cols-2
      "
    >
      {/* DRAFT SHOWCASES */}
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
                text-sm
                text-gray-500
              "
            >
              Draft Showcases
            </p>

            <h2
              className="
                mt-3
                text-4xl
                font-bold
                text-gray-900
              "
            >
              {draftShowcases?.total ?? "-"}
            </h2>
          </div>

          <div
            className="
              rounded-xl
              bg-amber-100
              p-3
            "
          >
            <DocumentDuplicateIcon
              className="
                h-7
                w-7
                text-amber-600
              "
            />
          </div>
        </div>
      </div>

      {/* PUBLISHED SHOWCASES */}
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
                text-sm
                text-gray-500
              "
            >
              Published Showcases
            </p>

            <h2
              className="
                mt-3
                text-4xl
                font-bold
                text-gray-900
              "
            >
              {publishedShowcases?.total ?? "-"}
            </h2>
          </div>

          <div
            className="
              rounded-xl
              bg-green-100
              p-3
            "
          >
            <GlobeAltIcon
              className="
                h-7
                w-7
                text-green-600
              "
            />
          </div>
        </div>
      </div>
    </div>
  );
}
