import React from "react";
import { ButtonProps } from "@/interfaces";
const sizeClasses: Record<string, string> = {
  small: "px-2 py-1 text-xs",
  medium: "px-4 py-2 text-sm",
  large: "px-6 py-3 text-base",
};

const shapeClasses: Record<string, string> = {
  "rounded-sm": "rounded-sm",
  "rounded-md": "rounded-md",
  "rounded-full": "rounded-full",
};

const Button: React.FC<ButtonProps> = ({
  title,
  onClick,
  type = "button",
  styles = "",
  size = "medium",
  shape = "rounded-md",
}) => {
  return (
    <div className="inline-block">
      <button
        type={type}
        onClick={onClick}
        className={`
          bg-gray-50 hover:bg-green-50
          text-gray-700 hover:text-green-700
          border border-gray-200 hover:border-green-300
          transition-colors duration-200 font-semibold
          ${sizeClasses[size]}
          ${shapeClasses[shape]}
          ${styles}
        `}
      >
        {title}
      </button>
    </div>
  );
};

export default Button;
