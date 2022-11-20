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

      <div className="flex-col items-center justify-center">
        <div className="flex items-center justify-center w-full h-screen bg-cover bg-[url('/images/첫화면이미지.png')]">
          <div className="absolute top-0 left-0 right-0 bottom-0 w-full h-screen bg-white/60"></div>
          {/* 반응형 이슈 */}
          <div className="flex flex-col items-center sm:items-start justify-center h-1/2 z-10 w-screen pl-5 pr-5 sm:pl-28 sm:pr-20">
            <motion.div
              className="flex items-center justify-center sm:justify-start w-full "

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

              className="flex flex-row items-center justify-center sm:justify-start font-SCDream6 text-2xl md:text-3xl lg:text-5xl text-gray-700 mt-3"
              // variants={firstH1TextAnimate}

              initial={"offscreen"}
              whileInView={"onscreen"}
              viewport={{ once: false, amount: 0.5 }}
              transition={{ staggerChildren: 0.5 }}
            >
              나만의 추억 캘린더
            </motion.div>
            <motion.div
              className="flex flex-row justify-center sm:justify-start font-SCDream3 text-sm md:text-base lg:text-2xl mt-3 text-gray-700"
              // variants={firstH2TextAnimate}

              initial={"offscreen"}
              whileInView={"onscreen"}
              viewport={{ once: false, amount: 0.5 }}
              transition={{ staggerChildren: 0.5 }}
            >
              여러분의 인상적인 순간들을 캘린더로 확인하세요!
            </motion.div>
            <div className="flex flex-row items-center justify-center sm:justify-start w-full mt-20 sm:mt-8">

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
          {/* 반응형 이슈 */}
          <div className="flex flex-col items-center sm:items-start justify-center h-1/2 w-full pl-5 pr-5 sm:pl-28 sm:pr-20">
            <div className="flex flex-row items-center justify-center font-SCDream3 text-2xl md:text-3xl lg:text-4xl text-gray-700">
              오늘 나에게
            </div>
            <div className="flex flex-col sm:flex-row items-center sm:items-start w-full h-fit mt-4 sm:mt-5">
              <div className="relative items-center justify-center w-fit h-13">
                <div className="flex flex-row font-SCDream6 text-3xl md:text-4xl lg:text-5xl text-gray-700">
                  가장 특별했던 사진
                </div>
                <div className="absolute top-7 md:top-8 lg:top-10 left-0 right-0 bottom-0 bg-orange-400/40"></div>
              </div>
              <div className="flex flex-row font-SCDream3 text-2xl md:text-3xl lg:text-4xl text-gray-700 mt-2 sm:mt-1">
                이 뭘까?
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center w-full h-screen bg-cover bg-[url('/images/lending_세번째이미지.png')]">
          {/* 반응형 이슈 */}
          <div className="flex flex-col items-center sm:items-start justify-center h-1/2 z-10 w-full pl-5 pr-5 sm:pl-28 sm:pr-20">
            <div className="font-SCDream3 text-2xl md:text-3xl lg:text-4xl text-gray-200">
              오늘 나의
            </div>
            <div className="flex flex-col sm:flex-row items-center sm:items-start w-full h-fit mt-4 sm:mt-5">
              <div className="relative items-center justify-center w-fit h-13">
                <div className="font-SCDream6 text-3xl md:text-4xl lg:text-5xl z-10  text-gray-200">
                  무드에 맞는 음악
                </div>
                <div className="absolute top-7 md:top-8 lg:top-10 left-0 right-0 bottom-0 bg-orange-400/40"></div>
              </div>
              <div className="font-SCDream3 text-2xl md:text-3xl lg:text-4xl text-gray-200 mt-2 sm:mt-1">
                이 뭘까?
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center w-full h-screen bg-cover bg-[url('/images/lending_네번째이미지.png')]">
          {/* 반응형 이슈 */}
          <div className="flex flex-col items-center sm:items-start justify-center h-1/2 z-10 w-full pl-5 pr-5 sm:pl-28 sm:pr-20">
            <div className="font-SCDream3 text-2xl md:text-3xl lg:text-4xl text-gray-700">
              오늘 나를
            </div>
            <div className="flex flex-col sm:flex-row items-center sm:items-start w-full h-fit mt-4 sm:mt-5">
              <div className="relative items-center justify-center w-fit h-13">
                <div className="font-SCDream6 text-3xl md:text-4xl lg:text-5xl z-10  text-gray-700">
                  설명해주는 문구
                </div>
                <div className="absolute top-7 md:top-8 lg:top-10 left-0 right-0 bottom-0 bg-orange-400/40"></div>
              </div>
              <div className="font-SCDream3 text-2xl md:text-3xl lg:text-4xl text-gray-700 mt-2 sm:mt-1">
                는 뭘까?
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center w-full h-screen bg-cover bg-[url('/images/lending_다섯번째이미지.png')]">
          {/* 반응형 이슈 */}
          <div className="flex flex-col items-center sm:items-start justify-center h-1/2 z-10 w-full pl-5 pr-5 sm:pl-28 sm:pr-20">
            <div className="font-SCDream3 text-2xl md:text-3xl lg:text-4xl text-gray-700">
              인상깊은 나의
            </div>
            <div className="flex flex-col sm:flex-row items-center sm:items-start w-full h-fit mt-4 sm:mt-5">
              <div className="relative items-center justify-center w-fit h-13">
                <div className="font-SCDream6 text-3xl md:text-4xl lg:text-5xl z-10  text-gray-700">
                  하루를 공유
                </div>
                <div className="absolute top-7 md:top-8 lg:top-10 left-0 right-0 bottom-0 bg-orange-400/40"></div>
              </div>
              <div className="font-SCDream3 text-2xl md:text-3xl lg:text-4xl text-gray-700 mt-2 sm:mt-1">
                할 수는 없을까?
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center w-full h-screen bg-cover bg-[url('/images/solid_background.png')]">
          {/* 반응형 이슈 */}
          <div className="flex flex-col sm:flex-row items-center sm:items-center justify-center h-fit z-10 w-full pl-5 pr-3 sm:pl-3 sm:pr-5">
            <div className="font-SCDream3 text-base md:text-xl lg:text-3xl text-gray-100">
              당신의 모든 순간들을
            </div>
            <div className="flex flex-col md:flex-row lg:flex-row items-center justify-center w-fit">
              <div className="flex items-center justify-left w-fit ml-3 mr-3">
                <Image
                  src="/images/logo export(white).svg"
                  width={180}
                  height={60}
                />
              </div>
              <div className="font-SCDream3 text-base md:text-xl lg:text-3xl text-gray-100">
                와 함께 하세요!
              </div>
            </div>
          </div>
          <div className="flex flex-row items-center justify-left w-fit mt-10">
            <div className="relative items-center justify-center w-fit h-7 mr-8 cursor-pointer">

              <div className="font-SCDream2 text-lg z-10 text-gray-100">
                시작하기
              </div>
              <div className="absolute top-5 left-0 right-0 bottom-0.5 bg-orange-400/40"></div>
            </div>
            <div className="relative items-center justify-center w-fit h-7 cursor-pointer">
              <div className="ml-1 font-SCDream2 text-lg z-10 text-gray-100">

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
