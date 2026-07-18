"use client";

import Image from "next/image";

import { Profile } from "@/types/admin/talent";

interface Props {
  profile: Profile;
}

export default function ProfileDetails({ profile }: Props) {
  return (
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

      <div
        className="
          mt-6
          grid
          gap-6
          md:grid-cols-2
        "
      >
        <div
          className="
            md:col-span-2
          "
        >
          <p
            className="
              text-sm
              text-gray-500
            "
          >
            Avatar
          </p>

          <div
            className="
              mt-3
            "
          >
            <Image
              unoptimized
              src={profile.avatar_url ?? "/avatar-default.png"}
              alt={profile.full_name}
              width={96}
              height={96}
              className="
                h-24
                w-24
                rounded-full
                border
                border-gray-200
                object-cover
              "
            />
          </div>
        </div>

        <div>
          <p
            className="
              text-sm
              text-gray-500
            "
          >
            Full Name
          </p>

          <p
            className="
              mt-1
              text-gray-900
            "
          >
            {profile.full_name}
          </p>
        </div>

        <div>
          <p
            className="
              text-sm
              text-gray-500
            "
          >
            Gender
          </p>

          <p
            className="
              mt-1
              text-gray-900
            "
          >
            {profile.gender}
          </p>
        </div>

        <div>
          <p
            className="
              text-sm
              text-gray-500
            "
          >
            Nationality
          </p>

          <p
            className="
              mt-1
              text-gray-900
            "
          >
            {profile.nationality}
          </p>
        </div>

        <div>
          <p
            className="
              text-sm
              text-gray-500
            "
          >
            Country
          </p>

          <p
            className="
              mt-1
              text-gray-900
            "
          >
            {profile.country}
          </p>
        </div>

        <div>
          <p
            className="
              text-sm
              text-gray-500
            "
          >
            City
          </p>

          <p
            className="
              mt-1
              text-gray-900
            "
          >
            {profile.city}
          </p>
        </div>
      </div>
    </section>
  );
}
