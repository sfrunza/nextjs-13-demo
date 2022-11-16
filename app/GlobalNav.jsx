'use client';

import { Fragment, useState, useEffect } from 'react';
import { Popover, Transition } from '@headlessui/react';
import { XMarkIcon, UserIcon } from '@heroicons/react/24/outline';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import clsx from 'clsx';
import Link from 'next/link';
import Image from 'next/image';
import {
  services,
  callsToAction,
  resources,
  recentPosts,
} from '@/lib/navigation';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

function MenuIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M5 6h14M5 18h14M5 12h14"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        width={20}
      />
    </svg>
  );
}

export default function GlobalNav() {
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', changeNavColor);
    }

    return () => {
      window.removeEventListener('scroll', changeNavColor);
    };
  }, []);

  const NavLink = ({ label, href }) => {
    return (
      <Link
        href={href}
        className={clsx('text-base font-medium', {
          'text-gray-500 hover:text-gray-900': active,
          'text-white hover:text-gray-500': !active,
        })}
        title={label}
      >
        {label}
      </Link>
    );
  };

  const NavButton = ({ label }) => {
    return (
      <Popover.Button
        className={clsx(
          'group inline-flex items-center rounded-md text-base font-medium',
          {
            'text-gray-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2':
              active,
            'text-white hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2':
              !active,
          }
        )}
      >
        <span>{label}</span>
        <ChevronDownIcon
          className={classNames(
            active
              ? 'text-gray-500 group-hover:text-gray-900'
              : 'text-white group-hover:text-gray-500',
            'ml-2 h-5 w-5'
          )}
          aria-hidden="true"
        />
      </Popover.Button>
    );
  };

  const changeNavColor = () => {
    if (typeof window !== 'undefined' && window.scrollY >= 80) {
      setActive(true);
    } else {
      setActive(false);
    }
  };

  return (
    <Popover
      className={clsx('sticky top-0 z-20 w-full', {
        'bg-white border-b': active,
        'bg-transparent': !active,
      })}
    >
      <div className="mx-auto max-w-screen-2xl px-4 sm:px-6">
        <div className="flex items-center justify-between py-3 xl:justify-start xl:space-x-4">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <a href="#" title="Phoenix Moving">
              <span className="sr-only">Phoenix Moving</span>
              <Image
                src={active ? '/logos/logo.png' : '/logos/logo-white.png'}
                alt="Phoenix Moving Logo"
                width={150}
                height={150}
                priority
                className="h-8 w-auto sm:h-10"
                title="Phoenix Moving"
              />
            </a>
          </div>
          <div className="-my-2 -mr-2 xl:hidden">
            <Popover.Button
              className={clsx(
                'inline-flex items-center justify-center rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500',
                {
                  'text-gray-400 hover:bg-gray-100 hover:text-gray-500 stroke-gray-900':
                    active,
                  'hover:text-gray-500 text-white bg-transparent stroke-white':
                    !active,
                }
              )}
            >
              <span className="sr-only">Open menu</span>
              {/* <Bars3Icon className="h-6 w-6" aria-hidden="true" /> */}
              <MenuIcon className="h-6 w-6" />
            </Popover.Button>
          </div>
          <Popover.Group as="nav" className="hidden space-x-10 xl:flex">
            <NavLink label="Home" href="/" />
            <Popover className="relative">
              {({ open }) => (
                <>
                  <NavButton label="Services" />
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1"
                  >
                    <Popover.Panel className="absolute z-10 -ml-4 mt-3 w-screen max-w-md transform px-2 sm:px-0 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2">
                      <div className="overflow-hidden rounded-xl shadow-lg ring-1 ring-black ring-opacity-5">
                        <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                          {services.map((item) => (
                            <Link
                              key={item.name}
                              href={item.href}
                              title={item.name}
                              className="-m-3 flex items-start rounded-md p-3 hover:bg-gray-50"
                            >
                              {/* <item.icon
                                className="h-6 w-6 flex-shrink-0 text-indigo-600"
                                aria-hidden="true"
                              /> */}
                              <div className="ml-4">
                                <p className="text-base font-medium text-gray-900">
                                  {item.name}
                                </p>
                                <p className="mt-1 text-sm text-gray-500">
                                  {item.description}
                                </p>
                              </div>
                            </Link>
                          ))}
                        </div>
                        <div className="space-y-6 bg-gray-50 px-5 py-5 sm:flex sm:space-y-0 sm:space-x-10 sm:px-8">
                          {callsToAction.map((item) => (
                            <div key={item.name} className="flow-root">
                              <a
                                href={item.href}
                                title={item.name}
                                className="-m-3 flex items-center rounded-md p-3 text-base font-medium text-gray-900 hover:bg-gray-100"
                              >
                                <item.icon
                                  className="h-6 w-6 flex-shrink-0 text-gray-400"
                                  aria-hidden="true"
                                />
                                <span className="ml-3">{item.name}</span>
                              </a>
                            </div>
                          ))}
                        </div>
                      </div>
                    </Popover.Panel>
                  </Transition>
                </>
              )}
            </Popover>
            <NavLink label="About" href="#" />
            <NavLink label="Pricing" href="/pricing" />
            {/* <NavLink label="FAQ" href="#" /> */}

            <Popover className="relative">
              {({ open }) => (
                <>
                  <NavButton label="More" />

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1"
                  >
                    <Popover.Panel className="absolute left-1/2 z-10 mt-3 w-screen max-w-md -translate-x-1/2 transform px-2 sm:px-0">
                      <div className="overflow-hidden rounded-md shadow-lg ring-1 ring-black ring-opacity-5">
                        <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                          {resources.map((item) => (
                            <a
                              key={item.name}
                              href={item.href}
                              title={item.name}
                              className="-m-3 flex items-start rounded-md p-3 hover:bg-gray-50"
                            >
                              <item.icon
                                className="h-6 w-6 flex-shrink-0 text-indigo-600"
                                aria-hidden="true"
                              />
                              <div className="ml-4">
                                <p className="text-base font-medium text-gray-900">
                                  {item.name}
                                </p>
                                <p className="mt-1 text-sm text-gray-500">
                                  {item.description}
                                </p>
                              </div>
                            </a>
                          ))}
                        </div>
                        <div className="bg-gray-50 px-5 py-5 sm:px-8 sm:py-8">
                          <div>
                            <h3 className="text-base font-medium text-gray-500">
                              Recent Posts
                            </h3>
                            <ul role="list" className="mt-4 space-y-4">
                              {recentPosts.map((post) => (
                                <li
                                  key={post.id}
                                  className="truncate text-base"
                                >
                                  <a
                                    href={post.href}
                                    title={post.name}
                                    className="font-medium text-gray-900 hover:text-gray-700"
                                  >
                                    {post.name}
                                  </a>
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div className="mt-5 text-sm">
                            <a
                              href="#"
                              title="View all posts"
                              className="font-medium text-indigo-600 hover:text-indigo-500"
                            >
                              View all posts
                              <span aria-hidden="true"> &rarr;</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </Popover.Panel>
                  </Transition>
                </>
              )}
            </Popover>
            <a
              href="tel:(508) 315-9458"
              title="(508) 315-9458"
              className={clsx('text-base font-medium hover:underline', {
                'text-palette-primary-500 hover:text-palette-primary-900':
                  active,
                'text-white hover:text-gray-500': !active,
              })}
            >
              (508) 315-9458
            </a>
          </Popover.Group>
          <div className="hidden items-center justify-end xl:flex xl:flex-1 lg:w-0">
            <a
              href="#"
              title="Client Login"
              //   className="-m-3 flex items-center rounded-md p-3 text-base font-medium text-gray-900 hover:bg-gray-100"
              className={clsx(
                'group inline-flex items-center rounded-md text-base font-medium',
                {
                  'text-gray-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2':
                    active,
                  'text-white hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2':
                    !active,
                }
              )}
              //   className="inline-flex items-center whitespace-nowrap rounded-md border border-transparent bg-gray-600 px-4 py-2 text-base font-medium text-white hover:bg-gray-700"
            >
              <UserIcon
                className={classNames(
                  active
                    ? 'text-gray-500 group-hover:text-gray-900'
                    : 'text-white group-hover:text-gray-500',
                  'h-5 w-5'
                )}
                aria-hidden="true"
              />
              <span className="ml-1">Client login</span>
            </a>
            <a
              href="#"
              title="Book a move"
              className="ml-8 inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-palette-secondary-500 px-4 py-2 text-base font-medium text-black shadow-sm hover:bg-palette-secondary-900"
            >
              Book a move
            </a>
          </div>
        </div>
      </div>

      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel
          focus
          className="absolute inset-x-0 top-0 origin-top-right transform p-2 transition xl:hidden"
        >
          <div className="divide-y-2 divide-gray-50 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5">
            <div className="px-5 pt-5 pb-6">
              <div className="flex items-center justify-between">
                <div>
                  {/* <img
                    className="h-8 w-auto sm:h-10"
                    src="/logos/logo.png"
                    alt="Phoenix Moving Logo"
                  /> */}
                  <Image
                    src="/logos/logo.png"
                    alt="Phoenix Moving Logo"
                    width={150}
                    height={150}
                    priority
                    className="h-8 w-auto sm:h-10"
                    title="Phoenix Moving Logo"
                  />
                </div>
                <div className="-mr-2">
                  <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-900 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="mt-6">
                <nav className="grid gap-y-8">
                  {services.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      title={item.name}
                      className="-m-3 flex items-center rounded-md p-3 hover:bg-gray-50"
                    >
                      <item.icon
                        className="h-6 w-6 flex-shrink-0 text-indigo-600"
                        aria-hidden="true"
                      />
                      <span className="ml-3 text-base font-medium text-gray-900">
                        {item.name}
                      </span>
                    </a>
                  ))}
                </nav>
              </div>
            </div>
            <div className="space-y-6 py-6 px-5">
              <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                <a
                  href="#"
                  title="Pricing"
                  className="text-base font-medium text-gray-900 hover:text-gray-700"
                >
                  Pricing
                </a>

                <a
                  href="#"
                  title="Docs"
                  className="text-base font-medium text-gray-900 hover:text-gray-700"
                >
                  Docs
                </a>
                {resources.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    title={item.name}
                    className="text-base font-medium text-gray-900 hover:text-gray-700"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
              <div>
                <a
                  href="#"
                  title="Book a move"
                  className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                >
                  Book a move
                </a>
                <p className="mt-6 text-center text-base font-medium text-gray-500">
                  Existing customer?{' '}
                  <a
                    href="#"
                    title="Sign in"
                    className="text-indigo-600 hover:text-indigo-500"
                  >
                    Sign in
                  </a>
                </p>
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}
