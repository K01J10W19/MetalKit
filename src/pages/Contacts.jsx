import Seo from '@/components/seo/Seo';
import PageHero from '@/components/sections/PageHero';
import ContactDetails from '@/components/sections/ContactDetails';
import LeadForm from '@/components/sections/LeadForm';
import Faq from '@/components/sections/Faq';
import { PAGE_META } from '@/data/content';

const HERO_IMAGE = { src: '/images/bands/band-3.webp', width: 600, height: 485, position: '30% 60%' };

export default function Contacts() {
  return (
    <>
      <Seo {...PAGE_META.contacts} path="/contacts" />
      <PageHero id="contacts-page-title" eyebrow="Contacts" title="Get" accent="in touch" image={HERO_IMAGE} overlay={[0.85, 0.5]}>
        Leave a request and our specialists will contact you within 15 minutes. On-site measurement is free.
      </PageHero>
      <ContactDetails />
      <LeadForm id="lead" image="/images/bands/band-3.webp" title="Still have questions?" />
      <Faq />
    </>
  );
}
