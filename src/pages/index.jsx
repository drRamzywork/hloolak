import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Goals from "@/components/Goals";
import Rate from "@/components/Rate";
import Services from "@/components/Services";
import Products from "@/components/Products";

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
      </>
    </>
  );
}
