import Seo from '@/components/seo/Seo';
import PageHero from '@/components/sections/PageHero';
import ServiceCatalogue from '@/components/sections/ServiceCatalogue';
import Process from '@/components/sections/Process';
import LeadForm from '@/components/sections/LeadForm';
import { PAGE_META } from '@/data/content';

const HERO_IMAGE = {
  src: '/images/hero-1200.webp',
  srcSet: '/images/hero-640.webp 640w, /images/hero-1200.webp 1200w',
  width: 1200,
  height: 648,
  position: '62% 55%',
};

export default function Services() {
  return (
    <>
      <Seo {...PAGE_META.services} path="/services" />
      <PageHero id="services-page-title" eyebrow="Services" title="What you can order" accent="metal products" image={HERO_IMAGE}>
        Carports, staircases, gazebos and hangars built to your design. In-house workshop, contract-based work, 2-year warranty.
      </PageHero>
      <ServiceCatalogue />
      <Process titled />
      <LeadForm id="lead-s" image="/images/bands/band-2.webp" />
    </>
  );
}
