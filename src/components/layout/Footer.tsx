import React from 'react'
import {
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaTiktok,
} from 'react-icons/fa'

const socialLinks = [
  { 
    name: 'GitHub', 
    icon: <FaGithub />, 
    url: 'https://github.com/jdirua' 
  },
  // Add other social links here once available
  // {
  //   name: 'LinkedIn',
  //   icon: <FaLinkedin />,
  //   url: '#',
  // },
  // {
  //   name: 'Facebook',
  //   icon: <FaFacebook />,
  //   url: '#',
  // },
  // {
  //   name: 'Twitter',
  //   icon: <FaTwitter />,
  //   url: '#',
  // },
  // {
  //   name: 'Instagram',
  //   icon: <FaInstagram />,
  //   url: '#',
  // },
  // {
  //   name: 'Tiktok',
  //   icon: <FaTiktok />,
  //   url: '#',
  // },
]

const Footer = () => {
  return (
    <footer className='bg-deep-space py-8'>
      <div className='container mx-auto px-4 flex flex-col md:flex-row justify-between items-center'>
        <p className='text-gray text-sm mb-4 md:mb-0'>
          &copy; {new Date().getFullYear()} Bitwize Technologies. All rights
          reserved.
        </p>
        <div className='flex items-center space-x-4'>
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.url}
              target='_blank'
              rel='noopener noreferrer'
              className='text-gray hover:text-white transition-colors duration-300'
              aria-label={social.name}
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}

export default Footer
