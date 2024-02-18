import React from 'react'

import { BriefcaseIcon } from '~/assets'


export function X() {
  return (
    <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
      <h2 className="flex items-center text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <BriefcaseIcon className="h-5 w-5 flex-none" />
        <span className="ml-2">Tweet</span><br /><br />
      </h2>
      <a class="twitter-timeline" data-height="700" href="https://twitter.com/CyberBeeBee?ref_src=twsrc%5Etfw">Tweets by CyberBeeBee</a> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
    </div>
  )
}