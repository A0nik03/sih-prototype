import React, { useEffect, useState } from 'react';
import { gsap } from 'gsap';
import './Loader.css'; // Import your custom CSS for styling

const Loader = ({ setLoading }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // GSAP animation for the h1 and h2 tags
    gsap.fromTo(
      '.oneline h1',
      { y: '-100%', opacity: 0 },
      { y: '0%', opacity: 1, duration: 1, ease: 'power3.out' }
    );
    gsap.fromTo(
      '.twoline h1',
      { y: '100%', opacity: 0 },
      { y: '0%', opacity: 1, duration: 1, delay: 0.5, ease: 'power3.out' }
    );
    gsap.fromTo(
      '.twoline h2',
      { y: '100%', opacity: 0 },
      { y: '0%', opacity: 1, duration: 1, delay: 1, ease: 'power3.out' }
    );
    gsap.fromTo(
      '.fourline h1',
      { y: '-100%', opacity: 0 },
      { y: '0%', opacity: 1, duration: 1, delay: 1.5, ease: 'power3.out' }
    );

    const interval = setInterval(() => {
      setCount((prevCount) => (prevCount < 100 ? prevCount + 1 : 100));
    }, 30);

    const timer = setTimeout(() => {
      setLoading(false);
      clearInterval(interval);
    }, 3500);

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, [setLoading]);

  return (
    <div className="loader">
      <div className="loaderchild">
        <div className="oneline">
          <h1>Order</h1>
          <h3 className="counting-num">{String(count).padStart(2, '0')}</h3>
          <h3>- 100</h3>
        </div>
        <div className="twoline">
          <h1>Farm Fresh</h1>
          <h2>To</h2>
        </div>
        <div className="fourline">
          <h1>Home</h1>
        </div>
      </div>
    </div>
  );
};

export default Loader;
