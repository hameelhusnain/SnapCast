import Header from "@/components/Header";
import VideoCard from "@/components/VideoCard";
import { dummyCards } from "@/constants";


const page = async ({params}: ParamsWithSearch) => {
    const { id } = await params;
  return (
    <div className="wrapper page">
        <Header subHeader="husnainhameel3@gmail.com" title=" hameelhusnain | HHB" userImg="/assets/images/dummy.jpg" />

        <section className="video-grid">

        {dummyCards.map((card) => (
        <VideoCard
          key={card.id} // <-- Add this line
          {...card}
          visibility={card.visibility as Visibility}
        />
      ))}
        </section>
        </div>
  )
}

export default page