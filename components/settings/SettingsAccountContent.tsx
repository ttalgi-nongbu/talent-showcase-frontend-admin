"use client";

import Image from "next/image";

import Link from "next/link";

import { ArrowLeftIcon } from "@heroicons/react/24/outline";

import {
  ChevronDownIcon,
  EyeIcon,
  EyeSlashIcon,
} from "@heroicons/react/24/outline";

import { useState } from "react";

import { useGetAccount, useChangePassword } from "@/hooks/user";

import { useLogout } from "@/hooks/auth";

export default function SettingsAccountContent() {
  //
  // ambil account
  //
  const { account } = useGetAccount();

  //
  // ambil state + actions dari change password hook
  //
  const { form, loading, actions } = useChangePassword();

  const {
    loading: logoutLoading,
    actions: { handleLogout },
  } = useLogout();

  //
  // toggle show/hide password section
  //
  const [openPassword, setOpenPassword] = useState(false);

  //
  // toggle show/hide current password
  //
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);

  //
  // toggle show/hide new password
  //
  const [showNewPassword, setShowNewPassword] = useState(false);

  //
  // toggle show/hide confirm password
  //
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <div className="min-h-screen bg-white text-gray-900 py-12 px-4">
      <div className="max-w-md mx-auto">
        {/* HEADER */}
        <div
          className="
    relative
    mb-6
    flex
    items-center
    justify-center
  "
        >
          <Link
            href="/explore"
            className="
      absolute
      left-0
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

          <Image
            src="/logo.png"
            alt="Logo"
            width={180}
            height={60}
            priority
            className="object-contain"
          />
        </div>

        {/* TITLE */}
        <div className="text-center mb-10">
          <h1 className="text-2xl font-bold text-gray-700">Account Settings</h1>

          <p className="text-sm text-gray-400 mt-2">
            Manage your account information
          </p>
        </div>

        {/* CONTENT */}
        <div className="space-y-5">
          {/* EMAIL */}
          <div className="relative">
            <input
              type="email"
              value={account?.email || ""}
              disabled
              className="
                w-full
                h-14
                px-4
                border
                border-gray-300
                rounded-xl
                bg-gray-50
                text-gray-500
                cursor-not-allowed
                focus:outline-none
              "
            />

            <label
              className="
                pointer-events-none
                absolute
                left-4
                top-0
                -translate-y-1/2
                bg-white
                px-1
                text-xs
                text-gray-400
              "
            >
              Email
            </label>
          </div>

          {/* USERNAME */}
          <div className="relative">
            <input
              type="text"
              value={account?.username || ""}
              disabled
              className="
                w-full
                h-14
                px-4
                border
                border-gray-300
                rounded-xl
                bg-gray-50
                text-gray-500
                cursor-not-allowed
                focus:outline-none
              "
            />

            <label
              className="
                pointer-events-none
                absolute
                left-4
                top-0
                -translate-y-1/2
                bg-white
                px-1
                text-xs
                text-gray-400
              "
            >
              Username
            </label>
          </div>

          {/* PASSWORD SECTION */}
          <div className="pt-4">
            <div className="border-t border-gray-100 pt-5">
              <button
                type="button"
                onClick={() => setOpenPassword(!openPassword)}
                className="
    w-full
    flex
    items-center
    justify-between
    cursor-pointer
  "
              >
                <div className="text-left">
                  <h2 className="text-lg font-semibold text-gray-800">
                    Password
                  </h2>

                  <p className="text-sm text-gray-400 mt-1">
                    Change your account password
                  </p>
                </div>

                <ChevronDownIcon
                  className={`
      w-5
      h-5
      text-gray-400
      transition-transform
      duration-300
      ${openPassword ? "rotate-180" : ""}
    `}
                />
              </button>

              {openPassword && (
                <form
                  onSubmit={actions.handleSubmit}
                  className="mt-5 space-y-5"
                >
                  {/* CURRENT PASSWORD */}
                  <div className="relative">
                    <input
                      type={showCurrentPassword ? "text" : "password"}
                      placeholder=" "
                      value={form.currentPassword}
                      onChange={(e) =>
                        actions.setCurrentPassword(e.target.value)
                      }
                      className="
            peer
            w-full
            h-14
            px-4
            border
            border-gray-300
            rounded-xl
            bg-white
            text-gray-900
            focus:outline-none
            focus:ring-2
            focus:ring-rose-200
            focus:border-rose-400
          "
                    />

                    <label
                      className="
            pointer-events-none
            absolute
            left-4
            top-1/2
            -translate-y-1/2
            bg-white
            px-1
            text-base
            text-gray-400
            transition-all
            peer-focus:top-0
            peer-focus:text-xs
            peer-focus:text-rose-500
            peer-not-placeholder-shown:top-0
            peer-not-placeholder-shown:text-xs
          "
                    >
                      Current Password
                    </label>

                    <button
                      type="button"
                      onClick={() =>
                        setShowCurrentPassword(!showCurrentPassword)
                      }
                      className="
            absolute
            right-4
            top-1/2
            -translate-y-1/2
            text-gray-400
            hover:text-rose-500
            cursor-pointer
          "
                    >
                      {showCurrentPassword ? (
                        <EyeSlashIcon className="w-5 h-5" />
                      ) : (
                        <EyeIcon className="w-5 h-5" />
                      )}
                    </button>
                  </div>

                  {/* NEW PASSWORD */}
                  <div className="relative">
                    <input
                      type={showNewPassword ? "text" : "password"}
                      placeholder=" "
                      value={form.newPassword}
                      onChange={(e) => actions.setNewPassword(e.target.value)}
                      className="
            peer
            w-full
            h-14
            px-4
            border
            border-gray-300
            rounded-xl
            bg-white
            text-gray-900
            focus:outline-none
            focus:ring-2
            focus:ring-rose-200
            focus:border-rose-400
          "
                    />

                    <label
                      className="
            pointer-events-none
            absolute
            left-4
            top-1/2
            -translate-y-1/2
            bg-white
            px-1
            text-base
            text-gray-400
            transition-all
            peer-focus:top-0
            peer-focus:text-xs
            peer-focus:text-rose-500
            peer-not-placeholder-shown:top-0
            peer-not-placeholder-shown:text-xs
          "
                    >
                      New Password
                    </label>

                    <button
                      type="button"
                      onClick={() => setShowNewPassword(!showNewPassword)}
                      className="
            absolute
            right-4
            top-1/2
            -translate-y-1/2
            text-gray-400
            hover:text-rose-500
            cursor-pointer
          "
                    >
                      {showNewPassword ? (
                        <EyeSlashIcon className="w-5 h-5" />
                      ) : (
                        <EyeIcon className="w-5 h-5" />
                      )}
                    </button>
                  </div>

                  {/* CONFIRM PASSWORD */}
                  <div className="relative">
                    <input
                      type={showConfirmPassword ? "text" : "password"}
                      placeholder=" "
                      value={form.confirmPassword}
                      onChange={(e) =>
                        actions.setConfirmPassword(e.target.value)
                      }
                      className="
            peer
            w-full
            h-14
            px-4
            border
            border-gray-300
            rounded-xl
            bg-white
            text-gray-900
            focus:outline-none
            focus:ring-2
            focus:ring-rose-200
            focus:border-rose-400
          "
                    />

                    <label
                      className="
            pointer-events-none
            absolute
            left-4
            top-1/2
            -translate-y-1/2
            bg-white
            px-1
            text-base
            text-gray-400
            transition-all
            peer-focus:top-0
            peer-focus:text-xs
            peer-focus:text-rose-500
            peer-not-placeholder-shown:top-0
            peer-not-placeholder-shown:text-xs
          "
                    >
                      Confirm Password
                    </label>

                    <button
                      type="button"
                      onClick={() =>
                        setShowConfirmPassword(!showConfirmPassword)
                      }
                      className="
            absolute
            right-4
            top-1/2
            -translate-y-1/2
            text-gray-400
            hover:text-rose-500
            cursor-pointer
          "
                    >
                      {showConfirmPassword ? (
                        <EyeSlashIcon className="w-5 h-5" />
                      ) : (
                        <EyeIcon className="w-5 h-5" />
                      )}
                    </button>
                  </div>

                  {/* SAVE BUTTON */}
                  <button
                    type="submit"
                    disabled={
                      loading ||
                      !form.currentPassword ||
                      !form.newPassword ||
                      !form.confirmPassword
                    }
                    className={`
    w-full
    h-14
    rounded-xl
    bg-rose-500
    text-white
    font-semibold
    cursor-pointer
    hover:bg-rose-600
    transition

    ${
      !loading &&
      (!form.currentPassword || !form.newPassword || !form.confirmPassword)
        ? "opacity-50"
        : ""
    }
  `}
                  >
                    {loading ? (
                      <div
                        className="
        flex
        items-center
        justify-center
      "
                      >
                        <div
                          className="
          h-5
          w-5
          animate-spin
          rounded-full
          border-2
          border-white
          border-t-transparent
        "
                        />
                      </div>
                    ) : (
                      "Save Password"
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* LOGOUT */}
          <div className="pt-4">
            <div className="border-t border-gray-100 pt-6">
              <h2 className="text-lg font-semibold text-gray-800">Logout</h2>

              <p className="mt-1 text-sm leading-6 text-gray-400">
                Sign out from your account on this device.
              </p>

              <button
                type="button"
                onClick={handleLogout}
                disabled={logoutLoading}
                className="
        mt-5
        flex
        h-14
        w-full
        items-center
        justify-center
        rounded-xl
        border
        border-gray-300
        text-gray-700
        font-semibold
        transition
        hover:bg-gray-100
        cursor-pointer
      "
              >
                {logoutLoading ? (
                  <div
                    className="
            h-5
            w-5
            animate-spin
            rounded-full
            border-2
            border-gray-500
            border-t-transparent
          "
                  />
                ) : (
                  "Logout"
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
