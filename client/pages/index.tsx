import Image from "next/image";
import TopBtn from "../components/topBtn";
import ScrollImg from "../components/scrollImg";

import { motion } from "framer-motion";

function Home() {
  const logoAnimate = {
    offscreen: { y: 100, opacity: 0 },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", bounce: 0.4, duration: 1 },
    },
  };

  const firstH1TextAnimate = {
    offscreen: { x: 100, opacity: 0 },
    onscreen: {
      x: 0,
      opacity: 1,
      transition: { type: "spring", bounce: 0.4, duration: 1, delay: 0.3 },
    },
  };

  const firstH2TextAnimate = {
    offscreen: { x: 100, opacity: 0 },
    onscreen: {
      x: 0,
      opacity: 1,
      transition: { type: "spring", bounce: 0.4, duration: 1, delay: 0.5 },
    },
  };

  const landingH2TextAnimate = {
    offscreen: { x: 100, opacity: 0 },
    onscreen: {
      x: 0,
      opacity: 1,
      transition: { type: "spring", bounce: 0.4, duration: 1 },
    },
  };

  const landingH1TextAnimate = {
    offscreen: { y: 100, opacity: 0 },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", bounce: 0.4, duration: 1, delay: 0.3 },
    },
  };

  const landingH2SubTextAnimate = {
    offscreen: { y: 100, opacity: 0 },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", bounce: 0.4, duration: 1, delay: 0.5 },
    },
  };

  return (
    <>
      <TopBtn />
      <ScrollImg />
      <div className="flex-col items-center justify-center bg-slate-400">
        <div className="flex items-center justify-center w-full h-screen bg-cover bg-[url('/images/첫화면이미지.png')]">
          <div className="absolute top-0 left-0 right-0 bottom-0 bg-white/60"></div>
          <div className="flex-col items-center justify-center pl-32 pr-28 pt-12 w-full h-1/2 z-10">
            <motion.div
              className="flex items-center justify-left w-fit"
              variants={logoAnimate}
              initial={"offscreen"}
              whileInView={"onscreen"}
              viewport={{ once: false, amount: 0.5 }}
              transition={{ staggerChildren: 0.5 }}
            >
              <Image
                src="/images/logo export(orange).svg"
                width={250}
                height={100}
              />
            </motion.div>

            <motion.div
              className="font-SCDream6 sm:text-3xl md:text-xl lg:text-5xl text-gray-700 mt-3"
              variants={firstH1TextAnimate}
              initial={"offscreen"}
              whileInView={"onscreen"}
              viewport={{ once: false, amount: 0.5 }}
              transition={{ staggerChildren: 0.5 }}
            >
              나만의 추억 캘린더
            </motion.div>
            <motion.div
              className="font-SCDream3 sm:text-2xl md:text-xl lg:text-3xl mt-3 text-gray-700"
              variants={firstH2TextAnimate}
              initial={"offscreen"}
              whileInView={"onscreen"}
              viewport={{ once: false, amount: 0.5 }}
              transition={{ staggerChildren: 0.5 }}
            >
              여러분의 인상적인 순간들을 캘린더로 확인하세요!
            </motion.div>
            <div className="flex flex-row items-center justify-left w-fit mt-8 cursor">
              <div className="relative items-center justify-center w-fit h-7 mr-8 cursor-pointer">
                <div className="ml-1 font-SCDream3 text-lg z-10 text-gray-700">
                  로그인
                </div>
                <div className="absolute top-5 left-0.5 right-0 bottom-0.5  bg-orange-400/40"></div>
              </div>
              <div className="relative items-center justify-center w-fit h-7 cursor-pointer">
                <div className="ml-1 font-SCDream3 text-lg z-10 text-gray-700">
                  회원가입
                </div>
                <div className="absolute top-5 left-1 right-0 bottom-0.5  bg-orange-400/40"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center w-full h-screen bg-cover bg-[url('/images/lending_두번째이미지.png')]">
          <div className="flex flex-col items-start justify-center pl-32 pr-28 w-full h-1/2 z-10 ">
            <motion.div
              className="font-SCDream3 sm:text-3xl md:text-2xl lg:text-4xl text-gray-700"
              variants={landingH2TextAnimate}
              initial={"offscreen"}
              whileInView={"onscreen"}
              viewport={{ once: false, amount: 0.5 }}
              transition={{ staggerChildren: 0.5 }}
            >
              오늘 나에게
            </motion.div>
            <div className="flex sm:flex-row md:flex-col lg:flex-row sm:items-end md:items-start lg:items-end w-fit h-10 mt-5">
              <motion.div
                className="relative items-center justify-center w-fit h-13"
                variants={landingH1TextAnimate}
                initial={"offscreen"}
                whileInView={"onscreen"}
                viewport={{ once: false, amount: 0.5 }}
                transition={{ staggerChildren: 0.5 }}
              >
                <div className="font-SCDream6 sm:text-3xl md:text-2xl lg:text-5xl z-10  text-gray-700">
                  가장 특별했던 사진
                </div>
                <div className="absolute sm:top-7 md:top-6 lg:top-10 left-0 right-0 bottom-0  bg-orange-400/40"></div>
              </motion.div>
              <motion.div
                className="font-SCDream3 sm:text-3xl md:text-2xl lg:text-4xl text-gray-700 mt-2"
                variants={landingH2SubTextAnimate}
                initial={"offscreen"}
                whileInView={"onscreen"}
                viewport={{ once: false, amount: 0.5 }}
                transition={{ staggerChildren: 0.5 }}
              >
                이 뭘까?
              </motion.div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center w-full h-screen bg-cover bg-[url('/images/lending_세번째이미지.png')]">
          <div className="flex flex-col items-start justify-center pl-32 pr-28 w-full h-1/2 z-10 ">
            <motion.div
              className="font-SCDream3 sm:text-3xl md:text-2xl lg:text-4xl text-gray-200"
              variants={landingH2TextAnimate}
              initial={"offscreen"}
              whileInView={"onscreen"}
              viewport={{ once: false, amount: 0.5 }}
              transition={{ staggerChildren: 0.5 }}
            >
              오늘 나의
            </motion.div>
            <div className="flex sm:flex-row md:flex-col lg:flex-row sm:items-end md:items-start w-fit h-10 mt-5">
              <motion.div
                className="relative items-center justify-center w-fit h-13"
                variants={landingH1TextAnimate}
                initial={"offscreen"}
                whileInView={"onscreen"}
                viewport={{ once: false, amount: 0.5 }}
                transition={{ staggerChildren: 0.5 }}
              >
                <div className="font-SCDream6 sm:text-3xl md:text-2xl lg:text-5xl z-10  text-gray-200">
                  무드에 맞는 음악
                </div>
                <div className="absolute sm:top-7 md:top-6 lg:top-10 left-0 right-0 bottom-0  bg-orange-400/50"></div>
              </motion.div>
              <motion.div
                className="font-SCDream3 sm:text-3xl md:text-2xl lg:text-4xl text-gray-200 mt-1"
                variants={landingH2SubTextAnimate}
                initial={"offscreen"}
                whileInView={"onscreen"}
                viewport={{ once: false, amount: 0.5 }}
                transition={{ staggerChildren: 0.5 }}
              >
                이 뭘까?
              </motion.div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center w-full h-screen bg-cover bg-[url('/images/lending_네번째이미지.png')]">
          <div className="flex flex-col items-start justify-center pl-32 pr-28 w-full h-1/2 z-10 ">
            <motion.div
              className="font-SCDream3 sm:text-3xl md:text-2xl lg:text-4xl text-gray-700"
              variants={landingH2TextAnimate}
              initial={"offscreen"}
              whileInView={"onscreen"}
              viewport={{ once: false, amount: 0.5 }}
              transition={{ staggerChildren: 0.5 }}
            >
              오늘 나를
            </motion.div>
            <div className="flex sm:flex-row md:flex-col lg:flex-row sm:items-end md:items-start w-fit h-10 mt-5">
              <motion.div
                className="relative items-center justify-center w-fit h-13"
                variants={landingH1TextAnimate}
                initial={"offscreen"}
                whileInView={"onscreen"}
                viewport={{ once: false, amount: 0.5 }}
                transition={{ staggerChildren: 0.5 }}
              >
                <div className="font-SCDream6 sm:text-3xl md:text-2xl lg:text-5xl z-10  text-gray-700">
                  설명해주는 문구
                </div>
                <div className="absolute sm:top-7 md:top-6 lg:top-10 left-0 right-0 bottom-0  bg-orange-400/40"></div>
              </motion.div>
              <motion.div
                className="font-SCDream3 sm:text-3xl md:text-2xl lg:text-4xl text-gray-700 mt-1"
                variants={landingH2SubTextAnimate}
                initial={"offscreen"}
                whileInView={"onscreen"}
                viewport={{ once: false, amount: 0.5 }}
                transition={{ staggerChildren: 0.5 }}
              >
                는 뭘까?
              </motion.div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center w-full h-screen bg-cover bg-[url('/images/lending_다섯번째이미지.png')]">
          <div className="flex flex-col items-start justify-center pl-10 pr-10 md:pl-32 md:pr-32 w-full h-1/2 z-10 ">
            <motion.div
              className="font-SCDream3 sm:text-3xl md:text-2xl lg:text-4xl text-gray-700"
              variants={landingH2TextAnimate}
              initial={"offscreen"}
              whileInView={"onscreen"}
              viewport={{ once: false, amount: 0.5 }}
              transition={{ staggerChildren: 0.5 }}
            >
              인상깊은 나의
            </motion.div>
            <div className="flex sm:flex-row md:flex-col lg:flex-row sm:items-end md:items-start w-fit h-10 mt-5">
              <motion.div
                className="relative items-center justify-center w-fit h-13"
                variants={landingH1TextAnimate}
                initial={"offscreen"}
                whileInView={"onscreen"}
                viewport={{ once: false, amount: 0.5 }}
                transition={{ staggerChildren: 0.5 }}
              >
                <div className="font-SCDream6 sm:text-3xl md:text-2xl lg:text-5xl z-10  text-gray-700">
                  하루를 공유
                </div>
                <div className="absolute sm:top-7 md:top-6 lg:top-10 left-0 right-0 bottom-0  bg-orange-400/40"></div>
              </motion.div>
              <motion.div
                className="font-SCDream3 sm:text-3xl md:text-2xl lg:text-4xl text-gray-700 mt-1"
                variants={landingH2SubTextAnimate}
                initial={"offscreen"}
                whileInView={"onscreen"}
                viewport={{ once: false, amount: 0.5 }}
                transition={{ staggerChildren: 0.5 }}
              >
                할 수는 없을까?
              </motion.div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center w-full h-screen bg-cover bg-[url('/images/solid_background.png')]">
          <div className="flex md:flex-col lg:flex-row items-center justify-center pl-10 md:pl-30 pr-10 md:pr-30 w-full h-fit z-10 ">
            <motion.div className="font-SCDream3 sm:text-2xl md:text-xl lg:text-3xl text-gray-200 mt-3"
              variants={logoAnimate}
              initial={"offscreen"}
              whileInView={"onscreen"}
              viewport={{ once: false, amount: 0.5 }}
              transition={{ staggerChildren: 0.5 }}
            >
              당신의 모든 순간들을
            </motion.div>
            <div className="flex sm:flex-row md:flex-col lg:flex-row items-center justify-center w-fit">
              <motion.div className="flex items-center justify-left w-fit ml-3 mr-3"
                variants={landingH1TextAnimate}
                initial={"offscreen"}
                whileInView={"onscreen"}
                viewport={{ once: false, amount: 0.5 }}
                transition={{ staggerChildren: 0.5 }}
              >
                <Image
                  src="/images/logo export(white).svg"
                  width={250}
                  height={60}
                />
              </motion.div>
              <motion.div className="font-SCDream3 sm:text-2xl md:text-xl lg:text-3xl text-gray-200 mt-3"
                variants={landingH2SubTextAnimate}
                initial={"offscreen"}
                whileInView={"onscreen"}
                viewport={{ once: false, amount: 0.5 }}
                transition={{ staggerChildren: 0.5 }}
              >
                와 함께 하세요!
              </motion.div>
            </div>
          </div>
          <div className="flex flex-row items-center justify-left w-fit mt-10">
            <div className="relative items-center justify-center w-fit h-7 mr-8 cursor-pointer">
              <div className="ml-1 font-SCDream3 text-2xl z-10 text-gray-200">
                시작하기
              </div>
              <div className="absolute top-5 left-1 right-0 bottom-0.5  bg-orange-400/40"></div>
            </div>
            <div className="relative items-center justify-center w-fit h-7 cursor-pointer">
              <div className="ml-1 font-SCDream3 text-2xl z-10 text-gray-200">
                사용설명 보러가기
              </div>
              <div className="absolute top-5 left-1 right-0 bottom-0.5  bg-orange-400/40"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
