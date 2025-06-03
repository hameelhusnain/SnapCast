import Header from "@/components/Header"
import VideoCard from "@/components/VideoCard"
const Page = () => {
  return (
     <main className="wrapper page">
      <Header title="All videos" subHeader="Public Library"/>
      <h1 className="text-3xl font-karla">Welcome to SnapCast</h1>
      <VideoCard 
      id="1"
      title="SnapChat Message - 30 May 2023"
      thumbnail="/assets/samples/thumbnail (1).png"
      createdAt="2023-05-30T12:00:00Z"
      userImage="/assets/images/jason.png"
      username="Jason"
      visibility="public"
      views="1.2K"
      duration={156}
      />
     </main>
  )
}

export default Page