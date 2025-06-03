import Navbar from "@/components/main/Navbar";
import Footer from "@/components/main/Footer";
import { Separator } from "@/components/ui/separator";

export default function PrivacyPolicy() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 font-[family-name:var(--font-geist-sans)]">
      <Navbar />
      
      {/* Header Section */}
      <div className="container mx-auto py-24 pb-10  lg:py-28 lg:pb-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl lg:text-5xl font-bold text-center mb-4">
            Privacy Policy
          </h1>
          <p className="text-xl text-muted-foreground text-center ">
            How we collect, use, and protect your personal data
          </p>
          
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto pb-16">
        <div className="max-w-4xl mx-auto prose prose-lg dark:prose-invert">
          <div className="bg-muted border rounded-2xl p-8 lg:p-12 space-y-8">
            
            {/* Introduction */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
              <p className="text-muted-foreground leading-relaxed">
                This Privacy Policy explains how JobAlchemy (&quot;we&quot;, &quot;our&quot;, &quot;us&quot;) collects, uses, shares, and protects personal data collected through our website, services, and Chrome extension. This policy complies with the General Data Protection Regulation (GDPR), and applicable data protection laws in India and the UAE.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                By using JobAlchemy, you agree to the terms of this Privacy Policy.
              </p>
            </section>

            <Separator />

            {/* Data We Collect */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">Data We Collect</h2>
              
              <h3 className="text-xl font-medium mb-3">Personal Data</h3>
              
              <div className="space-y-4">
                <div className="bg-background rounded-lg p-4 border">
                  <h4 className="font-medium mb-2">Authentication Data:</h4>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1">
                    <li>Email address (via Google sign-in or manual sign-up)</li>
                    <li>Password (if opting for manual sign-up)</li>
                  </ul>
                </div>
                
                <div className="bg-background rounded-lg p-4 border">
                  <h4 className="font-medium mb-2">Professional Data:</h4>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1">
                    <li>Work experience details</li>
                    <li>Educational background</li>
                    <li>Skills and certifications</li>
                    <li>LinkedIn profile URL</li>
                  </ul>
                </div>
              </div>

              <h3 className="text-xl font-medium mb-3 mt-6">Usage Data</h3>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Information about interactions with our website and Chrome extension</li>
                <li>Browser type, device information, IP address, and timestamps</li>
              </ul>
            </section>

            <Separator />

            {/* How We Collect Data */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">How We Collect Data</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We collect data directly from you when:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                <li>You sign-up via Google authentication or manually</li>
                <li>You manually input professional and educational information</li>
                <li>You provide your LinkedIn profile link</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We also collect usage data automatically through cookies, server logs, and analytics tools.
              </p>
              <div className="bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
                <p className="text-sm text-blue-800 dark:text-blue-200">
                  <strong>Note:</strong> We do not collect résumés, cover letters, or job descriptions from you. Instead, we generate these documents based on the professional information you provide.
                </p>
              </div>
            </section>

            <Separator />

            {/* Purpose of Data Collection */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">Purpose of Data Collection</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                JobAlchemy collects data to:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Provide and enhance services</li>
                <li>Personalize user experiences</li>
                <li>Communicate important updates and support</li>
                <li>Facilitate automated job application services</li>
                <li>Recommend jobs, assess skills, and draft application materials using AI processing</li>
                <li>Conduct internal research and analytics to improve our offerings</li>
              </ul>
            </section>

            <Separator />

            {/* Legal Basis */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">Legal Basis for Processing (GDPR)</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Under GDPR, we process your personal data based on:
              </p>
              <div className="space-y-3">
                <div className="bg-background rounded-lg p-4 border">
                  <h4 className="font-medium">Consent</h4>
                  <p className="text-muted-foreground text-sm">Explicit permission provided during sign-up</p>
                </div>
                <div className="bg-background rounded-lg p-4 border">
                  <h4 className="font-medium">Contractual necessity</h4>
                  <p className="text-muted-foreground text-sm">To deliver the services promised to you</p>
                </div>
                <div className="bg-background rounded-lg p-4 border">
                  <h4 className="font-medium">Legitimate interests</h4>
                  <p className="text-muted-foreground text-sm">Improving our services and customer experience</p>
                </div>
              </div>
            </section>

            <Separator />

            {/* Data Storage and Security */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">Data Storage and Security</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                All personal data is hosted exclusively on Amazon Web Services (AWS) infrastructure located in secure data‑centre regions that offer robust legal protections. AWS holds a broad set of third‑party security certifications and attestations, including ISO 27001, SOC 1/2/3, PCI‑DSS, and compliance mappings for GDPR and the UAE PDPL.
              </p>
              
              <div className="grid gap-4 md:grid-cols-2">
                <div className="bg-background rounded-lg p-4 border">
                  <h4 className="font-medium mb-2">🔐 Encryption</h4>
                  <p className="text-muted-foreground text-sm">All data is encrypted at rest with AES‑256 and in transit using TLS 1.2+</p>
                </div>
                <div className="bg-background rounded-lg p-4 border">
                  <h4 className="font-medium mb-2">🛡️ Access Controls</h4>
                  <p className="text-muted-foreground text-sm">Production environments protected by role‑based access controls and multi‑factor authentication</p>
                </div>
                <div className="bg-background rounded-lg p-4 border">
                  <h4 className="font-medium mb-2">🏢 Physical Security</h4>
                  <p className="text-muted-foreground text-sm">AWS data centres employ layered physical defences and 24/7 surveillance</p>
                </div>
                <div className="bg-background rounded-lg p-4 border">
                  <h4 className="font-medium mb-2">⚙️ Operational Safeguards</h4>
                  <p className="text-muted-foreground text-sm">Least‑privilege IAM policies and regular security audits</p>
                </div>
              </div>
                <p className="text-muted-foreground text-sm mt-4">
                For more details on AWS&apos;s security programme, visit: 
                <a href="https://aws.amazon.com/compliance/" className="text-blue-600 dark:text-blue-400 hover:underline ml-1">
                  https://aws.amazon.com/compliance/
                </a>
              </p>
            </section>

            <Separator />

            {/* Data Retention */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">Data Retention</h2>
              <p className="text-muted-foreground leading-relaxed">
                We retain your personal data only for as long as necessary to provide services, comply with legal obligations, resolve disputes, and enforce our agreements.
              </p>
            </section>

            <Separator />

            {/* Sharing and Disclosure */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">Sharing and Disclosure</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Your personal data is not sold or rented to third parties. However, we may share your data with:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Service providers assisting in delivering our services (e.g., hosting providers, analytics services)</li>
                <li>OpenAI API for AI text generation</li>
                <li>Authorities if required by law, regulation, or legal process</li>
              </ul>
            </section>

            <Separator />

            {/* International Data Transfers */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">International Data Transfers</h2>
              <p className="text-muted-foreground leading-relaxed">
                Your data may be transferred and stored internationally on AWS servers. We ensure all transfers comply with GDPR, Indian, and UAE data protection laws, using appropriate safeguards such as Standard Contractual Clauses.
              </p>
            </section>

            <Separator />

            {/* Your Rights */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">Your Rights</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Under GDPR and applicable local laws, you have rights to:
              </p>
              <div className="grid gap-3 md:grid-cols-2">
                <div className="bg-background rounded-lg p-3 border">
                  <span className="text-sm">✓ Access your personal data</span>
                </div>
                <div className="bg-background rounded-lg p-3 border">
                  <span className="text-sm">✓ Correct inaccurate or incomplete data</span>
                </div>                <div className="bg-background rounded-lg p-3 border">
                  <span className="text-sm">✓ Delete your data (&quot;Right to be forgotten&quot;)</span>
                </div>
                <div className="bg-background rounded-lg p-3 border">
                  <span className="text-sm">✓ Restrict or object to data processing</span>
                </div>
                <div className="bg-background rounded-lg p-3 border">
                  <span className="text-sm">✓ Withdraw consent at any time</span>
                </div>
                <div className="bg-background rounded-lg p-3 border">
                  <span className="text-sm">✓ Portability of data</span>
                </div>
              </div>
              <div className="bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 rounded-lg p-4 mt-4">
                <p className="text-sm text-green-800 dark:text-green-200">
                  To exercise these rights or request immediate deletion of your data, please contact us at 
                  <a href="mailto:support@jobalchemy.ai" className="font-medium underline ml-1">support@jobalchemy.ai</a>. 
                  Upon receiving your request, we will promptly delete all requested personal data.
                </p>
              </div>
            </section>

            <Separator />

            {/* Cookies and Analytics */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">Cookies, Log Files, and Analytics</h2>
              <p className="text-muted-foreground leading-relaxed">
                We use cookies, server logs, and analytics tools to enhance your experience, analyze usage patterns, and ensure security. You can manage or disable cookies through your browser settings.
              </p>
            </section>

            <Separator />

            {/* Automated Decision-Making */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">Automated Decision-Making</h2>
              <p className="text-muted-foreground leading-relaxed">
                Certain features, such as job matching and skill scoring, use automated processing. These outputs are informational only and do not have significant legal effects. You may request human review by contacting us.
              </p>
            </section>

            <Separator />

            {/* Compliance */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">Compliance with Indian and UAE Data Protection Laws</h2>
              <div className="space-y-4">
                <div className="bg-background rounded-lg p-4 border">
                  <h4 className="font-medium mb-2">🇮🇳 India Compliance</h4>                  <p className="text-muted-foreground text-sm">
                    We comply fully with India&apos;s Information Technology Act, 2000 and amendments, including applicable rules and guidelines on sensitive personal data.
                  </p>
                </div>
                <div className="bg-background rounded-lg p-4 border">
                  <h4 className="font-medium mb-2">🇦🇪 UAE Compliance</h4>
                  <p className="text-muted-foreground text-sm">
                    We comply fully with UAE Federal Law No. 45/2021 on the Protection of Personal Data, implementing necessary security measures and data protection standards.
                  </p>
                </div>
              </div>
            </section>

            <Separator />            {/* Children's Privacy */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">Children&apos;s Privacy</h2>
              <p className="text-muted-foreground leading-relaxed">
                JobAlchemy is not intended for children under 18. We do not knowingly collect or store personal data from individuals under 18 years of age.
              </p>
            </section>

            <Separator />

            {/* Updates */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">Updates to this Policy</h2>
              <p className="text-muted-foreground leading-relaxed">
                We may update this Privacy Policy periodically. Significant changes will be communicated via email or prominently on our website.
              </p>
            </section>

            <Separator />

            {/* Contact Information */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                For questions or concerns regarding this Privacy Policy or our data practices, please contact us at:
              </p>
              <div className="bg-primary/10 border border-primary/20 rounded-lg p-4">
                <a href="mailto:support@jobalchemy.ai" className="text-primary font-medium hover:underline">
                  support@jobalchemy.ai
                </a>
              </div>
              <p className="text-muted-foreground leading-relaxed mt-6 text-center font-medium">
                By continuing to use JobAlchemy, you acknowledge your acceptance of this Privacy Policy.
              </p>
            </section>

          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}