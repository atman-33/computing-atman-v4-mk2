import dynamic from 'next/dynamic';
import { Ref } from 'react';

const Video = ({ src, videoRef }: { src: string; videoRef: Ref<HTMLVideoElement> }) => {
  return (
    <video className="max-w-full" ref={videoRef}>
      <source src={src} />
    </video>
  );
};

const DynamicVideoLoader = ({
  src,
  videoRef
}: {
  src: string;
  videoRef: Ref<HTMLVideoElement>;
}) => {
  return <Video src={src} videoRef={videoRef} />;
};

const DynamicVideo = dynamic(() => Promise.resolve(DynamicVideoLoader), {
  ssr: false,
  loading: () => <div>Loading...</div>
});

export default DynamicVideo;
