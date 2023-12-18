import { useContext } from "react";
import SideBar from "../components/SideBar";
import { YoutubeContext } from "../context/youtubeContext";
import Loader from "./../components/Loader";
import VideoCard from "../components/VideoCard";

const Feed = () => {
  const { videos } = useContext(YoutubeContext);
  console.log(videos);
  return (
    <div className="flex gap-10">
      <SideBar />
      <div className="video-layout">
        {/* 1) eğer apiden henüz cevap gelmediyse yükleniyor bas
          2) apiden cevap geldiyse sadece type'ı video olanlar
          için ekrana video kart bas
       */}
        {!videos ? (
          <Loader />
        ) : (
          videos.map(
            (item, i) =>
              item.type === "video" && <VideoCard key={i} video={item} />
          )
        )}
      </div>
    </div>
  );
};

export default Feed;
