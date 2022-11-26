interface Props {
  onClick : () => void;
}

const LeftBtn = ({onClick}:Props) => {
  return (
    <>
      <div className="w-fit h-fit cursor-pointer" onClick={onClick}>
        <svg
          width="15"
          height="15"
          viewBox="0 0 10 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.5 6.86603C-0.166667 6.48113 -0.166667 5.51888 0.5 5.13397L8 0.803848C8.66667 0.418948 9.5 0.900074 9.5 1.66987L9.5 10.3301C9.5 11.0999 8.66667 11.5811 8 11.1962L0.5 6.86603Z"
            fill="coral"
            fill-opacity="0.63"
          />
        </svg>
      </div>
    </>
  );
};

export default LeftBtn;
