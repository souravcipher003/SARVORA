import Lenis from 'lenis';
import { useEffect } from 'react';

const LenisScroll = () => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      smoothWheel: false,
      syncTouch: false,
      anchors: {
        offset: -120,
      },
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return null;
};

export default LenisScroll;