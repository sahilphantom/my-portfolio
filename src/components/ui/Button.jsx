import React from "react"
import { clsx } from "clsx"

const buttonVariants = {
  variant: {
    default: "bg-purple-600 text-white hover:bg-purple-700",
    destructive: "bg-black text-white border border-white hover:bg-black",
    outline: "bg-black text-white border border-white hover:bg-black",
    secondary: "bg-black text-white border border-white hover:bg-black",
    ghost: "bg-black text-white border border-white hover:bg-black",
    link: "text-white underline-offset-4 hover:underline",
  },
  size: {
    default: "h-10 px-4 py-2",
    sm: "h-9 rounded-md px-3",
    lg: "h-11 rounded-md px-8",
    icon: "h-10 w-10",
  },
}

const Button = React.forwardRef(
  ({ className, variant = "default", size = "default", asChild = false, ...props }, ref) => {
    const Comp = asChild ? "a" : "button"
    return (
      <Comp
        className={clsx(
          "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
          buttonVariants.variant[variant],
          buttonVariants.size[size],
          className,
        )}
        ref={ref}
        {...props}
      />
    )
  },
)
Button.displayName = "Button"

export { Button, buttonVariants }
