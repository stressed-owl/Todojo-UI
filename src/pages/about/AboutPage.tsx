import React, { useEffect, useRef } from 'react'
import Typed from 'typed.js';

const About = () => {
  const aboutText = useRef(null);

  useEffect(() => {
    const typed = new Typed(aboutText.current, {
      strings: ['About Todojo'],
      typeSpeed: 50,
      showCursor: false
    });

    return () => {
      typed.destroy();
    }
  }, []);

  return (
    <div className='mt-[250px]'>
        <p>&#47;&#47; About</p>
        <span className='font-bold text-[54px]' ref={aboutText}></span>
    </div>
  )
}

export default About;