"use client";

import Link from "next/link";
import { useParams } from "next/navigation";

import { ArrowLeftIcon } from "@heroicons/react/24/outline";

import { useGetTalent } from "@/hooks/admin/talent/useGetTalent";

import AccountInformation from "./sections/AccountInformation";
import ProfileInformation from "./sections/ProfileInformation";
import Statistics from "./sections/Statistics";

export default function Content() {
  const params = useParams();

  const id = Number(params.id);

  const { talent, loading, error } = useGetTalent(id);

  if (loading) {
    return (
      <section
        className="
          rounded-2xl
          bg-white
          p-8
        "
      >
        Loading talent...
      </section>
    );
  }

  if (error) {
    return (
      <section
        className="
          rounded-2xl
          bg-white
          p-8
          text-red-500
        "
      >
        {error}
      </section>
    );
  }

  if (!talent) {
    return (
      <section
        className="
          rounded-2xl
          bg-white
          p-8
        "
      >
        Talent not found.
      </section>
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
          <ProfileInformation profile={talent.profile} />
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
              Profile Information
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
