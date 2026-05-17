import { useState } from 'react'
import styles from './Navbar.module.css'

export default function Navbar({ nav, logo, churchName, location }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [openAccordion, setOpenAccordion] = useState(null)
  const [logoError, setLogoError] = useState(false)

  const toggleAccordion = (i) => {
    setOpenAccordion(openAccordion === i ? null : i)
  }

  const firstWord = churchName.split(' ')[0]

  return (
    <header className={styles.navbar}>
      <div className={styles.inner}>
        <a href="/" className={styles.logoLink}>
          {logo.full && !logoError ? (
            <img
              src={logo.full}
              alt={churchName}
              className={styles.logoImg}
              onError={() => setLogoError(true)}
            />
          ) : (
            <div className={styles.logoTextFallback}>
              <span className={styles.logoLine1}>{firstWord}</span>
              <span className={styles.logoLine2}>{location}</span>
            </div>
          )}
        </a>

        <ul className={styles.navList}>
          {nav.links.map((link, i) => (
            <li
              key={i}
              className={`${styles.navItem} ${link.hasDropdown ? styles.hasDropdown : ''}`}
            >
              {link.hasDropdown ? (
                <>
                  <span className={styles.navLink}>
                    {link.label}
                    <span className={styles.caret}>▾</span>
                  </span>
                  <ul className={styles.dropdown}>
                    {link.children.map((child, j) => (
                      <li key={j}>
                        <a href={child.url} className={styles.dropdownLink}>
                          {child.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </>
              ) : (
                <a href={link.url} className={styles.navLink}>
                  {link.label}
                </a>
              )}
            </li>
          ))}
        </ul>

        <button
          className={`${styles.hamburger} ${menuOpen ? styles.hamburgerOpen : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <div
        className={`${styles.drawer} ${menuOpen ? styles.drawerOpen : ''}`}
        aria-hidden={!menuOpen}
      >
        {nav.links.map((link, i) => (
          <div key={i} className={styles.drawerSection}>
            {link.hasDropdown ? (
              <>
                <button
                  className={styles.drawerAccordionBtn}
                  onClick={() => toggleAccordion(i)}
                >
                  <span>{link.label}</span>
                  <span className={styles.accordionIcon}>
                    {openAccordion === i ? '−' : '+'}
                  </span>
                </button>
                {openAccordion === i && (
                  <ul className={styles.drawerChildren}>
                    {link.children.map((child, j) => (
                      <li key={j}>
                        <a
                          href={child.url}
                          className={styles.drawerChildLink}
                          onClick={() => setMenuOpen(false)}
                        >
                          {child.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </>
            ) : (
              <a
                href={link.url}
                className={styles.drawerLink}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            )}
          </div>
        ))}
      </div>
    </header>
  )
}
