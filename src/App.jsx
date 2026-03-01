import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import Pricing from './components/Pricing';
import Footer from './components/Footer';

import Login from './pages/Login';
import SignUp from './pages/SignUp';
import NotFound from './pages/NotFound';

/* =========================
   Layout Component
========================= */
const Layout = () => {
  return (
    <div className="min-h-screen bg-white font-sans antialiased flex flex-col">
      <Navbar />

      <main className="flex-1">
        <AnimatePresence mode="wait">
          <Outlet />
        </AnimatePresence>
      </main>

      <Footer />
    </div>
  );
};

/* =========================
   Home Page
========================= */
const HomePage = () => {
  return (
    <>
      <Hero />
      <Features />
      <HowItWorks />
      <Pricing />
    </>
  );
};

/* =========================
   Router Configuration
========================= */
export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'features',
        element: <Features />,
      },
      {
        path: 'how-it-works',
        element: <HowItWorks />,
      },
      {
        path: 'pricing',
        element: <Pricing />,
      },
      {
        path: 'login',
        element: <Login />,
      },
      {
        path: 'signup',
        element: <SignUp />,
      },
    ],
  },
]);

/* =========================
   App Component
========================= */
function App() {
  return <RouterProvider router={router} />;
}

export default App;