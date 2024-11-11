import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";


export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// export function saltAndHashPassword(password: string): string {
//   const salt = bcrypt.genSaltSync(10);

//   const hash = bcrypt.hashSync(password, salt);

//   return hash;
// }
