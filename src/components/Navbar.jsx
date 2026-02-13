import { FaLinkedin, FaGithub, FaInstagram  } from 'react-icons/fa'
import { FaSquareXTwitter } from 'react-icons/fa6'
import { VscCode } from "react-icons/vsc";

const Navbar = () => {
  return <nav className='mb-20 flex items-center justify-between py-6'>
    <div className="flex flex-shrink-0 items-center">
        <VscCode size={40}/>
    </div>
    <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
      <a href="https://www.linkedin.com/in/ankit-malviya-3a0543219?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target='_blank'>
        <FaLinkedin />
      </a>
      
      <a href="https://www.instagram.com/ankit.malviya18?igsh=MTBlNGJrYjNuaTVjaw==" target='_blank'>
        <FaInstagram />
      </a>
     
    </div>
  </nav>
}

export default Navbar
