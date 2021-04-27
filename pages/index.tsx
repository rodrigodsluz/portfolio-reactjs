import Head from 'next/head';
import Layout from '../src/components/Layout/Layout';
import Hero from '../src/components/Hero/Hero';
import About from '../src/components/About/About';
import Work from '../src/components/Work/Work';
import Links from '../src/components/Links/Links';
import Email from '../src/components/Email/Email';
import Contact from '../src/components/Contact/Contact';
import SEO from '../src/components/SEO';

const Home: React.FC = () => (
  <>
    <Head>
      <title>Rodrigo Luz Portfolio</title>
    </Head>

    <main>
      <Layout>
        eae
        {/* <Links />
          <Email />
          <Hero />
          <About />
          <Work />
          <Contact /> */}
      </Layout>
    </main>
  </>
);

export default Home;
