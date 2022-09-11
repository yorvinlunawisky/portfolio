import React from 'react';
import {BsLinkedin} from 'react-icons/bs';
import {FaGithub} from 'react-icons/fa';
import {AiFillBehanceCircle} from 'react-icons/ai';

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="www.linkedin.com/in/yalw" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/yorvinlunawisky" target="_blank"><FaGithub/></a>
        <a href="https://www.behance.net/yorvinlunawisky" target="_blank"><AiFillBehanceCircle/></a>

    </div>
  )
}

export default HeaderSocials