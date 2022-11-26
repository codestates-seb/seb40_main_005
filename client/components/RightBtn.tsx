interface Props {
  onClick: () => void;
}

const RightBtn = ({ onClick }: Props) => {
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
            d="M9.5 5.13397C10.1667 5.51888 10.1667 6.48113 9.5 6.86603L2 11.1962C1.33333 11.5811 0.5 11.0999 0.5 10.3301L0.500001 1.66987C0.500001 0.900072 1.33333 0.418947 2 0.803847L9.5 5.13397Z"
            fill="coral"
            fill-opacity="0.63"
          />
        </svg>
      </div>
    </>
  );
};

export default RightBtn;
