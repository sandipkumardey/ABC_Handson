'use client'

import { Github, Mail, Twitter } from 'lucide-react'
import { memo } from 'react'

const SocialLinks = memo(function SocialLinks() {
  return (
    <ul className="ml-1 mt-8 flex items-center gap-5 text-zinc-400" aria-label="Social media">
      <li className="transition hover:text-teal-300">
        <a
          href="https://github.com"
          target="_blank"
          rel="noreferrer"
          className="block hover:text-teal-300"
        >
          <span className="sr-only">GitHub</span>
          <Github className="h-6 w-6" />
        </a>
      </li>
      <li className="transition hover:text-teal-300">
        <a
          href="https://twitter.com"
          target="_blank"
          rel="noreferrer"
          className="block hover:text-teal-300"
        >
          <span className="sr-only">Twitter</span>
          <Twitter className="h-6 w-6" />
        </a>
      </li>
      <li className="transition hover:text-teal-300">
        <a href="mailto:email@example.com" className="block hover:text-teal-300">
          <span className="sr-only">Email</span>
          <Mail className="h-6 w-6" />
        </a>
      </li>
    </ul>
  )
})

export default SocialLinks

