import { ArrowLeft, ArrowRight } from "lucide-react";
import { twMerge } from "tailwind-merge";

const Button = ({
  variant = "primary",
  size = "md",
  children,
  icon,
  iconPosition = "right",
  className = "",
  ...props
}) => {
  const baseClasses =
    "inline-flex items-center gap-2 font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 hover:cursor-pointer";

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
    sm: "px-3 py-1.5 text-sm rounded-md",
    md: "px-4 py-2 text-base rounded-md",
    lg: "px-6 py-3 text-lg rounded-lg",
  };

  const iconSizes = {
    sm: "w-4 h-4",
    md: "w-4 h-4",
    lg: "w-5 h-5",
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
        <ArrowLeft className={twMerge("inline", iconSizes[size])} />
      )}
      {children}
      {icon && iconPosition === "right" && (
        <ArrowRight className={twMerge("inline", iconSizes[size])} />
      )}
    </button>
  );
};

export default Button;
