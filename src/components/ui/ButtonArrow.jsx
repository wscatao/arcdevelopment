import React from 'react';

export default function ButtonArrow(props) {
  const { classs, width, height, fill } = props;
  return (
    <svg
      className={classs}
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill={fill}
      viewBox="0 0 18 18"
    >
      <path d="M9 3L7.94 4.06l4.19 4.19H3v1.5h9.13l-4.19 4.19L9 15l6-6z" />
    </svg>
  );
}
