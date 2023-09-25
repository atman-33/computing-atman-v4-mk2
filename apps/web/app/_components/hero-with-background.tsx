import { StaticImageData } from 'next/image';

interface HeroWithBackgroundProps {
  title: string;
  description: string;
  backgroundImage1: StaticImageData;
  backgroundImage2: StaticImageData;
}

export default function HeroWithBackground(props: HeroWithBackgroundProps) {
  return (
    <div
      className="top-0 flex items-center justify-center bg-cover bg-scroll bg-center"
      style={{
        backgroundImage: `url(${props.backgroundImage1.src})`,
        margin: '0 calc(50% - 50vw)',
        width: '100vw',
        height: '600px'
      }}
    >
      <div className="flex h-screen w-1/2 items-center justify-center">
        <div
          className="bg-cover bg-scroll bg-bottom"
          style={{
            backgroundImage: `url(${props.backgroundImage2.src})`,
            margin: '8rem calc(50% - 50vw) 0',
            width: '100vw',
            height: '300px'
          }}
        >
          <h1 className="tracking-tigh text-center text-4xl font-bold leading-snug text-white md:text-6xl lg:leading-tight">
            {props.title}
          </h1>
          <p className="py-2 text-center text-xl leading-normal text-gray-300 lg:text-xl xl:text-2xl">
            {props.description}
          </p>
        </div>
      </div>
    </div>
  );
}
