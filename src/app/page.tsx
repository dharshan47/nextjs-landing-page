"use client";

import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="min-h-screen w-full flex justify-center items-center bg-black px-4 ">
      <div className="text-center space-y-5   max-w-2xl z-10">
        {/* Top Badge */}
        <p className=" mt-20 lg:mt-0  py-1 px-3 text-sm sm:text-base text-white bg-zinc-900/40 backdrop-blur-sm font-light inline-block rounded-full">
          Join 7000+ Users
        </p>
        {/* Hero Titles */}
        <div className="space-y-3">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight bg-gradient-to-r from-pink-500 via-purple-400 to-blue-500 bg-clip-text text-transparent font-semibold">
            Modern UI Library
          </h1>
          <h3 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight bg-gradient-to-r from-purple-500 via-pink-400 to-blue-500 bg-clip-text text-transparent font-semibold">
            For Web Developers
          </h3>
        </div>
        {/* Description */}
        <p className="text-gray-400 text-base sm:text-lg leading-relaxed">
          100+
          <span className="bg-gradient-to-r from-rose-500 to-purple-500 bg-clip-text text-transparent font-semibold">
            {" "}
            free{" "}
          </span>
          and
          <span className="bg-gradient-to-r from-purple-500 to-rose-500 bg-clip-text text-transparent font-semibold">
            {" "}
            open-source{" "}
          </span>
          modern UI components made with React, TailwindCSS and Framer Motion.
          Perfect for easily designing modern web apps.
        </p>
        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button
            variant="default"
            size="lg"
            className="rounded-lg w-full sm:w-auto"
          >
            Browse Components
          </Button>
          <Button
            variant="secondary"
            size="lg"
            className="rounded-lg w-full sm:w-auto"
          >
            Unlock All Access
          </Button>
        </div>
      </div>
    </main>
  );
}
