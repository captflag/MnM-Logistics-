import { Hero } from '../components/home/Hero';
import { QuoteBand } from '../components/home/QuoteBand';
import { TrustBar } from '../components/home/TrustBar';
import { Stats } from '../components/home/Stats';
import { AboutSnippet } from '../components/home/AboutSnippet';
import { ServicesPreview } from '../components/home/ServicesPreview';
import { WhyUs } from '../components/home/WhyUs';
import { Industries } from '../components/home/Industries';
import { MidCTA } from '../components/home/MidCTA';
import { Process } from '../components/home/Process';
import { Testimonials } from '../components/home/Testimonials';
import { FinalCTA } from '../components/home/FinalCTA';

export function Home() {
  return (
    <>
      <Hero />
      <QuoteBand />
      <TrustBar />
      <Stats />
      <AboutSnippet />
      <ServicesPreview />
      <WhyUs />
      <Industries />
      <MidCTA />
      <Process />
      <Testimonials />
      <FinalCTA />
    </>
  );
}
