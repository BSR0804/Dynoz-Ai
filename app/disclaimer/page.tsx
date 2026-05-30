import Nav from "@/components/nav";
import Footer from "@/components/footer";
import { LegalBlock } from "@/components/legal-block";

export const metadata = {
  title: "Disclaimer — Dynoz AI",
  description: "Important disclaimers regarding the Dynoz AI website and platform.",
};

export default function DisclaimerPage() {
  return (
    <>
      <Nav />
      <main className="min-h-screen pt-16">
        {/* Hero */}
        <section className="relative overflow-hidden py-20">
          <div className="relative max-w-3xl mx-auto px-6">
            <p className="text-xs font-mono tracking-[0.16em] mb-4" style={{ color: "var(--text-muted)" }}>LEGAL</p>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight tracking-[-0.025em] mb-3" style={{ color: "var(--ink)" }}>Disclaimer</h1>
            <p className="text-sm" style={{ color: "var(--text-muted)" }}>Last updated: May 2026</p>
          </div>
        </section>

        {/* Content */}
        <section className="py-16">
          <div className="max-w-3xl mx-auto px-6 flex flex-col gap-5">

            <LegalBlock title="1. General Information Only">
              The content published on this website (dynoz.ai) is provided by Centora Technologies Private Limited (&quot;Dynoz AI&quot;) for general informational purposes only. While we strive to keep information accurate and up to date, we make no representations or warranties — express or implied — about the completeness, accuracy, reliability, suitability, or availability of any information, products, services, or related graphics on this website for any purpose.
            </LegalBlock>

            <LegalBlock title="2. No Professional Advice">
              Nothing on this website constitutes professional, legal, financial, or technical advice. Any reliance you place on the information provided is strictly at your own risk. If you require specific professional guidance, you should consult a qualified professional in the relevant field.
            </LegalBlock>

            <LegalBlock title="3. AI-Generated Content and Platform Outputs">
              Dynoz AI operates conversational AI agents that generate responses in real time based on training data, integrated system data, and contextual inputs. While we invest significantly in accuracy and quality, AI-generated outputs may occasionally be incomplete, incorrect, or contextually inappropriate. Dynoz AI does not guarantee the accuracy of any output produced by its AI models and recommends that clients maintain appropriate human oversight for critical operational decisions.
            </LegalBlock>

            <LegalBlock title="4. Third-Party Links and Integrations">
              This website may contain links to third-party websites or reference third-party services. These links are provided for your convenience only. Dynoz AI has no control over, and accepts no responsibility for, the content, privacy practices, or availability of any third-party websites. The inclusion of any link does not imply our endorsement of that website or its operator.
            </LegalBlock>

            <LegalBlock title="5. Forward-Looking Statements">
              Certain statements on this website, including descriptions of planned features, product roadmaps, and expected outcomes, may constitute forward-looking statements. These statements reflect our current expectations and involve known and unknown risks, uncertainties, and other factors that may cause actual results to differ materially. We undertake no obligation to update forward-looking statements after the date of publication.
            </LegalBlock>

            <LegalBlock title="6. Service Availability">
              Dynoz AI does not warrant that the website or platform will be available at all times, free from interruptions, errors, or security vulnerabilities. We reserve the right to modify, suspend, or discontinue any part of the website or platform at any time without notice. We shall not be liable to you or any third party for any such modification, suspension, or discontinuation.
            </LegalBlock>

            <LegalBlock title="7. Limitation of Liability">
              To the fullest extent permitted by applicable law, Centora Technologies Private Limited shall not be liable for any loss or damage — including without limitation indirect or consequential loss or damage, loss of data or profits — arising from the use of, or inability to use, this website or the Dynoz AI platform.
            </LegalBlock>

            <LegalBlock title="8. Jurisdiction">
              This disclaimer is governed by the laws of India. Any disputes relating to this disclaimer shall be subject to the exclusive jurisdiction of the courts in Faridabad, Haryana, India.
            </LegalBlock>

            <LegalBlock title="9. Contact">
              <div>If you have questions or concerns about this disclaimer, please contact:</div>
              <div className="mt-3">
                <strong style={{ color: "rgba(12,12,14,0.85)" }}>Centora Technologies Private Limited</strong><br />
                1150/T5, RPS 12th Avenue, Faridabad, Haryana 121003, India<br />
                <a href="mailto:contact@dynoz.ai" className="hover:underline" style={{ color: "#1A56FF" }}>contact@dynoz.ai</a>
              </div>
            </LegalBlock>

          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

