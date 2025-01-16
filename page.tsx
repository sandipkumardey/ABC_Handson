import Link from "next/link"
import { ArrowRight, Github, Mail, Twitter } from 'lucide-react'

export default function Page() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-teal-300 selection:text-black">
      <main className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
        <div className="lg:flex lg:justify-between lg:gap-4">
          <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
            <div>
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
                <a href="/">Sarah Chen</a>
              </h1>
              <h2 className="mt-3 text-lg font-medium tracking-tight text-zinc-400">
                Product Designer & Art Director
              </h2>
              <p className="mt-4 max-w-xs leading-normal text-zinc-400">
                I craft intuitive digital experiences that merge beauty with functionality.
              </p>
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
            </div>
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
          </header>

          <main className="pt-24 lg:w-1/2 lg:py-24">
            <section
              id="about"
              className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
              aria-label="About me"
            >
              <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-black/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 className="text-sm font-bold uppercase tracking-widest text-zinc-400 lg:sr-only">
                  About
                </h2>
              </div>
              <div>
                <p className="mb-4 text-zinc-400">
                  For the past 8 years, I've been crafting digital experiences that bridge the gap between
                  user needs and business goals. My approach combines strategic thinking with pixel-perfect
                  execution.
                </p>
              </div>
            </section>
            <section
              id="work"
              className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
              aria-label="Selected work"
            >
              <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-black/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 className="text-sm font-bold uppercase tracking-widest text-zinc-400 lg:sr-only">
                  Work
                </h2>
              </div>
              <div>
                <ul className="group/list">
                  <li className="mb-12">
                    <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                      <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-zinc-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                      <div className="z-10 sm:col-span-6">
                        <h3>
                          <Link
                            href="#"
                            className="inline-flex items-baseline font-medium leading-tight text-zinc-200 hover:text-teal-300 focus-visible:text-teal-300 group/link text-base"
                            target="_blank"
                            rel="noreferrer"
                            aria-label="Spotify Mobile App Redesign"
                          >
                            <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                            <span>
                              Spotify Mobile App Redesign{" "}
                              <span className="inline-block">
                                <ArrowRight className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none" />
                              </span>
                            </span>
                          </Link>
                        </h3>
                        <p className="mt-2 text-sm leading-normal text-zinc-400">
                          Reimagined the mobile experience with a focus on discovery and personalization.
                        </p>
                      </div>
                    </div>
                  </li>
                  <li className="mb-12">
                    <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                      <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-zinc-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                      <div className="z-10 sm:col-span-6">
                        <h3>
                          <Link
                            href="#"
                            className="inline-flex items-baseline font-medium leading-tight text-zinc-200 hover:text-teal-300 focus-visible:text-teal-300 group/link text-base"
                            target="_blank"
                            rel="noreferrer"
                            aria-label="Banking App UI/UX Design"
                          >
                            <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                            <span>
                              Banking App UI/UX Design{" "}
                              <span className="inline-block">
                                <ArrowRight className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none" />
                              </span>
                            </span>
                          </Link>
                        </h3>
                        <p className="mt-2 text-sm leading-normal text-zinc-400">
                          Created an intuitive banking experience focusing on simplicity and security.
                        </p>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </section>
          </main>
        </div>
      </main>
    </div>
  )
}

