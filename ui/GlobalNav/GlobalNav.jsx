'use client';

import { Fragment, useState, useEffect } from 'react';
import { Popover, Transition } from '@headlessui/react';
import { UserIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';
// import Link from 'next/link';
import {
  services,
  callsToAction,
  resources,
  recentPosts,
} from '@/lib/navigation';
import Logo from '@/ui/Logo';
import NavLink from './components/NavLink';
import NavButton from './components/NavButton';
import MobileMenu from './components/MobileMenu';
import Button from '@/ui/Button';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function GlobalNav() {
  const [active, setActive] = useState(false);

  const changeBackground = () => {
    // console.log(window.scrollY);
    if (window.scrollY >= 80) {
      setActive(true);
    } else {
      setActive(false);
    }
  };

  useEffect(() => {
    changeBackground();
    // adding the event when scroll change background
    window.addEventListener('scroll', changeBackground);
  }, []);

  return (
    <Popover
      className={clsx(
        'sticky top-0 z-20 w-full transition-all duration-150 ease-in',
        {
          'bg-white shadow-sm': active,
          'bg-transparent': !active,
        }
      )}
    >
      <div className="mx-auto max-w-screen-2xl px-4 sm:px-6">
        <div className="flex items-center justify-between py-3 xl:justify-start xl:space-x-4">
          <div className="flex justify-start lg:w-0 md:flex-[0.5] xl:flex-1">
            <Logo invert={active} />
          </div>
          <div className="-my-2 -mr-2 lg:hidden">
            <MobileMenu invert={active} />
          </div>
          <Popover.Group as="nav" className="hidden space-x-8 lg:flex">
            <NavLink label="Home" href="/" invert={active} />
            <Popover className="relative">
              {({ close }) => (
                <>
                  <NavButton label="Services" invert={active} />
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
                            <a
                              key={item.name}
                              href={item.href}
                              title={item.name}
                              className="-m-3 flex items-start rounded-md p-3 hover:bg-palette-background"
                              onClick={() => close()}
                            >
                              <div>
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
            <NavLink label="Pricing" href="/pricing" invert={active} />

            <Popover className="relative">
              {({ open, close }) => (
                <>
                  <NavButton label="More" invert={active} />

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
                      <div className="overflow-hidden rounded-xl shadow-lg ring-1 ring-black ring-opacity-5">
                        <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                          {resources.map((item) => (
                            <a
                              key={item.name}
                              href={item.href}
                              title={item.name}
                              className="-m-3 flex items-start rounded-md p-3 hover:bg-gray-50"
                            >
                              <div>
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
              className={clsx(
                'text-base font-medium transition-all duration-150 ease-in',
                {
                  'text-palette-primary-500 hover:text-palette-primary-900':
                    active,
                  'text-white hover:text-palette-primary-500': !active,
                }
              )}
            >
              (508) 315-9458
            </a>
          </Popover.Group>
          <div className="hidden items-center justify-end lg:flex lg:flex-1 lg:w-0">
            <a
              href="#"
              title="Client Login"
              className={clsx(
                'group inline-flex items-center rounded-md text-base font-medium hover:text-palette-secondary-500 transition-all duration-150 ease-in',
                {
                  'text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2':
                    active,
                  'text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2':
                    !active,
                }
              )}
            >
              <UserIcon
                className={classNames(
                  active ? 'text-gray-900' : 'text-white',
                  'h-5 w-5 group-hover:text-palette-secondary-500 transition-all duration-150 ease-in'
                )}
                aria-hidden="true"
              />
              <span className="ml-1">Client login</span>
            </a>
            {/* <a
              href="#"
              title="Book a move"
              className="ml-8 inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-palette-secondary-500 px-4 py-2 text-base font-medium text-black shadow-sm hover:bg-palette-secondary-900"
            >
              Book a move
            </a> */}
            <Button className="ml-8" color="secondary">
              Book a move
            </Button>
          </div>
        </div>
      </div>
    </Popover>
  );
}
