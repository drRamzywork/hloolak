import React from 'react';
import styles from './index.module.scss';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, FreeMode, Autoplay } from 'swiper/modules';
import { motion } from 'framer-motion';
import Image from 'next/image';

const breakpoints = {
  320: {
    slidesPerView: 3, // Adjusted for better display on small screens
    spaceBetween: 10,
  },
  380: {
    slidesPerView: 2,
    spaceBetween: 10,
  },
  640: {
    slidesPerView: 3,
    spaceBetween: 10,
  },
  768: {
    slidesPerView: 4,
    spaceBetween: 15,
  },
  1024: {
    slidesPerView: 5,
    spaceBetween: 20,
  },
  1366: {
    slidesPerView: 6,
    spaceBetween: 20,
  },
  1920: {
    slidesPerView: 7,
    spaceBetween: 30,
  },
};

const Partners = () => {
  return (
    <section id="partners" className={styles.partners}>
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
            breakpoints={breakpoints} // Use breakpoints here
            pagination={{ clickable: true }}
            dir="ltr"
            modules={[Navigation, FreeMode, Autoplay]}
            initialSlide={1}
            className={styles.swiper_contain}
            centeredSlides={false}
            style={{ width: '100%' }}
            autoplay={{
              delay: 3000,
            }}
            loop={true}
          >
            {[...Array(10)].map((_, index) => (
              <SwiperSlide key={index}>
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.7, type: 'tween' }}
                  className={styles.img_container}
                >
                  <Image
                    src="/assets/imgs/partners/logo.png"
                    alt="Partner Logo"
                    width={123.42}
                    height={123.42}
                  />
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Partners;
