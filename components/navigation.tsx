'use client'

import Link from "next/link"
import { memo } from "react"

const Navigation = memo(function Navigation() {
  return (
    <nav className="nav hidden lg:block">
      <ul className="mt-16 w-max">
        <li>
          <Link
            className="group flex items-center py-3 text-zinc-400 transition hover:text-teal-300"
            href="#about"
          >
            <span className="nav-indicator mr-4 h-px w-8 bg-zinc-600 transition-all group-hover:w-16 group-hover:bg-teal-300"></span>
            <span className="nav-text text-xs font-bold uppercase tracking-widest">
              About
            </span>
          </Link>
        </li>
        <li>
          <Link
            className="group flex items-center py-3 text-zinc-400 transition hover:text-teal-300"
            href="#work"
          >
            <span className="nav-indicator mr-4 h-px w-8 bg-zinc-600 transition-all group-hover:w-16 group-hover:bg-teal-300"></span>
            <span className="nav-text text-xs font-bold uppercase tracking-widest">
              Work
            </span>
          </Link>
        </li>
      </ul>
    </nav>
  )
})

export default Navigation

