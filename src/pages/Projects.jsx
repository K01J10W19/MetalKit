import Seo from '@/components/seo/Seo';
import PageHero from '@/components/sections/PageHero';
import ProjectsGallery from '@/components/sections/ProjectsGallery';
import LeadForm from '@/components/sections/LeadForm';
import Section from '@/components/ui/Section';
import { PAGE_META } from '@/data/content';

const HERO_IMAGE = { src: '/images/about.webp', width: 864, height: 456, position: '50% 40%' };

export default function Projects() {
  return (
    <>
      <Seo {...PAGE_META.projects} path="/projects" />
      <PageHero id="projects-page-title" eyebrow="Our work" title="Completed" accent="projects" image={HERO_IMAGE} overlay={[0.88, 0.62]}>
        Hundreds of projects delivered for private clients — practical, reliable structures for every kind of property.
      </PageHero>
      <Section aria-label="Project gallery" className="2xl:pt-24">
        <ProjectsGallery filterable />
      </Section>
      <LeadForm id="lead-p" image="/images/bands/band-1.webp" />
    </>
  );
}
