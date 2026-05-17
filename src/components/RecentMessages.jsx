import styles from './RecentMessages.module.css'

const CameraIcon = ({ size = 40 }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="white" strokeWidth="1.5" aria-hidden="true">
    <path d="M15 10l4.553-2.069A1 1 0 0121 8.916V15.084a1 1 0 01-1.447.916L15 14M3 8a2 2 0 012-2h8a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8z" />
  </svg>
)

export default function RecentMessages({ recentMessages }) {
  const { headline, backgroundImage, ctaText, ctaUrl, messages } = recentMessages

  return (
    <section
      className={styles.section}
      style={backgroundImage ? { backgroundImage: `url(${backgroundImage})` } : {}}
    >
      {!backgroundImage && (
        <div className={styles.bgPlaceholder}>
          <CameraIcon size={40} />
          <span className={styles.bgPlaceholderText}>Add background image URL to config</span>
        </div>
      )}
      {backgroundImage && <div className={styles.overlay} />}
      <div className={styles.inner}>
        <h2 className={styles.headline}>{headline}</h2>
        <div className={styles.cardsGrid}>
          {messages.map((msg, i) => (
            <a key={i} href={msg.url} className={styles.card}>
              {msg.image ? (
                <img src={msg.image} alt={msg.title} className={styles.cardImage} />
              ) : (
                <div
                  className={styles.cardPlaceholder}
                  style={{ backgroundColor: msg.placeholderColor || '#2a2a2a' }}
                >
                  <CameraIcon size={28} />
                </div>
              )}
              <div className={styles.cardGradient} />
              <div className={styles.cardText}>
                <h3 className={styles.cardTitle}>{msg.title}</h3>
                <p className={styles.cardSpeaker}>{msg.speaker}</p>
              </div>
            </a>
          ))}
        </div>
        <a href={ctaUrl} className={styles.ctaButton}>
          {ctaText}
        </a>
      </div>
    </section>
  )
}
