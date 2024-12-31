import "@/styles/globals.scss";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App({ Component, pageProps }) {
  return (
    <main>
      <Component {...pageProps} />
    </main>
  );
}

// import "@/styles/globals.scss";
// import { IBM_Plex_Sans_Arabic } from "next/font/google";
// import "bootstrap/dist/css/bootstrap.min.css";

// // Configure IBM Plex Sans Arabic
// const ibmPlexSansArabic = IBM_Plex_Sans_Arabic({
//   subsets: ["arabic"],
//   weight: ["300", "400", "500", "600", "700"],
//   display: "swap",
// });

// export default function App({ Component, pageProps }) {
//   return (
//     <main className={`${ibmPlexSansArabic.className}`}>
//       <Component {...pageProps} />
//     </main>
//   );
// }
