"use client";

import Image from "next/image";

import Link from "next/link";

import { useState } from "react";

import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";

import { useLogin } from "@/hooks/auth";

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);

  const { form, loading, actions } = useLogin();

  return (
    <div
      className="
  min-h-screen
  flex
  justify-center
  bg-white
  px-4
  pt-12
  pb-8
  text-gray-900

  sm:px-6
  sm:pt-20
"
    >
      <div
        className="
        w-full
        max-w-md
        flex
        flex-col
        items-center
      "
      >
        {/* LOGO */}
        <div className="mb-8">
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
        <h1
          className="
          mb-8
          text-2xl
          font-bold
          text-gray-700
        "
        >
          Admin Login
        </h1>

        {/* FORM */}
        <form
          onSubmit={actions.handleLogin}
          className="
          w-full
          space-y-5
        "
        >
          {/* IDENTIFIER */}
          <div className="space-y-2">
            <h2
              className="
              text-sm
              font-medium
              text-gray-700
            "
            >
              Username or Email Address
              <span className="text-rose-500"> *</span>
            </h2>

            <div className="relative">
              <input
                type="text"
                placeholder=" "
                value={form.identifier}
                onChange={(e) => actions.setIdentifier(e.target.value)}
                required
                className="
                peer
                h-14
                w-full
                rounded-xl
                border
                border-gray-300
                bg-white
                px-4
                pt-5
                text-gray-900
                transition
                focus:border-rose-400
                focus:outline-none
                focus:ring-2
                focus:ring-rose-200
              "
              />

              <label
                className="
                pointer-events-none
                absolute
                left-4
                top-4
                text-base
                text-gray-400
                transition-all
                duration-200

                peer-focus:top-2
                peer-focus:text-xs
                peer-focus:text-rose-500

                peer-not-placeholder-shown:top-2
                peer-not-placeholder-shown:text-xs
              "
              >
                Username or Email Address
              </label>
            </div>
          </div>

          {/* PASSWORD */}
          <div className="space-y-2">
            <h2
              className="
              text-sm
              font-medium
              text-gray-700
            "
            >
              Password
              <span className="text-rose-500"> *</span>
            </h2>

            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder=" "
                value={form.password}
                onChange={(e) => actions.setPassword(e.target.value)}
                required
                className="
                peer
                h-14
                w-full
                rounded-xl
                border
                border-gray-300
                bg-white
                px-4
                pr-12
                pt-5
                text-gray-900
                transition
                focus:border-rose-400
                focus:outline-none
                focus:ring-2
                focus:ring-rose-200
              "
              />

              <label
                className="
                pointer-events-none
                absolute
                left-4
                top-4
                text-base
                text-gray-400
                transition-all
                duration-200

                peer-focus:top-2
                peer-focus:text-xs
                peer-focus:text-rose-500

                peer-not-placeholder-shown:top-2
                peer-not-placeholder-shown:text-xs
              "
              >
                Password
              </label>

              {/* SHOW PASSWORD BUTTON */}
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="
                absolute
                right-4
                top-1/2
                -translate-y-1/2
                cursor-pointer
                text-gray-400
                transition-colors
                hover:text-rose-500
              "
              >
                {showPassword ? (
                  <EyeSlashIcon className="h-5 w-5" />
                ) : (
                  <EyeIcon className="h-5 w-5" />
                )}
              </button>
            </div>
          </div>

          {/* LOGIN BUTTON */}
          <button
            type="submit"
            disabled={loading || !form.identifier || !form.password}
            className={`
            h-14
            w-full
            rounded-xl
            bg-rose-500
            text-white
            font-semibold
            transition
            cursor-pointer
            hover:bg-rose-600
            disabled:cursor-not-allowed
            disabled:hover:bg-rose-500
            ${
              !loading && (!form.identifier || !form.password)
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
              "Login"
            )}
          </button>
        </form>
      </div>
    </div>
  );
}
