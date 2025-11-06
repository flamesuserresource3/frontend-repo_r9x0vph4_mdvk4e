import { ShieldCheck, Lock, Sparkles, Wand2, Cpu, SlidersHorizontal } from 'lucide-react';

export default function Features() {
  const items = [
    {
      icon: <ShieldCheck className="size-5 text-cyan-400" />,
      title: 'Secure by design',
      desc: 'WebRTC with DTLS-SRTP and ICE/TURN for resilient, encrypted media delivery.'
    },
    {
      icon: <Cpu className="size-5 text-fuchsia-400" />,
      title: 'Smart pairing',
      desc: 'Preference-based matching using tags, interests, and professional context.'
    },
    {
      icon: <Lock className="size-5 text-blue-400" />,
      title: 'Anonymous or public',
      desc: 'Jump in anonymously, build under a handle, or go fully verified with a public profile.'
    },
    {
      icon: <SlidersHorizontal className="size-5 text-emerald-400" />,
      title: 'Granular controls',
      desc: 'Noise suppression, device selection, and adaptive bitrate for crystal clarity.'
    },
    {
      icon: <Wand2 className="size-5 text-violet-400" />,
      title: 'Studio tools',
      desc: 'Background blur, beautify, and lighting balance for always-on confidence.'
    },
    {
      icon: <Sparkles className="size-5 text-amber-400" />,
      title: 'Extensible',
      desc: 'Socket.IO signaling enables rooms, hand-raise, and co-browsing without friction.'
    }
  ];

  return (
    <section id="features" className="relative py-20">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_top,rgba(34,211,238,0.08),transparent_50%),radial-gradient(ellipse_at_bottom,rgba(244,114,182,0.08),transparent_50%)]" />
      <div className="relative max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-semibold">Why Helixque</h2>
          <p className="mt-3 text-white/70">Minimal look. Maximum performance. Built for real conversations.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((f, i) => (
            <div key={i} className="group rounded-2xl p-6 bg-white/5 ring-1 ring-white/10 hover:ring-white/20 transition">
              <div className="mb-3 inline-flex items-center justify-center rounded-xl bg-white/5 ring-1 ring-white/10 p-2">
                {f.icon}
              </div>
              <h3 className="font-medium text-lg">{f.title}</h3>
              <p className="mt-1.5 text-sm text-white/70">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
