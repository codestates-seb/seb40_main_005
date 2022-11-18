
const ScrollImg = () => {
    return (
        <>
        
        <div className="z-50 w-full jus flex items-center justify-center  bottom-5 fixed">
          <span className="absolute animate-ping flex h-16 w-16 rounded-full bg-orange-400 opacity-75"></span>
          <svg className="h-10 w-100 fill-none	stroke-gray-400	" viewBox="0 0 18 35" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.7799 28.0179H7.06376C3.72819 28.0179 1 25.7215 1 22.9143V12.1314C1 9.32429 3.72886 7.02783 7.06376 7.02783H10.7792C14.1148 7.02783 16.843 9.32429 16.843 12.1314V22.9143C16.843 25.7215 14.1141 28.0179 10.7792 28.0179H10.7799Z"  stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M12.4582 31.1336L8.95757 34.0803M5.42871 31.1336L8.92938 34.0803M5.42871 3.94669L8.92938 1M12.4582 3.94669L8.95757 1M8.9777 15.3939H8.86495C8.50389 15.3932 8.15787 15.2721 7.90256 15.0572C7.64725 14.8423 7.50342 14.5511 7.50254 14.2471V10.8321C7.50254 10.2016 8.11596 9.68585 8.86495 9.68585H8.9777C9.7267 9.68585 10.3401 10.2016 10.3401 10.8327V14.2483C10.3401 14.8787 9.7267 15.3951 8.9777 15.3951V15.3939Z"  stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <p className="ml-3 font-SCDream3 text-gray-400	">스크롤을 내려 Gallendar에 대해서 확인하세요!</p>
        </div>
        </>
    )
}

export default ScrollImg;