import { Twitter, Github, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative py-14 mt-10 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <div className="text-xl font-semibold">Helixque</div>
            <p className="text-sm text-white/60 mt-1">Real-time video chat for networking and collaboration.</p>
          </div>

          <div className="flex items-center gap-3 text-white/70">
            <a href="#" aria-label="Twitter" className="p-2 rounded-lg bg-white/5 ring-1 ring-white/10 hover:bg-white/10 transition"><Twitter className="size-4" /></a>
            <a href="#" aria-label="GitHub" className="p-2 rounded-lg bg-white/5 ring-1 ring-white/10 hover:bg-white/10 transition"><Github className="size-4" /></a>
            <a href="mailto:hello@helixque.com" aria-label="Email" className="p-2 rounded-lg bg-white/5 ring-1 ring-white/10 hover:bg-white/10 transition"><Mail className="size-4" /></a>
          </div>
        </div>

        <p className="text-xs text-white/50 mt-8">© {new Date().getFullYear()} Helixque, Inc. All rights reserved.</p>
      </div>
    </footer>
  );
}
