'use client';

import { Button, Input } from '@libs/web/ui-shadcn';
import { useRef, useState } from 'react';
import DynamicVideo from './_components/DynamicVideo';

const Case1 = () => {
  const [value, setValue] = useState('');
  const inputRef = useRef({} as HTMLInputElement);

  return (
    <div className="mt-8">
      <h3>Use case 1</h3>
      <Input type="text" value={value} ref={inputRef} onChange={(e) => setValue(e.target.value)} />

      <Button className="mt-4" onClick={() => inputRef.current.focus()}>
        Focus Input
      </Button>
    </div>
  );
};

const Case2 = () => {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef({} as HTMLVideoElement);

  return (
    <>
      <div className="mt-8">
        <h3>Use case 2</h3>

        <DynamicVideo src="/static/movies/sample.mp4" videoRef={videoRef} />

        <Button
          className="mt-2"
          onClick={() => {
            if (playing) {
              videoRef.current.pause();
            } else {
              videoRef.current.play();
            }
            setPlaying((prev) => !prev);
          }}
        >
          {playing ? 'Pause' : 'Play'}
        </Button>
      </div>
      <div className="mt-8">
        <h4>Note</h4>
        <li>
          Video playback involves dynamically loading components using the `dynamic` function.
        </li>
      </div>
    </>
  );
};

const Page = () => {
  return (
    <>
      <Case1 />
      <Case2 />
    </>
  );
};

export default Page;
