import Navbar from "@/components/main/Navbar";
import Footer from "@/components/main/Footer";
import { Separator } from "@/components/ui/separator";

export default function TermsAndConditions() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 font-[family-name:var(--font-geist-sans)]">
      <Navbar />
      
      {/* Header Section */}
      <div className="container mx-auto py-24 pb-10 lg:py-28 lg:pb-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl lg:text-5xl font-bold text-center mb-4">
            Terms and Conditions
          </h1>
          <p className="text-xl text-muted-foreground text-center">
            Your rights and responsibilities when using JobAlchemy
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto pb-16">
        <div className="max-w-4xl mx-auto prose prose-lg dark:prose-invert">
          <div className="bg-muted border rounded-2xl p-8 lg:p-12 space-y-8">
            
            {/* Effective Date */}
            <div className="bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
              <p className="text-sm text-blue-800 dark:text-blue-200 font-medium">
                Effective Date: 1 June 2025
              </p>
            </div>

            {/* Section 1 */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">1. Acceptance of the Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                By accessing or using the JobAlchemy website, Chrome extension, mobile applications, or any other related services (collectively, the &quot;Services&quot;), you agree to be bound by these Terms and Conditions (the &quot;Terms&quot;). If you do not agree, you must not use the Services.
              </p>
            </section>

            <Separator />

            {/* Section 2 */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">2. About JobAlchemy</h2>
              <p className="text-muted-foreground leading-relaxed">
                JobAlchemy is an AI‑powered job‑application co‑pilot that helps users discover relevant roles, generate tailored CVs and application answers, and automate application submission across supported platforms. JobAlchemy does not guarantee job placement or interview success; the final decision rests with the hiring organisation.
              </p>
            </section>

            <Separator />

            {/* Section 3 */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">3. Changes to the Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                We may modify these Terms at any time. Material changes will be announced via the email associated with your account or through an in‑app notice. Continued use of the Services after changes take effect constitutes acceptance of the revised Terms.
              </p>
            </section>

            <Separator />

            {/* Section 4 */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">4. Eligibility</h2>
              <p className="text-muted-foreground leading-relaxed">
                You must be at least 18 years old and legally capable of entering into a binding contract in your jurisdiction to use the Services.
              </p>
            </section>

            <Separator />

            {/* Section 5 */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">5. Account Registration and Security</h2>
              <div className="space-y-4">
                <div className="bg-background rounded-lg p-4 border">
                  <p className="text-muted-foreground">
                    You agree to provide accurate, current, and complete information during registration and to update it as needed.
                  </p>
                </div>
                <div className="bg-background rounded-lg p-4 border">
                  <p className="text-muted-foreground">
                    You are responsible for safeguarding your login credentials. Notify us immediately at{" "}
                    <a href="mailto:support@jobalchemy.ai" className="text-primary hover:underline">
                      support@jobalchemy.ai
                    </a>{" "}
                    if you suspect unauthorised use.
                  </p>
                </div>
              </div>
            </section>

            <Separator />

            {/* Section 6 */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">6. User Obligations</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                You agree not to:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Violate any applicable laws or regulations (including UAE and Indian data‑protection laws)</li>
                <li>Infringe intellectual property or privacy rights of third parties</li>
                <li>Upload malicious code, attempt to gain unauthorised access, or interfere with the operation of the Services</li>
                <li>Use the Services to create or distribute unlawful, defamatory, or discriminatory content</li>
                <li>Reverse‑engineer, decompile, or attempt to extract source‑code or algorithms from JobAlchemy&apos;s software</li>
              </ul>
            </section>

            <Separator />

            {/* Section 7 */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">7. Intellectual Property</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                All software, text, graphics, trademarks, and other content forming part of the Services are owned by JobAlchemy or its licensors and are protected under applicable intellectual property laws. You receive a limited, non‑exclusive, non‑transferable licence to use the Services solely for personal, non‑commercial purposes in accordance with these Terms.
              </p>
              
              <div className="bg-background rounded-lg p-4 border">
                <h4 className="font-medium mb-2">7.1 Generated Content</h4>
                <p className="text-muted-foreground text-sm">
                  Any CVs, cover letters, or other materials generated by the Services (&quot;Generated Content&quot;) are provided as‑is. JobAlchemy grants you a perpetual, royalty‑free licence to use, modify, and distribute the Generated Content for job‑application purposes. You are solely responsible for reviewing such content for accuracy, legality, and appropriateness before use.
                </p>
              </div>
            </section>

            <Separator />

            {/* Section 8 */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">8. Third‑Party Services and Links</h2>
              <p className="text-muted-foreground leading-relaxed">
                The Services may integrate with or link to third‑party platforms such as LinkedIn or external job boards. JobAlchemy is not responsible for the content, terms, or policies of those third parties. Your use of third‑party services is at your own risk and subject to their separate terms.
              </p>
            </section>

            <Separator />

            {/* Section 9 */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">9. Fees and Payment</h2>
              <p className="text-muted-foreground leading-relaxed">
                Access to JobAlchemy is currently free during the beta phase. We reserve the right to introduce paid plans or feature‑based pricing. You will receive prior notice and the opportunity to accept new pricing before charges are applied.
              </p>
            </section>

            <Separator />

            {/* Section 10 */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">10. Privacy</h2>
              <p className="text-muted-foreground leading-relaxed">
                Your use of the Services is also governed by our Privacy Policy (accessible at{" "}
                <a href="/privacy-policy" className="text-primary hover:underline">
                  https://www.jobalchemy.ai/privacy-policy
                </a>
                ). Please review it carefully.
              </p>
            </section>

            <Separator />

            {/* Section 11 */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">11. Disclaimers</h2>
              <div className="space-y-4">
                <div className="bg-background rounded-lg p-4 border">
                  <h4 className="font-medium mb-2">⚠️ No Warranty</h4>
                  <p className="text-muted-foreground text-sm">
                    The Services are provided on an &quot;as‑is&quot; and &quot;as‑available&quot; basis. JobAlchemy disclaims all warranties, express or implied, including merchantability, fitness for a particular purpose, and non‑infringement.
                  </p>
                </div>
                <div className="bg-background rounded-lg p-4 border">
                  <h4 className="font-medium mb-2">💼 No Employment Guarantee</h4>
                  <p className="text-muted-foreground text-sm">
                    JobAlchemy does not act as an employer or recruiter and makes no guarantees regarding job placement, interview invitations, or hiring outcomes.
                  </p>
                </div>
              </div>
            </section>

            <Separator />

            {/* Section 12 */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">12. Limitation of Liability</h2>
              <p className="text-muted-foreground leading-relaxed">
                To the fullest extent permitted by law, JobAlchemy shall not be liable for indirect, incidental, special, consequential, or punitive damages, or any loss of profits, data, or goodwill arising from or related to your use of the Services, even if advised of the possibility of such damages. JobAlchemy&apos;s aggregate liability shall not exceed the greater of (a) AED 500 or (b) the amount you paid (if any) for the Services in the twelve months preceding the claim.
              </p>
            </section>

            <Separator />

            {/* Section 13 */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">13. Indemnification</h2>
              <p className="text-muted-foreground leading-relaxed">
                You agree to indemnify and hold harmless JobAlchemy, its affiliates, officers, and employees from any claim, demand, loss, or damage (including reasonable legal fees) arising out of or related to your (a) use of the Services, (b) violation of these Terms, or (c) infringement of any rights of a third party.
              </p>
            </section>

            <Separator />

            {/* Section 14 */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">14. Termination</h2>
              <p className="text-muted-foreground leading-relaxed">
                We may suspend or terminate your access to the Services at any time, with or without notice, for conduct that we believe violates these Terms or is otherwise harmful to us or other users. You may close your account at any time by emailing{" "}
                <a href="mailto:support@jobalchemy.ai" className="text-primary hover:underline">
                  support@jobalchemy.ai
                </a>.
              </p>
            </section>

            <Separator />

            {/* Section 15 */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">15. Governing Law and Dispute Resolution</h2>
              <p className="text-muted-foreground leading-relaxed">
                These Terms are governed by the laws of the United Arab Emirates. Any dispute arising from or relating to the Terms or the Services shall be submitted to the exclusive jurisdiction of the courts of Dubai, UAE, unless otherwise required by mandatory local law.
              </p>
            </section>

            <Separator />

            {/* Section 16 */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">16. Severability</h2>
              <p className="text-muted-foreground leading-relaxed">
                If any provision of these Terms is held unenforceable, that provision will be severed and the remaining provisions shall remain in full force and effect.
              </p>
            </section>

            <Separator />

            {/* Section 17 */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">17. Entire Agreement</h2>
              <p className="text-muted-foreground leading-relaxed">
                These Terms constitute the entire agreement between you and JobAlchemy regarding the Services and supersede any prior agreements or understandings.
              </p>
            </section>

            <Separator />

            {/* Section 18 */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">18. Contact</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                For questions about these Terms, please email:
              </p>
              <div className="bg-primary/10 border border-primary/20 rounded-lg p-4">
                <a href="mailto:support@jobalchemy.ai" className="text-primary font-medium hover:underline">
                  support@jobalchemy.ai
                </a>
              </div>
            </section>

            <Separator />

            {/* Version */}
            <section>
              <div className="bg-muted border rounded-lg p-4 text-center">
                <p className="text-muted-foreground font-medium">
                  Version 1.0 – 1 June 2025
                </p>
              </div>
            </section>

          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
