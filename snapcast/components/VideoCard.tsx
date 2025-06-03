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
    </Link>
  )
}

export default VideoCard