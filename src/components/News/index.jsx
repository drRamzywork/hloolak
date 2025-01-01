import React from 'react'
import Navbar from '../Navbar'
import { motion } from 'framer-motion'
import styles from './index.module.scss';
import Footer from '../Footer';
import Image from 'next/image';

const NewsComponent = () => {
  return (
    <>
      <Navbar dark={true} />
      <section id='news' className={styles.news}>
        <div className="container">
          <div className={styles.sec_container}>
            <div className={styles.sec_title}><h3>الأخبار: نشارككم الجديد والمهم</h3></div>

            <div className={styles.desc}><p>اكتشف مقالاتنا التي تغطي آخر المستجدات والنصائح القيمة في مجالات التسويق والإبداع وتقنية المعلومات.</p></div>


            <div className={styles.boxes_container}>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.7, type: 'tween' }}
                className={styles.box}>
                <div className={styles.img_container}>
                  <Image
                    src={'/assets/imgs/news/bg.jpeg'}
                    alt={''}
                    width={365.33}
                    height={342}
                  />


                </div>

                <div className={styles.text_container}>

                  <div className={styles.title}>
                    <h6>كيف تعزز وجودك على وسائل </h6>
                  </div>

                  <div className={styles.desc}>
                    <p>اكتشف أحدث الاستراتيجيات والتكتيكات التي يمكنك استخدامها لزيادة تفاعل جمهورك وتحقيق أهدافك التسويقية على منصات التواصل الاجتماعي. من تحليل البيانات إلى إنشاء محتوى جذاب، نقدم لك دليلاً شاملاً لتحقيق النجاح الرقمي</p>
                  </div>
                </div>

              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.7, type: 'tween' }}
                className={styles.box}>
                <div className={styles.img_container}>
                  <Image
                    src={'/assets/imgs/news/bg.jpeg'}
                    alt={''}
                    width={365.33}
                    height={342}
                  />


                </div>

                <div className={styles.text_container}>

                  <div className={styles.title}>
                    <h6>كيف تعزز وجودك على وسائل </h6>
                  </div>

                  <div className={styles.desc}>
                    <p>اكتشف أحدث الاستراتيجيات والتكتيكات التي يمكنك استخدامها لزيادة تفاعل جمهورك وتحقيق أهدافك التسويقية على منصات التواصل الاجتماعي. من تحليل البيانات إلى إنشاء محتوى جذاب، نقدم لك دليلاً شاملاً لتحقيق النجاح الرقمي</p>
                  </div>
                </div>

              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.7, type: 'tween' }}
                className={styles.box}>
                <div className={styles.img_container}>
                  <Image
                    src={'/assets/imgs/news/bg.jpeg'}
                    alt={''}
                    width={365.33}
                    height={342}
                  />


                </div>

                <div className={styles.text_container}>

                  <div className={styles.title}>
                    <h6>كيف تعزز وجودك على وسائل </h6>
                  </div>

                  <div className={styles.desc}>
                    <p>اكتشف أحدث الاستراتيجيات والتكتيكات التي يمكنك استخدامها لزيادة تفاعل جمهورك وتحقيق أهدافك التسويقية على منصات التواصل الاجتماعي. من تحليل البيانات إلى إنشاء محتوى جذاب، نقدم لك دليلاً شاملاً لتحقيق النجاح الرقمي</p>
                  </div>
                </div>

              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.7, type: 'tween' }}
                className={styles.box}>
                <div className={styles.img_container}>
                  <Image
                    src={'/assets/imgs/news/bg.jpeg'}
                    alt={''}
                    width={365.33}
                    height={342}
                  />


                </div>

                <div className={styles.text_container}>

                  <div className={styles.title}>
                    <h6>كيف تعزز وجودك على وسائل </h6>
                  </div>

                  <div className={styles.desc}>
                    <p>اكتشف أحدث الاستراتيجيات والتكتيكات التي يمكنك استخدامها لزيادة تفاعل جمهورك وتحقيق أهدافك التسويقية على منصات التواصل الاجتماعي. من تحليل البيانات إلى إنشاء محتوى جذاب، نقدم لك دليلاً شاملاً لتحقيق النجاح الرقمي</p>
                  </div>
                </div>

              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.7, type: 'tween' }}
                className={styles.box}>
                <div className={styles.img_container}>
                  <Image
                    src={'/assets/imgs/news/bg.jpeg'}
                    alt={''}
                    width={365.33}
                    height={342}
                  />


                </div>

                <div className={styles.text_container}>

                  <div className={styles.title}>
                    <h6>كيف تعزز وجودك على وسائل </h6>
                  </div>

                  <div className={styles.desc}>
                    <p>اكتشف أحدث الاستراتيجيات والتكتيكات التي يمكنك استخدامها لزيادة تفاعل جمهورك وتحقيق أهدافك التسويقية على منصات التواصل الاجتماعي. من تحليل البيانات إلى إنشاء محتوى جذاب، نقدم لك دليلاً شاملاً لتحقيق النجاح الرقمي</p>
                  </div>
                </div>

              </motion.div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default NewsComponent