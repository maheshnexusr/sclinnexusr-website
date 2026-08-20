import { Route, Routes } from 'react-router-dom'
import { Header } from './components/layout/Header'
import { Footer } from './components/layout/Footer'
import { AnimatedOutlet } from './components/layout/PageTransition'
import { HomePage } from './pages/HomePage'
import { ProductPage } from './pages/ProductPage'
import { SolutionPage } from './pages/SolutionPage'
import { RequestDemoPage } from './pages/RequestDemoPage'
import { SignInPage } from './pages/SignInPage'
import { CompanyPage } from './pages/CompanyPage'
import { OurStoryPage } from './pages/OurStoryPage'
import { LeadershipPage } from './pages/LeadershipPage'
import { CareersPage } from './pages/CareersPage'
import { NewsPage } from './pages/NewsPage'
import { ContactPage } from './pages/ContactPage'
import { PrivacyPolicyPage } from './pages/PrivacyPolicyPage'
import { TermsOfServicePage } from './pages/TermsOfServicePage'
import { CookiePolicyPage } from './pages/CookiePolicyPage'
import { NotFoundPage } from './pages/NotFoundPage'

function MarketingLayout() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 overflow-x-hidden">
        <AnimatedOutlet />
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
        <Route path="/platform/:slug" element={<ProductPage />} />
        <Route path="/solutions/:slug" element={<SolutionPage />} />
        <Route path="/request-demo" element={<RequestDemoPage />} />
        <Route path="/company" element={<CompanyPage />} />
        <Route path="/company/our-story" element={<OurStoryPage />} />
        <Route path="/company/leadership" element={<LeadershipPage />} />
        <Route path="/company/careers" element={<CareersPage />} />
        <Route path="/company/news" element={<NewsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
        <Route path="/terms-of-service" element={<TermsOfServicePage />} />
        <Route path="/cookie-policy" element={<CookiePolicyPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
      <Route path="/signin" element={<SignInPage />} />
    </Routes>
  )
}
