import React from 'react';
import Head from 'next/head';
import Layout from '@/Components/Layout';
import AnimatedText from '@/Components/AnimatedText';
import Link from 'next/link';
import Image from 'next/image';
import { GithubIcon } from '@/Components/Icons';
import BMT from '../../public/images/projects/bmt_project.jpg.png';
import FAST from '../../public/images/projects/FAST_project.png';
import FoodMunch from '../../public/images/projects/foodmunch_project.png';
import { motion } from 'framer-motion';
import TransitionEffect from '@/Components/TransitionEffect';

const FramerImage = motion(Image);

const FeaturedProject = ({ type, title, summary, img, link, github }) => {
  return (
    <article className="w-full flex items-center justify-between rounded-3xl border border-solid border-dark p-12 bg-light shadow-2xl relative rounded-br-2xl dark:bg-dark dark:border-light lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4">
      <div
        className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark rounded-br-3xl dark:bg-light xs:-right-2 sm:h-[102%]xs:w-full xs:rounded-[1.5rem]
      "
      />
      <Link
        href={link}
        target="_blank"
        className="w-1/2 h-full cursor-pointer overflow-hidden rounded-lg lg:w-full"
      >
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-auto"
          layout="responsive"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          priority
          sizes="(max-width:768px) 100vw,
                (max-width:1200px) 50vw, 50vw"
        />
      </Link>
      <div className="w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6">
        <span className="text-primary font-medium text-xl dark:text-primaryDark xs:text-base">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2
            className="my-2 w-full text-left text-4xl font-bold dark:text-light sm:text-sm
          "
          >
            {title}
          </h2>
        </Link>
        <p className="my-2 font-medium text-dark dark:text-light sm:text-sm">
          {summary}
        </p>
        {/* <div className="mt-2 flex items-center">
          <Link href={github} target="_blank" className="w-10">
            <GithubIcon />
          </Link>
          <Link
            href={link}
            target="_blank"
            className="ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold dark:bg-light dark:text-dark sm:px-4 sm:text-base"
          >
            Visit Project
          </Link>
        </div> */}
      </div>
    </article>
  );
};

const projects = () => {
  return (
    <>
      <Head>
        <title>Projects Page </title>
        <meta name="description" content="" />
      </Head>
      <TransitionEffect />
      <main className="w-full mb-16 flex flex-col items-center justify-center dark:text-light">
        <Layout className="pt-16">
          <AnimatedText
            text="Imagination Unleashed Showcase"
            className="mb-16 lg:!text-7xl sm:mb-8
            sm:!text-6xl xs:!text-4xl"
          />

          <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
            <div className="col-span-12">
              <FeaturedProject
                title="Business Management Tool [BMT]"
                summary="Led Front-End development, coordinating and guiding the team to successfully complete the project on time.
                • Conducted review meetings with all team members, resulting in a 15% increase in project 
                efficiency and adherence to timelines.
                • Interacted with users, addressing their queries promptly, resulting in a 95% user satisfaction 
                rate.
                • Collaborated with Managers, HR, Finance, and other departments, leading to enhanced tool 
                features and improved functionality.
                • Technologies used: JavaScript, React JS, Material UI"
                link="/"
                img={BMT}
                type="Project-1"
                github="/"
              />
            </div>
            <div className="col-span-12">
              <FeaturedProject
                title="Fully Automated System Test [FAST]"
                summary="• Developed the FAST Tool based on clients' requirements, resulting in a 30% increase in test 
                case efficiency.
                • Conducted testing of enhancements, achieving a 20% improvement in overall tool performance.
                • Created reports for client submission with 100% accuracy and on-time delivery.
                • Resolved 80% of the reported issues, ensuring a smooth and error-free user experience.
                • Technologies used: React JS, TypeScript, Ant Design."
                link="/"
                img={FAST}
                type="Project-2"
                github="/"
              />
            </div>
            {/* <div className="col-span-12">
              <FeaturedProject
                title="Food Munch"
                summary="• Developed the FAST Tool based on clients' requirements, resulting in a 30% increase in test 
                case efficiency.
                • Conducted testing of enhancements, achieving a 20% improvement in overall tool performance.
                • Created reports for client submission with 100% accuracy and on-time delivery.
                • Resolved 80% of the reported issues, ensuring a smooth and error-free user experience.
                • Technologies used: React JS, TypeScript, Ant Design."
                link="/"
                img={FoodMunch}
                type="Project-3"
                github="/"
              />
            </div> */}
          </div>
        </Layout>
      </main>
    </>
  );
};

export default projects;
