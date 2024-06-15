import About from '@/components/About/About'
import Details from '@/components/Details/Details'
import Footer from '@/components/Footer/Footer'
import Header from '@/components/Header/Header'
import Navbar from '@/components/Navbar/Navbar'
import Products from '@/components/Products/Products'
import Promo from '@/components/Promo/Promo'
import Reviews from '@/components/Reviews/Reviews'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Header />
      <Details />
      <Products />
      <About />
      <Promo />
      <Reviews />
      <Footer />
    </main>
  )
}
