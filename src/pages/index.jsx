import Head from "next/head";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Home/Hero";
import Goals from "@/components/Home/Goals";
import Rate from "@/components/Home/Rate";
import Services from "@/components/Home/Services";
import Products from "@/components/Home/Products";
import Partners from "@/components/Home/Partners";
import Office from "@/components/Home/Office";
import Contact from "@/components/Home/Contact";
import Footer from "@/components/Footer";

export default function Home({ dataPartners }) {
  const siteName = 'حلولك التقنية';
  const imagePath = '/logo.png';
  const siteDescrription = 'ندمج بين التحليل الإبداعي والتخطيط الاستراتيجي لتقديم حلول تقنية متكاملة';

  const siteURL = process.env.NEXT_PUBLIC_APP_DOMAIN;



  return (
    <>

      <Head>
        <title>{siteName}</title>
        <meta charSet="UTF-8" />
        <link rel="icon" href="/logo.png" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="title" content="" />
        <link rel="icon" type="image/png" href={`${imagePath}`} />
        <meta name="theme-color" content="#cd5827" />
        <meta name="mobile-web-app-capable" content="no" />
        <meta name="application-name" content={siteName} />
        <meta name="apple-mobile-web-app-capable" content="no" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black" />
        <meta name="apple-mobile-web-app-title" content={siteName} />
        <link
          rel="apple-touch-icon"
          href={`${siteURL}${imagePath}`}
        />
        <link
          rel="apple-touch-startup-image"
          href={`${siteURL}${imagePath}`}
        />
        <meta name="author" content={siteName} />
        <meta name="description" content={siteDescrription} />
        <link rel="canonical" href={`${siteURL}/`} />
        <meta name="msapplication-TileColor" content="#cd5827" />
        <meta
          name="msapplication-TileImage"
          content={`${siteURL}${imagePath}`}
        />
        <meta name="msapplication-square70x70logo" content={imagePath} />
        <meta name="msapplication-square150x150logo" content={imagePath} />
        <meta name="msapplication-wide310x150logo" content={imagePath} />
        <meta name="msapplication-square310x310logo" content={imagePath} />
        <link rel="apple-touch-icon-precomposed" href={imagePath} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content={siteName} />
        <meta property="og:locale" content={'ar'} />
        <meta property="og:locale:alternate" content={'ar'} />
        <meta
          property="og:url"
          content={`${siteURL}/`}
        />
        <meta property="og:title" content={siteName} />
        <meta property="og:description" content={siteDescrription} />
        <meta
          property="og:image"
          content={`${siteURL}${imagePath}`}
        />
        <meta itemProp="name" content={siteName} />
        <meta itemProp="author" content={siteName} />
        <meta
          itemProp="image"
          content={`${siteURL}${imagePath}`}
        />
        <meta itemProp="description" content={siteDescrription} />
        <meta
          name="twitter:image"
          content={`${siteURL}${imagePath}`}
        />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@" />
        <meta name="twitter:creator" content="@" />
        <meta name="twitter:title" content={siteName} />
        <meta
          name="twitter:image:src"
          content={`${siteURL}${imagePath}`}
        />
        <meta name="twitter:description" content={siteDescrription} />
      </Head>

      <>
        <Navbar dark={false} />
        <Hero />
        <Goals />
        <Rate />
        <Services />
        <Products />
        <Partners dataPartners={dataPartners} />
        <Office />
        <Contact />
        <Footer />
      </>
    </>
  );
}



export async function getStaticProps() {
  const apiDomain = process.env.NEXT_PUBLIC_API_DOMAIN;

  const resPartners = await fetch(`${apiDomain}/partners`)
  const dataPartners = await resPartners.json();


  return {
    props: {
      dataPartners: dataPartners?.data
    },
    revalidate: 10
  };
}
