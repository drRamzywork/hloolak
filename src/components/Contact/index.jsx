import React from 'react'
import styles from './index.module.scss';
import Image from 'next/image';

const Contact = () => {
  return (
    <section id='contact' className={styles.contact}>
      <div className="container">
        <div className={styles.sec_container}>
          <div className={styles.text_container}>
            <div className={styles.sec_title}>
              <h3>تواصل معنا</h3>
            </div>

            <div className={styles.desc}>
              <p>دائمًا في خدمتك، تواصل معنا الآن!</p>
            </div>

            <div className={styles.contact_info}>
              <div className={styles.title}>
                <h5>معلومات التواصل</h5>
              </div>

              <div className={styles.box_container}>
                <div className={styles.icon_container}>
                  <Image
                    src="/assets/svgs/contact/whatsapp.svg"
                    alt="Vercel logomark"
                    width={24}
                    height={24}
                  />
                </div>

                <div className={styles.text}>
                  <p>رقم الجوال & واتس اب: </p>

                  <strong>
                    0500595726
                  </strong>
                </div>
              </div>
              <div className={styles.box_container}>
                <div className={styles.icon_container}>
                  <Image
                    src="/assets/svgs/contact/mail.svg"
                    alt="Vercel logomark"
                    width={24}
                    height={24}
                  />
                </div>
                <div className={styles.text}>

                  <p> البريد الاكتروني</p>
                  <strong>
                    info@holoolakfordigital.com
                  </strong>
                </div>

              </div>
              <div className={styles.box_container}>
                <div className={styles.icon_container}>
                  <Image
                    src="/assets/svgs/contact/location.svg"
                    alt="Vercel logomark"
                    width={24}
                    height={24}
                  />
                </div>

                <div className={styles.text}>
                  <p>الموقع </p>

                  <strong>
                    المملكة العربية السعودية، مكة المكرمة، بطحاء قريش.
                  </strong>
                </div>
              </div>



            </div>
          </div>

          <div className={styles.form_container}>
            <form action="">
              <div className={styles.box}>
                <div className={styles.label}>الأسم</div>
                <input type="text" />
              </div>
              <div className={styles.box}>
                <div className={styles.label}>البريد الإكتروني</div>
                <input type="email" />
              </div>
              <div className={styles.box}>
                <div className={styles.label}>الموضوع</div>
                <input type="text" />
              </div>
              <div className={styles.box}>
                <div className={styles.label}>الوصف</div>
                <textarea name="" id=""></textarea>
              </div>


              <div className={styles.btn_container}>
                <button>إرسال</button>
              </div>

            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact