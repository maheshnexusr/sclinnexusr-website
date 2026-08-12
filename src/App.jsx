import { Outlet, Route, Routes } from 'react-router-dom'
import { Header } from './components/layout/Header'
import { Footer } from './components/layout/Footer'
import { HomePage } from './pages/HomePage'
import { ProductPage } from './pages/ProductPage'
import { RequestDemoPage } from './pages/RequestDemoPage'
import { SignInPage } from './pages/SignInPage'
import { NotFoundPage } from './pages/NotFoundPage'

function MarketingLayout() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export function App() {
  return (
    <Routes>
      <Route element={<MarketingLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/solutions/:slug" element={<ProductPage />} />
        <Route path="/request-demo" element={<RequestDemoPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
      <Route path="/signin" element={<SignInPage />} />
    </Routes>
  )
}
