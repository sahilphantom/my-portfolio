import { clsx } from "clsx"

const badgeVariants = {
  default: "bg-purple-600 text-white hover:bg-purple-700",
  secondary: "bg-gray-200 text-gray-800 hover:bg-gray-300",
  destructive: "bg-red-600 text-white hover:bg-red-700",
  outline: "text-gray-800 border border-gray-300",
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
