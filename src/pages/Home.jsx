import Seo from '@/components/seo/Seo';
import Hero from '@/components/sections/Hero';
import ServicesGrid from '@/components/sections/ServicesGrid';
import Audience from '@/components/sections/Audience';
import LeadForm from '@/components/sections/LeadForm';
import About from '@/components/sections/About';
import Process from '@/components/sections/Process';
import ProjectsGallery from '@/components/sections/ProjectsGallery';
import Faq from '@/components/sections/Faq';
import Button from '@/components/ui/Button';
import Section from '@/components/ui/Section';
import SectionHeader from '@/components/ui/SectionHeader';
import { ArrowRight } from '@/components/ui/Icon';
import { FAQ, PAGE_META } from '@/data/content';
import { organizationJsonLd, faqJsonLd } from '@/utils/seo';

export default function Home() {
  return (
    <>
      <Seo {...PAGE_META.home} path="/" jsonLd={[organizationJsonLd, faqJsonLd(FAQ)]} />
      <Hero />
      <ServicesGrid />
      <Audience />
      <LeadForm id="lead-1" image="/images/bands/band-1.webp" />
      <About />
      <Process />
      <LeadForm id="lead-2" image="/images/bands/band-2.webp" />
      <Section aria-labelledby="works-title">
        <SectionHeader id="works-title" eyebrow="Our work" title="Completed projects" />
        <div className="mt-10 lg:mt-12">
          <ProjectsGallery />
        </div>
        <div className="mt-10 flex justify-center">
          <Button to="/projects" variant="dark" size="lg">
            All projects
            <ArrowRight />
          </Button>
        </div>
      </Section>
      <Faq />
      <LeadForm id="lead-3" image="/images/bands/band-3.webp" title="Still have questions?" />
    </>
  );
}
