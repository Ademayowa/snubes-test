import FAQ from '../../components/faq/Faq';
import BannerTab from '../BannerTab';
// import Banner from '../Banner';
import Footer from '../footer/Footer';
import Hero from '../Hero/Hero';
import Info from '../Info';
import Whysnubes from '../Whysnubes';

const Home = () => {
  return (
    <>
      <Hero />
      <BannerTab />
      <Info />
      <Whysnubes />
      <FAQ />
      <Footer />
    </>
  );
};

export default Home;
