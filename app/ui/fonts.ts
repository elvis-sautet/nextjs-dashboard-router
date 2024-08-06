import { Inter, Lexend, Lusitana, Rubik } from "next/font/google";

export const inter = Inter({
  subsets: ["latin-ext"],
});

export const lusitana = Lusitana({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export const rubik = Rubik({
  weight: ["400", "500", "700"],
  subsets: ["cyrillic"],
});

export const lexend = Lexend({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
});
