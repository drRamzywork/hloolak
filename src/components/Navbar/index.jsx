import Image from 'next/image'
import React, { useState } from 'react'
import styles from './index.module.scss'
import Link from 'next/link';
import { RxHamburgerMenu } from "react-icons/rx";
import { motion } from 'framer-motion';

const Navbar = ({ dark }) => {
  const [menu, setMenu] = useState(false)
  return (
    <>
      <nav className={` ${styles.navbar} ${dark && styles.dark}`} >
        <div className="container">
          <div className={styles.sec_container}>

            <Link href={'#'} className={styles.logo}>
              <Image
                src={dark ? "/assets/svgs/logo-dark.svg" : "/assets/svgs/logo.svg"}
                alt="Vercel logomark"
                width={203}
                height={60}
              />
            </Link>



            <ul>
              <li><Link href='/' className={styles.active}>الرئيسية</Link></li>
              <li><Link href='/'>عن الشركة</Link></li>
              <li><Link href='/'>خدماتنا</Link></li>
              <li><Link href='/'>منتجاتنا</Link></li>
              <li><Link href='/'>شركاؤنا</Link></li>
              <li><Link href='/'>المدونة</Link></li>
              <li><Link href='/news'>الآخبار</Link></li>
            </ul>

            <div className={styles.btn_container}>
              <button>تواصل معنا</button>
            </div>

            <div className={styles.burger_menu} onClick={() => setMenu(true)}>
              <RxHamburgerMenu />
            </div>



          </div>
        </div>





      </nav>

      {menu &&
        <div className={styles.layer} onClick={() => setMenu(false)}>

          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0 }}
            transition={{ duration: 1, type: "tween" }} className={styles.menu_container}>
            <div className="container">

              <ul>
                <li><Link href='/' className={styles.active}>الرئيسية</Link></li>
                <li><Link href='/'>عن الشركة</Link></li>
                <li><Link href='/'>خدماتنا</Link></li>
                <li><Link href='/'>منتجاتنا</Link></li>
                <li><Link href='/'>شركاؤنا</Link></li>
                <li><Link href='/'>المدونة</Link></li>
                <li><Link href='/news'>الآخبار</Link></li>
              </ul>

              <div className={styles.btn_container}>
                <button>تواصل معنا</button>
              </div>
            </div>

          </motion.div>
        </div>

      }
    </>
  )
}

export default Navbar