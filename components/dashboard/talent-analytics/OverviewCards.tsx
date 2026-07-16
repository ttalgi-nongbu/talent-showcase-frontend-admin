"use client";

import {
  ExclamationCircleIcon,
  IdentificationIcon,
  UsersIcon,
} from "@heroicons/react/24/outline";

import {
  useGetCompletedProfiles,
  useGetRegisteredTalents,
  useGetUnverifiedTalents,
} from "@/hooks/admin/dashboard/talent";

export default function OverviewCards() {
  //
  // registered talents
  //
  const { registeredTalents } = useGetRegisteredTalents();

  //
  // completed profiles
  //
  const { completedProfiles } = useGetCompletedProfiles();

  //
  // unverified talents
  //
  const { unverifiedTalents } = useGetUnverifiedTalents();

  return (
    <div
      className="
        grid
        grid-cols-1
        gap-6
        md:grid-cols-3
      "
    >
      {/* REGISTERED TALENTS */}
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
              Registered Talents
            </p>

            <h2
              className="
                mt-3
                text-4xl
                font-bold
                text-gray-900
              "
            >
              {registeredTalents?.total ?? "-"}
            </h2>
          </div>

          <div
            className="
              rounded-xl
              bg-rose-100
              p-3
            "
          >
            <UsersIcon
              className="
                h-7
                w-7
                text-rose-500
              "
            />
          </div>
        </div>
      </div>

      {/* COMPLETED PROFILES */}
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
              Completed Profiles
            </p>

            <h2
              className="
                mt-3
                text-4xl
                font-bold
                text-gray-900
              "
            >
              {completedProfiles?.total ?? "-"}
            </h2>
          </div>

          <div
            className="
              rounded-xl
              bg-green-100
              p-3
            "
          >
            <IdentificationIcon
              className="
                h-7
                w-7
                text-green-600
              "
            />
          </div>
        </div>
      </div>

      {/* UNVERIFIED TALENTS */}
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
              Unverified Talents
            </p>

            <h2
              className="
                mt-3
                text-4xl
                font-bold
                text-gray-900
              "
            >
              {unverifiedTalents?.total ?? "-"}
            </h2>
          </div>

          <div
            className="
              rounded-xl
              bg-amber-100
              p-3
            "
          >
            <ExclamationCircleIcon
              className="
                h-7
                w-7
                text-amber-600
              "
            />
          </div>
        </div>
      </div>
    </div>
  );
}
