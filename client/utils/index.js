import { clsx } from "clsx"; //! clsx is used to make conditional logic work for classes
import { twMerge } from "tailwind-merge"; //! twMerge is used to merge the classes

//! cn stands for className
export function cn(...inputs) {
  return twMerge(clsx(inputs));
}
