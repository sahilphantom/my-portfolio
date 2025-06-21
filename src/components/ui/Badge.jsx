import { clsx } from "clsx"

const badgeVariants = {
  default: "bg-black text-white hover:bg-black border border-white",
  secondary: "bg-black text-white border border-white hover:bg-black",
  destructive: "bg-black text-white border border-white hover:bg-black",
  outline: "bg-black text-white border border-white hover:bg-black",
}

function Badge({ className, variant = "default", ...props }) {
  return (
    <div
      className={clsx(
        "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors",
        badgeVariants[variant],
        className,
      )}
      {...props}
    />
  )
}

export { Badge, badgeVariants }
