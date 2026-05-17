import styles from './FeaturedEvent.module.css'

export default function FeaturedEvent({ featuredEvent }) {
  const { backgroundImage, logoImage, name, date, time, description, ctaText, ctaUrl } =
    featuredEvent

  return (
    <section
      className={styles.section}
      style={backgroundImage ? { backgroundImage: `url(${backgroundImage})` } : {}}
    >
      {!backgroundImage && (
        <div className={styles.placeholder}>
          <span className={styles.placeholderLabel}>Background: Currently Blank</span>
        </div>
      )}
      {backgroundImage && <div className={styles.overlay} />}
      <div className={styles.content}>
        {logoImage ? (
          <img src={logoImage} alt={name} className={styles.eventLogo} />
        ) : (
          <>
            <hr className={styles.nameDivider} />
            <h2 className={styles.eventNameFallback}>{name}</h2>
          </>
        )}
        <p className={styles.datetime}>
          {date} | {time}
        </p>
        <p className={styles.description}>{description}</p>
        <a href={ctaUrl} className={styles.ctaButton}>
          {ctaText}
        </a>
      </div>
    </section>
  )
}
