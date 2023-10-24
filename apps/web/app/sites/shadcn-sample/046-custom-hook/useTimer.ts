import { useEffect, useLayoutEffect, useState } from 'react';

const useTimer = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    console.log('init');
    let intervalId: number | undefined = undefined;

    if (isRunning) {
      intervalId = window.setInterval(() => {
        console.log('timer start');
        setTime((prev) => prev + 1);
      }, 1000);
    }

    return () => {
      window.clearInterval(intervalId);
      console.log('end');
    };
  }, [isRunning]);

  useEffect(() => {
    // console.log('updated');
    document.title = 'counter: ' + time;
    window.localStorage.setItem('time-key', time.toString());

    return () => {
      // console.log('updated end');
    };
  }, [time]);

  useLayoutEffect(() => {
    const _time = parseInt(window.localStorage.getItem('time_key') ?? '');
    if (!isNaN(_time)) {
      setTime(_time);
    }
  }, []);

  const toggle = () => {
    setIsRunning((prev) => !prev);
  };

  const reset = () => {
    setIsRunning(false);
    setTime(0);
  };

  return {
    time,
    isRunning,
    toggle,
    reset
  };
};

export default useTimer;
