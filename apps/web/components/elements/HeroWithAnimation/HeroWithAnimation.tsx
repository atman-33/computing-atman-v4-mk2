/* eslint-disable @nx/enforce-module-boundaries */
import './HeroWithAnimation.css';

import Image from '@/components/elements/Image';
import { StaticImageData } from 'next/image';

interface Props {
  title: string;
  description: string;
  backgroundImage1: StaticImageData;
  backgroundImage2?: StaticImageData;
  animationImage: StaticImageData;
}

export default function HeroWithAnimation(props: Props) {
  return (
    <>
      <div
        className="relative top-0 flex h-60 items-center justify-center bg-cover bg-scroll bg-center md:h-max"
        style={{
          backgroundImage: `url(${props.backgroundImage1.src})`,
          margin: '0 calc(50% - 50vw) 0',
          width: '100vw',
          filter: 'contrast(80%)'
        }}
      >
        <div
          className="loop_wrap absolute"
          style={{ margin: '0 calc(50% - 50vw)', width: '100vw', height: '30vw', bottom: '0px' }}
        >
          <Image src={props.animationImage.src} alt="clouds" width={0} height={0}></Image>
          <Image src={props.animationImage.src} alt="clouds" width={0} height={0}></Image>
        </div>

        <div className="flex w-1/2 items-center justify-center">
          <div
            className="h-96 items-center bg-cover bg-scroll bg-bottom"
            style={{
              backgroundImage: `url(${props.backgroundImage2?.src})`,
              margin: '4rem calc(50% - 50vw) 0',
              width: '100vw'
            }}
          >
            <h1
              className="mt-20 text-center text-4xl font-bold leading-snug tracking-tight text-white md:text-6xl lg:leading-tight"
              style={{
                textShadow: '2px 2px 4px darkgray'
              }}
            >
              {props.title}
            </h1>
            <p
              className="py-2 text-center text-xl leading-normal text-white lg:text-xl xl:text-2xl"
              style={{
                textShadow: '2px 2px 4px darkgray'
              }}
            >
              {props.description}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
