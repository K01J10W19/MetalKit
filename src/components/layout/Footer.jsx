import { Link } from 'react-router-dom';
import Eyebrow from '@/components/ui/Eyebrow';
import Logo from '@/components/ui/Logo';
import { SocialIcon } from '@/components/ui/Icon';
import { SERVICES, CONTACTS, SOCIALS } from '@/data/content';

const YEAR = new Date().getFullYear();

const focusRing = 'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary';
const footLink = 'transition-colors duration-250 ease-out-expo hover:text-primary ' + focusRing;

export default function Footer() {
  return (
    <footer className="bg-secondary-950 text-text-inverse">
      <div className="shell pb-6 pt-16 lg:pt-32">
        <div className="flex flex-wrap gap-x-4 gap-y-10 border-t border-line-dark pt-10">
          <div className="eyebrow-col">
            <Link to="/" aria-label="METAL KIT — home" className={'-m-2 inline-flex p-2 ' + focusRing}>
              <Logo loading="lazy" />
            </Link>
          </div>

          <div className="grid min-w-0 flex-1 gap-x-4 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            <nav aria-label="Footer menu">
              <p className="flex border-b border-line-dark pb-4">
                <Eyebrow>Menu</Eyebrow>
              </p>
              <ul className="flex flex-col gap-2 pt-4">
                {SERVICES.map((s) => (
                  <li key={s.slug}>
                    <Link to={'/services#' + s.slug} className={'inline-flex min-h-8 items-center text-body ' + footLink}>
                      {s.title}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link to="/contacts" className={'inline-flex min-h-8 items-center text-body ' + footLink}>
                    Contacts
                  </Link>
                </li>
              </ul>
            </nav>

            <div>
              <p className="flex border-b border-line-dark pb-4">
                <Eyebrow>Contacts</Eyebrow>
              </p>
              <address className="flex flex-col gap-4 pt-4 text-body leading-[1.4] not-italic">
                <p>
                  Workshop address:
                  <br />
                  {CONTACTS.address}
                </p>
                <a href={'tel:' + CONTACTS.phoneRaw} className={'self-start ' + footLink}>
                  {CONTACTS.phone}
                </a>
                <p>
                  E-mail:{' '}
                  <a href={'mailto:' + CONTACTS.email} className={footLink}>
                    {CONTACTS.email}
                  </a>
                </p>
              </address>
            </div>

            <div className="flex items-start gap-4 lg:pt-14">
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className={
                    'flex size-12 items-center justify-center border border-primary text-primary transition-[background-color,color,transform] duration-250 ease-out-expo hover:-translate-y-0.5 hover:bg-primary hover:text-secondary-950 ' +
                    focusRing
                  }
                >
                  <SocialIcon name={s.icon} size={22} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-wrap justify-between gap-x-6 gap-y-2 border-t border-line-dark pt-4 text-caption leading-[normal] text-text-inverse-faint">
          <p>© {YEAR} All rights reserved</p>
          <p>Privacy policy</p>
          <p>Website development</p>
        </div>
      </div>
    </footer>
  );
}
