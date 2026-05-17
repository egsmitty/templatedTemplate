import styles from './App.module.css'
import config from '../church.config.json'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ServiceBanner from './components/ServiceBanner'
import FeaturedEvent from './components/FeaturedEvent'
import Experience from './components/Experience'
import OurStories from './components/OurStories'
import RecentMessages from './components/RecentMessages'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className={styles.app}>
      <Navbar nav={config.nav} logo={config.logo} churchName={config.churchName} location={config.location} />
      <main>
        <Hero hero={config.hero} />
        <ServiceBanner serviceBanner={config.serviceBanner} />
        <FeaturedEvent featuredEvent={config.featuredEvent} />
        <Experience experience={config.experience} />
        <OurStories ourStories={config.ourStories} />
        <RecentMessages recentMessages={config.recentMessages} />
        <Contact contact={config.contact} />
      </main>
      <Footer footer={config.footer} churchName={config.churchName} logo={config.logo} />
    </div>
  )
}
