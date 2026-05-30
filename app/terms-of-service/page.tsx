import Nav from "@/components/nav";
import Footer from "@/components/footer";
import { LegalBlock } from "@/components/legal-block";

export const metadata = {
  title: "Terms of Service — Dynoz AI",
  description: "Terms governing your use of the Dynoz AI platform and website.",
};

export default function TermsOfServicePage() {
  return (
    <>
      <Nav />
      <main className="min-h-screen pt-16">
        {/* Hero */}
        <section className="relative overflow-hidden py-20">
          <div className="relative max-w-3xl mx-auto px-6">
            <p className="text-xs font-mono tracking-[0.16em] mb-4" style={{ color: "var(--text-muted)" }}>LEGAL</p>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight tracking-[-0.025em] mb-3" style={{ color: "var(--ink)" }}>Terms of Service</h1>
            <p className="text-sm" style={{ color: "var(--text-muted)" }}>Last updated: May 2026</p>
          </div>
        </section>

        {/* Content */}
        <section className="py-16">
          <div className="max-w-3xl mx-auto px-6 flex flex-col gap-5">

            <LegalBlock title="1. Acceptance of Terms">
              By accessing or using the Dynoz AI website (dynoz.ai) or any services provided by Centora Technologies Private Limited (&quot;Dynoz AI&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;), you agree to be bound by these Terms of Service and our Privacy Policy. If you do not agree to these terms, please do not use our website or services. These terms apply to all visitors, users, and clients.
            </LegalBlock>

            <LegalBlock title="2. Description of Services">
              Dynoz AI provides an AI-powered operations platform for the hospitality and travel industry, including voice AI agents, chat agents, and backend integrations with hotel management and travel booking systems. The specific scope of services for each client is defined in a separate Master Services Agreement or Statement of Work.
            </LegalBlock>

            <LegalBlock title="3. Use of the Website">
              <div>You agree to use this website only for lawful purposes and in a manner that does not infringe the rights of others. You must not:</div>
              <ul className="mt-3 flex flex-col gap-2 list-disc list-inside">
                <li>Attempt to gain unauthorised access to any part of the website or its underlying systems</li>
                <li>Transmit any harmful, offensive, or disruptive content</li>
                <li>Use automated tools to scrape, crawl, or extract data from the website without prior written consent</li>
                <li>Impersonate Dynoz AI or any other person or entity</li>
                <li>Use the website in any way that could damage, disable, or impair its operation</li>
              </ul>
            </LegalBlock>

            <LegalBlock title="4. Intellectual Property">
              All content on this website — including text, graphics, logos, icons, images, audio, and software — is the property of Centora Technologies Private Limited or its content suppliers and is protected by applicable intellectual property laws. You may not reproduce, distribute, modify, or create derivative works from any content without our prior written consent. The Dynoz AI name, logo, and associated brand elements are trademarks of Centora Technologies Private Limited.
            </LegalBlock>

            <LegalBlock title="5. Client Accounts and Platform Access">
              Access to the Dynoz AI platform is provided to clients under a separate commercial agreement. You are responsible for maintaining the confidentiality of your login credentials and for all activity that occurs under your account. You agree to notify us immediately at <a href="mailto:contact@dynoz.ai" className="hover:underline" style={{ color: "#1A56FF" }}>contact@dynoz.ai</a> if you suspect any unauthorised use of your account.
            </LegalBlock>

            <LegalBlock title="6. Third-Party Integrations">
              The Dynoz AI platform integrates with third-party systems including property management systems, airline reservation systems, and communication platforms. We are not responsible for the availability, accuracy, or performance of third-party services. Your use of third-party services is governed by their respective terms and policies.
            </LegalBlock>

            <LegalBlock title="7. Disclaimer of Warranties">
              The website and services are provided on an &quot;as is&quot; and &quot;as available&quot; basis without warranties of any kind, express or implied. We do not warrant that the website will be uninterrupted, error-free, or free of viruses or other harmful components. To the fullest extent permitted by law, we disclaim all warranties including merchantability, fitness for a particular purpose, and non-infringement.
            </LegalBlock>

            <LegalBlock title="8. Limitation of Liability">
              To the maximum extent permitted by applicable law, Centora Technologies Private Limited shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of, or inability to use, our website or services. Our total liability to you for any claims arising under these terms shall not exceed the amount paid by you, if any, for access to our services in the 12 months preceding the claim.
            </LegalBlock>

            <LegalBlock title="9. Indemnification">
              You agree to indemnify and hold harmless Centora Technologies Private Limited, its directors, officers, employees, and agents from any claims, damages, losses, or expenses (including legal fees) arising out of your use of the website or services, your violation of these terms, or your infringement of any third-party rights.
            </LegalBlock>

            <LegalBlock title="10. Governing Law and Jurisdiction">
              These Terms of Service are governed by the laws of India. Any disputes arising under these terms shall be subject to the exclusive jurisdiction of the courts located in Faridabad, Haryana, India.
            </LegalBlock>

            <LegalBlock title="11. Changes to These Terms">
              We reserve the right to modify these Terms of Service at any time. Changes will be effective upon posting to this page with an updated &quot;Last updated&quot; date. Your continued use of the website or services after changes constitutes your acceptance of the revised terms.
            </LegalBlock>

            <LegalBlock title="12. Contact">
              <div>For questions about these Terms of Service, please contact:</div>
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

