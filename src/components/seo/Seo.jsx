import { SITE } from '@/utils/seo';

/*
 * Per-page metadata. React 19 hoists <title>, <meta> and <link> into <head>
 * and removes them when the page unmounts.
 * Usage: <Seo title="…" description="…" path="/projects" />
 */
export default function Seo({ title, description, path = '/', noindex = false, jsonLd }) {
  const url = SITE.url + path;
  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      {noindex && <meta name="robots" content="noindex, nofollow" />}
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="en_US" />
      <meta property="og:site_name" content={SITE.name} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={SITE.url + SITE.ogImage} />
      <meta name="twitter:card" content="summary_large_image" />
      {jsonLd && (
        <script
          type="application/ld+json"
          // Static content; "<" escaped so a string can never close the tag
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }}
        />
      )}
    </>
  );
}
