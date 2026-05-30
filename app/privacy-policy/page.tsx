import Nav from "@/components/nav";
import Footer from "@/components/footer";
import { LegalBlock } from "@/components/legal-block";

export const metadata = {
  title: "Privacy Policy — Dynoz AI",
  description: "How Dynoz AI collects, uses, and protects your data.",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <Nav />
      <main className="min-h-screen pt-16">
        {/* Hero */}
        <section className="relative overflow-hidden py-20">
          <div className="relative max-w-3xl mx-auto px-6">
            <p className="text-xs font-mono tracking-[0.16em] mb-4" style={{ color: "var(--text-muted)" }}>LEGAL</p>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight tracking-[-0.025em] mb-3" style={{ color: "var(--ink)" }}>Privacy Policy</h1>
            <p className="text-sm" style={{ color: "var(--text-muted)" }}>Last updated: May 2026</p>
          </div>
        </section>

        {/* Content */}
        <section className="py-16">
          <div className="max-w-3xl mx-auto px-6 flex flex-col gap-5">

            <LegalBlock title="1. Introduction">
              Centora Technologies Private Limited (&quot;Dynoz AI&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) operates the dynoz.ai website and the Dynoz AI platform. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services. By accessing or using our services, you agree to the terms of this Privacy Policy.
            </LegalBlock>

            <LegalBlock title="2. Information We Collect">
              <div><strong style={{ color: "rgba(12,12,14,0.85)" }}>Information you provide directly:</strong> When you fill out a contact form, request a demo, or apply for a job, we collect personal details such as your full name, email address, phone number, company name, and any message content you submit.</div>
              <div className="mt-3"><strong style={{ color: "rgba(12,12,14,0.85)" }}>Information collected automatically:</strong> When you visit our website, we may automatically collect technical data including your IP address, browser type and version, operating system, referring URLs, pages viewed, and time spent on pages.</div>
              <div className="mt-3"><strong style={{ color: "rgba(12,12,14,0.85)" }}>Customer data processed on behalf of clients:</strong> As part of our AI platform services, we process guest interaction data on behalf of our hotel, airline, and travel platform clients. This data is handled under separate data processing agreements with each client.</div>
            </LegalBlock>

            <LegalBlock title="3. How We Use Your Information">
              <div>We use the information we collect to:</div>
              <ul className="mt-3 flex flex-col gap-2 list-disc list-inside">
                <li>Respond to your enquiries, demo requests, and support questions</li>
                <li>Process job applications and communicate with candidates</li>
                <li>Improve and personalise our website and platform experience</li>
                <li>Send product updates, announcements, and marketing communications (where you have opted in)</li>
                <li>Comply with applicable legal obligations</li>
                <li>Detect and prevent fraudulent or unauthorised activity</li>
              </ul>
            </LegalBlock>

            <LegalBlock title="4. Legal Basis for Processing (GDPR)">
              For users in the European Economic Area, our legal bases for processing personal data are: (a) your consent, where you have given it; (b) performance of a contract or steps prior to entering one; (c) our legitimate interests in operating and improving our platform, provided these are not overridden by your rights; and (d) compliance with a legal obligation.
            </LegalBlock>

            <LegalBlock title="5. Data Sharing and Disclosure">
              <div>We do not sell your personal data. We may share your information with:</div>
              <ul className="mt-3 flex flex-col gap-2 list-disc list-inside">
                <li>Service providers who assist us in operating our website and platform (e.g., cloud hosting, email, analytics), under confidentiality obligations</li>
                <li>Professional advisors such as lawyers and accountants where necessary</li>
                <li>Regulatory or law enforcement authorities when required by law</li>
                <li>A successor entity in the event of a merger, acquisition, or sale of assets</li>
              </ul>
            </LegalBlock>

            <LegalBlock title="6. Data Retention">
              We retain personal data only as long as necessary for the purposes described in this policy, or as required by law. Contact and enquiry data is retained for up to 3 years. Candidate data is retained for 12 months unless you are hired. You may request deletion of your data at any time by contacting us.
            </LegalBlock>

            <LegalBlock title="7. Data Security">
              We implement industry-standard technical and organisational measures to protect your personal data against unauthorised access, disclosure, alteration, or destruction. These include encrypted data transmission (TLS), access controls, and regular security reviews. No method of transmission over the internet is 100% secure; while we strive to protect your data, we cannot guarantee absolute security.
            </LegalBlock>

            <LegalBlock title="8. Your Rights">
              Depending on your jurisdiction, you may have the right to: access the personal data we hold about you; request correction of inaccurate data; request deletion of your data; object to or restrict our processing; request data portability; and withdraw consent at any time. To exercise any of these rights, contact us at <a href="mailto:privacy@dynoz.ai" className="hover:underline" style={{ color: "#1A56FF" }}>privacy@dynoz.ai</a>.
            </LegalBlock>

            <LegalBlock title="9. Cookies">
              Our website uses essential cookies required for basic functionality, as well as optional analytics cookies to understand how visitors use our site. You may disable non-essential cookies through your browser settings. We do not use cookies for advertising or cross-site tracking.
            </LegalBlock>

            <LegalBlock title="10. Children's Privacy">
              Our services are not directed at children under 16 years of age. We do not knowingly collect personal data from children. If you believe we have inadvertently collected such data, please contact us immediately.
            </LegalBlock>

            <LegalBlock title="11. Changes to This Policy">
              We may update this Privacy Policy from time to time. When we do, we will revise the &quot;Last updated&quot; date at the top of this page. We encourage you to review this policy periodically. Continued use of our services after changes constitutes acceptance of the updated policy.
            </LegalBlock>

            <LegalBlock title="12. Contact Us">
              <div>For questions, concerns, or requests relating to this Privacy Policy, please contact:</div>
              <div className="mt-3">
                <strong style={{ color: "rgba(12,12,14,0.85)" }}>Centora Technologies Private Limited</strong><br />
                1150/T5, RPS 12th Avenue, Faridabad, Haryana 121003, India<br />
                <a href="mailto:privacy@dynoz.ai" className="hover:underline" style={{ color: "#1A56FF" }}>privacy@dynoz.ai</a>
              </div>
            </LegalBlock>

          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

