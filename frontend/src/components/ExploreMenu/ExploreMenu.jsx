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
      y: 50,
      duration: 1.5,
      ease: 'power3.out',
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
        scale: 0.5,
        y: 50,
        duration: 1,
        delay: index * 0.2,
        ease: 'back.out(1.7)',
        scrollTrigger: {
          trigger: item,
          start: 'top 90%',
          end: 'bottom 10%',
          toggleActions: 'play none none reverse',
        },
      });

      item.addEventListener('mouseenter', () => {
        gsap.to(item, { scale: 1.1, duration: 0.3 });
      });

      item.addEventListener('mouseleave', () => {
        gsap.to(item, { scale: 1, duration: 0.3 });
      });
    });
  }, []);

  return (
    <div className='explore-menu' id='explore-menu' ref={exploreMenuRef}>
      <h1>Explore our menu</h1>
      <p className='explore-menu-text'>
        Choose from a diverse menu featuring a delectable array of dishes. Our mission is to satisfy your cravings and elevate your dining experience, one delicious meal at a time.
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
              alt=''
            />
            <p>{item.menu_name}</p>
          </div>
        ))}
      </div>
      <hr />
    </div>
  );
};

export default ExploreMenu;
``