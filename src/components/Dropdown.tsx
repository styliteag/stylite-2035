// src/components/Dropdown.tsx
'use client';

import { Menu, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';
import { Fragment } from 'react';

interface DropdownProps {
  title: string;
  items: { href: string; title: string; description: string }[];
}

export default function Dropdown({ title, items }: DropdownProps) {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="inline-flex w-full justify-center items-center space-x-1 hover:text-teal-400 transition-colors">
          <span>{title}</span>
          <ChevronDownIcon className="h-4 w-4" />
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
        <Menu.Items className="absolute left-0 mt-2 w-96 origin-top-left rounded-md shadow-lg bg-zinc-800 ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="p-4 grid gap-4">
            {items.map((item) => (
              <Menu.Item key={item.href}>
                {({ active }) => (
                  <Link
                    href={item.href}
                    className={`${
                      active ? 'bg-zinc-700' : ''
                    } block p-3 rounded-md transition-colors`}
                  >
                    <p className="font-semibold text-teal-300">{item.title}</p>
                    <p className="text-sm text-zinc-400">{item.description}</p>
                  </Link>
                )}
              </Menu.Item>
            ))}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}