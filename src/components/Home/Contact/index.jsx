import React, { useState } from 'react';
import styles from './index.module.scss';
import Image from 'next/image';
import toast, { Toaster } from 'react-hot-toast';
import Link from 'next/link';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '', // Added to match API requirements
    message: '', // Added to match API requirements
    desc: '', // Added to match API requirements
  });

  const [loading, setLoading] = useState(false);

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form data
    if (!formData.name || !formData.email || !formData.phone || !formData.message || !formData.desc) {
      toast.error('الرجاء ملء جميع الحقول.');
      return;
    }

    try {
      setLoading(true);
      toast.loading('جاري إرسال البيانات...');

      const response = await fetch('https://digital-solutions.rmz.one/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
          desc: formData.desc,
        }),
      });

      if (response.ok) {
        toast.dismiss();
        toast.success('تم إرسال البيانات بنجاح!');
        setFormData({ name: '', email: '', phone: '', message: '', desc: '' }); // Reset form
      } else {
        throw new Error('فشل إرسال البيانات. حاول مرة أخرى.');
      }
    } catch (error) {
      toast.dismiss();
      toast.error(error.message || 'حدث خطأ أثناء الإرسال.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <section id="contact" className={styles.contact}>
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
                      alt="WhatsApp"
                      width={24}
                      height={24}
                    />
                  </div>
                  <div className={styles.text}>
                    <p>رقم الجوال & واتس اب:</p>
                    <strong>0500595726</strong>
                  </div>
                </div>

                <div className={styles.box_container}>
                  <div className={styles.icon_container}>
                    <Image
                      src="/assets/svgs/contact/mail.svg"
                      alt="Email"
                      width={24}
                      height={24}
                    />
                  </div>
                  <div className={styles.text}>
                    <p>البريد الاكتروني</p>
                    <strong>info@holoolakfordigital.com</strong>
                  </div>
                </div>

                <Link href={`https://maps.app.goo.gl/Meuv4h7s5E9sMs5e8`} target='_blank' className={styles.box_container}>
                  <div className={styles.icon_container}>
                    <Image
                      src="/assets/svgs/contact/location.svg"
                      alt="Location"
                      width={24}
                      height={24}
                    />
                  </div>
                  <div className={styles.text}>
                    <p>الموقع</p>
                    <strong>المملكة العربية السعودية، مكة المكرمة، بطحاء قريش.</strong>
                  </div>
                </Link>
              </div>
            </div>

            <div className={styles.form_container}>
              <form onSubmit={handleSubmit}>
                <div className={styles.box}>
                  <div className={styles.label}>الأسم</div>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    disabled={loading}
                  />
                </div>
                <div className={styles.box}>
                  <div className={styles.label}>البريد الإكتروني</div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    disabled={loading}
                  />
                </div>
                <div className={styles.box}>
                  <div className={styles.label}>رقم الجوال</div>
                  <input
                    type="text"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    disabled={loading}
                  />
                </div>
                <div className={styles.box}>
                  <div className={styles.label}>الموضوع</div>
                  <input
                    type="text"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    disabled={loading}
                  />
                </div>
                <div className={styles.box}>
                  <div className={styles.label}>الوصف</div>
                  <textarea
                    name="desc"
                    value={formData.desc}
                    onChange={handleChange}
                    disabled={loading}
                  ></textarea>
                </div>

                <div className={styles.btn_container}>
                  <button type="submit" disabled={loading}>
                    {loading ? '...جاري الإرسال' : 'إرسال'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
