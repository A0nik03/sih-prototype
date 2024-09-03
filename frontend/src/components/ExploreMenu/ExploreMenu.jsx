import React, { useContext, useEffect, useRef } from 'react';
import './ExploreMenu.css';
import { StoreContext } from '../../Context/StoreContext';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ExploreMenu = ({ category, setCategory }) => {
  const { menu_list } = useContext(StoreContext);
  const exploreMenuRef = useRef(null);

  useEffect(() => {
    const exploreMenuItems = gsap.utils.toArray('.explore-menu-list-item');

    gsap.from(exploreMenuRef.current, {
      opacity: 0,
      y: 30,
      duration: 1.2,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: exploreMenuRef.current,
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none reverse',
      },
    });

    exploreMenuItems.forEach((item, index) => {
      gsap.from(item, {
        opacity: 0,
        scale: 0.8,
        y: 30,
        duration: 0.8,
        delay: index * 0.1,
        ease: 'expo.out',
        scrollTrigger: {
          trigger: item,
          start: 'top 90%',
          end: 'bottom 10%',
          toggleActions: 'play none none reverse',
        },
      });

      item.addEventListener('mouseenter', () => {
        gsap.to(item, { scale: 1.05, duration: 0.2 });
      });

      item.addEventListener('mouseleave', () => {
        gsap.to(item, { scale: 1, duration: 0.2 });
      });
    });
  }, []);

  return (
    <div className='explore-menu' id='explore-menu' ref={exploreMenuRef}>
      <h1>Explore Fresh Produce</h1>
      <p className='explore-menu-text'>
        Discover a diverse selection of fresh produce and goods directly from local farmers. Support sustainable agriculture and enjoy high-quality products straight from the source.
      </p>
      <div className='explore-menu-list'>
        {menu_list.map((item, index) => (
          <div
            onClick={() =>
              setCategory((prev) =>
                prev === item.menu_name ? 'All' : item.menu_name
              )
            }
            key={index}
            className='explore-menu-list-item'
          >
            <img
              src={item.menu_image}
              className={category === item.menu_name ? 'active' : ''}
              alt={item.menu_name}
            />
            <p>{item.menu_name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExploreMenu;
