"use client";

import Link from "next/link";
import { useParams } from "next/navigation";

import { ArrowLeftIcon } from "@heroicons/react/24/outline";

import { useGetTalent } from "@/hooks/admin/talent/useGetTalent";

import AccountInformation from "./sections/AccountInformation";
import ProfileDetails from "./sections/ProfileDetails";
import Statistics from "./sections/Statistics";

export default function Content() {
  const params = useParams();

  const id = Number(params.id);

  const { talent, loading, error } = useGetTalent(id);

  if (loading) {
    return null;
  }

  if (!talent) {
    return (
      <div
        className="
        h-[60vh]
        flex
        flex-col
        items-center
        justify-center
      "
      >
        <h2
          className="
          text-3xl
          font-bold
          text-gray-800
        "
        >
          404
        </h2>

        <p
          className="
          mt-2
          text-gray-500
        "
        >
          Talent not found.
        </p>
      </div>
    );
  }

  return (
    <section
      className="
        rounded-2xl
        bg-white
        p-8
      "
    >
      <div
        className="
          flex
          items-center
          gap-3
        "
      >
        <Link
          href="/talents"
          className="
            rounded-lg
            p-2
            text-gray-400
            transition
            hover:bg-gray-100
            hover:text-gray-600
          "
        >
          <ArrowLeftIcon
            className="
              h-5
              w-5
            "
          />
        </Link>

        <div>
          <h1
            className="
              text-2xl
              font-bold
              text-gray-800
            "
          >
            Talent Detail
          </h1>

          <p
            className="
              mt-2
              text-gray-500
            "
          >
            View talent account information, profile details, and statistics.
          </p>
        </div>
      </div>

      <div
        className="
    mt-8
    space-y-6
  "
      >
        <AccountInformation user={talent.user} />

        {talent.profile ? (
          <ProfileDetails profile={talent.profile} />
        ) : (
          <section
            className="
        rounded-2xl
        border
        border-gray-200
        p-6
      "
          >
            <h2
              className="
          text-lg
          font-semibold
          text-gray-800
        "
            >
              Profile Details
            </h2>

            <p
              className="
          mt-4
          text-sm
          text-gray-500
        "
            >
              This talent has not created a profile yet.
            </p>
          </section>
        )}

        {talent.statistics && <Statistics statistics={talent.statistics} />}
      </div>
    </section>
  );
}
