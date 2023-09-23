"use client";
import { Fragment, useEffect, useState } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { signIn } from "next-auth/react";
import Image from "next/image";

const navigation = [
  { name: "Home", href: "/", current: true },
  { name: "Members", href: "/members", current: false },
  { name: "Blogs", href: "/blog", current: false },
  { name: "Campus Ambasador", href: "/campus_ambasador", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function NewNavbar() {
  //const { user, error, isLoading } = useUser();

  const [navbartop, setnavbartop] = useState(false);
  const { data: user, status } = useSession();

  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 90) {
        setnavbartop(false);
      } else {
        setnavbartop(true);
      }
    };

    window.addEventListener("scroll", changeColor);
  });
  return (
    <Disclosure
      as="nav"
      className={`fixed z-50 max-w-screen w-full transition-all ${
        navbartop ? "bg-transparent" : "bg-slate-900"
      }`}
    >
      {({ open }) => (
        <div className={` ${!open ? "bg-transparent" : "bg-slate-900"}`}>
          <div className=" mx-auto max-w-7xl p-2 md:px-6 lg:px-8">
            <div className="relative flex md:h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center md:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center md:items-stretch md:justify-start">
                <div className="flex justify-center md:w-auto flex-shrink-0 items-center w-full">
                  <Image
                    alt="logo"
                    height={10}
                    width={50}
                    src="/img/whiteDelTech.png"
                    draggable="false"
                  />
                </div>
                <div className="flex justify-center items-center w-full">
                  <div className="hidden md:ml-6 md:block">
                    <div className="flex space-x-4">
                      {navigation.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          className={classNames(
                            "text-gray-300  hover:text-white",
                            "rounded-md px-3 py-2 text-sm font-medium font-merriweather"
                          )}
                          aria-current={item.current ? "page" : undefined}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 md:static md:inset-auto md:ml-6 md:pr-0">
                {/* Profile dropdown */}
                {user ? (
                  <Menu as="div" className="relative ml-3">
                    <div>
                      <Menu.Button className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                        <span className="absolute -inset-1.5" />
                        <Image
                          width={8}
                          height={8}
                          className="h-8 w-8 rounded-full"
                          src={user?.user.image}
                          alt="avatar"
                        />
                      </Menu.Button>
                    </div>
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        {/* <Menu.Item>
                          {({ active }) => (
                            <a
                              href="/manage/blogs"
                              className={classNames(
                                active ? "bg-gray-100" : "",
                                "block px-4 py-2 text-sm text-gray-700"
                              )}
                            >
                              Manage(alpha)
                            </a>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="/blog/publish"
                              className={classNames(
                                active ? "bg-gray-100" : "",
                                "block px-4 py-2 text-sm text-gray-700"
                              )}
                            >
                              CreateBlog
                            </a>
                          )}
                        </Menu.Item> */}
                        <Menu.Item>
                          {({ active }) => (
                            <Link
                              href="/register"
                              className={classNames(
                                active ? "bg-gray-100" : "",
                                "block px-4 py-2 text-sm text-gray-700"
                              )}
                            >
                              Registration <br /> (opening soon)
                            </Link>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <Link
                              href="/api/auth/logout"
                              className={classNames(
                                active ? "bg-gray-100" : "",
                                "block px-4 py-2 text-sm text-gray-700"
                              )}
                            >
                              Sign out
                            </Link>
                          )}
                        </Menu.Item>
                      </Menu.Items>
                    </Transition>
                  </Menu>
                ) : (
                  <button onClick={() => signIn()}>
                    <div
                      className="md:py-3 md:px-4 py-2 px-2.5 w-fit duration-500 text-[#1341EC] border-2 border-[#1341EC] rounded-xl
            hover:bg-gradient-to-t from-[#1341EC] to-[#142e8a] hover:text-[#fff] "
                    >
                      Login
                    </div>
                  </button>
                )}
              </div>
            </div>
          </div>

          <Disclosure.Panel className="md:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "bg-gray-900 text-white"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white",
                    "block rounded-md px-3 py-2 text-base font-medium font-merriweather"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </div>
      )}
    </Disclosure>
  );
}
