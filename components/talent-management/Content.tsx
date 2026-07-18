"use client";

import { useEffect, useState } from "react";

import Link from "next/link";

import { ArrowPathIcon } from "@heroicons/react/24/outline";

import { formatDateTime } from "@/lib/time";

import { capitalize } from "@/lib/string";

import { useGetTalents } from "@/hooks/admin/talent/useGetTalents";

import { useBanTalent } from "@/hooks/admin/talent/useBanTalent";

import { useActivateTalent } from "@/hooks/admin/talent/useActivateTalent";

import Pagination from "@/components/common/Pagination";

export default function Content() {
  const [page, setPage] = useState(1);

  const [search, setSearch] = useState("");

  const [debouncedSearch, setDebouncedSearch] = useState("");

  const [status, setStatus] = useState("");

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebouncedSearch(search);

      setPage(1);
    }, 500);

    return () => clearTimeout(timeout);
  }, [search]);

  const {
    talents,
    pagination,
    loading,
    error,

    actions: { refresh },
  } = useGetTalents({
    page: page.toString(),
    limit: "10",
    search: debouncedSearch,
    status,
  });

  const {
    loading: banning,

    action: ban,
  } = useBanTalent();

  const {
    loading: activating,

    action: activate,
  } = useActivateTalent();

  const handleStatus = async (id: number, status: "active" | "banned") => {
    const success = status === "active" ? await ban(id) : await activate(id);

    if (success) {
      refresh();
    }
  };

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
    mt-6
    flex
    flex-col
    gap-4
    md:flex-row
  "
      >
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search by username or email..."
          className="
      flex-1
      rounded-xl
      border
      border-gray-300
      px-4
      py-3
      outline-none
      transition-colors
      focus:border-rose-500
    "
        />

        <div
          className="
    flex
    gap-3
  "
        >
          <select
            value={status}
            onChange={(e) => {
              setStatus(e.target.value);

              setPage(1);
            }}
            className="
      rounded-xl
      border
      border-gray-300
      px-4
      py-3
      outline-none
      transition-colors
      focus:border-rose-500
    "
          >
            <option value="">All Status</option>
            <option value="active">Active</option>
            <option value="banned">Banned</option>
          </select>

          <button
            type="button"
            onClick={refresh}
            disabled={loading}
            className="
      cursor-pointer
      flex
      h-12
      w-12
      items-center
      justify-center
      rounded-xl
      border
      border-gray-300
      text-gray-600
      transition-colors
      hover:bg-gray-100
      disabled:cursor-not-allowed
      disabled:opacity-50
    "
          >
            <ArrowPathIcon
              className={`
        h-5
        w-5
        ${loading ? "animate-spin" : ""}
      `}
            />
          </button>
        </div>
      </div>

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
                      {debouncedSearch
                        ? "No talents match your search."
                        : status
                          ? "No talents found with the selected status."
                          : "There are no registered talents yet."}
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
                        @{talent.user.username}
                      </span>
                    </td>

                    <td
                      className="
                        px-6
                        py-4
                        text-gray-700
                      "
                    >
                      {talent.user.email}
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
                            talent.user.email_verified
                              ? "bg-green-100 text-green-700"
                              : "bg-yellow-100 text-yellow-700"
                          }
                        `}
                      >
                        {talent.user.email_verified ? "Verified" : "Pending"}
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
                            talent.user.status === "active"
                              ? "bg-green-100 text-green-700"
                              : "bg-red-100 text-red-700"
                          }
                        `}
                      >
                        {capitalize(talent.user.status)}
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
                      {formatDateTime(talent.user.registration_at)}
                    </td>

                    <td
                      className="
    px-6
    py-4
    text-right
  "
                    >
                      <div
                        className="
      flex
      justify-end
      gap-2
    "
                      >
                        <button
                          type="button"
                          disabled={banning || activating}
                          onClick={() =>
                            handleStatus(talent.id, talent.user.status)
                          }
                          className={`
                            cursor-pointer
                            rounded-lg
                            px-4
                            py-2
                            text-sm
                            font-medium
                            text-white
                            transition-colors
                            disabled:opacity-50
                            ${
                              talent.user.status === "active"
                                ? "bg-red-500 hover:bg-red-600"
                                : "bg-green-600 hover:bg-green-700"
                            }
                          `}
                        >
                          {talent.user.status === "active" ? "Ban" : "Activate"}
                        </button>

                        <Link
                          href={`/talents/${talent.id}`}
                          className="
        inline-flex
        items-center
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
                        </Link>
                      </div>
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
