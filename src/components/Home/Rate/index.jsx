import React from 'react';
import styles from './index.module.scss';
import Image from 'next/image';

const Rate = () => {
  return (
    <>
      <section id='rate' className={styles.rate}>
        <div className="container">

          <div className={styles.sec_container}>

            <div className={styles.sec_title}>
              <h3>قيمنا</h3>
            </div>
            <div className={styles.desc}><p>في حلولك الرقمية، تشكل قيمنا أساس نجاحنا، حيث نسعى لتحقيق التميز والابتكار مع التركيز على العميل، والعمل بروح الفريق، والاستجابة للتغيير بمسؤولية ومرونة.</p></div>

            <div className={styles.boxes_container}>
              <div className={styles.box}>
                <div className={styles.icon_container}>
                  <Image
                    src="/assets/svgs/rate/special.svg"
                    alt="Vercel logomark"
                    width={56}
                    height={56}
                  />
                </div>

                <div className={styles.title}>
                  <h5>التميز</h5>
                </div>
              </div>
              <div className={styles.box}>
                <div className={styles.icon_container}>
                  <Image
                    src="/assets/svgs/rate/flex.svg"
                    alt="Vercel logomark"
                    width={56}
                    height={56}
                  />
                </div>

                <div className={styles.title}>
                  <h5>المرونة </h5>
                </div>
              </div>
              <div className={styles.box}>
                <div className={styles.icon_container}>
                  <Image
                    src="/assets/svgs/rate/coraporate.svg"
                    alt="Vercel logomark"
                    width={56}
                    height={56}
                  />
                </div>

                <div className={styles.title}>
                  <h5>التعاون</h5>
                </div>
              </div>
              <div className={styles.box}>
                <div className={styles.icon_container}>
                  <Image
                    src="/assets/svgs/rate/lights.svg"
                    alt="Vercel logomark"
                    width={56}
                    height={56}
                  />
                </div>

                <div className={styles.title}>
                  <h5>الإبداع</h5>
                </div>
              </div>
              <div className={styles.box}>
                <div className={styles.icon_container}>
                  <Image
                    src="/assets/svgs/rate/etqan.svg"
                    alt="Vercel logomark"
                    width={56}
                    height={56}
                  />
                </div>

                <div className={styles.title}>
                  <h5>الإتقان</h5>
                </div>
              </div>
              <div className={styles.box}>
                <div className={styles.icon_container}>
                  <Image
                    src="/assets/svgs/rate/transparent.svg"
                    alt="Vercel logomark"
                    width={56}
                    height={56}
                  />
                </div>

                <div className={styles.title}>
                  <h5>الشفافية</h5>
                </div>
              </div>
            </div>



          </div>

        </div>
      </section>
    </>
  )
}

export default Rate