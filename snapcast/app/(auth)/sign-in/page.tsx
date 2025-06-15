import Link from "next/link"
import Image from "next/image";

const page = () => {
  return (
    <main className="sign-in">
        <aside className="testimonial">
        <Link href="/">
        <Image src="/assets/icons/logo.svg" alt="Snapcast Logo" width={32} height={32} />
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
              <Image src={"/assets/images/jason.png"} alt={"jason"} width={64} height={64} className="rounded-full" />
              <div>
                <h2>Husnain Hameel</h2>
                <p>Full Stack Developer - Google</p>
              </div>
            </article>
          </section>
        </div>

        </aside>

    </main>
  )
}

export default page