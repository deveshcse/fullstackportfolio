import React from 'react'

export const About = () => {
  return (
    <div id="about">
      <div className="m-2 p-2 flex flex-col gap-4 md:p-12">
      <div className="text-center mb-2">
        <h1 className="text-5xl font-bold inline-block relative">
          About
          <span className="block h-1 bg-blue-900 mt-1 w-full"></span>
        </h1>
      </div>
        <p className="text-left md:px-40 lg:px-60 text-xl text-gray-700 dark:text-gray-400 ">
          I am a front-end developer with a background in machine learning and
          full-stack development. Starting as a machine learning intern, I have
          now shifted my focus to front-end development, where I build
          responsive and dynamic web applications. I work with tools like React,
          TailwindCSS and Framer Motion to create clean, user-friendly
          interfaces.
        </p>
        <p className="text-left md:px-40 lg:px-60 text-xl text-gray-700 dark:text-gray-400">
          Though early in my career, I have contributed to real-world projects
          through internships, consistently expanding my technical skills. My
          experience in full-stack development allows me to effectively
          collaborate with back-end teams to ensure smooth integration across
          the entire system.
        </p>
        <p className="text-left md:px-40 lg:px-60 text-xl text-gray-700 dark:text-gray-400">
          I'm ready to take on projects with businesses of any size, bringing
          fresh ideas and a hands-on approach. Feel free to get in touch to
          discuss and advise on your project or development needs.
        </p>
      </div>
    </div>
  )
}

