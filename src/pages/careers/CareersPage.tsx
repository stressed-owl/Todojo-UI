import React, { useEffect, useRef } from 'react'
import Typed from 'typed.js';

const CareersPage = () => {
  const careersText = useRef(null);

  useEffect(() => {
    const typed = new Typed(careersText.current, {
      strings: ['Join Todojo'],
      typeSpeed: 50,
      showCursor: false
    });

    return () => {
      typed.destroy();
    }
  }, []);

  return (
    <div className='mt-[250px]'>
        <p>&#47;&#47; Careers</p>
        <span className='font-bold text-[54px]' ref={careersText}></span>
    </div>
  )
}

export default CareersPage