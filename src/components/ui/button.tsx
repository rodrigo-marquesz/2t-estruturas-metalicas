import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-ring/50 dark:focus-visible:ring-ring/30",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow hover:bg-primary/90 dark:bg-teal-500 dark:text-gray-900 dark:hover:bg-teal-600 dark:shadow-teal-500/20",
        destructive:
          "bg-destructive text-destructive-foreground shadow hover:bg-destructive/90 dark:bg-rose-600 dark:hover:bg-rose-700",
        outline:
          "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:text-white",
        secondary:
          "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80 dark:bg-gray-700 dark:hover:bg-gray-600",
        ghost:
          "hover:bg-accent hover:text-accent-foreground dark:hover:bg-gray-700 dark:hover:text-white",
        link: "text-primary underline-offset-4 hover:underline dark:text-teal-400",
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5 text-xs",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        icon: "size-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }