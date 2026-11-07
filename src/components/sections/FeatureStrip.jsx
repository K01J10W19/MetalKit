import { FEATURES } from '@/data/content';

/* Four selling points under the hero: 2×2 grid, one row from lg */
export default function FeatureStrip() {
  return (
    <div className="border-t border-text-inverse/20">
      <div className="shell">
        <ul className="grid grid-cols-2 gap-px bg-text-inverse/16 lg:grid-cols-4">
          {FEATURES.map((f) => (
            <li
              key={f}
              className="flex min-h-16 items-center justify-center bg-secondary-950 px-2 py-4 text-center text-feature uppercase text-text-feature"
            >
              {f}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
