import Header from "@/components/Header"
import VideoCard from "@/components/VideoCard"
const Page = () => {
  return (
     <main className="wrapper page">
      <Header title="All videos" subHeader="Public Library"/>
      <h1 className="text-3xl font-karla">Welcome to SnapCast</h1>
      <VideoCard />
     </main>
  )
}

export default Page