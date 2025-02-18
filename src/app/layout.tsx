export const dynamic = "force-dynamic";

// import type { Metadata } from "next";
import { Inter, IBM_Plex_Serif } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const ibmPlexSerif = IBM_Plex_Serif({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-ibm-plex-serif",
});

// export const metadata: Metadata = {
//   title: "TECHNOLAB ISTA",
//   description: "Le meilleure universite pour les excelent.",
//   icons: {
//     icon: "/logo.ico",
//   },
// };

// function Layout({ children }: { children: React.ReactNode }) {
//   const { theme } = useSettings();

//   return (
//     <div
//       className={`${
//         theme === "Sombre" ? "bg-gray-700 border-gray-300 text-gray-200" : ""
//       }`}
//     >
//       <div className="flex flex-row">
//         <div className="w-[250px]">
//           <Sidebar />
//         </div>
//         <div className="w-full h-screen overflow-scroll flex-col min-h-screen overflow-x-hidden">
//           <Header />
//           <div className="flex z-20">{children}</div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <html lang="en">
//       <body
//         className={`${geistSans.variable} ${geistMono.variable} antialiased`}
//       >
//         <SettingsProvider>
//           <Layout>{children}</Layout>
//         </SettingsProvider>
//       </body>
//     </html>
//   );
// }

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
<<<<<<< HEAD
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Container principal */}
        <div className="flex flex-row">
          <div className="w-[250px]">
            <Sidebar />
          </div>
          <div className="w-full h-screen overflow-scroll flex-col min-h-screen overflow-x-hidden">
            <Header />
            <div className="flex z-20">{children}</div>
          </div>
        </div>
=======
      <body className={`${inter.variable} ${ibmPlexSerif.variable}`}>
        {children}
>>>>>>> fa997886c0af125324b7f3364140b1f43803b458
      </body>
    </html>
  );
}
