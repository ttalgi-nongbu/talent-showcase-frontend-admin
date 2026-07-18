"use client";

import { useParams } from "next/navigation";

import { useGetTalent } from "@/hooks/admin/talent/useGetTalent";

import AccountInformation from "./sections/AccountInformation";

import ProfileInformation from "./sections/ProfileInformation";

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

      <div
        className="
    mt-8
    space-y-6
  "
      >
        <AccountInformation user={talent.user} />

        <ProfileInformation profile={talent.profile} />
      </div>
    </section>
  );
}
