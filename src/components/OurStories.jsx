import styles from './OurStories.module.css'

export default function OurStories({ ourStories }) {
  const { headline, description, ctaText, ctaUrl, featuredVideo } = ourStories

  const headlineWords = headline.split(' ')

  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.videoSide}>
          {featuredVideo.embedUrl ? (
            <iframe
              className={styles.videoEmbed}
              src={featuredVideo.embedUrl}
              title={featuredVideo.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          ) : (
            <div className={styles.videoPlaceholder}>
              {featuredVideo.thumbnailImage ? (
                <img
                  src={featuredVideo.thumbnailImage}
                  alt={featuredVideo.title}
                  className={styles.thumbImage}
                />
              ) : (
                <div className={styles.thumbBg} />
              )}
              <div className={styles.thumbContent}>
                <span className={styles.thumbInstruction}>Add video embed URL to config</span>
                <svg viewBox="0 0 40 40" width="44" height="44" aria-hidden="true" style={{ opacity: 0.7 }}>
                  <polygon points="13,9 34,20 13,31" fill="white" />
                </svg>
                <span className={styles.videoTitle}>{featuredVideo.title}</span>
              </div>
            </div>
          )}
        </div>

        <div className={styles.textSide}>
          <h2 className={styles.headline}>
            {headlineWords.map((word, i) => (
              <span key={i} className={styles.headlineLine}>{word}</span>
            ))}
          </h2>
          <p className={styles.description}>{description}</p>
          <a href={ctaUrl} className={styles.ctaButton}>
            {ctaText}
          </a>
        </div>
      </div>
    </section>
  )
}
