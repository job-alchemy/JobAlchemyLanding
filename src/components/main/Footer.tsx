import Link from "next/link"
import { SunDim } from "lucide-react"
import { Separator } from "@/components/ui/separator"

export default function Footer() {
  return (
    <footer id="footer" className="container pb-8 lg:pb-16">
      <div className="p-10 bg-muted border rounded-2xl">
        <div className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-x-12 gap-y-8">
          {/* Logo Section */}
          <div className="col-span-full xl:col-span-2">
            <Link className="flex font-bold items-center" href="/">
              <span className="flex items-center justify-center size-7 lg:size-8 mr-2 bg-gradient-to-tr from-primary via-primary/70 to-primary rounded-lg border border-secondary">
                <SunDim className="size-5 lg:size-6 text-white" />
              </span>
              <h5 className="text-lg lg:text-xl">JobAlchemy</h5>
            </Link>
          </div>

          {/* Company Links */}
          <div className="flex flex-col gap-2">
            <h3 className="font-bold text-lg mb-2">Company</h3>
            <div>
              <Link className="opacity-60 hover:opacity-100" href="#">
                About Us
              </Link>
            </div>
            <div>
              <Link className="opacity-60 hover:opacity-100" href="#">
                Careers
              </Link>
            </div>
            <div>
              <Link className="opacity-60 hover:opacity-100" href="#">
                Blog
              </Link>
            </div>
          </div>

          {/* Features Links */}
          <div className="flex flex-col gap-2">
            <h3 className="font-bold text-lg mb-2">Features</h3>
            <div>
              <Link className="opacity-60 hover:opacity-100" href="#">
                Resume Builder
              </Link>
            </div>
            <div>
              <Link className="opacity-60 hover:opacity-100" href="#">
                Cover Letter AI
              </Link>
            </div>
            <div>
              <Link className="opacity-60 hover:opacity-100" href="#">
                Job Tracking
              </Link>
            </div>
          </div>

          {/* Resources Links */}
          <div className="flex flex-col gap-2">
            <h3 className="font-bold text-lg mb-2">Resources</h3>
            <div>
              <Link className="opacity-60 hover:opacity-100" href="#">
                Help Center
              </Link>
            </div>
            <div>
              <Link className="opacity-60 hover:opacity-100" href="#">
                FAQ
              </Link>
            </div>
            <div>
              <Link className="opacity-60 hover:opacity-100" href="#">
                Support
              </Link>
            </div>
          </div>

          {/* Connect Links */}
          <div className="flex flex-col gap-2">
            <h3 className="font-bold text-lg mb-2">Connect</h3>
            <div>
              <Link className="opacity-60 hover:opacity-100" href="#">
                LinkedIn
              </Link>
            </div>
            <div>
              <Link className="opacity-60 hover:opacity-100" href="#">
                Twitter
              </Link>
            </div>
            <div>
              <Link className="opacity-60 hover:opacity-100" href="#">
                Discord
              </Link>
            </div>
          </div>
        </div>

        <Separator className="my-6" />

        <div className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} JobAlchemy | All rights reserved. Transforming job applications with automation.
        </div>
      </div>
    </footer>
  )
}