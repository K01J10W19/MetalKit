import { useId, useRef, useState } from 'react';
import Button from '@/components/ui/Button';
import Field from '@/components/ui/Field';
import Reveal from '@/components/ui/Reveal';
import { submitLead } from '@/utils/api';
import { formatPhone, isPhone } from '@/utils/validators';

const EMPTY = { name: '', phone: '', consent: false };
const digits = (v) => v.replace(/\D/g, '');

/* Dark photo band with the quote form (appears on every page; `id` is the anchor CTAs link to) */
export default function LeadForm({ id, image = '/images/bands/band-1.webp', title }) {
  const [form, setForm] = useState(EMPTY);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle | loading | success | error
  const nameRef = useRef(null);
  const phoneRef = useRef(null);
  const consentRef = useRef(null);
  const consentErrId = useId();
  const titleId = id + '-title';
  const introId = id + '-intro';

  const update = (key, value) => {
    setForm((f) => ({ ...f, [key]: value }));
    if (errors[key]) setErrors((e) => ({ ...e, [key]: undefined }));
  };

  const onPhone = (e) => {
    let v = e.target.value;
    // Backspacing over ")", "-" or " " would be re-added by the formatter, so drop the digit before it
    if (v.length < form.phone.length && digits(v) === digits(form.phone)) v = v.replace(/\d(?=\D*$)/, '');
    update('phone', formatPhone(v));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const next = {};
    if (!form.name.trim()) next.name = 'Tell us your name';
    if (!isPhone(form.phone)) next.phone = 'Enter the full phone number';
    if (!form.consent) next.consent = 'Please confirm consent to data processing';
    setErrors(next);
    const firstInvalid = next.name ? nameRef : next.phone ? phoneRef : next.consent ? consentRef : null;
    if (firstInvalid) {
      firstInvalid.current?.focus();
      return;
    }
    setStatus('loading');
    try {
      await submitLead(form);
      setStatus('success');
    } catch {
      setStatus('error');
    }
  };

  const reset = () => {
    setForm(EMPTY);
    setErrors({});
    setStatus('idle');
  };

  return (
    <section
      id={id}
      aria-labelledby={title ? titleId : introId}
      className="relative isolate scroll-mt-20 overflow-hidden bg-secondary-950 text-text-inverse"
    >
      <div aria-hidden="true" className="absolute inset-y-0 left-0 -z-10 w-full lg:w-[58%]">
        <img src={image} alt="" width="600" height="595" loading="lazy" decoding="async" className="block size-full object-cover object-[30%_50%]" />
        <div className="fade-band absolute inset-0" />
      </div>

      <div className="shell flex flex-col gap-8 py-16 lg:py-24 2xl:py-32">
        {title && (
          <h2 id={titleId} className="offset-col text-h2 font-normal uppercase">
            {title}
          </h2>
        )}
        <div className="flex justify-end">
          <Reveal className="flex w-full flex-col gap-6 bg-secondary-950/80 p-6 backdrop-blur-sm sm:p-8 lg:w-[calc(50%-0.5rem)]">
            <p id={introId} className="text-intro text-balance">
              Leave a request and our specialists will contact you within <span className="whitespace-nowrap">15 minutes</span>
            </p>

            <div className="min-h-62">
              {status === 'success' ? (
                <div role="status" className="flex animate-fade-up flex-col items-start gap-4 border border-primary/50 p-6">
                  <p className="text-lg uppercase tracking-[0.02em] text-primary">Request sent</p>
                  <p className="text-body leading-normal text-text-inverse-muted">
                    Thank you! A specialist will call you back within 15 minutes.
                  </p>
                  <Button variant="outline" onClick={reset}>
                    Send another
                  </Button>
                </div>
              ) : (
                <form noValidate onSubmit={onSubmit} className="flex flex-col gap-4">
                  <Field
                    ref={nameRef}
                    label="Your name"
                    name="name"
                    autoComplete="name"
                    value={form.name}
                    error={errors.name}
                    onChange={(e) => update('name', e.target.value)}
                  />
                  <Field
                    ref={phoneRef}
                    label="Your phone"
                    name="phone"
                    type="tel"
                    inputMode="tel"
                    autoComplete="tel"
                    value={form.phone}
                    error={errors.phone}
                    onChange={onPhone}
                  />
                  <div className="flex flex-col gap-1">
                    <label className="flex min-h-11 cursor-pointer items-center gap-2 text-caption text-text-inverse-muted">
                      <input
                        ref={consentRef}
                        type="checkbox"
                        name="consent"
                        checked={form.consent}
                        onChange={(e) => update('consent', e.target.checked)}
                        aria-invalid={errors.consent ? true : undefined}
                        aria-describedby={errors.consent ? consentErrId : undefined}
                        className="m-0 size-4 flex-none cursor-pointer accent-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                      />
                      <span>I consent to the processing of my personal data</span>
                    </label>
                    {errors.consent && (
                      <p id={consentErrId} className="text-caption text-danger-text">
                        {errors.consent}
                      </p>
                    )}
                  </div>
                  {status === 'error' && (
                    <p role="alert" className="text-small text-danger-text">
                      Couldn’t send. Please try again.
                    </p>
                  )}
                  <Button type="submit" loading={status === 'loading'} className="text-body">
                    {status === 'loading' ? 'Sending…' : 'Submit request'}
                  </Button>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
