// import Head from 'next/head';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* <Head>
        <title>HoriZon  - A Collaborative Platform for Addiction Recovery</title>
        <meta name="description" content="HoriZon  is a safe space for people seeking to overcome addiction, offering support and community without judgment." />
        <link rel="icon" href="/favicon.ico" />
      </Head> */}

      <Header />

      <main className="flex-grow">
        <Hero />
        <Features />
      </main>

      <Footer />
    </div>
  );
};

export default App;

