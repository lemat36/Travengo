import Image from "next/image";
import Link from "next/link";

export default function () {
  return (
    <div className="">
      <nav className="bg-black text-white p-8 flex justify-between items-center px-8">
        <div className="flex items-center space-x-4">
          <Image
            src="/images/logo-retina.png"
            alt="Logo"
            width={90}
            height={40}
            className="h-8"
          />
        </div>
        <div className="space-x-10 ">
          <Link href="/" className="hover:underline text-black">
            Home
          </Link>
          <Link href="/destinations" className="hover:underline text-black">
            Destinations
          </Link>
          <Link href="/tours" className="hover:underline text-black">
            Tours
          </Link>
          <Link href="/tour-details" className="hover:underline text-black">
            Tour Details
          </Link>
          <Link href="/all-tours" className="hover:underline text-black">
            All Tours for Destination
          </Link>
        </div>
      </nav>
    </div>
  );
}
