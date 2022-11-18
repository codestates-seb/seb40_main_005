import Image from "next/image";
import TopBtn from "../components/topBtn";
import Link from "next/link";
import { useEffect, useState } from "react";


function Home() {
  // const [section, setSection] = useState(0);

  // useEffect(()=> {
  //   function watchScroll() {
  //     window.addEventListener("scroll", ()=> {
  //       setSection(section+1);
  //       window.scrollTo({
  //         top : document.getElementById(`1-section`)?.offsetTop,
  //         left : 0,
  //         behavior: "smooth"
  //       });
  //     })
  //   }
  //   watchScroll();
  // },[])


 
  return (
    <>
    <TopBtn/>
      <div className="flex-col items-center justify-center bg-slate-400">
        <div className="flex items-center justify-center w-full h-screen bg-cover bg-[url('/images/첫화면이미지.png')]">
          <div className="absolute top-0 left-0 right-0 bottom-0 bg-white/60"></div>
          <div className="flex-col items-center justify-center pl-32 pr-28 pt-12 w-full h-1/2 z-10">
            <div className="flex items-center justify-left w-fit">
              <Image
                src="/images/logo export(orange).svg"
                width={250}
                height={100}
              />
            </div>

            <div className="font-SCDream6 sm:text-3xl md:text-xl lg:text-5xl text-gray-700 mt-3">
              나만의 추억 캘린더
            </div>
            <div className="font-SCDream3 sm:text-2xl md:text-xl lg:text-3xl mt-3 text-gray-700">
              여러분의 인상적인 순간들을 캘린더로 확인하세요!
            </div>
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
        
        <div id="1-section" className="flex items-center justify-center w-full h-screen bg-cover bg-[url('/images/lending_두번째이미지.png')]">
          <div className="flex flex-col items-start justify-center pl-32 pr-28 w-full h-1/2 z-10 ">
            <div className="font-SCDream3 sm:text-3xl md:text-2xl lg:text-4xl text-gray-700">
              오늘 나에게
            </div>
            <div className="flex sm:flex-row md:flex-col lg:flex-row sm:items-end md:items-start lg:items-end w-fit h-10 mt-5">
              <div className="relative items-center justify-center w-fit h-13">
                <div className="font-SCDream6 sm:text-3xl md:text-2xl lg:text-5xl z-10  text-gray-700">
                  가장 특별했던 사진
                </div>
                <div className="absolute sm:top-7 md:top-6 lg:top-10 left-0 right-0 bottom-0  bg-orange-400/40"></div>
              </div>
              <div className="font-SCDream3 sm:text-3xl md:text-2xl lg:text-4xl text-gray-700 mt-2">
                이 뭘까?
              </div>
            </div>
          </div>
        </div>

        <div id="2-section" className="flex items-center justify-center w-full h-screen bg-cover bg-[url('/images/lending_세번째이미지.png')]">
          <div className="flex flex-col items-start justify-center pl-32 pr-28 w-full h-1/2 z-10 ">
            <div className="font-SCDream3 sm:text-3xl md:text-2xl lg:text-4xl text-gray-200">
              오늘 나의
            </div>
            <div className="flex sm:flex-row md:flex-col lg:flex-row sm:items-end md:items-start w-fit h-10 mt-5">
              <div className="relative items-center justify-center w-fit h-13">
                <div className="font-SCDream6 sm:text-3xl md:text-2xl lg:text-5xl z-10  text-gray-200">
                  무드에 맞는 음악
                </div>
                <div className="absolute sm:top-7 md:top-6 lg:top-10 left-0 right-0 bottom-0  bg-orange-400/50"></div>
              </div>
              <div className="font-SCDream3 sm:text-3xl md:text-2xl lg:text-4xl text-gray-200 mt-1">
                이 뭘까?
              </div>
            </div>
          </div>
        </div>

        <div id="3-section" className="flex items-center justify-center w-full h-screen bg-cover bg-[url('/images/lending_네번째이미지.png')]">
          <div className="flex flex-col items-start justify-center pl-32 pr-28 w-full h-1/2 z-10 ">
            <div className="font-SCDream3 sm:text-3xl md:text-2xl lg:text-4xl text-gray-700">
              오늘 나를
            </div>
            <div className="flex sm:flex-row md:flex-col lg:flex-row sm:items-end md:items-start w-fit h-10 mt-5">
              <div className="relative items-center justify-center w-fit h-13">
                <div className="font-SCDream6 sm:text-3xl md:text-2xl lg:text-5xl z-10  text-gray-700">
                  설명해주는 문구
                </div>
                <div className="absolute sm:top-7 md:top-6 lg:top-10 left-0 right-0 bottom-0  bg-orange-400/40"></div>
              </div>
              <div className="font-SCDream3 sm:text-3xl md:text-2xl lg:text-4xl text-gray-700 mt-1">
                는 뭘까?
              </div>
            </div>
          </div>
        </div>

        <div id="4-section" className="flex items-center justify-center w-full h-screen bg-cover bg-[url('/images/lending_다섯번째이미지.png')]">
          <div className="flex flex-col items-start justify-center pl-32 pr-28 w-full h-1/2 z-10 ">
            <div className="font-SCDream3 sm:text-3xl md:text-2xl lg:text-4xl text-gray-700">
              인상깊은 나의
            </div>
            <div className="flex sm:flex-row md:flex-col lg:flex-row sm:items-end md:items-start w-fit h-10 mt-5">
              <div className="relative items-center justify-center w-fit h-13">
                <div className="font-SCDream6 sm:text-3xl md:text-2xl lg:text-5xl z-10  text-gray-700">
                  하루를 공유
                </div>
                <div className="absolute sm:top-7 md:top-6 lg:top-10 left-0 right-0 bottom-0  bg-orange-400/40"></div>
              </div>
              <div className="font-SCDream3 sm:text-3xl md:text-2xl lg:text-4xl text-gray-700 mt-1">
                할 수는 없을까?
              </div>
            </div>
          </div>
        </div>

        <div id="5-section" className="flex flex-col items-center justify-center w-full h-screen bg-cover bg-[url('/images/solid_background.png')]">
          <div className="flex md:flex-col lg:flex-row items-center justify-center pl-28 md:pl-20 pr-28 md:pr-20 w-full h-fit z-10 ">
            <div className="font-SCDream3 sm:text-2xl md:text-xl lg:text-3xl text-gray-200 mt-3">
              당신의 모든 순간들을
            </div>
            <div className="flex sm:flex-row md:flex-col lg:flex-row items-center justify-center w-fit">
              <div className="flex items-center justify-left w-fit ml-3 mr-3">
                <Image
                  src="/images/logo export(white).svg"
                  width={250}
                  height={60}
                />
              </div>
              <div className="font-SCDream3 sm:text-2xl md:text-xl lg:text-3xl text-gray-200 mt-3">
                와 함께 하세요!
              </div>
            </div>
          </div>
          <div className="flex flex-row items-center justify-left w-fit mt-10">
            <div className="relative items-center justify-center w-fit h-7 mr-8 cursor-pointer">
              <div className="ml-1 font-SCDream3 text-lg z-10 text-gray-200">
                시작하기
              </div>
              <div className="absolute top-5 left-0.5 right-0 bottom-0.5  bg-orange-400/40"></div>
            </div>
            <div className="relative items-center justify-center w-fit h-7 cursor-pointer">
              <div className="ml-1 font-SCDream3 text-lg z-10 text-gray-200">
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
