import { Linkedin, Phone, Github, Mail} from 'lucide-react';
import { resumePath } from '@/utils/constants';
export const Home = () => {
  return (
    <div id="home" className=" grid md:grid-cols-2 gap-2 mt-8 p-1 md:px-12 items-center justify-between">
      <div className=" m-2 p-2 flex flex-col justify-center">
        <h3 className="font-poppins text-gray-600 text-lg mt-5">
          Hello, my name is
        </h3>
        <h2 className="font-semibold text-2xl text-gray-600">Devesh Mishra</h2>
        <h1 className="text-5xl dark:text-gray-400">
          I'm a frontend developer, with background in AI/ML and full stack development of web
          applications using React, Next.js, Node.js & more
        </h1>

        <a
          href={resumePath}
          download="DeveshMishra-Resume"
          className="block my-3 p-4 border dark:bg-slate-800 border-gray-900 rounded-lg bg-gray-100 font-semibold text-center"
        >
          <button>
            Download Resume
          </button>
        </a>

        <div className="flex justify-between items-center flex-wrap md:gap-5  p-1">
          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/deveshcse/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="p-1 flex flex-col items-center font-semibold">
              <Linkedin size={34} color="#0077B5" /> <span> LinkedIn </span>
            </button>
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/deveshcse/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="p-1 flex flex-col items-center font-semibold">
              <Github size={34} color="#333" /> <span>Github</span>
            </button>
          </a>

          {/* Gmail */}
          <a href="mailto:d.mishra56603@gmail.com">
            <button className="p-1 flex flex-col items-center font-semibold">
              <Mail size={34} color="#EA4335" /> <span>Email</span>
            </button>
          </a>


          {/* Phone */}
          <a href="tel:+91-7380406929">
            <button className="flex flex-col items-center font-semibold p-1">
              <Phone size={36} color="#075E54" /> <span>Phone</span>
            </button>
          </a>
        </div>
      </div>
      <div className="rounded-full md:p-12 flex items-center justify-center">
          <img
            className="rounded-full  md:w-[400px] md:h-[400px]"
            src='/DeveshProfileImage.jpeg'
            alt="ProfileImage"
          ></img>

      </div>
    </div>  )
}

