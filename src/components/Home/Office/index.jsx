import React, { useRef, useState } from 'react';
import styles from './index.module.scss';
import { motion } from 'framer-motion';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, FreeMode, Autoplay } from 'swiper/modules';
import Image from 'next/image';


const breakpoints = {
  320: {
    slidesPerView: 3,
  },
  380: {
    slidesPerView: 3,
  },
  640: {
    slidesPerView: 3,
  },
  768: {
    slidesPerView: 3,
  },
  1024: {
    slidesPerView: 3,
  },
  1366: {
    slidesPerView: 3,
  },
  1920: {
    slidesPerView: 3,
  },
};


const data = [
  { img: '/assets/imgs/office/1.jpeg' },
  { img: '/assets/imgs/office/2.jpeg' },
  { img: '/assets/imgs/office/3.jpeg' },
  { img: '/assets/imgs/office/4.jpeg' },
  { img: '/assets/imgs/office/4.jpeg' },
  { img: '/assets/imgs/office/4.jpeg' },
  { img: '/assets/imgs/office/4.jpeg' },
  { img: '/assets/imgs/office/4.jpeg' },
  { img: '/assets/imgs/office/4.jpeg' },
]

const Office = () => {
  const swiperRef = useRef(null);
  const [activeSlide, setActiveSlide] = useState(0);

  const handleSlideChange = (swiper) => {
    setActiveSlide(swiper.activeIndex);
  };

  const handleSlideClick = (index) => {
    swiperRef?.current?.slideTo(index);
    setActiveSlide(index);
  };
  return (
    <>
      <section id='office' className={styles.office}>
        <div className={styles.sec_title}>
          <h3>مكتبنا </h3>
        </div>



        <div className="container">
          <motion.div
            key={activeSlide}
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0 }}
            transition={{ duration: 1, type: "tween" }} className={styles.active_slide}>
            <Image
              src={data[activeSlide].img}
              alt=""
              width={1128}
              height={559.96}
            />
          </motion.div>


          <div className={styles.swiper_container}>
            <Swiper
              spaceBetween={16}
              slidesPerView={4.2}
              pagination={{ clickable: true }}
              dir="rtl"
              modules={[Navigation, FreeMode, Autoplay]}
              initialSlide={1}
              className={styles.swiper_contain}
              centeredSlides={true}
              style={{ width: '100%' }}
              autoplay={{
                delay: 3000
              }}
              loop={true}




              // slidesPerView={3}
              onSwiper={(swiper) => swiperRef.current = swiper}
              onSlideChange={handleSlideChange}
              breakpoints={breakpoints}



            >
              {data?.map((box, index) => (
                <SwiperSlide key={index} >

                  <motion.div
                    onClick={() => handleSlideClick(index)}

                    initial={{ opacity: 0, }}
                    whileInView={{ opacity: 1, }}
                    transition={{ duration: 0.7, type: "tween" }}

                    className={`${styles.img_container} ${activeSlide === index ? styles.active : ''}`}
                  >
                    <Image
                      src={box.img}
                      alt=""
                      width={
                        123.42}
                      height={
                        123.42}
                    />
                  </motion.div>
                </SwiperSlide>
              ))}








            </Swiper>
          </div>
        </div>
      </section>
    </>
  )
}

export default Office