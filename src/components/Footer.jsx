import { useState } from 'react'
import styles from './Footer.module.css'

const IgIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
  </svg>
)

const FbIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
)

const YtIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
    <path d="M23.495 6.205a3.007 3.007 0 0 0-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 0 0 .527 6.205a31.247 31.247 0 0 0-.522 5.805 31.247 31.247 0 0 0 .522 5.783 3.007 3.007 0 0 0 2.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 0 0 2.088-2.088 31.247 31.247 0 0 0 .5-5.783 31.247 31.247 0 0 0-.5-5.805zM9.609 15.601V8.408l6.264 3.602z" />
  </svg>
)

const TkIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.27.54 2.54 1.44 3.45.9.9 2.17 1.36 3.43 1.44v3.44c-1.2-.04-2.41-.37-3.44-.99v7.03c0 3.31-2.69 6-6 6s-6-2.69-6-6 2.69-6 6-6c.19 0 .37.01.56.03v3.53c-.19-.02-.37-.04-.56-.04-1.38 0-2.5 1.12-2.5 2.5s1.12 2.5 2.5 2.5 2.5-1.12 2.5-2.5V.02z" />
  </svg>
)

export default function Footer({ footer, churchName, logo }) {
  const [logoMarkError, setLogoMarkError] = useState(false)

  const { address, email, phone, columns, social, copyright, legalLinks } = footer

  const nameParts = churchName.split(' ')
  const firstName = nameParts[0]
  const restName = nameParts.slice(1).join(' ')

  const hasSocial = Object.values(social).some((v) => v && v !== '')

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        {/* Top: contact info + logo mark */}
        <div className={styles.topSection}>
          <div className={styles.contactBlock}>
            <div className={styles.churchName}>
              <span className={styles.nameBold}>{firstName}</span>
              {restName && <span className={styles.nameLight}> {restName}</span>}
            </div>
            <address className={styles.addressBlock}>
              <p>{address}</p>
              <p><a href={`mailto:${email}`}>{email}</a></p>
              <p><a href={`tel:${phone}`}>{phone}</a></p>
            </address>
          </div>
          <div className={styles.logoMarkBlock}>
            {logo.mark && !logoMarkError ? (
              <img
                src={logo.mark}
                alt={churchName}
                className={styles.logoMarkImg}
                onError={() => setLogoMarkError(true)}
              />
            ) : (
              <div className={styles.logoMarkFallback}>
                <span className={styles.logoMarkLetter}>
                  {churchName.charAt(0).toUpperCase()}
                </span>
              </div>
            )}
          </div>
        </div>

        <hr className={styles.divider} />

        {/* Link columns */}
        <div className={styles.columnsGrid}>
          {columns.map((col, i) => (
            <div key={i} className={styles.column}>
              <h4 className={styles.columnHeading}>{col.heading}</h4>
              <ul className={styles.columnLinks}>
                {col.links.map((link, j) => (
                  <li key={j}>
                    <a href={link.url} className={styles.columnLink}>
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Social icons */}
        {hasSocial && (
          <div className={styles.socialRow}>
            {social.instagram && (
              <a href={social.instagram} className={styles.socialLink} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <IgIcon />
              </a>
            )}
            {social.facebook && (
              <a href={social.facebook} className={styles.socialLink} target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <FbIcon />
              </a>
            )}
            {social.youtube && (
              <a href={social.youtube} className={styles.socialLink} target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                <YtIcon />
              </a>
            )}
            {social.tiktok && (
              <a href={social.tiktok} className={styles.socialLink} target="_blank" rel="noopener noreferrer" aria-label="TikTok">
                <TkIcon />
              </a>
            )}
          </div>
        )}

        {/* Bottom bar */}
        <div className={styles.bottomBar}>
          <p className={styles.copyright}>{copyright}</p>
          <div className={styles.legalLinks}>
            {legalLinks.map((link, i) => (
              <a key={i} href={link.url} className={styles.legalLink}>
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
