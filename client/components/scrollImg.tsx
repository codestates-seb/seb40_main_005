import {useEffect} from 'react';
// import { useScroll } from "./useScroll"

const ScrollImg = ({}:any) => {
    // const { scrollY } = useScroll();
    // const foo = useRef(null);
    useEffect(()=> {
        window.addEventListener('scroll', () => {
         const pTag = document.getElementById("first");
         if (!pTag) return;
         const box = document.getElementById("box");
         if (!box) return;

         const scrollable = document.documentElement.scrollHeight - window.innerHeight;
         const scrolled = window.pageYOffset;

            if (scrolled === 0) {
                box.style.display  = "flex"
                pTag.innerText = "스크롤을 내려 Gallendar에 대해서 확인하세요!"
            } else if (scrolled >= 1 && scrolled < scrollable) {
                box.style.display  = "flex"
                pTag.innerText = "스크롤을 내려 확인하세요!"
            } else if (scrolled === scrollable) {
                box.style.display  = "none"
            }
          
        })
    })
    
    return (
        <>
 <div>
    
 </div>
            <div id="box" className="w-full z-25 text-base flex items-center justify-center bottom-5 fixed">
                <span className="absolute animate-ping flex h-10 w-10 rounded-full bg-orange-500 opacity-75"></span>
                <svg className="h-5 md:h-6 lg:h-7 fill-none text-gray-400	stroke-gray-400" viewBox="0 0 18 35" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.7799 28.0179H7.06376C3.72819 28.0179 1 25.7215 1 22.9143V12.1314C1 9.32429 3.72886 7.02783 7.06376 7.02783H10.7792C14.1148 7.02783 16.843 9.32429 16.843 12.1314V22.9143C16.843 25.7215 14.1141 28.0179 10.7792 28.0179H10.7799Z"  stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M12.4582 31.1336L8.95757 34.0803M5.42871 31.1336L8.92938 34.0803M5.42871 3.94669L8.92938 1M12.4582 3.94669L8.95757 1M8.9777 15.3939H8.86495C8.50389 15.3932 8.15787 15.2721 7.90256 15.0572C7.64725 14.8423 7.50342 14.5511 7.50254 14.2471V10.8321C7.50254 10.2016 8.11596 9.68585 8.86495 9.68585H8.9777C9.7267 9.68585 10.3401 10.2016 10.3401 10.8327V14.2483C10.3401 14.8787 9.7267 15.3951 8.9777 15.3951V15.3939Z"  stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <p id = "first"
                className="ml-1 font-SCDream3 md:font-SCDream4 lg:font-SCDream5 text-[9px] md:text-sm lg:text-base text-gray-400"
                > 스크롤을 내려 Gallendar에 대해서 확인하세요! </p>
 
            </div>

        </>
    )

}

 

    // const outerDivRef = useRef<any>(null);
    // const [scrollIdx, setScrollIndex] = useState<number>(1);
    // const DIVIDER_HEIGHT = 5;
    // useEffect(() => {
    //   const wheelHandler = (e: { preventDefault: any; deltaY: number }) => {
    //     // e.preventDefault();
    //     const { deltaY } = e;
    //     const { scrollTop } = outerDivRef.current; // 스크롤 위쪽 끝부분 위치 
    //     const pageHeight = window.innerHeight; // 화면 세로길이, 100vh와 같습니다.
    //     const totalHeight = document.body.scrollHeight;
    //     console.log(window.pageYOffset, pageHeight, totalHeight);
  
    //     if (deltaY > 0) {
    //       // 스크롤 내릴 때
    //       if (scrollTop >= 0 && scrollTop < pageHeight) {
    //         //현재 1페이지
    //         console.log("현재 1페이지, down");
    //         outerDivRef.current.scrollTo({
    //           top: pageHeight + DIVIDER_HEIGHT,
    //           left: 0,
    //           behavior: "smooth",
    //         });
    //         setScrollIndex(2);
    //         console.log(outerDivRef.current);
    //       } else if (scrollTop >= pageHeight && scrollTop < pageHeight * 2) {
    //         //현재 2페이지
    //         console.log("현재 2페이지, down");
    //         console.log(scrollTop);
  
    //         outerDivRef.current.scrollTo({
    //           top: pageHeight * 2 + DIVIDER_HEIGHT * 2,
    //           left: 0,
    //           behavior: "smooth",
    //         });
    //         setScrollIndex(3);
    //       } else {
    //         // 현재 3페이지
    //         console.log("현재 3페이지, down");
    //         outerDivRef.current.scrollTo({
    //           top: pageHeight * 2 + DIVIDER_HEIGHT * 2,
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
    //           top: pageHeight + DIVIDER_HEIGHT,
    //           left: 0,
    //           behavior: "smooth",
    //         });
    //         // setScrollIndex(3);
    //       }
    //     }
    //   };
    //   const outerDivRefCurrent = outerDivRef.current;
    //   outerDivRefCurrent?.addEventListener("wheel", wheelHandler);
    //   return () => {
    //     outerDivRefCurrent?.removeEventListener("wheel", wheelHandler);
    //   };
    // }, []);








    
    // const foo = useRef(null);
    // const handleScroll = (e:React.MouseEvent<HTMLDivElement>) => {
    //     e.preventDefault();
    //     const value = window.scrollY;

    // }

    // window.addEventListener('scroll', (e: Event) => {
        
    //     const scrollable = document.documentElement.scrollHeight - window.innerHeight;
    //      const scrolled = window.pageYOffset;
    //                     console.log(scrollable);
    //                     console.log(scrolled);

    //                     // const handleScroll = (scrollY:number) => {
    //                     //     const pTag = document.getElementById('second');
                    
    //                     // }
                    
                    
    //                         if (scrolled >= 961 && scrolled <= 3824) {
    //                                                 console.log("두 번째 문장");
    //                                                 document.getElementById('second');
    //                                             }
                        

    // })


    // const [scrollY, setScrollY] = useState<number>(0);
    // const [text, setText] = useState<string>("스크롤을 내려 Gallendar에 대해서 확인하세요!")

// if (typeof window !== "undefined") {
//     window.addEventListener('scroll', (e: Event) => {

//         const scrollable = document.documentElement.scrollHeight - window.innerHeight;
//         const scrolled = window.pageYOffset;
//                     console.log(scrollable);
//                     console.log(scrolled);
//     })

// }

// useEffect(() => {
//     const handleScroll = (e : { preventDefault: any; deltaY: number }) => {
//         if (typeof window !== "undefined") {
//              const scrollable = document.documentElement.scrollHeight - window.innerHeight;
//               const scrolled = window.pageYOffset;
//         }
//     }
// })


// function handleScroll(e: React.MouseEvent<HTMLDivElement>) {
//         e.preventDefault();
//         if (typeof window !== "undefined") {
//             window.addEventListener('scroll', (e: Event) => {

//                 const scrollable = document.documentElement.scrollHeight - window.innerHeight;
//                 const scrolled = window.pageYOffset;
//                 console.log(scrollable);
//                 console.log(scrolled);

//                 const newPtag = document.createElement("p");
//                 if (scrolled === 0) {
//                     console.log("첫 번째 문장");
//                     newPtag.innerHTML = "스크롤을 내려 Gallendar에 대해서 확인하세요!";
//                 }
//                 if (scrolled >= 961 && scrolled <= 3824) {
//                     console.log("두 번째 문장");
//                     newPtag.innerHTML = "스크롤을 내려 확인하세요!";
//                 }
//                 if (scrolled === scrollable) {
//                     console.log("하단 문구 없어지기");
//                 }
//             });
//         }
//     }

    // const targetRef = useRef(null);  
    // const handleScroll = () => {
    //   console.log("scrolling");
      
    //   if (window.scrollY > 0) {
    //     targetRef.current.style.position = "fixed";      
    //   }
    // };
  
    // useEffect(() => {    
    //   const timer = setInterval(() => {
    //     window.addEventListener("scroll", handleScroll);
    //   }, 100);
    //   return () => {
    //     clearInterval(timer);
    //     window.removeEventListener("scroll", handleScroll);
    //   };
    // }, []);

    // useEffect(() => {
    //     const handleScroll = (e : { preventDefault : any  }) => {
    //       console.log('window.scrollY', window.scrollY);
    //     };
    
    //     window.addEventListener('scroll', handleScroll);
    
    //     return () => {
    //       window.removeEventListener('scroll', handleScroll);
    //     };
    //   }, []);

    // const handleScroll = (e: React.MouseEvent<HTMLButtonElement> ) => {
       

    //     const box = document.getElementById("box")


    //      window.addEventListener('scroll',( e : Event)=> {
    //         e.preventDefault();
    //         const scrollable = document.documentElement.scrollHeight - window.innerHeight;
    //         const scrolled = window.pageYOffset;
    //         console.log(scrollable)
    //         console.log(scrolled)

    //         if(scrolled === 0) {
    //             console.log("첫 번째 문장")
    //             //  React.createElement;
    //         }
    //         if(scrolled >= 961 && scrolled  <= 3824) {
    //             console.log("두 번째 문장")
    //         }
    //         if(scrolled === scrollable)  {
    //             console.log("하단 문구 없어지기")
    //         }
    //     })
    //   };

  
        // window.addEventListener('scroll',()=> {
        //     const scrollable = document.documentElement.scrollHeight - window.innerHeight;
        //     const scrolled = window.pageYOffset;
        //     console.log(scrollable)
        //     console.log(scrolled)

        //     if(scrolled === 0) {
        //         console.log("첫 번째 문장")
        //     }
        //     if(scrolled >= 961 && scrolled  <= 3824) {
        //         console.log("두 번째 문장")
        //     }
        //     if(scrolled === scrollable)  {
        //         console.log("하단 문구 없어지기")
        //     }
        // })

      
    
  
    //   function callbackFunc = (e: React.MouseEvent<HTMLButtonElement>) => {
    //     console.log(e.target.scrollTop)
    //   }

    // function removeElement(elementId) {
    //     // Removes an element from the document
    //     var element = document.getElementById(elementId);
    //     element.parentNode.removeChild(element);
    // }
export default ScrollImg;