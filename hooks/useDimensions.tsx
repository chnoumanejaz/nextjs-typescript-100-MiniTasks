import { useEffect, useRef } from 'react';

export const useDimensions = (ref: any) => {
  const dimensions = useRef({ width: 0, height: 0 });

  useEffect(() => {
    if (ref.current) {
      dimensions.current.height = ref.current.offsetHeight;
      dimensions.current.width = ref.current.offsetWidth;
    }
  }, [ref]);

  return dimensions.current;
};
