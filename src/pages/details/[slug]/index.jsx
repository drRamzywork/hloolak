import Details from '@/components/Details';
import Head from 'next/head';
import React from 'react'

const Blog = ({ dataBlogDetails }) => {

  const siteName = ` حلولك التقنية | ${dataBlogDetails?.title} `;
  const imagePath = '/logo.png';
  const siteDescrription = 'الأخبار: نشارككم الجديد والمهم';

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

      <Details dataBlogDetails={dataBlogDetails} />
    </>
  )
}

export default Blog;



export async function getStaticPaths() {
  const apiDomain = process.env.NEXT_PUBLIC_API_DOMAIN;

  // Fetch all sections from the API
  const resAllSections = await fetch(`${apiDomain}/content`)
  const dataAllSections = await resAllSections.json();

  // Map the slugs to paths
  const paths = dataAllSections?.data.map((item) => ({
    params: { slug: item.slug },
  }));

  // Return the paths
  return {
    paths,
    fallback: 'blocking',
  };
}

export async function getStaticProps(query) {
  const apiDomain = process.env.NEXT_PUBLIC_API_DOMAIN;
  const slug = query.params.slug


  const resBlogDetails = await fetch(`${apiDomain}/content?content_slug=${slug}`)
  const dataBlogDetails = await resBlogDetails.json();

  const resAllCategories = await fetch(`${apiDomain}/content`)
  const dataAllCategories = await resAllCategories.json();

  return {
    props: {
      dataBlogDetails: dataBlogDetails.data,
      dataAllCategories: dataAllCategories?.data,
    },
    revalidate: 10
  };
}
