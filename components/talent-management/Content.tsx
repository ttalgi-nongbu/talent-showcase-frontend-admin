"use client";

export default function Content() {
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
        Manage registered users, view account information, and update account
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
                  User
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
                  Role
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
              <tr>
                <td
                  colSpan={7}
                  className="
                    py-24
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
                    Hello World
                  </h2>

                  <p
                    className="
                      mt-2
                      text-sm
                      text-gray-500
                    "
                  >
                    User data will be displayed here.
                  </p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
