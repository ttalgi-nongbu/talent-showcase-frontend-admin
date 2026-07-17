"use client";

import { useState } from "react";

import { formatDateTime } from "@/lib/time";

import { capitalize } from "@/lib/string";

import { useGetTalents } from "@/hooks/admin/talent/useGetTalents";

import Pagination from "@/components/common/Pagination";

export default function Content() {
  const [page, setPage] = useState(1);

  const { talents, pagination, loading, error } = useGetTalents({
    page: page.toString(),
    limit: "10",
  });

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
        Talent Management
      </h1>

      <p
        className="
          mt-2
          text-gray-500
        "
      >
        Manage registered talents, view account information, and update account
        status.
      </p>

      <div
        className="
          mt-8
          overflow-hidden
          rounded-2xl
          border
          border-gray-200
        "
      >
        <div
          className="
            overflow-x-auto
            hide-scrollbar
          "
        >
          <table className="w-full">
            <thead
              className="
                border-b
                border-gray-200
                bg-gray-50
              "
            >
              <tr>
                <th
                  className="
                    px-6
                    py-4
                    text-left
                    text-sm
                    font-semibold
                    text-gray-700
                  "
                >
                  Username
                </th>

                <th
                  className="
                    px-6
                    py-4
                    text-left
                    text-sm
                    font-semibold
                    text-gray-700
                  "
                >
                  Email
                </th>

                <th
                  className="
                    px-6
                    py-4
                    text-center
                    text-sm
                    font-semibold
                    text-gray-700
                  "
                >
                  Email
                </th>

                <th
                  className="
                    px-6
                    py-4
                    text-center
                    text-sm
                    font-semibold
                    text-gray-700
                  "
                >
                  Status
                </th>

                <th
                  className="
                    px-6
                    py-4
                    text-center
                    text-sm
                    font-semibold
                    text-gray-700
                  "
                >
                  Registered
                </th>

                <th
                  className="
                    px-6
                    py-4
                    text-right
                    text-sm
                    font-semibold
                    text-gray-700
                  "
                >
                  Actions
                </th>
              </tr>
            </thead>

            <tbody>
              {loading ? (
                <tr>
                  <td
                    colSpan={6}
                    className="
                      py-20
                      text-center
                      text-sm
                      text-gray-500
                    "
                  >
                    Loading talents...
                  </td>
                </tr>
              ) : error ? (
                <tr>
                  <td
                    colSpan={6}
                    className="
                      py-20
                      text-center
                      text-sm
                      text-red-500
                    "
                  >
                    {error}
                  </td>
                </tr>
              ) : talents.length === 0 ? (
                <tr>
                  <td
                    colSpan={6}
                    className="
                      py-20
                      text-center
                    "
                  >
                    <h2
                      className="
                        text-lg
                        font-semibold
                        text-gray-700
                      "
                    >
                      No talents found
                    </h2>

                    <p
                      className="
                        mt-2
                        text-sm
                        text-gray-500
                      "
                    >
                      There are no registered talents yet.
                    </p>
                  </td>
                </tr>
              ) : (
                talents.map((talent) => (
                  <tr
                    key={talent.id}
                    className="
                      border-b
                      border-gray-100
                      transition-colors
                      hover:bg-gray-50
                    "
                  >
                    <td
                      className="
                        px-6
                        py-4
                      "
                    >
                      <span
                        className="
                          font-medium
                          text-gray-900
                        "
                      >
                        @{talent.username}
                      </span>
                    </td>

                    <td
                      className="
                        px-6
                        py-4
                        text-gray-700
                      "
                    >
                      {talent.email}
                    </td>

                    <td
                      className="
                        px-6
                        py-4
                        text-center
                      "
                    >
                      <span
                        className={`
                          inline-flex
                          rounded-full
                          px-3
                          py-1
                          text-xs
                          font-medium
                          ${
                            talent.email_verified
                              ? "bg-green-100 text-green-700"
                              : "bg-yellow-100 text-yellow-700"
                          }
                        `}
                      >
                        {talent.email_verified ? "Verified" : "Pending"}
                      </span>
                    </td>

                    <td
                      className="
                        px-6
                        py-4
                        text-center
                      "
                    >
                      <span
                        className={`
                          inline-flex
                          rounded-full
                          px-3
                          py-1
                          text-xs
                          font-medium
                          ${
                            talent.status === "active"
                              ? "bg-green-100 text-green-700"
                              : "bg-red-100 text-red-700"
                          }
                        `}
                      >
                        {capitalize(talent.status)}
                      </span>
                    </td>

                    <td
                      className="
                        px-6
                        py-4
                        text-center
                        text-sm
                        text-gray-500
                      "
                    >
                      {formatDateTime(talent.registration_at)}
                    </td>

                    <td
                      className="
                        px-6
                        py-4
                        text-right
                      "
                    >
                      <button
                        className="
                          cursor-pointer
                          rounded-lg
                          border
                          border-gray-300
                          px-4
                          py-2
                          text-sm
                          font-medium
                          text-gray-700
                          transition-colors
                          hover:bg-gray-100
                        "
                      >
                        View
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      <Pagination
        page={page}
        totalPages={pagination?.total_pages ?? 1}
        onPageChange={setPage}
      />
    </section>
  );
}
