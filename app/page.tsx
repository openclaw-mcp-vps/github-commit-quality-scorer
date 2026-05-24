export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block mb-4 px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-medium tracking-wide uppercase">
          Developer Tools
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Score commit message quality{" "}
          <span className="text-[#58a6ff]">across your team</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          CommitScore connects to GitHub, analyzes every commit message for clarity,
          convention compliance, and context — then surfaces team scorecards and
          actionable improvement suggestions.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block px-8 py-3 rounded-lg bg-[#58a6ff] text-[#0d1117] font-semibold text-base hover:bg-[#79b8ff] transition-colors"
        >
          Start for $8 / mo
        </a>
        <p className="mt-4 text-sm text-[#6e7681]">No credit card required to try. Cancel anytime.</p>

        {/* Feature pills */}
        <div className="mt-12 flex flex-wrap justify-center gap-3">
          {[
            "GitHub OAuth",
            "Real-time webhooks",
            "Team scorecards",
            "Convention checks",
            "Improvement tips",
            "Leaderboards",
          ].map((f) => (
            <span
              key={f}
              className="px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-sm text-[#c9d1d9]"
            >
              {f}
            </span>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <div className="rounded-2xl border border-[#30363d] bg-[#161b22] p-8 text-center">
          <p className="text-sm text-[#58a6ff] font-medium uppercase tracking-wide mb-2">Pro Plan</p>
          <p className="text-5xl font-bold text-white mb-1">$8</p>
          <p className="text-[#6e7681] text-sm mb-6">per month · unlimited repos</p>
          <ul className="text-left space-y-3 mb-8">
            {[
              "Connect unlimited GitHub repos",
              "Per-commit quality scoring",
              "Team & individual dashboards",
              "Conventional Commits enforcement",
              "Weekly digest emails",
              "Webhook real-time analysis",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm">
                <span className="text-[#58a6ff] mt-0.5">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full py-3 rounded-lg bg-[#58a6ff] text-[#0d1117] font-semibold text-base hover:bg-[#79b8ff] transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="border border-[#30363d] rounded-xl p-6 bg-[#161b22]">
            <h3 className="font-semibold text-white mb-2">How does CommitScore connect to GitHub?</h3>
            <p className="text-sm text-[#8b949e]">
              You authorize CommitScore via GitHub OAuth. We install a webhook on your chosen
              repositories and score every new commit automatically — no manual uploads needed.
            </p>
          </div>
          <div className="border border-[#30363d] rounded-xl p-6 bg-[#161b22]">
            <h3 className="font-semibold text-white mb-2">What scoring criteria are used?</h3>
            <p className="text-sm text-[#8b949e]">
              Messages are evaluated on length, imperative mood, Conventional Commits format,
              presence of a ticket reference, and overall clarity. Each dimension is scored
              0–100 and combined into a single quality grade.
            </p>
          </div>
          <div className="border border-[#30363d] rounded-xl p-6 bg-[#161b22]">
            <h3 className="font-semibold text-white mb-2">Can I cancel my subscription at any time?</h3>
            <p className="text-sm text-[#8b949e]">
              Yes. Cancel from your billing portal in one click. You keep access until the end
              of your billing period and won't be charged again.
            </p>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#21262d] py-8 text-center text-xs text-[#6e7681]">
        © {new Date().getFullYear()} CommitScore. Built for engineering teams.
      </footer>
    </main>
  );
}
