"use client";

import { useEffect, useState } from "react";

import { ArrowPathIcon } from "@heroicons/react/24/outline";

import { capitalize } from "@/lib/string";

import { useGetSkills } from "@/hooks/admin/skill";

import { useVerifySkill } from "@/hooks/admin/skill";

import { useUnverifySkill } from "@/hooks/admin/skill";

import Pagination from "@/components/common/Pagination";

export default function Content() {
  const [page, setPage] = useState(1);

  const [keyword, setKeyword] = useState("");

  const [debouncedKeyword, setDebouncedKeyword] = useState("");

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebouncedKeyword(keyword);

      setPage(1);
    }, 500);

    return () => clearTimeout(timeout);
  }, [keyword]);

  const {
    skills,
    pagination,
    loading,
    error,

    actions: { refresh },
  } = useGetSkills({
    page: page.toString(),
    limit: "10",
    q: debouncedKeyword,
  });

  const {
    loading: verifying,

    action: verify,
  } = useVerifySkill();

  const {
    loading: unverifying,

    action: unverify,
  } = useUnverifySkill();

  const handleStatus = async (id: number, isVerified: boolean) => {
    const success = isVerified
      ? await unverify(id)
      : await verify(id);

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
        Skill Management
      </h1>

      <p
        className="
          mt-2
          text-gray-500
        "
      >
        Browse registered skills and manage skill verification.
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
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          placeholder="Search by skill name..."
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
                  Skill
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
                    colSpan={3}
                    className="
                      py-20
                      text-center
                      text-sm
                      text-gray-500
                    "
                  >
                    Loading skills...
                  </td>
                </tr>
              ) : error ? (
                <tr>
                  <td
                    colSpan={3}
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
              ) : skills.length === 0 ? (
                <tr>
                  <td
                    colSpan={3}
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
                      No skills found
                    </h2>

                    <p
                      className="
                        mt-2
                        text-sm
                        text-gray-500
                      "
                    >
                      {debouncedKeyword
                        ? "No skills match your search."
                        : "There are no registered skills yet."}
                    </p>
                  </td>
                </tr>
              ) : (
                skills.map((skill) => (
                                      <tr
                    key={skill.id}
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
                        {skill.name}
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
                            skill.is_verified
                              ? "bg-green-100 text-green-700"
                              : "bg-yellow-100 text-yellow-700"
                          }
                        `}
                      >
                        {capitalize(
                          skill.is_verified ? "verified" : "unverified",
                        )}
                      </span>
                    </td>

                    <td
                      className="
                        px-6
                        py-4
                        text-right
                      "
                    >
                      <button
                        type="button"
                        disabled={verifying || unverifying}
                        onClick={() =>
                          handleStatus(skill.id, skill.is_verified)
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
                            skill.is_verified
                              ? "bg-yellow-500 hover:bg-yellow-600"
                              : "bg-green-600 hover:bg-green-700"
                          }
                        `}
                      >
                        {skill.is_verified ? "Unverify" : "Verify"}
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