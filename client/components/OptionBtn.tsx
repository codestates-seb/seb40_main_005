interface Props {
  onClick : () => void;
}

const optionBtn = ({onClick}:Props) => {
  return (
    <>
    <div className="mt-2 mb-5 w-fit h-fit cursor-pointer" onClick={onClick}>
      <svg
        width="20"
        height="4"
        viewBox="0 0 20 4"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="2" cy="2" r="2" fill="#616161" />
        <circle cx="10" cy="2" r="2" fill="#616161" />
        <circle cx="18" cy="2" r="2" fill="#616161" />
      </svg>
      </div>
    </>
  );
};

export default optionBtn;
