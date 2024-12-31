import React from 'react'
import styles from './index.module.scss';
import Image from 'next/image';

const Hero = () => {
  return (
    <>
      <section id='hero' className={styles.hero}>
        <div className={styles.hero_bg}>
          <img
            src="/assets/imgs/hero/bg.jpeg"
            alt="Vercel logomark"
          />
          <div className={styles.layer} />
        </div>


        <div className="container">
          <div className={styles.text_container}>
            <p>نفهم احتياجات عملائنا بعمق</p>
            <h1>ندمج بين التحليل الإبداعي والتخطيط الاستراتيجي لتقديم حلول تقنية متكاملة</h1>

            <button >
              أطلب منتج الآن
            </button>
          </div>


        </div>
      </section>
    </>
  )
}

export default Hero