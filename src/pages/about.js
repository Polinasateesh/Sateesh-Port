import AnimatedText from '@/Components/AnimatedText';
import Head from 'next/head';
import React from 'react';
import Layout from '@/Components/Layout';
import Image from 'next/image';
import MyProfile1 from '../../public/images/profile/profiewithsuite.jpg';
import MyProfile2 from '../../public/images/profile/MyProfile2.png';
import Skills from '@/Components/Skills';
import Education from '@/Components/Education';
import Experience from '@/Components/Experience';
import TransitionEffect from '@/Components/TransitionEffect';
const about = () => {
  return (
    <>
      <Head>
        <title>Sateesh | About Page </title>
        <meta name="description" content="" />
      </Head>
      <TransitionEffect />
      <main className="flex w-full flex-col items-center justify-center dark:text-light">
        <Layout className="pt-16">
          <AnimatedText
            text="Passion Fuels Purpose!"
            className="mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8"
          />
          <div className="grid w-full grid-cols-6 gap-16 sm:gap-8">
            <div className="col-span-3 flex flex-col items-start justify-start md:order-2 md:col-span-8">
              <h2 className="mb-2 text-sm font-bold uppercase text-dark/75 dark:text-light/75">
                About Me
              </h2>
              <p className="font-small">
              Greetings! I am Sateesh Polina, a passionate and results-driven full-stack developer with a keen eye for detail and a commitment to delivering high-quality software solutions. With a solid background in both front-end and back-end technologies, I bring a holistic approach to web development.
              </p>
              <h2 className="mb-2 mt-2 text-sm font-bold uppercase text-dark/75 dark:text-light/75">
              Technical Proficiency
              </h2>
              <p className="font-small">
              I thrive in creating seamless, user-friendly interfaces using cutting-edge front-end technologies such as React.js. My expertise extends to crafting robust back-end systems with Node.js, ensuring the functionality, security, and scalability of web applications. I am well-versed in database management, utilizing SQL and NoSQL databases like MongoDB to optimize data storage and retrieval.
              </p>
              <h2 className="mb-2 mt-2 text-sm font-bold uppercase text-dark/75 dark:text-light/75">
              Problem Solver and Innovator
              </h2>
              <p className="font-small">
              I am passionate about solving complex problems through innovative and efficient coding practices. My experience in developing and maintaining RESTful APIs, microservices, and serverless architectures empowers me to build scalable solutions that stand the test of time.
              </p>
            </div>
            <div className="col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8 dark:bg-dark dark:border-light md:order-1 md:col-span-8 ">
              <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light" />
              <Image
                src={MyProfile1}
                alt=""
                className="w-full h-auto rounded-2xl"
                priority
                sizes="(max-width:768px) 100vw,
                (max-width:1200px) 50vw, 33vw"
              />
            </div>
          </div>
          <Skills />
          <Education />
          <Experience/>
        </Layout>
      </main>
    </>
  );
};

export default about;
