import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import SignInPage from './pages/SignInPage';
import SignUpPage from './pages/SignUpPage';
import DiscussionLayout from './pages/DiscussionLayout';
import Home from './pages/Home';

interface Props { }

function App(props: Props) {
  const { } = props

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-in" element={<SignInPage />} />
        <Route path="/sign-up" element={<SignUpPage />} />
        <Route path="/discuss" element={<DiscussionLayout />} />
      </Routes>
    </>
  );
}

export default App