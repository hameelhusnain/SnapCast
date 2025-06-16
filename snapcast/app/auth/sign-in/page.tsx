'use client';

import Link from "next/link"
import Image from "next/image";
import { authClient } from "@/lib/auth-client";

const page = () => {
  const handleSignIn = async () => {
    return await authClient.signIn.social({provider: "google"});
  }
  return (
    <main className="sign-in">
        <aside className="testimonial">
        <Link href="/">
        <img src="/assets/icons/logo.svg" alt="Snapcast Logo" width={32} height={32} />
        </Link>
        <div className="description">
          <section>
            <figure>
              {Array.from({ length: 3 }).map((_, index) => (
                <Image
                  key={index}
                  src="/assets/icons/star.svg"
                  alt="star icon"
                  width={20}
                  height={20}
                />
              ))}
            </figure>
            <p>Snapcast makes screen recording easy. From quick walkthroughs to full presentation, it's fast, smooth and shareable in seconds.</p>
            <article>
              <Image src="/assets/images/jason.png" alt="Jason" width={64} height={64} />
              <div>
                <h2>Husnain Hameel</h2>
                <p>Full Stack Developer - Google</p>
              </div>
            </article>
          </section>
        </div>
        <p>© SnapCast {(new Date()).getFullYear()}</p>
        </aside>
        <aside className="google-sign-in">
          <section>
            <Link href="/">
            <img src="/assets/icons/logo.svg" alt="Snapcast Logo" width={40} height={40} />
            <h1>SnapCast</h1>
            </Link>
            <p>Create and share your very first <span>SnapCast Video</span>in no time!</p>
            <button onClick={handleSignIn}>
              <img src="/assets/icons/google.svg" alt="Google Icon" width={20} height={20} />
              <span>Sign in with Google</span>
            </button>
          </section>
        </aside>
        <div className="overlay" />

    </main>
  )
}

export default page