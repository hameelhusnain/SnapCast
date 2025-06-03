'use client'
import Link from "next/link"
import Image from "next/image"

const VideoCard = ({
  id,
  title,
  thumbnail,
  userImg,
  username,
  createdAt,
  views,
  duration,
  visibility,
}: VideoCardProps) => {
  return (
    <Link href={`/video/${id}`} className="video-card">
      <Image src={thumbnail} alt={thumbnail} className="thumbnail" width={290} height={160} />
      <article>
        <div>
          <figure>
            <Image src={userImg} alt="avatar" className="rounded-full aspect-square" width={34} height={34} />
            <figcaption>
              <h3>{username}</h3>
              <p>{visibility}</p>
            </figcaption>
            <aside>
              <Image src="/assets/icons/eye.svg" alt="views" width={16} height={16} />
              <span>{views}</span>
            </aside>
          </figure>
        </div>
        <h2>
          {title} -{" "}
          {createdAt.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
          })}
        </h2>
      </article>
      <button onClick={() => {}} className="copy-btn">
        <Image src="/assets/icons/link.svg" alt="copy" width={34} height={18} />
      </button>
      {duration && (
        <div className="duration">
          {Math.floor(duration / 60)}:

        </div>
      )}
    </Link>
  )
}

export default VideoCard