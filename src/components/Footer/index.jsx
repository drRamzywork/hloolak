import Image from 'next/image'
import React from 'react'
import styles from './index.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.layer}>
        <img src="/assets/svgs/footer/shape.svg" alt="" />
      </div>
      <div className={styles.layer3}>
        <img src="/assets/svgs/footer/shape2.svg" alt="" />
      </div>
      <div className="container">
        <div className={styles.sec_container}>
          <div className={styles.text_container}>
            <div className={styles.logo}>
              <Image
                src={'/assets/svgs/logo.svg'}
                alt=""
                width={212.32}
                height={70}
              />
            </div>

            <div className={styles.desc}>
              <p> شركة رائدة في مجال تقنية المعلومات والاتصالات، تهدف إلى تقديم حلول


                مبتكرة

                <br />وفعالة تلبي احتياجات عملائها في مختلف القطاعات.</p>
            </div>

          </div>

          <div className={styles.links_container}>
            <div className={styles.link}>
              <div className={styles.title}>
                <h5>روابط سريعة</h5>
              </div>

              <ul>
                <li>من نحن</li>
                <li>رؤية الشركة</li>
                <li>خدماتنا</li>
                <li>شركاؤنا</li>
              </ul>
            </div>
            <div className={styles.link}>
              <div className={styles.title}>
                <h5>الموارد</h5>
              </div>

              <ul>
                <li>الرئيسية</li>
                <li>المدونة</li>
                <li>الآخبار</li>
              </ul>
            </div>
            <div className={styles.link}>
              <div className={styles.title}>
                <h5>للتواصل</h5>
              </div>

              <div className={styles.icons}>
                <div className={styles.icon}>
                  <Image
                    src={'/assets/svgs/footer/mail.svg'}
                    alt=""
                    width={22}
                    height={22}
                  />
                </div>
                <div className={styles.icon}>
                  <Image
                    src={'/assets/svgs/footer/linkedin.svg'}
                    alt=""
                    width={22}
                    height={22}
                  />
                </div>
                <div className={styles.icon}>
                  <Image
                    src={'/assets/svgs/footer/x.svg'}
                    alt=""
                    width={22}
                    height={22}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <p>كل الحقوق محفوظة لشركة حلولك الرقمية 2024 ©</p>
      </div>

      <div className={styles.layer2}>
        <img src="/assets/svgs/footer/shape.svg" alt="" />
      </div>
    </footer>
  )
}

export default Footer