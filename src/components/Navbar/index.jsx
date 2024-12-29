import Image from 'next/image'
import React from 'react'
import styles from './index.module.scss'
import Link from 'next/link'
const Navbar = () => {
  return (
    <>
      <nav className={styles.navbar}>
        <div className="container">
          <div className={styles.sec_container}>

            <Link href={'#'} className={styles.logo}>
              <Image
                src="/assets/svgs/logo.svg"
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
              <li><Link href='/'>الآخبار</Link></li>
            </ul>

            <div className={styles.btn_container}>
              <button>تواصل معنا</button>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar