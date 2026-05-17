import styles from './Hero.module.css'

const CameraIcon = ({ size = 40 }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="white" strokeWidth="1.5" aria-hidden="true">
    <path d="M15 10l4.553-2.069A1 1 0 0121 8.916V15.084a1 1 0 01-1.447.916L15 14M3 8a2 2 0 012-2h8a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8z" />
  </svg>
)

export default function Hero({ hero }) {
  const { backgroundVideo, backgroundImage, headline, ctaText, ctaUrl } = hero

  const hasBackground = backgroundVideo || backgroundImage

  return (
    <section
      className={styles.hero}
      style={backgroundImage && !backgroundVideo ? { backgroundImage: `url(${backgroundImage})` } : {}}
    >
      {!hasBackground && (
        <div className={styles.placeholder}>
          <div className={styles.placeholderBox}>
            <CameraIcon size={56} />
            <span className={styles.placeholderTitle}>Add Hero Media</span>
            <span className={styles.placeholderText}>Set backgroundImage or backgroundVideo in church.config.json</span>
          </div>
        </div>
      )}
      {hasBackground && <div className={styles.overlay} />}
      <div className={styles.content}>
        <h1 className={styles.headline}>{headline}</h1>
        <a href={ctaUrl} className={styles.ctaButton}>
          {ctaText}
        </a>
      </div>
    </section>
  )
}
