"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

import { usePathname } from "next/navigation";

import {
  Squares2X2Icon,
  UsersIcon,
  EllipsisHorizontalIcon,
  ArrowLeftStartOnRectangleIcon,
  ArrowRightEndOnRectangleIcon,
  Cog6ToothIcon,
} from "@heroicons/react/24/outline";

import { useAccount } from "@/contexts/AccountContext";
import { useLogout } from "@/hooks/auth";

export default function Sidebar() {
  const pathname = usePathname();

  const [showMoreMenu, setShowMoreMenu] = useState(false);

  const moreMenuRef = useRef<HTMLDivElement>(null);

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
      name: "Talent Management",
      href: "/talents",
      icon: UsersIcon,
    },
  ];

  return (
    <aside
      className="
        w-64
        h-screen
        shrink-0
        border-r
        border-gray-200
        bg-white
      "
    >
      <div
        className="
          flex
          h-full
          flex-col
          py-4
        "
      >
        {/* LOGO */}
        <div
          className="
            mb-6
            px-6
          "
        >
          <Image
            src="/logo.png"
            alt="Starion"
            width={877}
            height={25}
            className="h-auto w-36 object-contain"
          />
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
          {menu.map((item) => {
            const Icon = item.icon;

            const isActive =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`
                  flex
                  h-12
                  items-center
                  rounded-xl
                  px-4
                  transition
                  ${
                    isActive
                      ? "bg-rose-100 text-rose-500"
                      : "text-gray-500 hover:bg-gray-100"
                  }
                `}
              >
                <Icon className="h-6 w-6 shrink-0" />

                <span className="ml-3">{item.name}</span>
              </Link>
            );
          })}
        </nav>

        {account ? (
          <div
            ref={moreMenuRef}
            className="
              relative
              mt-auto
              px-3
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
                    h-12
                    items-center
                    px-4
                    text-gray-500
                    hover:bg-gray-100
                  "
                >
                  <Cog6ToothIcon className="h-6 w-6 shrink-0" />

                  <span className="ml-3">Settings</span>
                </Link>

                <button
                  type="button"
                  onClick={handleLogout}
                  disabled={logoutLoading}
                  className="
                    flex
                    h-12
                    w-full
                    cursor-pointer
                    items-center
                    px-4
                    text-gray-500
                    hover:bg-gray-100
                  "
                >
                  <ArrowLeftStartOnRectangleIcon className="h-6 w-6 shrink-0" />

                  <span className="ml-3">
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
                h-12
                w-full
                cursor-pointer
                items-center
                rounded-xl
                px-4
                text-gray-500
                hover:bg-gray-100
              "
            >
              <EllipsisHorizontalIcon className="h-6 w-6 shrink-0" />

              <span className="ml-3">More</span>
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
              className="
                animate-login-bounce
                flex
                h-12
                items-center
                justify-center
                rounded-xl
                bg-rose-500
                font-bold
                text-white
                transition
                hover:bg-rose-600
              "
            >
              <ArrowRightEndOnRectangleIcon className="mr-2 h-6 w-6" />
              Login
            </Link>
          </div>
        )}
      </div>
    </aside>
  );
}
