import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Privacy } from './pages/Privacy';
import { Terms } from './pages/Terms';
import { About } from './pages/About';
import { Blog } from './pages/Blog';
import { HraGuide2024 } from './pages/blog/HraGuide2024';
import { RentReceiptsImportance } from './pages/blog/RentReceiptsImportance';
import { PanRequirementRent } from './pages/blog/PanRequirementRent';
import { HraDocumentation } from './pages/blog/HraDocumentation';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/hra-guide-2024" element={<HraGuide2024 />} />
        <Route path="/blog/rent-receipts-importance" element={<RentReceiptsImportance />} />
        <Route path="/blog/pan-requirement-rent" element={<PanRequirementRent />} />
        <Route path="/blog/hra-documentation" element={<HraDocumentation />} />
        {/* Add other blog post routes */}
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
