import styles from './Contact.module.css'

export default function Contact({ contact }) {
  const { headline, subheadline, description, submitText } = contact

  return (
    <section className={styles.section}>
      <div className={styles.panel}>
        <div className={styles.textSide}>
          <h2 className={styles.headline}>{headline}</h2>
          <h3 className={styles.subheadline}>{subheadline}</h3>
          <p className={styles.description}>{description}</p>
        </div>
        <div className={styles.formSide}>
          <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
            <input type="text"  className={styles.input}    placeholder="Name" />
            <input type="email" className={styles.input}    placeholder="Email" />
            <input type="tel"   className={styles.input}    placeholder="Phone" />
            <textarea           className={styles.textarea} placeholder="Message" />
            <button type="submit" className={styles.submitBtn}>
              {submitText}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
