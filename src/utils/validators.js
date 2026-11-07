/* Russian mobile numbers: +7 plus 10 digits */
export const isPhone = (v) => v.replace(/\D/g, '').length === 11;

/* Formats as you type: "8916…" / "916…" → "+7 (916) 123-45-67" */
export function formatPhone(v) {
  let d = v.replace(/\D/g, '');
  if (!d) return '';
  if (d[0] === '8') d = '7' + d.slice(1);
  if (d[0] !== '7') d = '7' + d;
  const p = d.slice(1, 11);
  let out = '+7';
  if (p.length) out += ' (' + p.slice(0, 3);
  if (p.length >= 3) out += ')';
  if (p.length > 3) out += ' ' + p.slice(3, 6);
  if (p.length > 6) out += '-' + p.slice(6, 8);
  if (p.length > 8) out += '-' + p.slice(8, 10);
  return out;
}
