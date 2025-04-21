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
              <h5 className="text-lg lg:text-xl">Yarooo</h5>
            </Link>
          </div>

          {/* Contact Links */}
          <div className="flex flex-col gap-2">
            <h3 className="font-bold text-lg mb-2">Contact</h3>
            <div>
              <Link className="opacity-60 hover:opacity-100" href="#">
                Github
              </Link>
            </div>
            <div>
              <Link className="opacity-60 hover:opacity-100" href="#">
                Twitter
              </Link>
            </div>
            <div>
              <Link className="opacity-60 hover:opacity-100" href="#">
                Instagram
              </Link>
            </div>
          </div>

          {/* Platforms Links */}
          <div className="flex flex-col gap-2">
            <h3 className="font-bold text-lg mb-2">Platforms</h3>
            <div>
              <Link className="opacity-60 hover:opacity-100" href="#">
                iOS
              </Link>
            </div>
            <div>
              <Link className="opacity-60 hover:opacity-100" href="#">
                Android
              </Link>
            </div>
            <div>
              <Link className="opacity-60 hover:opacity-100" href="#">
                Web
              </Link>
            </div>
          </div>

          {/* Help Links */}
          <div className="flex flex-col gap-2">
            <h3 className="font-bold text-lg mb-2">Help</h3>
            <div>
              <Link className="opacity-60 hover:opacity-100" href="#">
                Contact Us
              </Link>
            </div>
            <div>
              <Link className="opacity-60 hover:opacity-100" href="#">
                FAQ
              </Link>
            </div>
            <div>
              <Link className="opacity-60 hover:opacity-100" href="#">
                Feedback
              </Link>
            </div>
          </div>

          {/* Socials Links */}
          <div className="flex flex-col gap-2">
            <h3 className="font-bold text-lg mb-2">Socials</h3>
            <div>
              <Link className="opacity-60 hover:opacity-100" href="#">
                Twitch
              </Link>
            </div>
            <div>
              <Link className="opacity-60 hover:opacity-100" href="#">
                Discord
              </Link>
            </div>
            <div>
              <Link className="opacity-60 hover:opacity-100" href="#">
                Dribbble
              </Link>
            </div>
          </div>
        </div>

        <Separator className="my-6" />

        <div className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} | It is under the roof of{" "}
          <Link
            target="_blank"
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 text-primary underline-offset-4 hover:underline p-0 h-auto"
            href="https://bundui.io/"
          >
            Bundui
          </Link>
          .
        </div>
      </div>
    </footer>
  )
}