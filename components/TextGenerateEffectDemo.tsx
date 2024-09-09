"use client";
// components/TextGenerateEffectDemo.tsx
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import Lenis from 'lenis';
import { useEffect } from 'react';
import SplitType from 'split-type';

gsap.registerPlugin(ScrollTrigger);

const TextGenerateEffectDemo = () => {
  useEffect(() => {
    // Initialize Lenis for smooth scrolling
    const lenis = new Lenis({ lerp: 0.07 });

    // Update ScrollTrigger on Lenis scroll
    lenis.on('scroll', ScrollTrigger.update);

    // Request Animation Frame for Lenis
    gsap.ticker.add((time) => lenis.raf(time * 1000));

    // GSAP animation setup
    const setupAnimations = () => {
      document.querySelectorAll('.reveal').forEach((text) => {
        // Type assertion for better TypeScript compatibility
        const element = text as HTMLElement;

        // Initialize SplitType with type `words`
        const splitText = new SplitType(element, { types: 'words' });

        // Find the closest section element
        const section = element.closest('section');
        if (section) {
          gsap.from(splitText.words, {
            opacity: 0,
            ease: 'none',
            stagger: 0.1, // Adjust stagger for better effect
            duration: 1, // Adjust duration
            scrollTrigger: {
              trigger: section as HTMLElement, // Ensure type is HTMLElement
              start: 'top top',
              end: () => `+=${window.innerHeight * 5}px`,
              scrub: true,
              pin: true,
            },
          });
        }
      });
    };

    setupAnimations();

    // Cleanup function to kill animations and ScrollTriggers
    return () => {
      gsap.killTweensOf('*');
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className="app">
      <section>
        <div className="container">
          <p className="reveal">
            In the vastness of space, celestial bodies dance in harmony. Stars twinkle, planets orbit, and nebulas paint vibrant hues. Black holes exert their gravitational might, while comets streak by, leaving stardust in their wake.
          </p>
        </div>
      </section>
    </div>
  );
};

export default TextGenerateEffectDemo;
