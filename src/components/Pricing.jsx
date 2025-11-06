import { Check, Sparkles, Shield, Rocket } from 'lucide-react';

const tiers = [
  {
    name: 'Students',
    price: '$3',
    period: '/mo',
    tagline: 'Proof-of-work pricing for learners in college.',
    features: [
      'Anonymous + Builder modes',
      'Preference-based matching',
      'Basic studio tools',
      'Limited daily minutes',
    ],
    cta: 'Start for $3',
    highlight: false,
  },
  {
    name: 'Professionals',
    price: '$5',
    period: '/mo',
    tagline: 'For creators, indie hackers, and collaborators.',
    features: [
      'All student features',
      'Public profile & verification',
      'Priority routing',
      'Unlimited matching',
    ],
    cta: 'Upgrade — $5',
    highlight: true,
  },
  {
    name: "VC's",
    price: '$20',
    period: '/mo',
    tagline: 'Signals that matter + discovery workflows.',
    features: [
      'Curated dealflow lenses',
      'Profile notes & bookmarking',
      'Invite-only rooms',
      'Stealth scouting mode',
    ],
    cta: 'Go Pro — $20',
    highlight: false,
  },
  {
    name: 'Recruiters / Enterprise',
    price: 'Custom',
    period: '',
    tagline: 'Compliance, controls, and scale.',
    features: [
      'SAML/SSO & audit logs',
      'Role-based access + seats',
      'Dedicated TURN & QoS',
      'Custom integrations',
    ],
    cta: 'Contact sales',
    highlight: false,
  },
];

const specials = [
  { icon: <Sparkles className="size-4" />, text: 'AI vibe check & intro prompts' },
  { icon: <Shield className="size-4" />, text: 'Moderation & safety toolkit' },
  { icon: <Rocket className="size-4" />, text: 'Live co-browse & whiteboard' },
];

export default function Pricing() {
  return (
    <section id="pricing" className="relative py-24">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.12),transparent_50%)]" />
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-semibold">Transparent pricing</h2>
          <p className="mt-3 text-white/70">Choose a plan that matches your intent. Switch anytime.</p>
          <div className="mt-4 flex justify-center gap-3 text-sm text-white/80">
            {specials.map((s, i) => (
              <div key={i} className="inline-flex items-center gap-2 bg-white/5 ring-1 ring-white/10 rounded-full px-3 py-1">
                <span className="text-cyan-400">{s.icon}</span>
                <span>{s.text}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`flex flex-col rounded-2xl p-6 bg-white/5 ring-1 ring-white/10 transition ${tier.highlight ? 'bg-gradient-to-b from-cyan-500/10 to-transparent ring-cyan-400/40' : ''}`}
            >
              <div className="flex items-baseline justify-between">
                <h3 className="text-lg font-medium">{tier.name}</h3>
                {tier.highlight && (
                  <span className="text-xs px-2 py-1 rounded-full bg-cyan-400 text-neutral-950 font-medium">Popular</span>
                )}
              </div>
              <div className="mt-4 flex items-end gap-1">
                <span className="text-4xl font-semibold">{tier.price}</span>
                <span className="text-white/60">{tier.period}</span>
              </div>
              <p className="mt-2 text-sm text-white/70">{tier.tagline}</p>

              <ul className="mt-6 space-y-2 text-sm">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <Check className="size-4 text-cyan-400 mt-0.5" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#"
                className={`mt-8 inline-flex items-center justify-center gap-2 rounded-xl px-4 py-2.5 font-medium transition ${tier.highlight ? 'bg-cyan-500 text-neutral-950 hover:bg-cyan-400' : 'bg-white/5 hover:bg-white/10 ring-1 ring-white/10'}`}
              >
                {tier.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
