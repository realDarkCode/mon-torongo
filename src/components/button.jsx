import clsx from "clsx";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { twMerge } from "tailwind-merge";

const Button = ({
  variant = "primary",
  size = "md",
  children,
  icon,
  iconPosition = "right",
  iconAnimation,
  className = "",
  ...props
}) => {
  const baseClasses = twMerge(
    "inline-flex items-center gap-2 font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 hover:cursor-pointer"
  );

  const variants = {
    primary: "text-white bg-light-400  hover:bg-white hover:text-brand-950 ",
    secondary:
      "bg-white text-brand-950 hover:text-brand-400 border border-brand-200 ",
    textLink: "text-brand-500 hover:text-brand-600 focus:ring-brand-500",
    iconLink: "bg-brand-500 text-white hover:bg-brand-600 focus:ring-brand-500",
    iconLinkDark:
      "bg-neutral-800 text-white hover:bg-neutral-700 focus:ring-neutral-500",
  };

  const sizes = {
    sm: "px-2 py-1 text-xs sm:px-3 sm:py-1.5 sm:text-sm rounded-md",
    md: "px-3 py-1.5 text-sm sm:px-4 sm:py-2 sm:text-base rounded-md",
    lg: "px-4 py-2 text-base sm:px-6 sm:py-3 sm:text-lg rounded-lg",
  };

  const iconSizes = {
    sm: "w-3 h-3 sm:w-4 sm:h-4",
    md: "w-4 h-4 sm:w-5 sm:h-5",
    lg: "w-5 h-5 sm:w-6 sm:h-6",
  };

  return (
    <button
      className={twMerge(
        baseClasses,
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {icon && iconPosition === "left" && (
        <ArrowLeft
          className={twMerge(
            clsx(
              "inline",
              iconSizes[size],
              iconAnimation && `animate-${iconAnimation}`
            )
          )}
        />
      )}
      {children}
      {icon && iconPosition === "right" && (
        <ArrowRight
          className={twMerge(
            clsx(
              "inline",
              iconSizes[size],
              iconAnimation && `animate-${iconAnimation}`
            )
          )}
        />
      )}
    </button>
  );
};

export default Button;
