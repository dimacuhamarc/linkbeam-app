'use client';

import React, { useState } from 'react';
import { HeroCard } from '@/src/components/modules/heroCard';
import { LuArrowRight, LuGithub, LuInfo } from 'react-icons/lu';
import Link from 'next/link';
import TextHover from '../../styled/textHover';

const copy = {
  v2: {
    title: {
      default: 'Share',
      hovered: 'Beam',
    },
    description:
      "Shine a spotlight on your favorite links and share them effortlessly with LinkBeam. One scan, and you're connected.",
  },
};

export default function LandingPage() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className='flex flex-col bg-[#240E33]'>
      {/* Hero Section */}
      <section className="w-full flex justify-center items-center gap-20 py-48 px-36">
        {/* 3D Card */}
        <HeroCard />
        {/* Hero Copy */}
        <div className="flex flex-col gap-8 w-1/2">
          <h1
            className="text-5xl font-bold leading-none cursor-default"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(true)}
          >
            <span className="relative inline-block">
              <span
                className={`absolute transition-opacity duration-800 ${
                  isHovered ? 'opacity-0' : 'opacity-100'
                }`}
              >
                <span className="font-bold">{copy.v2.title.default}</span>
              </span>
              <span
                className={`absolute transition-opacity duration-500 ${
                  isHovered ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <span className="font-bold text-primary">
                  {copy.v2.title.hovered}
                </span>
              </span>
              <span className="invisible">{copy.v2.title.default}</span>
            </span>
            {'   '}Links, Simplified with{' '}
            <span
              className={`font-bold transition-colors duration-500 ${
                isHovered && 'text-indigo-500'
              }`}
            >
              Style
            </span>
            .
          </h1>
          <p className="text-xl font-semibold">{copy.v2.description}</p>
          <div className="flex gap-4">
            <Link href="/signup" className="bg-primary text-white text-lg px-4 py-2 rounded-md flex items-center justify-center gap-2">
              Get Started <LuArrowRight />
            </Link>
            <Link href="#features" className="text-lg px-4 py-2 rounded-md flex items-center justify-center gap-2 hover:underline hover:underline-offset-4">
              <LuInfo /> Learn More 
            </Link>
            <Link href='#' className='text-lg btn btn-circle btn-outline'>
              <LuGithub />
            </Link>
          </div>
        </div>
      </section>
      {/* Features Section */}
      <section id='features' className="flex flex-col gap-8 h-screen rounded-t-3xl px-28 py-20 bg-neutral-200">
        <div className='h-full rounded-t-3xl'>
          <h2 className="text-5xl font-bold text-t-dark">More Than <TextHover>Links</TextHover>, It&apos;s a <TextHover color='primary'>Connection</TextHover></h2>
          <p className="text-3xl font-regular text-t-dark leading-none w-5/6 text-pretty">
          With instant beaming, advanced tracking, and security features, LinkBeam ensures every link you share is a seamless connection.
          </p>
        </div>
      </section>
    </div>
  );
}

