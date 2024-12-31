import React from 'react';
import styles from './index.module.scss';
import Image from 'next/image';

const Goals = () => {
  return (
    <>
      <section id='goals' className={styles.goals}>
        <div className="container">
          <div className={styles.text_container}>
            <div className={styles.title}>
              <h3>رواد التقنية، <br />
                وشركاؤك في النجاح</h3>
            </div>

            <div className={styles.desc}><p>نحن شركة متخصصة ورائدة في مجال تقنية المعلومات والاتصالات، تسعى إلى تقديم حلول تقنية مبتكرة وفعالة تُواكب التطورات السريعة في عالم التكنولوجيا وتلبي احتياجات عملائها في مختلف القطاعات.
            </p>

              <p>

                تتميز الشركة بفريق عمل محترف يضم خبراء ذوي كفاءة عالية في مجالات متعددة، مما يضمن تقديم خدمات تقنية متقدمة تعزز نجاح عملائها وتلبي متطلبات السوق المتنامية.

              </p>
            </div>
          </div>


          <div className={styles.sec_title}>
            <h2>الرؤية والرسالة</h2>

            <p>نحو مستقبل رقمي مبتكر ومستدام</p>
          </div>

          <div className={styles.boxes_container}>
            <div className={styles.box}>
              <div className={styles.title}>
                <div className={styles.icon_container}>
                  <Image
                    src="/assets/svgs/goals/target.svg"
                    alt="Vercel logomark"
                    width={40}
                    height={40}
                  />
                </div>
                <h3>رؤيتنا</h3>
              </div>

              <div className={styles.desc}><p>
                تقديم حلول رقمية متطورة تمكن الأفراد والجهات من أدوات تقنية مبتكرة تعزز تجربة العميل وتحقق النجاح الرقمي</p></div>
            </div>
            <div className={styles.box}>
              <div className={styles.title}>
                <div className={styles.icon_container}>
                  <Image
                    src="/assets/svgs/goals/cursor.svg"
                    alt="Vercel logomark"
                    width={40}
                    height={40}
                  />
                </div>
                <h3>رسالتنا</h3>
              </div>

              <div className={styles.desc}><p>تقديم حلول رقمية متطورة تمكن الأفراد والجهات من أدوات تقنية مبتكرة تعزز تجربة العميل وتحقق النجاح الرقمي</p></div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Goals