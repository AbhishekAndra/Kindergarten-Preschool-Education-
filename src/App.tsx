import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { TourProvider } from './context/TourContext';
import { Layout } from './components/layout/Layout';

// Pages
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ProgramsPage } from './pages/ProgramsPage';
import { CurriculumPage } from './pages/CurriculumPage';
import { AdmissionsPage } from './pages/AdmissionsPage';
import { ParentLifePage } from './pages/ParentLifePage';
import { LoginPage } from './pages/LoginPage';
import { SignupPage } from './pages/SignupPage';
import { DashboardPage } from './pages/DashboardPage';
import { NotFoundPage } from './pages/NotFoundPage';

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <TourProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/programs" element={<ProgramsPage />} />
            <Route path="/curriculum" element={<CurriculumPage />} />
            <Route path="/admissions" element={<AdmissionsPage />} />
            <Route path="/parent-life" element={<ParentLifePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/404" element={<NotFoundPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Layout>
      </TourProvider>
    </BrowserRouter>
  );
};

export default App;
