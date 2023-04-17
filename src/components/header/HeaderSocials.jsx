import React from 'react';
import {BsLinkedin} from 'react-icons/bs';
import {FaGithub} from 'react-icons/fa';
import {AiFillBehanceCircle} from 'react-icons/ai';

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https:linkedin.com/in/yorvinluna" target="_blank" rel="noreferrer"><BsLinkedin/></a>
        <a href="https://github.com/yorvinlunawisky" target="_blank"><FaGithub/></a>
        <a href="https://www.behance.net/yorvinlunawisky" target="_blank" rel="noreferrer"><AiFillBehanceCircle/></a>

    </div>
  )
}

export default HeaderSocials