import Image from "next/image";
import links from '@/lib/nav.json'
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black w-full pt-10 px-4 sm:px-6 pb-2">
      <div className="flex flex-col sm:flex-row gap-10 sm:gap-80 px-0 sm:px-10 py-6">
        <div className="flex flex-col gap-3">
          <h3 className="mb-2 text-2xl uppercase text-white">Contact Me</h3>
          <a href="mailto:yevand2006@gmail.com" className="flex items-center gap-3 text-strawberry hover:text-white transition-colors font-poppins font-black">
            <Image src="/images/Google.png" alt="google" width={30} height={50} />
            yevand2006@gmail.com
          </a>
          <a
            href="https://www.linkedin.com/in/yevan-dewathanthriarachchi-512693247/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BIUvitEn%2BQM%2BvJB6x%2BthoXg%3D%3D"
            target="_blank"
            className="flex items-center gap-3 text-strawberry hover:text-white transition-colors font-poppins font-black"
          >
            <Image src="/images/LinkedIn.png" alt="linkedin" width={30} height={50} />
            <span className="truncate max-w-[240px] sm:max-w-none">Yevan Dewathanthriarachchi</span>
          </a>
          <a href="https://github.com/Yevan-0" target="_blank" className="flex items-center gap-3 text-strawberry hover:text-white transition-colors font-poppins font-black">
            <Image src="/images/GitHub.png" alt="github" width={30} height={50} />
            Yevan-0
          </a>
        </div>
        <div className="flex flex-row sm:flex-col gap-4 sm:gap-2 flex-wrap">
          {links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="font-poppins text-strawberry hover:text-white transition-colors font-black"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>

      <div className="flex flex-col items-start sm:items-end text-left sm:text-right text-white text-sm gap-1 font-poppins font-black mt-2">
        <span>Built with Next.js</span>
        <span>© 2025 Yevan-0. All rights reserved.</span>
      </div>
    </footer>
  )
}