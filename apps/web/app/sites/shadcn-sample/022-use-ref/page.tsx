'use client';

import { Button, Input } from '@libs/web/ui-shadcn';
import dynamic from 'next/dynamic';
import { Ref, useRef, useState } from 'react';

const Case1 = () => {
  const [value, setValue] = useState('');
  const inputRef = useRef<HTMLInputElement>();

  return (
    <div className="mt-8">
      <h3>Use case 1</h3>
      <Input
        type="text"
        value={value}
        ref={inputRef as Ref<HTMLInputElement>}
        onChange={(e) => setValue(e.target.value)}
      />

      <Button className="mt-4" onClick={() => inputRef.current && inputRef.current.focus()}>
        Focus Input
      </Button>
    </div>
  );
};

const Case2 = () => {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>();

  return (
    <div className="mt-8">
      <h3>Use case 2</h3>

      <video className="max-w-full" ref={videoRef as Ref<HTMLVideoElement>}>
        <source src="/static/movies/sample.mp4"></source>
      </video>

      <Button
        onClick={() => {
          if (playing) {
            videoRef.current && videoRef.current.pause();
          } else {
            videoRef.current && videoRef.current.play();
          }
          setPlaying((prev) => !prev);
        }}
      >
        {playing ? 'Pause' : 'Play'}
      </Button>
    </div>
  );
};

const NoSSRCase2 = dynamic(() => Promise.resolve(Case2), { ssr: false });

const Page = () => {
  return (
    <>
      <Case1 />
      <NoSSRCase2 />
    </>
  );
};

export default Page;
