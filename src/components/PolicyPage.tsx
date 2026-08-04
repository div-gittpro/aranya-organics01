import type { ReactNode } from 'react';
import Logo from './Logo';

export interface PolicySection {
  title: string;
  paragraphs?: string[];
  bullets?: string[];
}

interface PolicyPageProps {
  title: string;
  subtitle: string;
  badge: string;
  icon: ReactNode;
  intro?: string[];
  sections: PolicySection[];
}

export default function PolicyPage({ title, subtitle, badge, icon, intro = [], sections }: PolicyPageProps) {
  return (
    <div className="bg-background min-h-screen py-16 px-6 md:px-16 overflow-hidden relative">
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute top-10 right-10 w-96 h-96 bg-primary/10 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-3xl mx-auto space-y-12 relative z-10">
        <div className="text-center space-y-4">
          <div className="flex justify-center mb-4">
            <Logo className="h-16 w-16 md:h-20 md:w-20" />
          </div>
          <h1 className="font-serif text-4xl text-primary font-bold tracking-tight">
            {title}
          </h1>
          <p className="text-secondary font-sans font-bold text-xs uppercase tracking-widest">
            {subtitle}
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-secondary via-primary to-secondary mx-auto rounded-full mt-4" />
        </div>

        <section className="bg-white p-8 md:p-12 rounded-3xl border border-secondary/15 shadow-sm space-y-8 font-sans text-sm text-on-surface-variant leading-relaxed">
          <div className="flex items-center gap-3 bg-secondary/5 p-4 rounded-xl border border-secondary/20">
            {icon}
            <span className="font-bold text-primary text-xs uppercase tracking-wider">{badge}</span>
          </div>

          {intro.length > 0 && (
            <div className="space-y-4">
              {intro.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          )}

          <div className="space-y-6">
            {sections.map((section) => (
              <div key={section.title} className="space-y-4">
                <h3 className="font-serif text-lg font-bold text-primary">{section.title}</h3>
                {section.paragraphs?.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
                {section.bullets && (
                  <ul className="list-disc pl-5 space-y-2 font-semibold text-primary text-xs">
                    {section.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
