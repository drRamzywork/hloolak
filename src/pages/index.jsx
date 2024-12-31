import Head from "next/head";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Goals from "@/components/Goals";
import Rate from "@/components/Rate";
import Services from "@/components/Services";
import Products from "@/components/Products";
import Partners from "@/components/Partners";
import Office from "@/components/Office";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>حلولك التقنية</title>
        <meta name="description" content="نقدم لك حلولاً رقمية مبتكرة تعزز أعمالك وتساعدك على تحقيق النجاح." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/assets/svgs/logo.svg" />
      </Head>

      <>
        <Navbar />
        <Hero />
        <Goals />
        <Rate />
        <Services />
        <Products />
        <Partners />
        <Office />
        <Contact />
        <Footer />
      </>
    </>
  );
}
