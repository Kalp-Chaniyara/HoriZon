import Header from './components/header/Header';
import Hero from './components/home/Hero';
import Features from './components/home/Features';
import Footer from './components/footer/Footer';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import SignInPage from './components/auth/SignInPage';
import SignUpPage from './components/auth/SignUpPage';
import DiscussionLayout from './components/discuss/DiscussionLayout';

interface Props { }

const HomePage: React.FC = () => (
  <>
    <Header />
    <Hero />
    <Features />
    <Footer />
  </>
)

function App(props: Props) {
  const { } = props

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/sign-in" element={<SignInPage />} />
        <Route path="/sign-up" element={<SignUpPage />} />
        <Route path="/discuss" element={<DiscussionLayout />} />
      </Routes>
    </>
  );
}

export default App