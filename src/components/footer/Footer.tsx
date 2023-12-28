import React from 'react'
import Logo from '../common/logo/Logo';

const Footer = () => {
  return (
    <footer className='shadow-xl rounded-b-3xl'>
        <div className='flex flex-col items-center justify-center p-8'>
            <Logo />
            <blockquote>
                <p className='italic mt-5'>There's no light without dark. There's no joy without pain</p>
            </blockquote>
            <p className='text-center mt-12'>© 2023 Todojo Company. All rights reserved. <br/>
            Reproduction or distribution without permission is strictly prohibited. <br/>
            Unauthorized copying or reproduction of this material is prohibited. <br/>
            </p>
        </div>
    </footer>
  )
}

export default Footer;