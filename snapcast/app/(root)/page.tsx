import Header from "@/components/Header"
import VideoCard from "@/components/VideoCard"
import { dummyCards } from "@/constants"
const Page = () => {
  return (
     <main className="wrapper page">
      <Header title="All videos" subHeader="Public Library"/>
      <h1 className="text-3xl font-karla">Welcome to SnapCast</h1>

      {dummyCards.map((card) => (
        <VideoCard {...card} visibility={card.visibility as Visibility} />
      ))}
            <VideoCard 
      id="1"
      title="SnapChat Message"
      thumbnail="/assets/samples/thumbnail (1).png"
      createdAt={new Date("2023-05-30T12:00:00Z")}
      userImg="/assets/images/jason.png"
      username="Jason"
      visibility="public"
      views={526}
      duration={156}
      />
     </main>
  )
}

export default Page