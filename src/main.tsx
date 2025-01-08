import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import App from './App';
import { Blog } from './pages/Blog';
import { Privacy } from './pages/Privacy';
import { Terms } from './pages/Terms';
import { About } from './pages/About';
import { HraGuide2024 } from './pages/blog/HraGuide2024';
import { RentReceiptsImportance } from './pages/blog/RentReceiptsImportance';
import { PanRequirementRent } from './pages/blog/PanRequirementRent';
import { HraDocumentation } from './pages/blog/HraDocumentation';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
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
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
