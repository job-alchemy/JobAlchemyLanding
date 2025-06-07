import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";

export default function Footer() {
  return (
    <footer id="footer" className="container pb-8 lg:pb-16">
      <div className="p-10 bg-muted border rounded-2xl">
        <div className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-x-12 gap-y-8">          {/* Logo Section */}
          <div className="col-span-full xl:col-span-2">
            <Link
              className="flex font-bold items-center"
              href="/"
            >
              <div className="flex items-center gap-2">
                <Image
                  className="rounded-sm" 
                  src="/logo.png"
                  alt="JobAlchemy Logo"
                  width={28}
                  height={28}
                />

                <h5 className="text-lg lg:text-xl">JobAlchemy</h5>
              </div>
            </Link>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-2 col-span-1 md:col-span-2 xl:col-span-1">
            <h3 className="font-bold text-lg mb-2">Quick Links</h3>
            <div>
              <Link className="opacity-60 hover:opacity-100" href="/#benefits">
                Benefits
              </Link>
            </div>
            <div>
              <Link className="opacity-60 hover:opacity-100" href="/#pricing">
                Pricing
              </Link>
            </div>
            <div>
              <Link className="opacity-60 hover:opacity-100" href="/blogs">
                Blog
              </Link>
            </div>
          </div>

          {/* Added empty space for better positioning */}
          <div className="hidden xl:block xl:col-span-1"></div>

          {/* Connect Links - Now aligned to the far right */}
          <div className="flex flex-col gap-2 col-span-2 md:col-span-4 xl:col-span-2 xl:justify-self-end mr-10">
            <h3 className="font-bold text-lg mb-2">Connect</h3>
            <div>
              <Link className="opacity-60 hover:opacity-100" href="https://www.instagram.com/jobalchemy.ai?igsh=NngwZTd3ZnoxYms2&utm_source=qr">
                Instagram
              </Link>
            </div>
            <div>
              <Link className="opacity-60 hover:opacity-100" href="https://www.linkedin.com/company/jobalchemy-ai/">
                LinkedIn
              </Link>
            </div>
            <div>
              <Link className="opacity-60 hover:opacity-100" href="https://x.com/jobalchemy_ai?s=11&t=16xS4rHM8s3ZGKPCC1MZEA">
                X
              </Link>
            </div>

          </div>
        </div>        <Separator className="my-6" />

        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} JobAlchemy | All rights reserved.
            Transforming job applications with automation.
          </div>
          <div className="text-sm">
            <Link 
              href="/privacy-policy" 
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
