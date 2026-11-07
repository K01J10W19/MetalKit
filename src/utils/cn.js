import { clsx } from 'clsx';
import { extendTailwindMerge } from 'tailwind-merge';

/*
 * Register the custom tokens from index.css, otherwise tailwind-merge reads
 * e.g. `text-h2` as a colour and drops it next to `text-primary`.
 */
const twMerge = extendTailwindMerge({
  extend: {
    theme: {
      text: [
        'caption', 'small', 'body', 'feature', 'tagline', 'lead', 'h5', 'h4', 'question', 'detail',
        'intro', 'menu', 'statement', 'h3', 'h2', 'h1', 'numeral-sm', 'numeral', 'numeral-lg', 'stat',
      ],
      shadow: ['glow', 'glow-lg', 'halo'],
    },
  },
});

export const cn = (...inputs) => twMerge(clsx(inputs));
