import Header from "@/components/Header"
import VideoCard from "@/components/VideoCard"
import { dummyCards } from "@/constants"
const Page = () => {
  return (
     <main className="wrapper page">
      <Header title="All videos" subHeader="Public Library"/>
      <h1 className="text-3xl font-karla">Welcome to SnapCast</h1>
      <section className="video-grid">
        {dummyCards.map((card) => (
          <VideoCard
            key={card.id} // <-- Add this line
            {...card}
            visibility={card.visibility as Visibility}
          />
        ))}
      </section>
     </main>
  )
}

export default Page