import Link from "next/link"

  const VideoCard = ({
    id,
    tittle,
    thumbnail,
    userImage,
    username,
    createdAt,
    views,
    duration,
    visibility,
  }: VideoCardProps) => {
  return (
    <Link href={`/video/${id}`} className="video-card"></Link>
  )
}

export default VideoCard