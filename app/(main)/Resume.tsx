import Image from 'next/image'
import React from 'react'

import { BriefcaseIcon } from '~/assets'
import image1 from '~/assets/highlights/1.jpg'


export function Resume() {
  return (
    <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
      <h2 className="flex items-center text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <BriefcaseIcon className="h-5 w-5 flex-none" />
        <span className="ml-2">Exhibition</span>
      </h2>
      <ol className="mt-6 space-y-4">
          <li key="1" className="flex gap-4">
            <dl className="flex flex-auto flex-wrap gap-x-2">
              <dt className="sr-only">name</dt>
              <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
                我的咪咪🐱
              </dd>
            </dl>
          </li>
          <li className="flex gap-4">
            <Image src={image1} alt="cat" width="400" height="120" />
          </li>
      </ol>
    </div>
  )
}