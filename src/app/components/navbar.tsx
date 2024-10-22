import Image from "next/image";
import Link from "next/link";
export default function Navbar() {
    return (
        <div className="">
            <nav className=" flex h-12 items-center justify-around text-white text-xs font-bold bg-transparent pt-3 ">
                <div>
                    
                </div>
                <div className="flex h-12 items-center justify-evenly gap-10 text-white text-xs font-bold bg-transparent pt-3">
                <Link href="/" className="hover:font-extrabold">HOME</Link>
                <Link href="/about" className="hover:font-extrabold">ABOUT</Link>
                <Link href="/contact" className="hover:font-extrabold">CONTACT</Link>
                <Link href="/help" className="hover:font-extrabold">HELP</Link>
                <Link href="/jobs" className="hover:font-extrabold">JOBS</Link>
                </div>
                
            </nav>

        </div>
    )
}