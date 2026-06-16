import Navbar       from '../components/Navbar/Navbar';
import Hero         from '../components/Hero/Hero';
import Competitions from '../components/Competitions/Competitions';
import UserJourney  from '../components/UserJourney/UserJourney';
import AboutLeague  from '../components/AboutLeague/AboutLeague';
import Categories   from '../components/Categories/Categories';
import Disciplines  from '../components/Disciplines/Disciplines';
import Advantages   from '../components/Advantages/Advantages';
import Ecosystem    from '../components/Ecosystem/Ecosystem';
import Sponsors     from '../components/Sponsors/Sponsors';
import Footer       from '../components/Footer/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Competitions />
      <UserJourney />
      <AboutLeague />
      <Categories />
      <Disciplines />
      <Advantages />  
      <Ecosystem />
      <Sponsors />
      <Footer />  
    </>
  );
}
