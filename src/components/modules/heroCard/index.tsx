'use client';

import Image from 'next/image';
import React from 'react';
import {
  CardBody,
  CardContainer,
  CardItem,
} from '@/src/components/aceternity/3d-card';
import linkItemDemo from '@/src/assets/link-item-demo.png';

export function HeroCard() {
  return (
    <CardContainer className="inter-var">
      <CardBody className="relative group/card hover:shadow-2xl border-black/[0.1] w-auto sm:w-[30rem] h-auto border rounded-[24px]">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white"
        >
          <Image src={linkItemDemo} alt="hero-image" width={500} height={679} />
        </CardItem>
      </CardBody>
    </CardContainer>
  );
}
