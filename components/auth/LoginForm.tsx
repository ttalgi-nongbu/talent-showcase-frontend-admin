"use client";

import Image from "next/image";

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
        items-center
        justify-center
        bg-white
        text-gray-900
        px-6
      "
    >
      <div
        className="
          w-full
          max-w-sm
          flex
          flex-col
          items-center
        "
      >
        {/* LOGO */}
        <div className="mb-6">
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
            text-2xl
            font-bold
            text-gray-700
            mb-8
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
          {/* IDENTIFIER INPUT */}
          <div className="relative">
            <input
              type="text"
              placeholder=" "
              value={form.identifier}
              onChange={(e) => actions.setIdentifier(e.target.value)}
              required
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
                text-gray-400
                text-base
                transition-all
                peer-focus:top-0
                peer-focus:text-xs
                peer-focus:text-rose-500
                peer-not-placeholder-shown:top-0
                peer-not-placeholder-shown:text-xs
              "
            >
              Username or Email Address
            </label>
          </div>

          {/* PASSWORD INPUT */}
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder=" "
              value={form.password}
              onChange={(e) => actions.setPassword(e.target.value)}
              required
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
                text-gray-400
                text-base
                transition-all
                peer-focus:top-0
                peer-focus:text-xs
                peer-focus:text-rose-500
                peer-not-placeholder-shown:top-0
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
                text-gray-400
                hover:text-rose-500
                cursor-pointer
              "
            >
              {showPassword ? (
                <EyeSlashIcon className="w-5 h-5" />
              ) : (
                <EyeIcon className="w-5 h-5" />
              )}
            </button>
          </div>

          <button
            type="submit"
            disabled={loading || !form.identifier || !form.password}
            className={`
    w-full
    h-14
    rounded-xl
    bg-rose-500
    text-white
    font-semibold
    cursor-pointer
    transition
    hover:bg-rose-600

    ${!loading && (!form.identifier || !form.password) ? "opacity-50" : ""}
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
