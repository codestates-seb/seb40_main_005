import Image from "next/image";

const CertifyPageLayout = (props : {
    children : React.ReactNode
}) => {

    return (
        <>
    
            <div className="flex flex-col justify-center md:justify-evenly lg:justify-center bg-bgGray items-center  h-screen">
                <Image
                className=""
                    src="/images/logo export(orange).svg"
                    width={150}
                    height={50}
                />
                <div className="flex h-4/5 w-80 lg:mt-11 lg:mb-10 lg:h-[32rem] md:w-4/6 lg:w-3/5 drop-shadow-2xl">
                    <div className="lg:w-1/2 hidden md:hidden lg:block h-full bg-amber-300">
                        {/* <div className="absolute top-0 bottom-0 left-0 right-0 w-full h-screen bg-white/60"></div> */}
                        <img></img>
                        <div className=""></div>
                    </div>
                    <div className="w-full p-8 lg:w-1/2  h-full bg-bgWhite"> {props.children} </div>
                </div>
            </div>
        </>
    )

}

export default CertifyPageLayout;