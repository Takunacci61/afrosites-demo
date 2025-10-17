export default function AfrositesLanding() {
  const colors = {
    green: '#275A35',
    terracotta: '#C0532E',
    beige: '#F8F5EF',
    ink: '#102017'
  }

  const Logo = ({ size = 44 }: { size?: number }) => (
    <div className="flex items-center gap-3">
      {/* Emblem (connectivity mark) */}
      <svg width={size} height={size} viewBox="0 0 120 120" aria-label="Afrosites logo" role="img">
        <rect width="120" height="120" rx="26" fill="none" />
        {/* Outer rounded frame */}
        <path
          d="M27 26c-8 0-13 5-13 13v42c0 8 5 13 13 13h39c8 0 13-5 13-13v-5"
          fill="none"
          stroke={colors.green}
          strokeWidth="16"
          strokeLinecap="round"
        />
        {/* Inner square hub */}
        <rect x="37" y="36" width="42" height="42" rx="10" fill={colors.beige} />
        {/* Node square */}
        <rect x="45" y="44" width="26" height="26" rx="8" fill={colors.terracotta} />
        {/* Connector arm to outer post */}
        <path d="M71 57 L92 78" stroke={colors.terracotta} strokeWidth="10" strokeLinecap="round" />
        {/* Outer post */}
        <rect x="92" y="60" width="18" height="32" rx="8" fill={colors.green} />
      </svg>
      <span
        className="font-semibold tracking-tight lowercase text-2xl"
        style={{ color: colors.green }}
      >
        afrosites
      </span>
    </div>
  )

  return (
    <div
      className="min-h-screen bg-[#F8F5EF] text-slate-900"
      style={{
        fontFamily:
          'ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial'
      }}
    >
      {/* Header */}
      <header className="max-w-6xl mx-auto flex items-center justify-between px-6 py-5">
        <Logo />
        <nav className="hidden md:flex items-center gap-8 text-[15px]">
          <a href="#features" className="hover:opacity-80">
            Features
          </a>
          <a href="#plans" className="hover:opacity-80">
            Plans
          </a>
          <a href="#why" className="hover:opacity-80">
            Why Afrosites
          </a>
          <a href="#contact" className="hover:opacity-80">
            Contact
          </a>
        </nav>
        <div className="flex items-center gap-3">
          <button
            className="px-4 py-2 rounded-xl border border-[color:var(--green)]"
            style={{ borderColor: colors.green, color: colors.green }}
          >
            Sign in
          </button>
          <button
            className="px-4 py-2 rounded-xl text-white"
            style={{ backgroundColor: colors.green }}
          >
            Get started
          </button>
        </div>
      </header>

      {/* Hero */}
      <section className="max-w-6xl mx-auto grid md:grid-cols-2 items-center gap-10 px-6 py-16">
        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-slate-900">
            Fast, secure web hosting with an{' '}
            <span style={{ color: colors.terracotta }}>Afro‑modern</span> soul
          </h1>
          <p className="mt-5 text-lg text-slate-700">
            Afrosites powers entrepreneurs and organisations with reliable hosting, SSL by default,
            one‑click WordPress, daily backups and a human‑first support team.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <button
              className="px-5 py-3 rounded-2xl text-white shadow-lg"
              style={{ backgroundColor: colors.green }}
            >
              Launch your site
            </button>
            <button
              className="px-5 py-3 rounded-2xl border"
              style={{ borderColor: colors.green, color: colors.green }}
            >
              View pricing
            </button>
          </div>
          <div className="mt-8 flex items-center gap-6 text-sm text-slate-600">
            <div className="flex items-center gap-2">
              <span
                className="inline-block w-2.5 h-2.5 rounded-full"
                style={{ backgroundColor: colors.green }}
              ></span>{' '}
              99.9% uptime SLA
            </div>
            <div className="flex items-center gap-2">
              <span
                className="inline-block w-2.5 h-2.5 rounded-full"
                style={{ backgroundColor: colors.terracotta }}
              ></span>{' '}
              Free SSL & daily backups
            </div>
          </div>
        </div>

        {/* Mock server card */}
        <div className="relative">
          <div
            className="rounded-2xl p-6 shadow-xl bg-white/80 backdrop-blur border"
            style={{ borderColor: '#E8E3D8' }}
          >
            <div className="flex items-center justify-between">
              <Logo size={32} />
              <span
                className="text-xs px-2 py-1 rounded-full"
                style={{ backgroundColor: '#EDE8DF', color: colors.ink }}
              >
                Dashboard
              </span>
            </div>
            <div className="mt-6 grid grid-cols-3 gap-4 text-center">
              {[
                ['CPU', '34%'],
                ['Memory', '2.1 GB'],
                ['Bandwidth', '120 GB']
              ].map(([k, v]) => (
                <div key={k} className="rounded-xl p-4 border" style={{ borderColor: '#EDE8DF' }}>
                  <div className="text-xs text-slate-500">{k}</div>
                  <div className="text-xl font-semibold" style={{ color: colors.green }}>
                    {v}
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 grid gap-2">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="flex items-center justify-between rounded-xl border p-3"
                  style={{ borderColor: '#EDE8DF' }}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className="w-2 h-2 rounded-full"
                      style={{
                        backgroundColor: i === 1 ? colors.green : colors.terracotta
                      }}
                    ></div>
                    <span className="text-sm text-slate-700">example{i}.afrosites.com</span>
                  </div>
                  <button
                    className="text-sm px-3 py-1.5 rounded-lg text-white"
                    style={{ backgroundColor: colors.green }}
                  >
                    Manage
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Decorative blob */}
          <div
            className="absolute -z-10 -top-10 -right-10 w-64 h-64 rounded-full blur-3xl opacity-30"
            style={{
              background: `radial-gradient(30% 30% at 50% 50%, ${colors.terracotta}, transparent)`
            }}
          />
        </div>
      </section>

      {/* Features */}
      <section id="features" className="border-t" style={{ borderColor: '#EDE8DF' }}>
        <div className="max-w-6xl mx-auto px-6 py-16">
          <h2 className="text-2xl md:text-3xl font-bold">
            Everything you need to launch and scale
          </h2>
          <div className="mt-8 grid md:grid-cols-3 gap-6">
            {[
              ['One‑click installs', 'WordPress, WooCommerce, and popular stacks in seconds.'],
              ['Managed security', 'Automatic updates, WAF, and free SSL for every site.'],
              ['Daily backups', 'Point‑in‑time restores with a single click.'],
              ['Global CDN', 'Faster delivery across Africa and worldwide.'],
              ['Email & Domains', 'Professional email and easy DNS management.'],
              ['Human support', 'Real people who understand your goals.']
            ].map(([t, d]) => (
              <div
                key={t}
                className="rounded-2xl p-5 bg-white/70 border"
                style={{ borderColor: '#EDE8DF' }}
              >
                <div className="text-lg font-semibold" style={{ color: colors.green }}>
                  {t}
                </div>
                <p className="mt-2 text-slate-700 text-[15px]">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Plans */}
      <section id="plans" className="bg-white">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
            Simple, transparent pricing
          </h2>
          <p className="mt-2 text-slate-600">Start small, scale fast. Change plans any time.</p>
          <div className="mt-8 grid md:grid-cols-3 gap-6">
            {([
              ['Baobab Basic', '£4.99/mo', ['1 website', '10 GB SSD', 'Free SSL', 'Email forwarding']],
              ['Marula Plus', '£9.99/mo', ['5 websites', '30 GB SSD', 'Daily backups', 'Email inboxes']],
              [
                'Mopane Pro',
                '£19.99/mo',
                ['Unlimited websites', '100 GB SSD', 'CDN + Staging', 'Priority support']
              ]
            ] as [string, string, string[]][]).map(([name, price, perks]) => (
              <div key={name} className="rounded-2xl p-6 border shadow-sm" style={{ borderColor: '#EDE8DF' }}>
                <div className="text-lg font-semibold" style={{ color: colors.green }}>
                  {name}
                </div>
                <div className="mt-1 text-3xl font-extrabold">{price}</div>
                <ul className="mt-4 space-y-2 text-sm text-slate-700">
                  {perks.map((p, perkIndex) => (
                    <li key={`${name}-${perkIndex}`}>• {p}</li>
                  ))}
                </ul>
                <button
                  className="mt-6 w-full px-4 py-2 rounded-xl text-white"
                  style={{ backgroundColor: colors.terracotta }}
                >
                  Choose {name.split(' ')[0]}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why */}
      <section id="why" className="border-t" style={{ borderColor: '#EDE8DF' }}>
        <div className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold">Why Afrosites?</h2>
            <p className="mt-4 text-slate-700 leading-7">
              We blend world‑class infrastructure with a human touch. Our mission is to make the web
              feel closer to home for entrepreneurs across Africa and the diaspora. With transparent
              pricing, thoughtful design, and responsive support, you’ll spend less time wrestling
              with servers and more time growing your business.
            </p>
          </div>
          <div
            className="rounded-2xl p-6 bg-white/70 border"
            style={{ borderColor: '#EDE8DF' }}
          >
            <div className="grid grid-cols-2 gap-4 text-center">
              {[
                ['Uptime', '99.9%'],
                ['Avg. response', '< 2h'],
                ['Datacenters', '8+'],
                ['Migrations', 'Free']
              ].map(([k, v]) => (
                <div key={k} className="rounded-xl p-4 border" style={{ borderColor: '#EDE8DF' }}>
                  <div className="text-xs text-slate-500">{k}</div>
                  <div className="text-2xl font-semibold" style={{ color: colors.green }}>
                    {v}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="bg-white">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <h2 className="text-2xl md:text-3xl font-bold">Ready to get started?</h2>
          <p className="mt-2 text-slate-700">
            Drop us a line and we’ll help you choose the right plan.
          </p>
          <form className="mt-6 grid md:grid-cols-3 gap-4">
            <input
              className="rounded-xl border px-4 py-3"
              style={{ borderColor: '#EDE8DF' }}
              placeholder="Your name"
            />
            <input
              className="rounded-xl border px-4 py-3"
              style={{ borderColor: '#EDE8DF' }}
              placeholder="Email address"
            />
            <button
              className="rounded-xl px-4 py-3 text-white"
              style={{ backgroundColor: colors.green }}
            >
              Request callback
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t" style={{ borderColor: '#EDE8DF' }}>
        <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <Logo />
          <p className="text-sm text-slate-600">
            © {new Date().getFullYear()} Afrosites. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}