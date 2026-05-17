import styles from './ServiceBanner.module.css'

const PinIcon = () => (
  <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2C8.686 2 6 4.686 6 8c0 5.25 6 13 6 13s6-7.75 6-13c0-3.314-2.686-6-6-6z" />
    <circle cx="12" cy="8" r="2" />
  </svg>
)

export default function ServiceBanner({ serviceBanner }) {
  const { day, times, directionsUrl, directionsText } = serviceBanner

  const allButLast = times.slice(0, -1)
  const last = times[times.length - 1]
  const timesDisplay =
    times.length > 1 ? `${allButLast.join(', ')} & ${last}` : last

  return (
    <div className={styles.banner}>
      <div className={styles.inner}>
        <p className={styles.serviceInfo}>
          <span className={styles.day}>{day}</span>
          <span className={styles.at}> at </span>
          <span className={styles.times}>{timesDisplay}</span>
        </p>
        <span className={styles.arrow} aria-hidden="true">
          <span className={styles.arrowShaft} />
          <span className={styles.arrowHead} />
        </span>
        <a
          href={directionsUrl}
          className={styles.directionsBtn}
          target="_blank"
          rel="noopener noreferrer"
        >
          <PinIcon />
          {directionsText}
        </a>
      </div>
    </div>
  )
}
