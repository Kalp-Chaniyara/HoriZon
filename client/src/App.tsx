import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Footer from './components/Footer';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import SignInPage from './components/SignInPage';
import SignUpPage from './components/SignUpPage';

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