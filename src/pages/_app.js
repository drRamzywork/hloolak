// import "@/styles/globals.scss";
// import { Noto_Sans_Arabic, IBM_Plex_Sans_Arabic } from "next/font/google";

// const notoSansArabic = Noto_Sans_Arabic({
//   subsets: ["latin"],
//   weight: ["100", "400", "700"], // Include the weights you want
//   display: "swap",
// });

// const ibmPlexSansArabic = IBM_Plex_Sans_Arabic({
//   subsets: ["latin"],
//   weight: ["300", "400", "500", "600", "700"], // Include the weights you want
//   display: "swap",
// });

// export default function App({ Component, pageProps }) {
//   return (
//     <main
//       className={`${notoSansArabic.className} ${ibmPlexSansArabic.className}`}
//     >
//       <Component {...pageProps} />
//     </main>
//   );
// }

import "@/styles/globals.scss";
import { IBM_Plex_Sans_Arabic, Noto_Sans_Arabic } from "next/font/google";
import "bootstrap/dist/css/bootstrap.min.css";

// Configure IBM Plex Sans Arabic
const ibmPlexSansArabic = IBM_Plex_Sans_Arabic({
  subsets: ["arabic"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

// Configure Noto Sans Arabic
const notoSansArabic = Noto_Sans_Arabic({
  subsets: ["arabic"],
  weight: ["100", "400", "700"],
  display: "swap",
});

export default function App({ Component, pageProps }) {
  return (
    <main
      className={`${ibmPlexSansArabic.className} ${notoSansArabic.className}`}
    >
      <Component {...pageProps} />
    </main>
  );
}
