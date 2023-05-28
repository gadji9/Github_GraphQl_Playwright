import React, { FunctionComponent } from "react";

interface IXProps {
  fill?: string;
  width?: string;
  height?: string;
}

const X: FunctionComponent<IXProps> = ({
  fill = "#5F5F5F",
  width = "800",
  height = "800",
}) => {
  return (
    <svg
      fill={fill}
      height={height}
      width={width}
      version="1.1"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      className="transition"
    >
      <g>
        <g>
          <path
            d="M503.847,432.949l-89.897-89.897c-0.002-0.002-0.003-0.003-0.006-0.006s-0.003-0.003-0.006-0.006l-32.135-32.135
			c-10.855-10.856-28.522-10.86-39.381,0l-3.939,3.939l-13.571-13.571c26.587-31.878,42.607-72.861,42.607-117.519
			C367.517,82.432,285.085,0,183.762,0S0.009,82.432,0.009,183.754s82.43,183.754,183.753,183.754
			c44.658,0,85.641-16.02,117.519-42.606l13.571,13.57l-3.94,3.94c-10.854,10.857-10.854,28.523,0.002,39.381l122.043,122.043
			c10.881,10.883,28.499,10.886,39.383,0.001l31.506-31.506C514.705,461.474,514.705,443.808,503.847,432.949z M183.762,334.091
			c-82.896,0-150.337-67.441-150.337-150.337S100.866,33.417,183.762,33.417S334.1,100.858,334.1,183.754
			S266.658,334.091,183.762,334.091z M338.482,362.103l23.629-23.629l16.388,16.388l-23.629,23.629L338.482,362.103z
			 M452.649,476.269l-74.15-74.15l23.629-23.629l74.15,74.15L452.649,476.269z"
          />
        </g>
      </g>
      <g>
        <g>
          <path
            d="M183.76,66.835c-9.228,0-16.709,7.481-16.709,16.709c0,9.228,7.481,16.709,16.709,16.709
			c46.045,0,83.505,37.457,83.505,83.5c0,9.228,7.481,16.709,16.709,16.709c9.228,0,16.709-7.481,16.709-16.709
			C300.683,119.284,248.231,66.835,183.76,66.835z"
          />
        </g>
      </g>
    </svg>
  );
};

export default X;
