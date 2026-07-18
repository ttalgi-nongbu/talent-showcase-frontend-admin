"use client";

import { formatDateTime } from "@/lib/time";

import { capitalize } from "@/lib/string";

import { User } from "@/types/admin/talent";

interface Props {
  user: User;
}

export default function AccountInformation({ user }: Props) {
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
        Account Information
      </h2>

      <div
        className="
          mt-6
          grid
          gap-6
          md:grid-cols-2
        "
      >
        <div>
          <p
            className="
              text-sm
              text-gray-500
            "
          >
            Username
          </p>

          <p
            className="
              mt-1
              font-medium
              text-gray-900
            "
          >
            @{user.username}
          </p>
        </div>

        <div>
          <p
            className="
              text-sm
              text-gray-500
            "
          >
            Email
          </p>

          <p
            className="
              mt-1
              text-gray-900
            "
          >
            {user.email}
          </p>
        </div>

        <div>
          <p
            className="
              text-sm
              text-gray-500
            "
          >
            Email Verified
          </p>

          <div className="mt-2">
            <span
              className={`
                inline-flex
                rounded-full
                px-3
                py-1
                text-xs
                font-medium
                ${
                  user.email_verified
                    ? "bg-green-100 text-green-700"
                    : "bg-yellow-100 text-yellow-700"
                }
              `}
            >
              {user.email_verified ? "Verified" : "Pending"}
            </span>
          </div>
        </div>

        <div>
          <p
            className="
              text-sm
              text-gray-500
            "
          >
            Status
          </p>

          <div className="mt-2">
            <span
              className={`
                inline-flex
                rounded-full
                px-3
                py-1
                text-xs
                font-medium
                ${
                  user.status === "active"
                    ? "bg-green-100 text-green-700"
                    : "bg-red-100 text-red-700"
                }
              `}
            >
              {capitalize(user.status)}
            </span>
          </div>
        </div>

        <div>
          <p
            className="
              text-sm
              text-gray-500
            "
          >
            Role
          </p>

          <p
            className="
              mt-1
              text-gray-900
            "
          >
            {capitalize(user.role)}
          </p>
        </div>

        <div>
          <p
            className="
              text-sm
              text-gray-500
            "
          >
            Registered At
          </p>

          <p
            className="
              mt-1
              text-gray-900
            "
          >
            {formatDateTime(user.registration_at)}
          </p>
        </div>
      </div>
    </section>
  );
}
