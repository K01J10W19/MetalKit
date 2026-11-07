import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from '@/layouts/Layout';
import PageLoader from '@/components/ui/PageLoader';

// Route-level code splitting keeps the initial bundle small (LCP / TBT)
const Home = lazy(() => import('@/pages/Home'));
const Services = lazy(() => import('@/pages/Services'));
const Projects = lazy(() => import('@/pages/Projects'));
const Contacts = lazy(() => import('@/pages/Contacts'));
const NotFound = lazy(() => import('@/pages/NotFound'));

const withSuspense = (page) => <Suspense fallback={<PageLoader />}>{page}</Suspense>;

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={withSuspense(<Home />)} />
        <Route path="services" element={withSuspense(<Services />)} />
        <Route path="projects" element={withSuspense(<Projects />)} />
        <Route path="contacts" element={withSuspense(<Contacts />)} />
        <Route path="*" element={withSuspense(<NotFound />)} />
      </Route>
    </Routes>
  );
}
