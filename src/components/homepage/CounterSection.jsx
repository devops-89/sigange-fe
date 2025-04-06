'use client';

import { useEffect, useRef, useState } from 'react';

const counters = [
  { value: 1000, label: 'Clients' },
  { value: 10000, label: 'Completed Projects' },
  { value: 1000000, label: 'Designs' },
];

const Counter = ({ value, label }) => {
  const [count, setCount] = useState(0);
  const hasAnimated = useRef(false);
  const counterRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          startCounter();
          hasAnimated.current = true;
          observer.unobserve(counterRef.current); // Stop observing once triggered
        }
      },
      { threshold: 0.5 }
    );

    const current = counterRef.current;
    if (current) observer.observe(current);

    return () => {
      if (current) observer.unobserve(current);
    };
  }, [value]);

  const startCounter = () => {
    let start = 0;
    const end = value;
    const duration = 2000;
    const stepTime = 20;
    const increment = end / (duration / stepTime);

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, stepTime);
  };

  return (
    <div ref={counterRef} className="text-white text-center">
      <div className="text-4xl font-bold">
        {count.toLocaleString()}
        <span className="text-orange-500">+</span>
      </div>
      <div className="text-lg mt-1">{label}</div>
    </div>
  );
};

const CounterSection = () => {
  return (
    <section className="bg-black py-16">
      <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-white">
        {counters.map((counter, index) => (
          <div key={index} className="flex justify-center">
            <Counter value={counter.value} label={counter.label} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default CounterSection;
