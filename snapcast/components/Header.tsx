import Image from 'next/image'
import Link from 'next/link'

const Header = ({ subHeader, title, userImg }: SharedHeaderProps) => {
  return (
    <header className="header">
      <section className="header-container">
        <div className="details">
          {userImg && (
            <Image src={userImg || 'assets/images/dummy.jpg'} alt="User Image" width={50} height={50} className="rounded-full" />
          )}

          <article>
            <p>{subHeader}</p>
            <h1>{title}</h1>
          </article>
        </div>

        <aside>
          <Link href="/upload">
          <Image src="/assets/icons/upload.svg" alt="Upload Icon" width={16} height={16} className="upload-icon" />
          <span>Uplaod a Video!</span>
          </Link>
        </aside>



      </section>
    </header>
  )
}

export default Header