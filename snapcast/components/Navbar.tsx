'use client'


import Link from "next/link"
import Image from "next/image"
import { useRouter } from "next/navigation";

const user = {};
const Navbar = () => {
  const router = useRouter();
  return (
    <header className="navbar">
          <nav>
            <Link href="/">
            <Image src="/assets/icons/logo.svg" alt="Snapcast Logo" width={32} height={32} />
            <h1>SnapCast</h1>
            </Link>

            {user && (
              <figure>
                <button onClick={() => router.push('/profile/1234')}>
                  <Image src="/assets/images/dummy.jpg" alt="User Icon" width={36} height={36}  className="rounded-full aspect-square" /> 
                </button>
                <button className="cursor-pointer">
                  <Image src="/assets/icons/logout.svg" alt="logout svg" width={24} height={24} className="rotate-180" />
                </button>
              </figure>
            )}
          </nav>
    </header>
  )
}

export default Navbar