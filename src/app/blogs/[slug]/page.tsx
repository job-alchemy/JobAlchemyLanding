"use client"
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Navbar from '@/components/main/Navbar'
import Footer from '@/components/main/Footer'

// Blog posts data
const blogPosts = {
  'what-is-ats': {
    title: 'What is an ATS (Applicant Tracking System)',
    category: 'Career Tips',
    readTime: '8 min read',
    publishDate: 'December 2024',
    content: `
      <p class="text-lg text-muted-foreground mb-6">As the name suggests it's a software used by recruiters globally to screen and track candidates throughout the recruiting and hiring process. It enables recruiters to set key parameters (keywords, skills, qualifications and more) for the role and filter candidates based on how closely their CVs and responses to knockout questions align with those criteria.</p>

      <p class="mb-6">If you've often heard to tailor your CV and answers for each job application according to the job description, the ATS is the reason why. No matter how good you might be for the job, if you do not optimise your CV to the JD of the role you're likely to not get past the screening stage.</p>

      <h2 class="text-2xl font-bold text-foreground mb-4 mt-8">How do you optimise your CV for an ATS / How do you create an ATS friendly CV?</h2>
      
      <p class="mb-4"><strong>Three crucial steps:</strong></p>
      
      <div class="bg-card border border-border rounded-lg p-6 mb-6">
        <h3 class="text-lg font-semibold mb-3">You might ask do i actually need to do care about the ATS?</h3>
        <p class="mb-2"><strong>The answer is: Yes, you do. Why?</strong></p>
        <p>So you get the picture, using an ATS for recruitment has become an industry standard and the use of the technology is just going to increase with the prevalence of AI being incorporated into the tech.</p>
      </div>
    `
  },
  'cv-vs-resume': {
    title: 'What is the difference between a CV and a Resume?',
    category: 'Career Tips',
    readTime: '6 min read',
    publishDate: 'December 2024',
    content: `
      <p class="text-lg text-muted-foreground mb-6">They're both documents that encapsulate your career and work information however what they differ in is format and content. This difference however is only applicable in the US and Canada. In Europe, Australia and New Zealand, resume and CV mean the same thing.</p>

      <p class="mb-6">With this in mind, let's get right into the key differences:</p>

      <div class="overflow-x-auto mb-8">
        <table class="w-full border-collapse border border-border">
          <thead>
            <tr class="bg-muted">
              <th class="border border-border p-4 text-left font-semibold">Resume</th>
              <th class="border border-border p-4 text-left font-semibold">CV</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="border border-border p-4">Resumes are commonly submitted for roles in corporate sectors, government, and non-profit organizations.</td>
              <td class="border border-border p-4">CVs are often required when applying for academic positions, research roles, or when seeking fellowships and grants.</td>
            </tr>
            <tr class="bg-muted/30">
              <td class="border border-border p-4">Emphasizes relevant skills, competencies, and professional achievements tailored to the job you're applying for.</td>
              <td class="border border-border p-4">CVs emphasize scholarly accomplishments, such as publications, research, teaching experience, and academic honours.</td>
            </tr>
            <tr>
              <td class="border border-border p-4">Resumes are structured in a flexible format—chronological, functional, or a mix of both—to best present qualifications.</td>
              <td class="border border-border p-4">CVs follow a more open structure and can vary widely depending on the field or institution's requirements.</td>
            </tr>
            <tr class="bg-muted/30">
              <td class="border border-border p-4">Resumes are concise and rarely exceed two pages. An extra page may be added if publications or presentations are highly relevant.</td>
              <td class="border border-border p-4">Unlike resumes, CVs can be much longer, often spanning several pages, detailing a full history of publications, presentations, and relevant experience.</td>
            </tr>
            <tr>
              <td class="border border-border p-4">The resume includes specific sections such as work experience, education, and skills, aligned with the job's needs.</td>
              <td class="border border-border p-4">The structure of a CV is more fluid, with sections tailored to specific academic or research roles, covering aspects such as teaching, publications, grants, and more.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 class="text-2xl font-bold text-foreground mb-4 mt-8">The History and Importance of CVs</h2>
      
      <p class="mb-4">In Latin, it loosely means 'the course of one's life', the concept of which was supposedly coined by Leonardo Da Vinci in 1482!</p>
      
      <p class="mb-6">Allegedly, Da Vinci, in his pursuit of work, wrote a list of his skills and experiences and sent them to the Duke of Milan. In the letter he offered his services in designing structures such as bridges, sculptures and boats. Although, of course, Da Vinci was known for his artistic contributions to society, the content of the letter was said to have paid particular attention to skills that aligned most closely with that of the Dukes wishes. Da Vinci's letter was the first example of how we prioritise accomplishments of note in the context of our audience, and thus Da Vinci was credited as the first ever to write a CV as we know it.</p>

      <div class="bg-card border border-border rounded-lg p-6 mb-6">
        <h3 class="text-lg font-semibold mb-3">Here is the general format and structure of a CV that you should follow:</h3>
        <ul class="list-disc list-inside space-y-2">
          <li>Your contact information</li>
          <li>Your work experience</li>
          <li>Your education</li>
          <li>Your publications and awards</li>
          <li>Your academic qualifications</li>
          <li>Your non-academic activities</li>
          <li>Your personal qualities and skills</li>
          <li>Your language skills</li>
          <li>Your references</li>
        </ul>
      </div>

      <p class="mb-4">The word "resume" originates from the French term résumé, meaning 'summary'. Similar to an English CV, a resume is a 1-2 page document that offers recruiters and employers a brief snapshot of your work experience, education, and skills. As a marketing tool, it focuses only on the most relevant skills and experiences for the job.</p>

      <div class="bg-card border border-border rounded-lg p-6 mb-6">
        <h3 class="text-lg font-semibold mb-3">Typically, a resume includes the following sections:</h3>
        <ul class="list-disc list-inside space-y-2 mb-4">
          <li>Contact details</li>
          <li>Personal profile/summary or objective</li>
          <li>Work experience</li>
          <li>Education</li>
          <li>Skills</li>
          <li>Training/courses or professional affiliations</li>
        </ul>
        
        <p class="mb-3">You can also add additional sections, such as volunteering, hobbies, and interests, to further demonstrate your skills.</p>
        
        <p class="mb-3">The resume format is flexible, allowing you to choose the one that best suits your background and the job you're targeting:</p>
        <ul class="list-disc list-inside space-y-1">
          <li>Chronological: in order of dates</li>
          <li>Functional: focused on skills</li>
          <li>Combination/Hybrid: a mix of both formats</li>
        </ul>
      </div>
    `
  },
  'linkedin-optimization-2025': {
    title: 'Ultimate LinkedIn Profile Optimization Checklist for 2025',
    category: 'Professional Branding',
    readTime: '12 min read',
    publishDate: 'December 2024',
    content: `
      <p class="text-lg text-muted-foreground mb-6">LinkedIn surpassed 1 billion members in late‑2024, and its AI‑driven Recruiter search now ranks profiles on relevance rather than recency alone. To stay visible, you need more than a polished headshot—you need strategic keywords, engaging media, and a consistent content cadence.</p>

      <div class="bg-primary/10 border border-primary/20 rounded-lg p-4 mb-6">
        <p class="text-sm font-medium text-primary">📊 Quick Stat: 87% of recruiters say LinkedIn is their primary source for vetting candidates (Jobvite, 2024).</p>
      </div>

      <p class="mb-8">Follow this 15‑point checklist, complete with pro tips and tool links, to turn your profile into a recruiter magnet.</p>

      <h2 class="text-2xl font-bold text-foreground mb-4 mt-8">1. Secure a Custom URL</h2>
      <p class="mb-4"><strong>Format:</strong> linkedin.com/in/firstname‑lastname‑keyword (e.g., gokul‑prem‑product‑manager).</p>
      <p class="mb-6">Shortens links on your CV and boosts SEO.</p>

      <h2 class="text-2xl font-bold text-foreground mb-4 mt-8">2. Craft an AI‑Friendly Headline (220 chars)</h2>
      <p class="mb-4"><strong>Formula:</strong> Target Job Title + Specialty / Niche + Outcome or Key Metric</p>
      <p class="mb-4"><strong>Example:</strong> "Product Manager | Generative AI & FinTech | Scaled ARR 3× to $4.2M."</p>
      
      <div class="bg-card border border-border rounded-lg p-6 mb-6">
        <h3 class="text-lg font-semibold mb-3">Headline Tips</h3>
        <ul class="list-disc list-inside space-y-2">
          <li>Front‑load the exact job title for recruiter keyword match.</li>
          <li>Use separators (| • —) to improve skimmability.</li>
        </ul>
      </div>

      <h2 class="text-2xl font-bold text-foreground mb-4 mt-8">3. Upload a Professional, On‑Brand Photo</h2>
      <ul class="list-disc list-inside space-y-2 mb-6">
        <li>Resolution: 800 × 800 px (min 400 × 400).</li>
        <li>Neutral background or subtle brand color backdrop.</li>
        <li>Use 60–70% face cropping for approachability.</li>
      </ul>

      <h2 class="text-2xl font-bold text-foreground mb-4 mt-8">4. Design a Scroll‑Stopping Banner</h2>
      <p class="mb-4"><strong>Dimensions:</strong> 1584 × 396 px. Add:</p>
      <ul class="list-disc list-inside space-y-2 mb-6">
        <li>Tagline or mission statement.</li>
        <li>Brand colors or subtle pattern.</li>
        <li>Product screenshot or conference photo (right‑hand safe zone).</li>
      </ul>

      <h2 class="text-2xl font-bold text-foreground mb-4 mt-8">5. Write a Magnetic "About" Section (2,600 chars)</h2>
      <ul class="list-disc list-inside space-y-2 mb-4">
        <li><strong>Hook (3 lines):</strong> Spark curiosity with a mission statement.</li>
        <li><strong>Achievement Blocks (3–4):</strong> Start each with a power verb + metric.</li>
        <li><strong>Tech & Domain Stack:</strong> Bullet hard skills + tools.</li>
        <li><strong>Personal Note:</strong> 1 sentence on hobbies or volunteer work.</li>
        <li><strong>CTA:</strong> Invite connection or email.</li>
      </ul>
      
      <div class="bg-primary/10 border border-primary/20 rounded-lg p-4 mb-6">
        <p class="text-sm font-medium text-primary">💡 SEO Tip: Repeat your target job title 2–3× naturally (every 300 words).</p>
      </div>

      <h2 class="text-2xl font-bold text-foreground mb-4 mt-8">6. Insert Relevant Keywords Strategically</h2>
      <ul class="list-disc list-inside space-y-2 mb-6">
        <li>Profile Headline</li>
        <li>About Section</li>
        <li>Job Titles & Synonyms (Product Lead / PM)</li>
        <li>Skills Section (add up to 50)</li>
      </ul>

      <h2 class="text-2xl font-bold text-foreground mb-4 mt-8">7. Populate the Featured Section with Proof</h2>
      <p class="mb-6">Show, don't tell: whitepapers, portfolio links, press mentions, or a link to your JobAlchemy CV.</p>

      <h2 class="text-2xl font-bold text-foreground mb-4 mt-8">8. Bullet Your Experience—Not Job Descriptions</h2>
      <ul class="list-disc list-inside space-y-2 mb-6">
        <li>Use reverse‑chronological order.</li>
        <li>3–5 bullets per role; each starts with a power verb + metric.</li>
        <li>Include 2‑line description of company if start‑up.</li>
      </ul>

      <h2 class="text-2xl font-bold text-foreground mb-4 mt-8">9. Showcase Skills & Collect Endorsements</h2>
      <ul class="list-disc list-inside space-y-2 mb-6">
        <li>Pin top 3 skills—choose role‑defining ones.</li>
        <li>Aim for 30+ endorsements each; ask colleagues after successful projects.</li>
      </ul>

      <h2 class="text-2xl font-bold text-foreground mb-4 mt-8">10. Gather Value‑Rich Recommendations</h2>
      <ul class="list-disc list-inside space-y-2 mb-6">
        <li>Request from managers, peers, direct reports, clients.</li>
        <li>Suggest they cite a concrete project + result.</li>
      </ul>

      <h2 class="text-2xl font-bold text-foreground mb-4 mt-8">11. Activate Creator Mode with Purpose</h2>
      <ul class="list-disc list-inside space-y-2 mb-6">
        <li>Choose 5 niche hashtags (e.g., #ProductOps, #GenAI).</li>
        <li>Boosts reach of your long‑form posts and newsletters.</li>
      </ul>

      <h2 class="text-2xl font-bold text-foreground mb-4 mt-8">12. Build a 30‑Day Content Calendar</h2>
      
      <div class="overflow-x-auto mb-6">
        <table class="w-full border-collapse border border-border">
          <thead>
            <tr class="bg-muted">
              <th class="border border-border p-3 text-left font-semibold">Frequency</th>
              <th class="border border-border p-3 text-left font-semibold">Post Type</th>
              <th class="border border-border p-3 text-left font-semibold">Idea Examples</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="border border-border p-3">1×/wk</td>
              <td class="border border-border p-3">Thought‑leadership</td>
              <td class="border border-border p-3">"3 lessons from scaling XYZ feature to 1M users"</td>
            </tr>
            <tr class="bg-muted/30">
              <td class="border border-border p-3">1×/wk</td>
              <td class="border border-border p-3">Carousel / How‑to</td>
              <td class="border border-border p-3">"Roadmap planning in 5 steps"</td>
            </tr>
            <tr>
              <td class="border border-border p-3">2×/mo</td>
              <td class="border border-border p-3">Industry news + POV</td>
              <td class="border border-border p-3">Commentary on Gartner or CB Insights report</td>
            </tr>
          </tbody>
        </table>
      </div>
      
      <p class="mb-6">Use JobAlchemy Scheduler to auto‑queue content at peak times.</p>

      <h2 class="text-2xl font-bold text-foreground mb-4 mt-8">13. Engage Daily—15 Minutes Max</h2>
      <ul class="list-disc list-inside space-y-2 mb-6">
        <li>Comment on 5 relevant posts with insights.</li>
        <li>Reply to DMs within 48 hrs.</li>
        <li>Congratulate peers on achievements.</li>
      </ul>

      <h2 class="text-2xl font-bold text-foreground mb-4 mt-8">14. Leverage Analytics</h2>
      <p class="mb-6">Track Profile Views, Search Appearances, and Top Keywords weekly; iterate headline and skills accordingly.</p>

      <h2 class="text-2xl font-bold text-foreground mb-4 mt-8">15. Turn On "Open to Work" Wisely</h2>
      <ul class="list-disc list-inside space-y-2 mb-6">
        <li>Select "Recruiters only" if currently employed.</li>
        <li>Add a custom note (40 chars): "Exploring Sr PM roles in FinTech | UAE relocation ready."</li>
      </ul>
    `
  }
}

interface PageProps {
  params: {
    slug: string
  }
}

export default function BlogPost({ params }: PageProps) {
  const post = blogPosts[params.slug as keyof typeof blogPosts]
  
  if (!post) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        {/* Back to blogs */}
        <div className="mb-8">
          <Link 
            href="/blogs"
            className="inline-flex items-center text-primary hover:text-primary/80 font-medium transition-colors"
          >
            ← Back to all articles
          </Link>
        </div>

        {/* Article Header */}
        <header className="mb-12">
          <div className="flex items-center gap-4 mb-4">
            <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full">
              {post.category}
            </span>
            <span className="text-sm text-muted-foreground">
              {post.readTime}
            </span>
            <span className="text-sm text-muted-foreground">
              {post.publishDate}
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
            {post.title}
          </h1>
        </header>

        {/* Article Content */}
        <article className="prose prose-lg max-w-none">
          <div 
            className="text-muted-foreground leading-relaxed"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </article>        {/* CTA Section */}
        <div className="mt-16 bg-card border border-border rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-foreground mb-4">
            Ready to Apply These Tips?
          </h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Transform your career with JobAlchemy. Create ATS-optimized CVs, get personalized guidance, 
            and land your dream job faster.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/#pricing"
              className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-colors"
            >
              Get Started with JobAlchemy
            </Link>
            <Link 
              href="/blogs"
              className="inline-flex items-center px-6 py-3 border border-border text-foreground font-medium rounded-lg hover:bg-muted transition-colors"
            >
              Read More Articles
            </Link>
          </div>
        </div>
      </main>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Footer />
      </div>
    </div>
  )
}
