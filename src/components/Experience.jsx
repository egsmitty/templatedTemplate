import styles from './Experience.module.css'

const CameraIcon = ({ size = 40 }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="white" strokeWidth="1.5" aria-hidden="true">
    <path d="M15 10l4.553-2.069A1 1 0 0121 8.916V15.084a1 1 0 01-1.447.916L15 14M3 8a2 2 0 012-2h8a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8z" />
  </svg>
)

export default function Experience({ experience }) {
  const { headline, subtext, cards } = experience

  const words = headline.split(' ')
  const firstWord = words[0]
  const restWords = words.slice(1).join(' ')

  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <h2 className={styles.headline}>
            <span className={styles.headlineNormal}>{firstWord} </span>
            <span className={styles.headlineBold}>{restWords}</span>
          </h2>
          <p className={styles.subtext}>{subtext}</p>
        </div>
        <div className={styles.cardsGrid}>
          {cards.map((card, i) => (
            <a key={i} href={card.url} className={styles.card}>
              {card.image ? (
                <img src={card.image} alt={card.label} className={styles.cardImage} />
              ) : (
                <div
                  className={styles.cardPlaceholder}
                  style={{ backgroundColor: card.placeholderColor || '#4a4a4a' }}
                >
                  <CameraIcon size={28} />
                </div>
              )}
              <div className={styles.cardOverlay} />
              <span className={styles.cardLabel}>{card.label}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
