import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaGithubSquare } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";

const Contact = () => {
  return (
    <>
     <div className="container contact" id='Contact'>
        <h1>Contact With Me</h1>
        <div className="contact-icon"
        data-aos="zoom-in-up" data-aos-duration="1000"
        >
           <a href='https://www.instagram.com/p.r.o.t.e.c.t.o.r_a.m.a.r/' className="items">
                <FaInstagram className='icons'/>
            </a>
            <a href='https://www.facebook.com/gagandeep.dhillon.79677' className="items">
            <CiFacebook className='icons'/>
            </a>
            <a href='https://www.linkedin.com/in/amarpal-singh-98aaa2229/' className="items">
            <CiLinkedin className='icons'/>
            </a>
            <a href='https://x.com/Amarpal24530123' className="items">
                <FaSquareXTwitter className='icons'/>
            </a>
            <a href='https://github.com/dashboard' className="items">
                <FaGithubSquare className='icons'/>
            </a>
            <a href='mailto:amarpals203@gmail.com' className="items">
                <BiLogoGmail className='icons'/>
            </a>
        </div>
     </div>
    </>
  )
}

export default Contact
