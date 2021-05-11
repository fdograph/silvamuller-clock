import { useCallback, useEffect, useLayoutEffect, useState } from 'react';

interface WindowSize {
  width: number;
  height: number;
}

export const useWindowSize = () => {
  const [size, setSize] = useState<WindowSize>({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const onResize = useCallback(() => {
    setSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  }, []);

  useLayoutEffect(() => {
    window.addEventListener('resize', onResize);
    return () => {
      window.removeEventListener('resize', onResize);
    };
  }, [onResize]);

  return size;
};

export const useTickerInSeconds = (interval: number) => {
  const [date, setDate] = useState<Date>(new Date());

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    const start = document.timeline.currentTime ?? 0;
    const frame = (time: number) => {
      const elapsed = time - start;
      const seconds = Math.round(elapsed / 1000);
      const targetNext = (seconds + interval) * 1000 + start;

      setDate(new Date());

      timeout = setTimeout(
        () => requestAnimationFrame(frame),
        targetNext - performance.now()
      );
    };

    frame(start);

    return () => clearTimeout(timeout);
  }, [interval]);

  return { date };
};
