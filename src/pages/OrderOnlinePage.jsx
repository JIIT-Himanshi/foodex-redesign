import { useEffect } from 'react'
import OrderHero from '../components/OrderOnline/OrderHero'
import OrderSteps from '../components/OrderOnline/OrderSteps'
import OrderReview from '../components/OrderOnline/OrderReview'
import OrderTrustStrip from '../components/OrderOnline/OrderTrustStrip'
import OrderCTA from '../components/OrderOnline/OrderCTA'
import '../styles/order-online.css'

function OrderOnlinePage() {
  useEffect(() => {
    document.title = 'Order Online — Foodex India'
  }, [])

  return (
    <div className="oo-page">
      <OrderHero />
      <OrderSteps />
      <OrderReview />
      <OrderTrustStrip />
      <OrderCTA />
    </div>
  )
}

export default OrderOnlinePage
