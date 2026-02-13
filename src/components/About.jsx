import aboutImg from "../assets/about.jpg";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h2 className="my-20 text-center text-4xl">
        About
        <span className="text-neutral-500"> Me</span>
      </h2>
      <div className="flex flex-wrap">
        <motion.div 
        whileInView={{ opacity:1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1 }}
        className="w-full lg:w-1/2 lg:p-8">
          <div className="flex item-center justify-center">
            <img src={aboutImg} alt="" className="rounded-2xl" />
          </div>
        </motion.div>
        <motion.div 
        whileInView={{ opacity:1, x: 0 }}
        initial={{ opacity: 0, x: 100 }}
        transition={{ duration: 1 }}
        className="w-full lg:w-1/2">
          <div className="flex justify-center lg:justify-start">
            <p className="my-2 max-w-2xl py-6 ">I am a dedicated and versatile full stack developer with a passion for creating efficient, scalable, and AI-powered web applications. With 3 years of professional experience, I have mastered a comprehensive technology stack including React.js and TypeScript for front-end development, and Node.js, Express, and ASP.NET Core for robust back-end systems. I specialize in building intelligent applications and am proficient in deploying and managing cloud infrastructure on AWS using S3, EC2, and RDS services. My expertise extends to modern DevOps practices, managing complex relational data with PostgreSQL, and utilizing OutSystems for rapid application delivery. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality, production-ready solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.</p>
          </div>
        </motion.div>
      </div>
    </div>  
  );
};

export default About;
