"use client"
import Link from 'next/link'
import Navbar from '@/components/main/Navbar'
import Footer from '@/components/main/Footer'

const blogPosts = [
  {
    id: 'what-is-ats',
    title: 'What is an ATS (Applicant Tracking System)',
    excerpt: 'Learn about Applicant Tracking Systems and how they filter candidates throughout the recruiting process. Discover why optimizing your CV for ATS is crucial for job applications.',
    readTime: '8 min read',
    category: 'Career Tips',
    publishDate: 'December 2024',
    slug: 'what-is-ats'
  },
  {
    id: 'cv-vs-resume',
    title: 'What is the difference between a CV and a Resume?',
    excerpt: 'Understand the key differences between CVs and resumes, their formats, content, and when to use each document type in your job applications.',
    readTime: '6 min read',
    category: 'Career Tips',
    publishDate: 'December 2024',
    slug: 'cv-vs-resume'
  },
  {
    id: 'linkedin-optimization-2025',
    title: 'Ultimate LinkedIn Profile Optimization Checklist for 2025',
    excerpt: 'Complete 15-point checklist to optimize your LinkedIn profile for maximum visibility. Learn AI-friendly strategies to attract recruiters and build your professional brand.',
    readTime: '12 min read',
    category: 'Professional Branding',
    publishDate: 'December 2024',
    slug: 'linkedin-optimization-2025'
  }
]

export default function BlogsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Career Insights & Tips
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover expert advice on job applications, career development, and professional growth. 
            Stay ahead in your career journey with our comprehensive guides.
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article 
              key={post.id}
              className="bg-card border border-border rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full">
                    {post.category}
                  </span>
                  <span className="text-sm text-muted-foreground">
                    {post.readTime}
                  </span>
                </div>
                
                <h2 className="text-xl font-semibold text-foreground mb-3 line-clamp-2">
                  {post.title}
                </h2>
                
                <p className="text-muted-foreground mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">
                    {post.publishDate}
                  </span>
                  <Link 
                    href={`/blogs/${post.slug}`}
                    className="text-primary hover:text-primary/80 font-medium transition-colors"
                  >
                    Read More →
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center bg-card border border-border rounded-lg p-8">
          <h2 className="text-2xl font-bold text-foreground mb-4">
            Ready to Transform Your Career?
          </h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Put these insights into action with JobAlchemy. Create ATS-optimized CVs and 
            get personalized career guidance to land your dream job.
          </p>
          <Link 
            href="/#pricing"
            className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-colors"
          >
            Get Started with JobAlchemy
          </Link>
        </div>
      </main>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Footer />
      </div>
    </div>
  )
}