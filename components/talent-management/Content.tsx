"use client";

import { useGetTalents } from "@/hooks/admin/talent/useGetTalents";

export default function Content() {
  const { talents, loading, error } = useGetTalents({
    page: "1",
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
                  Talent
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
                  Email Verified
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
                      py-16
                      text-center
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
                      py-16
                      text-center
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
                      py-16
                      text-center
                      text-gray-500
                    "
                  >
                    No talents found.
                  </td>
                </tr>
              ) : (
                talents.map((talent) => (
                  <tr key={talent.id} className="border-b border-gray-100">
                    <td
                      className="
                        px-6
                        py-4
                      "
                    >
                      <div>
                        <p
                          className="
                            font-medium
                            text-gray-900
                          "
                        >
                          {talent.username}
                        </p>

                        <p
                          className="
                            text-sm
                            text-gray-500
                          "
                        >
                          #{talent.id}
                        </p>
                      </div>
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
                      {talent.email_verified ? (
                        <span
                          className="
                            rounded-full
                            bg-green-100
                            px-3
                            py-1
                            text-xs
                            font-medium
                            text-green-700
                          "
                        >
                          Verified
                        </span>
                      ) : (
                        <span
                          className="
                            rounded-full
                            bg-yellow-100
                            px-3
                            py-1
                            text-xs
                            font-medium
                            text-yellow-700
                          "
                        >
                          Pending
                        </span>
                      )}
                    </td>

                    <td
                      className="
                        px-6
                        py-4
                        text-center
                      "
                    >
                      <span
                        className="
                          rounded-full
                          bg-gray-100
                          px-3
                          py-1
                          text-xs
                          font-medium
                          text-gray-700
                        "
                      >
                        {talent.status}
                      </span>
                    </td>

                    <td
                      className="
                        px-6
                        py-4
                        text-center
                        text-gray-700
                      "
                    >
                      {talent.registration_at}
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
                          rounded-lg
                          border
                          border-gray-300
                          px-4
                          py-2
                          text-sm
                          font-medium
                          hover:bg-gray-50
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
    </section>
  );
}
