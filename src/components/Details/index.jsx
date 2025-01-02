import React from 'react'
import Navbar from '../Navbar'
import styles from './index.module.scss'
import Link from 'next/link'
import Image from 'next/image'
import Footer from '../Footer'
const Details = ({ dataBlogDetails }) => {
  return (
    <>
      <Navbar dark={true} />

      <section id='details' className={styles.details}>
        <div className="container">
          <div className={styles.sec_container}>
            <div className={styles.sec_title}><h3>{dataBlogDetails.title} </h3></div>

            <div className={styles.desc}>
              <p>{dataBlogDetails.desc}</p>
            </div>


            <div className={styles.img_container}>
              <Image
                src={dataBlogDetails.image}
                alt={dataBlogDetails.title}
                width={1128}
                height={641}
              />
            </div>


            <div className={styles.content}>
              <div
                dangerouslySetInnerHTML={{ __html: dataBlogDetails.content }}
              />

            </div>




          </div>
        </div>
      </section >

      <Footer />
    </>
  )
}

export default Details