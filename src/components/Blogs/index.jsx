import React from 'react'
import Navbar from '../Navbar'
import { motion } from 'framer-motion'
import styles from './index.module.scss';
import Footer from '../Footer';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

const BlogsComponent = ({ dataBlogs, dataAllCategories, filter }) => {
  const { query } = useRouter();


  return (
    <>
      <Navbar dark={true} />
      <section id='blogs' className={styles.news}>
        <div className="container">
          <div className={styles.sec_container}>
            <div className={styles.sec_title}><h3>مدونتنا: نشارككم المعرفة والإلهام</h3></div>

            <div className={styles.desc}>
              <p>اكتشف مقالاتنا التي تغطي آخر المستجدات والنصائح القيمة في مجالات التسويق والإبداع وتقنية المعلومات.</p>
            </div>


            <div className={styles.filter_container}>
              <Link href='/blogs' className={`${styles.section} ${filter && styles.active}`} >
                <p>الكل</p>
              </Link>

              {dataAllCategories.map((catgory, idx) =>
                <Link href={`/blogs/${catgory.category_slug}`} className={`${styles.section} ${query.slug === catgory.category_slug && styles.active}`} key={idx}>
                  <p>{catgory.category_name}</p>
                </Link>
              )}



            </div>


            <div className={styles.boxes_container}>


              {dataBlogs?.map((blog, idx) =>

                < Link href={`/details/${blog.slug}`} key={idx} >
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.7, type: 'tween' }}
                    className={styles.box}>
                    <div className={styles.img_container}>
                      <Image
                        src={blog.image}
                        alt={''}
                        width={365.33}
                        height={342}
                      />


                    </div>

                    <div className={styles.text_container}>

                      <div className={styles.title}>
                        <h6>{blog.title}</h6>
                      </div>

                      <div className={styles.desc}>
                        <p>{blog.desc}</p>
                      </div>
                    </div>

                  </motion.div>
                </Link>
              )}


            </div>
          </div>
        </div>
      </section >
      <Footer />
    </>
  )
}

export default BlogsComponent