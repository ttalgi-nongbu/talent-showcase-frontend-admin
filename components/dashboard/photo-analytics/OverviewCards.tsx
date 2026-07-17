"use client";

import {
  DocumentDuplicateIcon,
  GlobeAltIcon,
} from "@heroicons/react/24/outline";

import {
  useGetDraftProfilePhotos,
  useGetPublishedProfilePhotos,
} from "@/hooks/admin/dashboard/profile-photo";

export default function OverviewCards() {
  //
  // draft profile photos
  //
  const { draftProfilePhotos } = useGetDraftProfilePhotos();

  //
  // published profile photos
  //
  const { publishedProfilePhotos } = useGetPublishedProfilePhotos();

  return (
    <div
      className="
        grid
        grid-cols-1
        gap-6
        md:grid-cols-2
      "
    >
      {/* DRAFT PROFILE PHOTOS */}
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
              Draft Photos
            </p>

            <h2
              className="
                mt-3
                text-4xl
                font-bold
                text-gray-900
              "
            >
              {draftProfilePhotos?.total ?? "-"}
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

      {/* PUBLISHED PROFILE PHOTOS */}
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
              Published Photos
            </p>

            <h2
              className="
                mt-3
                text-4xl
                font-bold
                text-gray-900
              "
            >
              {publishedProfilePhotos?.total ?? "-"}
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
