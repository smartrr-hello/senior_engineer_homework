import { useEffect, useRef } from 'react';

export default function useInterval(callback: () => any, delay: number) {
  const savedCallback = useRef<() => void>();

  // Store the callback.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    function tick() {
      savedCallback.current && savedCallback.current();
    }

    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}