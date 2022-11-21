import Image from "next/image";
import TopBtn from "../components/topBtn";
import ScrollImg from "../components/scrollImg";
import Dots from "../components/Dots";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
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

  // 은비 작업부분
  // const outerDivRef = useRef<any>(null);
  const [scrollIdx, setScrollIndex] = useState<number>(1);
  // const [currPage, setCurrPage] = useState<number>(1);

  useEffect(() => {
    window.addEventListener("wheel", () => {
      const scrollTop: number = window.scrollY + 5;
      const pageHeight = window.innerHeight;
      const totalHeight = document.body.scrollHeight; // 전체 화면크기
      const currY = pageHeight;

      console.log(scrollTop, totalHeight - pageHeight);

      if (scrollTop < pageHeight) {
        setScrollIndex(1);

        if (scrollTop >= Math.floor(currY / 2)) {
        }
      } else if (
        scrollTop > pageHeight &&
        scrollTop < totalHeight - pageHeight
      ) {
        setScrollIndex(2);

        if (scrollTop >= Math.floor(currY / 2)) {
          console.log("here!");
        }
      } else if (scrollTop >= totalHeight - pageHeight) {
        setScrollIndex(6);
      }
    });
  });

  // const wheelHandler = (e: { preventDefault: any; deltaY: number }) => {
  // e.preventDefault();
  // scrollY === pageYOffset(구버전 호환성위해 사용)
  // const { scrollTop } = outerDivRef.current;
  // const scrollTop: number = window.scrollY;
  // console.log(scrollTop);
  // // 스크롤 위쪽 끝부분 위치
  // const pageHeight = window.innerHeight; // 화면 세로길이(== 100vh)
  // const totalHeight = document.body.scrollHeight; // 전체 화면크기
  // const currY = pageHeight * currPage;
  // console.log(outerDivRef);
  // if (scrollTop >= Math.floor(currY / 2)) {
  //   window.scrollTo({
  //     top: pageHeight * currPage,
  //     behavior: "smooth",
  //   });
  //   setCurrPage(currPage + 1);
  // }
  //     if (scrollTop < pageHeight) {
  //       // 스크롤 내릴 때
  //       if (scrollTop >= 0 && scrollTop < pageHeight) {
  //         outerDivRef.current.scrollTo({
  //           top: pageHeight,
  //           left: 0,
  //           behavior: "smooth",
  //         });
  //         setScrollIndex(1);
  //         console.log(outerDivRef.current);
  //       } else if (scrollTop >= pageHeight && scrollTop < pageHeight * 2) {
  //         //현재 2페이지
  //         console.log("현재 2페이지, down");
  //         console.log(scrollTop);
  //         outerDivRef.current.scrollTo({
  //           top: pageHeight * 2,
  //           left: 0,
  //           behavior: "smooth",
  //         });
  //         setScrollIndex(3);
  //       } else {
  //         // 현재 3페이지
  //         console.log("현재 3페이지, down");
  //         outerDivRef.current.scrollTo({
  //           top: pageHeight * 2,
  //           left: 0,
  //           behavior: "smooth",
  //         });
  //         setScrollIndex(3);
  //       }
  //     } else {
  //       // 스크롤 올릴 때
  //       if (scrollTop >= 0 && scrollTop < pageHeight) {
  //         //현재 1페이지
  //         console.log("현재 1페이지, up");
  //         outerDivRef.current.scrollTo({
  //           top: 0,
  //           left: 0,
  //           behavior: "smooth",
  //         });
  //         setScrollIndex(1);
  //       } else if (scrollTop >= pageHeight && scrollTop < pageHeight * 2) {
  //         //현재 2페이지
  //         console.log("현재 2페이지, up");
  //         outerDivRef.current.scrollTo({
  //           top: 0,
  //           left: 0,
  //           behavior: "smooth",
  //         });
  //         // setScrollIndex(1);
  //       } else {
  //         // 현재 3페이지
  //         console.log("현재 3페이지, up");
  //         outerDivRef.current.scrollTo({
  //           top: pageHeight,
  //           left: 0,
  //           behavior: "smooth",
  //         // setScrollIndex(3);
  //       }
  //     }
  // };
  // const outerDivRefCurrent = outerDivRef.current;
  // outerDivRefCurrent?.addEventListener("wheel", wheelHandler);
  // return () => {
  //   outerDivRefCurrent?.removeEventListener("wheel", wheelHandler);
  // };
  // window.addEventListener("wheel", wheelHandler);
  // }, []);
  // 여기까지 은비 작업부분 ^__^

  return (
    <>
      <TopBtn />
      <ScrollImg />
      <Dots scrollIdx={scrollIdx} />
      <div className="flex-col items-center justify-center h-screen">
        <div
          id="page1"
          className=" flex items-center justify-center w-full h-screen bg-cover bg-[url('/images/첫화면이미지.png')]"
        >
          <div className="absolute top-0 bottom-0 left-0 right-0 w-full h-screen bg-white/60"></div>
          {/* 반응형 이슈 */}
          <div className="z-10 flex flex-col items-center justify-center w-screen pl-5 pr-5 sm:items-start h-1/2 sm:pl-28 sm:pr-20">
            <motion.div
              className="flex items-center justify-center w-full sm:justify-start "
              variants={logoAnimate}
              initial={"offscreen"}
              whileInView={"onscreen"}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ staggerChildren: 0.5 }}
            >
              <Image
                src="/images/logo export(orange).svg"
                width={250}
                height={100}
              />
            </motion.div>

            <motion.div
              className="flex flex-row items-center justify-center mt-3 text-2xl text-gray-700 sm:justify-start font-SCDream6 md:text-3xl lg:text-5xl"
              // variants={firstH1TextAnimate}

              initial={"offscreen"}
              whileInView={"onscreen"}
              viewport={{ once: false, amount: 0.5 }}
              transition={{ staggerChildren: 0.5 }}
            >
              나만의 추억 캘린더
            </motion.div>
            <motion.div
              className="flex flex-row justify-center mt-3 text-sm text-gray-700 sm:justify-start font-SCDream3 md:text-base lg:text-2xl"
              // variants={firstH2TextAnimate}

              initial={"offscreen"}
              whileInView={"onscreen"}
              viewport={{ once: false, amount: 0.5 }}
              transition={{ staggerChildren: 0.5 }}
            >
              여러분의 인상적인 순간들을 캘린더로 확인하세요!
            </motion.div>
            <div className="flex flex-row items-center justify-center w-full mt-20 sm:justify-start sm:mt-8">
              <div className="relative items-center justify-center mr-8 cursor-pointer w-fit h-7">
                <div className="z-10 ml-1 text-lg text-gray-700 font-SCDream3">
                  로그인
                </div>
                <div className="absolute top-5 left-0.5 right-0 bottom-0.5  bg-orange/40"></div>
              </div>
              <div className="relative items-center justify-center cursor-pointer w-fit h-7">
                <div className="z-10 ml-1 text-lg text-gray-700 font-SCDream3">
                  회원가입
                </div>
                <div className="absolute top-5 left-1 right-0 bottom-0.5  bg-orange/40"></div>
              </div>
            </div>
          </div>
        </div>

        <div
          id="page2"
          className="flex items-center justify-center w-full h-screen bg-cover bg-[url('/images/lending_두번째이미지.png')]"
        >
          {/* 반응형 이슈 */}
          <div className="flex flex-col items-center justify-center w-full pl-5 pr-5 sm:items-start h-1/2 sm:pl-28 sm:pr-20">
            <div className="flex flex-row items-center justify-center text-2xl text-gray-700 font-SCDream3 md:text-3xl lg:text-4xl">
              오늘 나에게
            </div>
            <div className="flex flex-col items-center w-full mt-4 sm:flex-row sm:items-start h-fit sm:mt-5">
              <div className="relative items-center justify-center w-fit h-13">
                <div className="flex flex-row text-3xl text-gray-700 font-SCDream6 md:text-4xl lg:text-5xl">
                  가장 특별했던 사진
                </div>
                <div className="absolute bottom-0 left-0 right-0 top-7 md:top-8 lg:top-10 bg-orange/40"></div>
              </div>
              <div className="flex flex-row mt-2 text-2xl text-gray-700 font-SCDream3 md:text-3xl lg:text-4xl sm:mt-1">
                이 뭘까?
              </div>
            </div>
          </div>
        </div>

        <div
          id="page3"
          className=" flex items-center justify-center w-full h-screen bg-cover bg-[url('/images/lending_세번째이미지.png')]"
        >
          {/* 반응형 이슈 */}
          <div className="z-10 flex flex-col items-center justify-center w-full pl-5 pr-5 sm:items-start h-1/2 sm:pl-28 sm:pr-20">
            <div className="text-2xl text-gray-200 font-SCDream3 md:text-3xl lg:text-4xl">
              오늘 나의
            </div>
            <div className="flex flex-col items-center w-full mt-4 sm:flex-row sm:items-start h-fit sm:mt-5">
              <div className="relative items-center justify-center w-fit h-13">
                <div className="z-10 text-3xl text-gray-200 font-SCDream6 md:text-4xl lg:text-5xl">
                  무드에 맞는 음악
                </div>
                <div className="absolute bottom-0 left-0 right-0 top-7 md:top-8 lg:top-10 bg-orange/40"></div>
              </div>
              <div className="mt-2 text-2xl text-gray-200 font-SCDream3 md:text-3xl lg:text-4xl sm:mt-1">
                이 뭘까?
              </div>
            </div>
          </div>
        </div>

        <div
          id="page4"
          className="flex items-center justify-center w-full h-screen bg-cover bg-[url('/images/lending_네번째이미지.png')]"
        >
          {/* 반응형 이슈 */}
          <div className="z-10 flex flex-col items-center justify-center w-full pl-5 pr-5 sm:items-start h-1/2 sm:pl-28 sm:pr-20">
            <div className="text-2xl text-gray-700 font-SCDream3 md:text-3xl lg:text-4xl">
              오늘 나를
            </div>
            <div className="flex flex-col items-center w-full mt-4 sm:flex-row sm:items-start h-fit sm:mt-5">
              <div className="relative items-center justify-center w-fit h-13">
                <div className="z-10 text-3xl text-gray-700 font-SCDream6 md:text-4xl lg:text-5xl">
                  설명해주는 문구
                </div>
                <div className="absolute bottom-0 left-0 right-0 top-7 md:top-8 lg:top-10 bg-orange/40"></div>
              </div>
              <div className="mt-2 text-2xl text-gray-700 font-SCDream3 md:text-3xl lg:text-4xl sm:mt-1">
                는 뭘까?
              </div>
            </div>
          </div>
        </div>

        <div
          id="page5"
          className="flex items-center justify-center w-full h-screen bg-cover bg-[url('/images/lending_다섯번째이미지.png')]"
        >
          {/* 반응형 이슈 */}
          <div className="z-10 flex flex-col items-center justify-center w-full pl-5 pr-5 sm:items-start h-1/2 sm:pl-28 sm:pr-20">
            <div className="text-2xl text-gray-700 font-SCDream3 md:text-3xl lg:text-4xl">
              인상깊은 나의
            </div>
            <div className="flex flex-col items-center w-full mt-4 sm:flex-row sm:items-start h-fit sm:mt-5">
              <div className="relative items-center justify-center w-fit h-13">
                <div className="z-10 text-3xl text-gray-700 font-SCDream6 md:text-4xl lg:text-5xl">
                  하루를 공유
                </div>
                <div className="absolute bottom-0 left-0 right-0 top-7 md:top-8 lg:top-10 bg-orange/40"></div>
              </div>
              <div className="mt-2 text-2xl text-gray-700 font-SCDream3 md:text-3xl lg:text-4xl sm:mt-1">
                할 수는 없을까?
              </div>
            </div>
          </div>
        </div>

        <div
          id="page6"
          className=" flex flex-col items-center justify-center w-full h-screen bg-cover bg-[url('/images/solid_background.png')]"
        >
          {/* 반응형 이슈 */}
          <div className="z-10 flex flex-col items-center justify-center w-full pl-5 pr-3 sm:flex-row sm:items-center h-fit sm:pl-3 sm:pr-5">
            <div className="text-base text-gray-100 font-SCDream3 md:text-xl lg:text-3xl">
              당신의 모든 순간들을
            </div>
            <div className="flex flex-col items-center justify-center md:flex-row lg:flex-row w-fit">
              <div className="flex items-center ml-3 mr-3 justify-left w-fit">
                <Image
                  src="/images/logo export(white).svg"
                  width={180}
                  height={60}
                />
              </div>
              <div className="text-base text-gray-100 font-SCDream3 md:text-xl lg:text-3xl">
                와 함께 하세요!
              </div>
            </div>
          </div>
          <div className="flex flex-row items-center mt-10 justify-left w-fit">
            <div className="relative items-center justify-center mr-8 cursor-pointer w-fit h-7">
              <div className="z-10 text-lg text-gray-100 font-SCDream2">
                시작하기
              </div>
              <div className="absolute top-5 left-0 right-0 bottom-0.5 bg-orange/40"></div>
            </div>
            <Link href="/usage">
            <div className="relative items-center justify-center cursor-pointer w-fit h-7">
              <div className="z-10 ml-1 text-lg text-gray-100 font-SCDream2">
                사용설명 보러가기
              </div>
              <div className="absolute top-5 left-1 right-0 bottom-0.5  bg-orange/40"></div>
            </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
