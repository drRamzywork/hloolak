import React, { useState } from 'react'
import styles from './index.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { IoCloseCircle } from "react-icons/io5";


const Products = () => {
  const [showCertificate, setShowCertificate] = useState(false);

  const handleToggleCertificate = () => {
    setShowCertificate(!showCertificate);
  };

  return (
    <>
      <section id='products' className={styles.products}>
        <div className="container">

          <div className={styles.sec_title}>
            <h3>منتجاتنا</h3>
          </div>

          <div className={styles.desc}><p>منتجات تقنية مصممة لأجلك</p></div>


          <div className={styles.sec_container}>

            <div className={styles.text_container}>

              <div className={styles.logo}>
                <Image
                  src="/assets/imgs/products/ershad.png"
                  alt="Vercel logomark"
                  width={187.42}
                  height={90}
                />
              </div>


              <div className={styles.sec_title}>
                <h3>نظام إرشاد</h3>
              </div>

              <div className={styles.desc}>
                <p>تصميم وتطوير مواقع إلكترونية وتطبيقات مخصصة تلبي احتياجات عملك وتساعدك على الوصول إلى أكبر عدد من العملاء. تصميم وتطوير مواقع إلكترونية وتطبيقات مخصصة تلبي احتياجات عملك وتساعدك على الوصول إلى أكبر عدد من العملاء. تصميم وتطوير مواقع إلكترونية وتطبيقات مخصصة تلبي احتياجات عملك وتساعدك على الوصول إلى أكبر عدد من العملاء.  </p>
              </div>

              <div className={styles.btns_container}>
                <Link href={'/order'} className={styles.dark}>اطلب المنتج</Link>
                <Link href={'https://ershad.info/'} target='_blank' className={styles.light}>اعرف المزيد</Link>
              </div>

              <div className={styles.certficate}>
                <div className={styles.icon_container}>
                  <Image
                    src="/assets/svgs/products/verify.svg"
                    alt="Vercel logomark"
                    width={24}
                    height={24}
                  />
                </div>

                <div className={styles.desc}>
                  <p>حاصل المركز الثاني من وزارة الحج ...</p>
                </div>

                <div className={styles.load_more}>
                  <button onClick={handleToggleCertificate}>عرض الشهادة</button>
                </div>


                {showCertificate && (

                  <div className={styles.layer} onClick={() => setShowCertificate(false)}>
                    <motion.div
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.5 }}
                      className={styles.certificate_image}
                    >
                      <Image
                        src="/assets/imgs/products/certficate.png"
                        alt="شهادة"
                        width={500}
                        height={500}
                      />

                      <div className={styles.icon_container}>
                        <IoCloseCircle />
                      </div>
                    </motion.div>
                  </div>
                )}


              </div>

            </div>


            <div className={styles.bg_container}>
              <Image
                src="/assets/imgs/products/bg.png"
                alt="Vercel logomark"
                width={500}
                height={665}
              />

              <div className={styles.layer}>
                <Image
                  src="/assets/svgs/products/layer.svg"
                  alt="Vercel logomark"
                  width={598}
                  height={545}
                />
              </div>
            </div>
          </div>



          <div className={styles.sec_container}>


            <div className={styles.bg_container}>
              <Image
                src="/assets/imgs/products/bg2.png"
                alt="Vercel logomark"
                width={500}
                height={665}
              />


            </div>

            <div className={styles.text_container}>

              <div className={styles.logo}>
                <Image
                  src="/assets/imgs/products/meyar.png"
                  alt="Vercel logomark"
                  width={187.42}
                  height={90}
                />
              </div>


              <div className={styles.sec_title}>
                <h3> نظام معيار</h3>
              </div>

              <div className={styles.desc}>
                <p>تصميم وتطوير مواقع إلكترونية وتطبيقات مخصصة تلبي احتياجات عملك وتساعدك على الوصول إلى أكبر عدد من العملاء. تصميم وتطوير مواقع إلكترونية وتطبيقات مخصصة تلبي احتياجات عملك وتساعدك على الوصول إلى أكبر عدد من العملاء. تصميم وتطوير مواقع إلكترونية وتطبيقات مخصصة تلبي احتياجات عملك وتساعدك على الوصول إلى أكبر عدد من العملاء.  </p>
              </div>

              <div className={styles.btns_container}>
                <Link href={'/order'} className={styles.dark}>اطلب المنتج</Link>
                {/* <button className={styles.light}>اعرف المزيد</button> */}
              </div>



            </div>



          </div>
        </div>

      </section>
    </>
  )
}

export default Products