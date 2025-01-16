import Navigation from "@/components/navigation"
import SocialLinks from "@/components/social-links"
import WorkItem from "@/components/work-item"
import { Suspense } from "react"

export default function Page() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-teal-300 selection:text-black">
      <main className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
        <div className="lg:flex lg:justify-between lg:gap-4">
          <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
            <div>
              {/* Name - Represents the user's full name */}
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
                <a href="/">Sandip Kumar Dey</a>
              </h1>

              {/* Job Role - Displays the primary professional title of the user */}
              <h2 className="mt-3 text-lg font-medium tracking-tight text-zinc-400">
                Product Designer & Art Director
              </h2>

              {/* One-liner Bio - A short introduction or tagline about the user */}
              <p className="mt-4 max-w-xs leading-normal text-zinc-400">
                I craft intuitive digital experiences that merge beauty with functionality.
              </p>
              <Suspense fallback={<div className="h-32" />}>
                <Navigation />
              </Suspense>
            </div>
            <Suspense fallback={<div className="h-12" />}>
              <SocialLinks />
            </Suspense>
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
                {/* Descriptive Bio - A detailed explanation of the user's background and approach */}
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
                  <Suspense fallback={<div className="h-48" />}>
                    <WorkItem
                      title="Spotify Mobile App Redesign"
                      description="Reimagined the mobile experience with a focus on discovery and personalization."
                      href="#"
                    />
                    <WorkItem
                      title="Banking App UI/UX Design"
                      description="Created an intuitive banking experience focusing on simplicity and security."
                      href="#"
                    />
                  </Suspense>
                </ul>
              </div>
            </section>
          </main>
        </div>
      </main>
    </div>
  )
}

