// import type { Metadata } from "next";
// import { Oswald } from "next/font/google";
// import localFont from "next/font/local";
// import "./globals.css";
// import { cn } from "@/lib/utils";
// import GrainEffect from "@/components/visualEffects/grain-effect";
// import Cursor from "@/components/cursor/cursor";

// //Fonts
// // const MainFont = Bricolage_Grotesque({ subsets: ["latin"] });
// const OswaldFont = Oswald({ subsets: ["latin"], variable: "--font-oswald" });
// const PixelFont = localFont({
//   src: "../public/assets/fonts/pixel-font-7.ttf",
//   variable: "--font-pixel",
// });

// //Metadata
// export const metadata: Metadata = {
//   title: "KATHIRAVAN T",
//   description: "kathiravan's official portfolio",
// };

// // export default function RootLayout({
// //   children,
// // }: Readonly<{
// //   children: React.ReactNode;
// // }>) {
// //   return (
// //     <html lang="en">
// //       <body
// //         className={cn(
// //           MainFont.className,
// //           OswaldFont.variable,
// //           PixelFont.variable
// //         )}
// //       >
// //         <GrainEffect />
// //         <Cursor color="#fff" />
// //         {children}
// //       </body>
// //     </html>
// //   );
// // }
// const bricolage = Bricolage_Grotesque({
//   subsets: ["latin"],
//   weight: ["400", "500", "700"], // choose the weights you need
// });

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <body className={bricolage.className}>{children}</body>
//     </html>
//   );
// }

import type { Metadata } from "next";
import { Oswald } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { cn } from "@/lib/utils";
import GrainEffect from "@/components/visualEffects/grain-effect";
import Cursor from "@/components/cursor/cursor";

// Fonts
const OswaldFont = Oswald({ subsets: ["latin"], variable: "--font-oswald" });
const PixelFont = localFont({
  src: "../public/assets/fonts/pixel-font-7.ttf",
  variable: "--font-pixel",
});

// Metadata
export const metadata: Metadata = {
  title: "KATHIRAVAN T",
  description: "kathiravan's official portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={cn(OswaldFont.variable, PixelFont.variable)}>
        <GrainEffect />
        <Cursor color="#fff" />
        {children}
      </body>
    </html>
  );
}
