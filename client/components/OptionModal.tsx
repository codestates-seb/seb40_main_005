import { ReactNode } from "react";

interface Props {
    children : React.ReactNode,
}

const OptionModal = ({children}:Props) => {

    return (
        <>
        <div className="relative w-[50px] h-[50px] z-50 bg-bgGray">
            {children}
        </div>
        </>
    )
}

export default OptionModal;