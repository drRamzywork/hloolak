import React from 'react'
import styles from './index.module.scss';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, FreeMode, Autoplay } from 'swiper/modules';
import { motion } from 'framer-motion';
import Image from 'next/image';


const Partners = () => {
  return (
    <>
      <section id='partners' className={styles.partners}>

        <div className={styles.sec_title}>
          <h3>شركاء النجاح</h3>
        </div>

        <div className={styles.desc}>
          <p>نجاح عملائنا هو نجاحنا</p>
        </div>
        <div className="container">

          <div className={styles.swiper_container}>
            <Swiper
              spaceBetween={13}
              slidesPerView={7.5}
              pagination={{ clickable: true }}
              dir="ltr"
              modules={[Navigation, FreeMode, Autoplay]}
              initialSlide={1}
              className={styles.swiper_contain}
              centeredSlides={false}
              style={{ width: '100%' }}
              autoplay={{
                delay: 3000
              }}
              loop={true}


            >
              <SwiperSlide>

                <motion.div initial={{ opacity: 0, }}
                  whileInView={{ opacity: 1, }}
                  transition={{ duration: 0.7, type: "tween" }} className={styles.img_container}>
                  <Image
                    src="/assets/imgs/partners/logo.png"
                    alt="Vercel logomark"
                    width={
                      123.42}
                    height={
                      123.42}
                  />
                </motion.div>
              </SwiperSlide>
              <SwiperSlide>

                <motion.div initial={{ opacity: 0, }}
                  whileInView={{ opacity: 1, }}
                  transition={{ duration: 0.7, type: "tween" }} className={styles.img_container}>
                  <Image
                    src="/assets/imgs/partners/logo.png"
                    alt="Vercel logomark"
                    width={
                      123.42}
                    height={
                      123.42}
                  />
                </motion.div>
              </SwiperSlide>
              <SwiperSlide>

                <motion.div initial={{ opacity: 0, }}
                  whileInView={{ opacity: 1, }}
                  transition={{ duration: 0.7, type: "tween" }} className={styles.img_container}>
                  <Image
                    src="/assets/imgs/partners/logo.png"
                    alt="Vercel logomark"
                    width={
                      123.42}
                    height={
                      123.42}
                  />
                </motion.div>
              </SwiperSlide>
              <SwiperSlide>

                <motion.div initial={{ opacity: 0, }}
                  whileInView={{ opacity: 1, }}
                  transition={{ duration: 0.7, type: "tween" }} className={styles.img_container}>
                  <Image
                    src="/assets/imgs/partners/logo.png"
                    alt="Vercel logomark"
                    width={
                      123.42}
                    height={
                      123.42}
                  />
                </motion.div>
              </SwiperSlide>
              <SwiperSlide>

                <motion.div initial={{ opacity: 0, }}
                  whileInView={{ opacity: 1, }}
                  transition={{ duration: 0.7, type: "tween" }} className={styles.img_container}>
                  <Image
                    src="/assets/imgs/partners/logo.png"
                    alt="Vercel logomark"
                    width={
                      123.42}
                    height={
                      123.42}
                  />
                </motion.div>
              </SwiperSlide>
              <SwiperSlide>

                <motion.div initial={{ opacity: 0, }}
                  whileInView={{ opacity: 1, }}
                  transition={{ duration: 0.7, type: "tween" }} className={styles.img_container}>
                  <Image
                    src="/assets/imgs/partners/logo.png"
                    alt="Vercel logomark"
                    width={
                      123.42}
                    height={
                      123.42}
                  />
                </motion.div>
              </SwiperSlide>
              <SwiperSlide>

                <motion.div initial={{ opacity: 0, }}
                  whileInView={{ opacity: 1, }}
                  transition={{ duration: 0.7, type: "tween" }} className={styles.img_container}>
                  <Image
                    src="/assets/imgs/partners/logo.png"
                    alt="Vercel logomark"
                    width={
                      123.42}
                    height={
                      123.42}
                  />
                </motion.div>
              </SwiperSlide>
              <SwiperSlide>

                <motion.div initial={{ opacity: 0, }}
                  whileInView={{ opacity: 1, }}
                  transition={{ duration: 0.7, type: "tween" }} className={styles.img_container}>
                  <Image
                    src="/assets/imgs/partners/logo.png"
                    alt="Vercel logomark"
                    width={
                      123.42}
                    height={
                      123.42}
                  />
                </motion.div>
              </SwiperSlide>
              <SwiperSlide>

                <motion.div initial={{ opacity: 0, }}
                  whileInView={{ opacity: 1, }}
                  transition={{ duration: 0.7, type: "tween" }} className={styles.img_container}>
                  <Image
                    src="/assets/imgs/partners/logo.png"
                    alt="Vercel logomark"
                    width={
                      123.42}
                    height={
                      123.42}
                  />
                </motion.div>
              </SwiperSlide>





            </Swiper>
          </div>
        </div>
      </section>
    </>
  )
}

export default Partners