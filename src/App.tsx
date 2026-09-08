import { HashRouter, Routes, Route } from 'react-router-dom'
import { Layout } from './components/layout'
import { Home, Projects, Contact } from './pages'

export function App() {
  return (
    <HashRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </HashRouter>
  )
}
