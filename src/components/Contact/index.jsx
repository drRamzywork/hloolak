import React, { useState } from 'react';
import styles from '../Order/index.module.scss';
import Navbar from '../Navbar';
import toast, { Toaster } from 'react-hot-toast';
import Footer from '../Footer';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '', // Updated field name
    desc: '', // Updated field name
  });

  const [loading, setLoading] = useState(false);

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

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
        body: JSON.stringify(formData),
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
      <Toaster position="bottom-center" reverseOrder={false} />

      <Navbar dark={true} />

      <section id="order" className={styles.order}>
        <div className="container">
          <div className={styles.sec_container}>
            <div className={styles.sec_title}>
              <h3>تواصل معنا</h3>
            </div>

            <div className={styles.desc}>
              <p>نحن هنا لخدمتك! اترك استفسارك أو ملاحظاتك، وسنتواصل معك بأسرع وقت</p>
            </div>

            <div className={styles.form_container}>
              <form onSubmit={handleSubmit}>
                <div className={styles.boxes_container}>
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
                    <div className={styles.label}>رقم الجوال</div>
                    <input
                      type="phone"
                      name="phone"
                      value={formData.phone}
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
                    <div className={styles.label}>الموضوع</div>
                    <input
                      type="text"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      disabled={loading}
                    />
                  </div>
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

      <Footer />
    </>
  );
};

export default ContactUs;
