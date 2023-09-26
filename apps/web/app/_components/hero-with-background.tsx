/* eslint-disable @nx/enforce-module-boundaries */
import '@/styles/animation.css';

import Image from '@/components/image';
import { StaticImageData } from 'next/image';

interface HeroWithBackgroundProps {
  title: string;
  description: string;
  backgroundImage1: StaticImageData;
  backgroundImage2: StaticImageData;
  animationImage: StaticImageData;
}

export default function HeroWithBackground(props: HeroWithBackgroundProps) {
  return (
    <>
      <div
        className="relative top-0 flex items-center justify-center bg-cover bg-scroll bg-center"
        style={{
          backgroundImage: `url(${props.backgroundImage1.src})`,
          margin: '0 calc(50% - 50vw) 0',
          width: '100vw',
          height: '600px',
          filter: 'contrast(125%)'
        }}
      >
        <div
          className="loop_wrap absolute"
          style={{ margin: '0 calc(50% - 50vw)', width: '2000px', height: '30vw', bottom: '0px' }}
        >
          <Image src={props.animationImage.src} alt="clouds" width={0} height={0}></Image>
          <Image src={props.animationImage.src} alt="clouds" width={0} height={0}></Image>
        </div>

        <div className="flex w-1/2 items-center justify-center">
          <div
            className="items-center bg-cover bg-scroll bg-bottom"
            style={{
              backgroundImage: `url(${props.backgroundImage2.src})`,
              margin: '8rem calc(50% - 50vw) 0',
              width: '100vw',
              height: '400px'
            }}
          >
            <h1 className="mt-20 text-center text-4xl font-bold leading-snug tracking-tight text-white md:text-6xl lg:leading-tight">
              {props.title}
            </h1>
            <p className="py-2 text-center text-xl leading-normal text-gray-300 lg:text-xl xl:text-2xl">
              {props.description}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
