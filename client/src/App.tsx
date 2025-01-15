import Header from './components/header/Header';
import Hero from './components/home/Hero';
import Features from './components/home/Features';
import Footer from './components/footer/Footer';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import SignInPage from './components/auth/SignInPage';
import SignUpPage from './components/auth/SignUpPage';

const HomePage = () => (
  <>
    <Hero />
    <Features />
  </>
)

const App = () => {
  return (
    <div className="flex flex-col min-h-screen">

      <Routes>
        <Route path="/" element={<Header />} />
      </Routes>

      <main className="flex-grow">

      </main>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/sign-in" element={<SignInPage />} />
        <Route path="/sign-up" element={<SignUpPage />} />
      </Routes>

      <Footer />
    </div>
  );
};

export default App;