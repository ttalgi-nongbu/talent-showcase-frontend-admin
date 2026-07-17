"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState, useRef } from "react";

import { usePathname } from "next/navigation";

import {
  Squares2X2Icon,
  UsersIcon,
  EllipsisHorizontalIcon,
  ArrowLeftStartOnRectangleIcon,
  ArrowRightEndOnRectangleIcon,
  Cog6ToothIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

import { useAccount } from "@/contexts/AccountContext";

import { useLogout } from "@/hooks/auth";

export default function Sidebar() {
  const pathname = usePathname();

  const [expanded, setExpanded] = useState(false);

  const [showMoreMenu, setShowMoreMenu] = useState(false);

  const moreMenuRef = useRef<HTMLDivElement>(null);

  //
  // ambil account
  //
  const { account } = useAccount();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        moreMenuRef.current &&
        !moreMenuRef.current.contains(event.target as Node)
      ) {
        setShowMoreMenu(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const {
    loading: logoutLoading,
    actions: { handleLogout },
  } = useLogout();

  const menu = [
    {
      name: "Dashboard",
      href: "/",
      icon: Squares2X2Icon,
    },
    {
      name: "User Management",
      href: "/users",
      icon: UsersIcon,
    },
  ];

  return (
    <aside
      className={`
        ${expanded ? "w-64" : "w-20"}
        h-screen
        bg-white
        border-r
        border-gray-200
        shrink-0
        overflow-hidden
        transition-[width]
        duration-300
        ease-in-out
      `}
    >
      <div
        className="
          h-full
          flex
          flex-col
          py-4
        "
      >
        {/* LOGO */}
        <div
          className="
            mt-1
            mb-6
            px-4
            flex
            items-center
          "
        >
          <button
            onClick={() => {
              setExpanded(!expanded);

              if (expanded) {
                setShowMoreMenu(false);
              }
            }}
            className={`
    h-10
    shrink-0
    cursor-pointer
    flex
    items-center
    transition-all
    duration-300
    ${expanded ? "w-36" : "w-10"}
  `}
          >
            <Image
              src={expanded ? "/logo.png" : "/logo-mark.png"}
              alt="Starion"
              width={877}
              height={25}
              className={`
      object-contain
      transition-all
      duration-300
      ${expanded ? "w-36 h-auto" : "w-10 h-10"}
    `}
            />
          </button>

          <div
            className={`
              ml-auto
              transition-opacity
              duration-200
              ${expanded ? "opacity-100" : "opacity-0 pointer-events-none"}
            `}
          >
            <button
              onClick={() => {
                setExpanded(false);
                setShowMoreMenu(false);
              }}
              className="
                p-2
                rounded-xl
                text-gray-500
                hover:bg-gray-100
                cursor-pointer
              "
            >
              <XMarkIcon
                className="
                  w-5
                  h-5
                "
              />
            </button>
          </div>
        </div>

        {/* MENU */}
        <nav
          className="
    flex
    flex-col
    gap-2
    px-3
  "
        >
          {menu.map((item, i) => {
            const Icon = item.icon;

            const isActive =
              item.href !== "#" &&
              (item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href));

            return (
              <Link
                key={i}
                href={item.href}
                className={`
          flex
          items-center
          h-12
          rounded-xl
          px-4
          overflow-hidden
          ${
            isActive
              ? "bg-rose-100 text-rose-500"
              : "text-gray-500 hover:bg-gray-100"
          }
        `}
              >
                <Icon
                  className="
            w-6
            h-6
            shrink-0
          "
                />

                <span
                  className={`
            whitespace-nowrap
            overflow-hidden
            transition-all
            duration-200
            ${expanded ? "w-auto opacity-100 ml-3" : "w-0 opacity-0 ml-0"}
          `}
                >
                  {item.name}
                </span>
              </Link>
            );
          })}
        </nav>

        {account ? (
          <div
            ref={moreMenuRef}
            className="
      mt-auto
      px-3
      relative
    "
          >
            {showMoreMenu && (
              <div
                className="
          mb-2
          overflow-hidden
           rounded-xl
          border
          border-gray-200
          bg-white
          shadow-sm
        "
              >
                <Link
                  href="/settings/account"
                  className="
            flex
            items-center
            w-full
            h-12
            px-4
            text-gray-500
            hover:bg-gray-100
          "
                >
                  <Cog6ToothIcon
                    className="
              w-6
              h-6
              shrink-0
            "
                  />

                  <span
                    className={`
              whitespace-nowrap
              overflow-hidden
              transition-all
              duration-200
              ${expanded ? "w-auto opacity-100 ml-3" : "w-0 opacity-0 ml-0"}
            `}
                  >
                    Settings
                  </span>
                </Link>

                <button
                  type="button"
                  onClick={handleLogout}
                  disabled={logoutLoading}
                  className="
            flex
            items-center
            w-full
            h-12
            px-4
            text-gray-500
            hover:bg-gray-100
            cursor-pointer
          "
                >
                  <ArrowLeftStartOnRectangleIcon
                    className="
              w-6
              h-6
              shrink-0
            "
                  />

                  <span
                    className={`
              whitespace-nowrap
              overflow-hidden
              transition-all
              duration-200
              ${expanded ? "w-auto opacity-100 ml-3" : "w-0 opacity-0 ml-0"}
            `}
                  >
                    {logoutLoading ? "Logging out..." : "Logout"}
                  </span>
                </button>
              </div>
            )}

            <button
              type="button"
              onClick={() => setShowMoreMenu(!showMoreMenu)}
              className="
        flex
        items-center
        h-12
        w-full
         rounded-xl
        px-4
        overflow-hidden
        text-gray-500
        hover:bg-gray-100
        cursor-pointer
      "
            >
              <EllipsisHorizontalIcon
                className="
          w-6
          h-6
          shrink-0
        "
              />

              <span
                className={`
          whitespace-nowrap
          overflow-hidden
          transition-all
          duration-200
          ${expanded ? "w-auto opacity-100 ml-3" : "w-0 opacity-0 ml-0"}
        `}
              >
                More
              </span>
            </button>
          </div>
        ) : (
          <div
            className="
    mt-auto
    px-3
  "
          >
            <Link
              href="/login"
              className={`
    animate-login-bounce
    flex
    h-12
    items-center
    justify-center
    rounded-xl
    bg-rose-500
    text-white
    transition
    hover:bg-rose-600
    ${expanded ? "w-full" : "w-12"}
  `}
            >
              <ArrowRightEndOnRectangleIcon
                className={`
      h-6
      w-6
      shrink-0
      transition-all
      duration-200
      ${expanded ? "mr-2" : ""}
    `}
              />

              <span
                className={`
      whitespace-nowrap
      overflow-hidden
      font-bold
      transition-all
      duration-200
      ${expanded ? "w-auto opacity-100" : "w-0 opacity-0"}
    `}
              >
                Login
              </span>
            </Link>
          </div>
        )}
      </div>
    </aside>
  );
}
