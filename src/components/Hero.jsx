import Spline from '@splinetool/react-spline';
import { Rocket, Shield, Users } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/10 via-fuchsia-500/5 to-transparent pointer-events-none" />

      <div className="relative max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 px-6 pt-16 lg:pt-24">
        <div className="flex flex-col justify-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/5 ring-1 ring-white/10 px-3 py-1 w-fit mb-5">
            <span className="size-2 rounded-full bg-cyan-400 animate-pulse" />
            <span className="text-xs text-white/80">Real-time video matching for people who create</span>
          </div>

          <h1 className="text-4xl sm:text-6xl leading-tight font-semibold tracking-tight">
            Helixque
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-fuchsia-400"> Real‑time video chat</span>
            for anonymous, builders, and public profiles
          </h1>

          <p className="mt-5 text-white/70 max-w-xl">
            Meet people instantly based on preferences. Built on WebRTC for secure, low‑latency
            peer‑to‑peer media, and Socket.IO for reliable signaling. Modern, minimal, and designed
            for networking and collaboration.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#pricing" className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-neutral-950 font-medium transition">
              <Rocket className="size-4" /> Get started
            </a>
            <a href="#features" className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white/5 hover:bg-white/10 ring-1 ring-white/10 font-medium transition">
              Learn more
            </a>
          </div>

          <div className="mt-8 grid grid-cols-3 gap-4 text-sm text-white/70">
            <div className="flex items-center gap-2"><Shield className="size-4 text-cyan-400" /> End‑to‑end media</div>
            <div className="flex items-center gap-2"><Users className="size-4 text-fuchsia-400" /> Smart matching</div>
            <div className="flex items-center gap-2"><Rocket className="size-4 text-blue-400" /> Low latency</div>
          </div>
        </div>

        <div className="relative h-[480px] sm:h-[560px] lg:h-[640px] rounded-3xl overflow-hidden ring-1 ring-white/10 bg-gradient-to-b from-white/5 to-white/0">
          <Spline
            scene="https://prod.spline.design/qQUip0dJPqrrPryE/scene.splinecode"
            style={{ width: '100%', height: '100%' }}
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-transparent" />
        </div>
      </div>
    </section>
  );
}
