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
      <Image src={thumbnail} alt={thumbnail} className="thumbnail"   width={290} height={160} />
    </Link>
  )
}

export default VideoCard