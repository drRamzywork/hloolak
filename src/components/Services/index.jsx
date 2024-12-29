import React from 'react'
import styles from './index.module.scss';
import Image from 'next/image';

const Services = () => {
  return (
    <>
      <section id='services' className={styles.services}>
        <div className="container">

          <div className={styles.sec_container}>

            <div className={styles.sec_title}>
              <h3>خدماتنا</h3>
            </div>

            <div className={styles.desc}>
              <p>
                في حلولك الرقمية، نقدم خدمات تقنية متكاملة تهدف إلى تمكين أعمالك ومساعدتك على تحقيق التميز في عالم التقنية
              </p>
            </div>



            <div className={styles.boxes_container}>

              <div className={styles.box}>
                <div className={styles.icon_container}>
                  <Image
                    src="/assets/svgs/services/search.svg"
                    alt="Vercel logomark"
                    width={52}
                    height={52}
                  />
                </div>

                <div className={styles.title}>
                  <h5>اختبارات الجودة والأداء</h5>
                </div>

                <div className={styles.desc}>
                  <p>نضمن أعلى مستويات الجودة من خلال اختبارات شاملة ودقيقة</p>
                </div>
              </div>

              <div className={styles.box}>
                <div className={styles.icon_container}>
                  <Image
                    src="/assets/svgs/services/lights.svg"
                    alt="Vercel logomark"
                    width={52}
                    height={52}
                  />
                </div>

                <div className={styles.title}>
                  <h5>استشارات تقنية</h5>
                </div>

                <div className={styles.desc}>
                  <p>نقدم رؤى تقنية متخصصة لضمان اتخاذ قرارات استراتيجية تخدم أهدافك</p>
                </div>
              </div>

              <div className={styles.box}>
                <div className={styles.icon_container}>
                  <Image
                    src="/assets/svgs/services/code.svg"
                    alt="Vercel logomark"
                    width={52}
                    height={52}
                  />
                </div>

                <div className={styles.title}>
                  <h5>تطوير البرمجيات والتطبيقات</h5>
                </div>

                <div className={styles.desc}>
                  <p>نطور أنظمة وتطبيقات ذكية تلبي احتياجات عملك بكفاءة وابتكار</p>
                </div>
              </div>

              <div className={styles.box}>
                <div className={styles.icon_container}>
                  <Image
                    src="/assets/svgs/services/settings.svg"
                    alt="Vercel logomark"
                    width={52}
                    height={52}
                  />
                </div>

                <div className={styles.title}>
                  <h5>تحليل الأنظمة والاحتياجات</h5>
                </div>

                <div className={styles.desc}>
                  <p>نوفر حلولًا دقيقة تبدأ بفهم متطلباتك وتحليل الأنظمة لتحقيق التكامل والكفاءة</p>
                </div>
              </div>

              <div className={styles.box}>
                <div className={styles.icon_container}>
                  <Image
                    src="/assets/svgs/services/web.svg"
                    alt="Vercel logomark"
                    width={52}
                    height={52}
                  />
                </div>

                <div className={styles.title}>
                  <h5>تصميم واجهة وتجربة المستخدم</h5>
                </div>

                <div className={styles.desc}>
                  <p>نصمم تجارب مستخدم UI/UX مبتكرة تجمع بين السهولة والجاذبية</p>
                </div>
              </div>

              <div className={styles.box}>
                <div className={styles.icon_container}>
                  <Image
                    src="/assets/svgs/services/server.svg"
                    alt="Vercel logomark"
                    width={52}
                    height={52}
                  />
                </div>

                <div className={styles.title}>
                  <h5>خدمات الاستضافة.</h5>
                </div>

                <div className={styles.desc}>
                  <p>نوفر استضافة آمنة وعالية الأداء لضمان استقرار المواقع والتطبيقات</p>
                </div>
              </div>

            </div>


          </div>


        </div>
      </section>
    </>
  )
}

export default Services