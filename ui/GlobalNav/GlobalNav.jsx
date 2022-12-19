'use client';

import { useState, useEffect } from 'react';
import { Popover } from '@headlessui/react';
import { UserIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';
// import Link from 'next/link';
import { services, callsToAction, more, recentPosts } from '@/lib/navigation';
import Logo from '@/ui/Logo';
import NavLink from './components/NavLink';
import NavButton from './components/NavButton';
import MobileMenu from './components/MobileMenu';
import Button from '@/ui/Button';
import { AnimatePresence, motion } from 'framer-motion';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function GlobalNav() {
  const [active, setActive] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [hoveredItemIndex, setHoveredItemIndex] = useState(null);

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

  const setIndex = (i) => {
    setHoveredIndex(i);
  };

  return (
    <Popover
      className={clsx(
        'sticky top-0 z-20 w-full transition-colors duration-150 ease-in',
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
            <NavLink
              label="Home"
              href="/"
              invert={active}
              index={0}
              hoveredIndex={hoveredIndex}
              setIndex={setIndex}
            />
            <Popover className="relative">
              {({ close }) => (
                <>
                  <NavButton
                    label="Services"
                    invert={active}
                    index={1}
                    hoveredIndex={hoveredIndex}
                    setIndex={setIndex}
                  />
                  {/* <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1"
                  > */}
                  <Popover.Panel className="absolute z-10 -ml-4 mt-3 w-screen max-w-md transform px-2 sm:px-0 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2">
                    <div className="overflow-hidden rounded-2xl shadow-lg ring-1 ring-black ring-opacity-5">
                      <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                        {services.map((item, i) => (
                          <a
                            key={item.name}
                            href={item.href}
                            title={item.name}
                            className=" relative -m-3 flex items-start p-3 hover:delay-[0ms]"
                            // onClick={() => close()}
                            onMouseEnter={() => setHoveredItemIndex(i)}
                            onMouseLeave={() => setHoveredItemIndex(null)}
                          >
                            <AnimatePresence>
                              {hoveredItemIndex === i && (
                                <motion.span
                                  className="absolute inset-0 rounded-lg bg-palette-background"
                                  layoutId="hoverBackground"
                                  initial={{ opacity: 0 }}
                                  animate={{
                                    opacity: 1,
                                    transition: { duration: 0.15 },
                                  }}
                                  exit={{
                                    opacity: 0,
                                    transition: {
                                      duration: 0.15,
                                      delay: 0.2,
                                    },
                                  }}
                                />
                              )}
                            </AnimatePresence>
                            <div className="relative z-10">
                              <p className="font-medium text-gray-900">
                                {item.name}
                              </p>
                              <p className="mt-1 text-sm text-gray-400">
                                {item.description}
                              </p>
                            </div>
                          </a>
                        ))}
                      </div>
                      <div className="space-y-6 bg-palette-background px-5 py-5 sm:flex sm:space-y-0 sm:space-x-10 sm:px-8">
                        {callsToAction.map((item) => (
                          <div key={item.name} className="flow-root">
                            <a
                              href={item.href}
                              title={item.name}
                              className="-m-3 flex items-center p-3 font-medium text-gray-900"
                            >
                              <item.icon
                                className="h-6 w-6 flex-shrink-0 text-gray-700"
                                aria-hidden="true"
                              />
                              <span className="ml-3">{item.name}</span>
                            </a>
                          </div>
                        ))}
                      </div>
                    </div>
                  </Popover.Panel>
                  {/* </Transition> */}
                </>
              )}
            </Popover>
            <NavLink
              label="Pricing"
              href="/pricing"
              invert={active}
              index={2}
              hoveredIndex={hoveredIndex}
              setIndex={setIndex}
            />

            <Popover className="relative">
              {({ open, close }) => (
                <>
                  <NavButton
                    label="More"
                    invert={active}
                    index={3}
                    hoveredIndex={hoveredIndex}
                    setIndex={setIndex}
                  />

                  {/* <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1"
                  > */}
                  <Popover.Panel className="absolute left-1/2 z-10 mt-3 w-screen max-w-md -translate-x-1/2 transform px-2 sm:px-0">
                    <div className="overflow-hidden rounded-2xl shadow-lg ring-1 ring-black ring-opacity-5">
                      <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                        {more.map((item) => {
                          return (
                            <div key={item.name}>
                              {item.href ? (
                                <a
                                  href={item.href}
                                  title={item.name}
                                  className="-m-3 flex items-start rounded-xl p-3 hover:bg-gray-50 font-medium text-gray-900"
                                >
                                  {item.name}
                                </a>
                              ) : (
                                <p className="-m-3 flex items-start rounded-xl p-3 font-medium text-gray-400">
                                  {item.name}
                                </p>
                              )}
                            </div>
                          );
                        })}
                      </div>
                      <div className="bg-palette-background px-5 py-5 sm:px-8 sm:py-8">
                        <div>
                          <h3 className=" font-medium text-gray-500">
                            Recent Posts
                          </h3>
                          <ul className="mt-4 space-y-4">
                            {recentPosts.map((post) => (
                              <li key={post.id} className="truncate ">
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
                  {/* </Transition> */}
                </>
              )}
            </Popover>
            <a
              href="tel:(508)315-9458"
              title="(508) 315-9458"
              className={clsx(
                'font-medium transition-colors duration-150 ease-in text-lg',
                {
                  'text-palette-primary-500': active,
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
                'group px-3 py-2 inline-flex items-center rounded-lg font-medium transition-colors duration-150 ease-in',
                {
                  'text-gray-900 hover:bg-palette-background': active,
                  'text-white hover:bg-palette-background/20': !active,
                }
              )}
            >
              <UserIcon
                className={classNames(
                  active ? 'text-gray-900' : 'text-white',
                  'h-5 w-5'
                )}
                aria-hidden="true"
              />
              <span className="ml-1">Client login</span>
            </a>
            <Button
              href="/"
              className="ml-8 hidden xl:flex"
              color="secondary"
              title="Book a move"
            >
              Book a move
            </Button>
          </div>
        </div>
      </div>
    </Popover>
  );
}
