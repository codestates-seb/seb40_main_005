import { ReactNode } from "react";

interface Props {
    children : React.ReactNode,
}

const OptionModal = ({children}:Props) => {

    return (
        <>
        <div className="absolute right-0 w-fit h-fit px-2 py-2 rounded-md z-50 bg-bgGray drop-shadow-lg ">
            {children}
        </div>
        </>
    )
}

export default OptionModal;