'use client'

import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { memo } from 'react'

interface WorkItemProps {
  title: string
  description: string
  href: string
}

const WorkItem = memo(function WorkItem({ title, description, href }: WorkItemProps) {
  return (
    <li className="mb-12">
      <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
        <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-zinc-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
        <div className="z-10 sm:col-span-6">
          <h3>
            <Link
              href={href}
              className="inline-flex items-baseline font-medium leading-tight text-zinc-200 hover:text-teal-300 focus-visible:text-teal-300 group/link text-base"
              target="_blank"
              rel="noreferrer"
              aria-label={title}
            >
              <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
              <span>
                {title}{" "}
                <span className="inline-block">
                  <ArrowRight className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none" />
                </span>
              </span>
            </Link>
          </h3>
          <p className="mt-2 text-sm leading-normal text-zinc-400">
            {description}
          </p>
        </div>
      </div>
    </li>
  )
})

export default WorkItem

