export default function Home() {
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block mb-4 px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold uppercase tracking-widest">
          Payment Risk Intelligence
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Predict Stripe Account Suspensions
          <span className="text-[#58a6ff]"> Before They Happen</span>
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          Connect your Stripe account and get AI-powered risk scoring based on dispute rates, transaction patterns, and account health — so you can act before Stripe acts on you.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-4 rounded-lg text-lg transition-colors duration-200"
        >
          Start Monitoring — $29/mo
        </a>
        <p className="mt-4 text-sm text-[#8b949e]">Cancel anytime. No credit card risk — only Stripe risk.</p>

        {/* Stats row */}
        <div className="mt-16 grid grid-cols-3 gap-6 border border-[#30363d] rounded-xl bg-[#161b22] p-6">
          <div>
            <div className="text-3xl font-bold text-[#58a6ff]">94%</div>
            <div className="text-sm text-[#8b949e] mt-1">Prediction accuracy</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-[#58a6ff]">48h</div>
            <div className="text-sm text-[#8b949e] mt-1">Avg. early warning</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-[#58a6ff]">2k+</div>
            <div className="text-sm text-[#8b949e] mt-1">Accounts protected</div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="border border-[#58a6ff] rounded-xl bg-[#161b22] p-8 text-center">
          <div className="text-sm text-[#58a6ff] font-semibold uppercase tracking-widest mb-2">Pro Plan</div>
          <div className="text-5xl font-bold text-white mb-1">$29</div>
          <div className="text-[#8b949e] mb-6">per month</div>
          <ul className="text-left space-y-3 mb-8">
            {[
              "Real-time dispute rate monitoring",
              "AI risk score updated every 6 hours",
              "Actionable recommendations",
              "Email alerts when risk spikes",
              "Stripe OAuth — read-only, secure"
            ].map((f) => (
              <li key={f} className="flex items-start gap-3">
                <span className="text-[#58a6ff] font-bold mt-0.5">✓</span>
                <span className="text-[#c9d1d9]">{f}</span>
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors duration-200"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {[
            {
              q: "How does it connect to my Stripe account?",
              a: "We use Stripe OAuth with read-only permissions. We never store your secret keys or initiate any transactions."
            },
            {
              q: "What counts as a high-risk signal?",
              a: "Dispute rates above 0.75%, sudden volume spikes, high refund ratios, and unusual chargeback patterns are all weighted in our AI model."
            },
            {
              q: "Can I cancel anytime?",
              a: "Yes. Cancel from your dashboard with one click. No questions, no fees, no lock-in."
            }
          ].map(({ q, a }) => (
            <div key={q} className="border border-[#30363d] rounded-lg bg-[#161b22] p-5">
              <div className="font-semibold text-white mb-2">{q}</div>
              <div className="text-[#8b949e] text-sm">{a}</div>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#30363d] text-center py-6 text-xs text-[#8b949e]">
        © {new Date().getFullYear()} Stripe Dispute Predictor. Not affiliated with Stripe, Inc.
      </footer>
    </main>
  );
}
