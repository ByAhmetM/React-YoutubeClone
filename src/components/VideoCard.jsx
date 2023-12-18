import millify from "millify";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const VideoCard = ({ video, isRow }) => {
  const [isHover, setIsHover] = useState(false);
  const navigate = useNavigate();

  return (
    <div
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      onClick={() => navigate(`/watch?v=${video.videoId}`)}
      className={`cursor-pointer ${isRow && "flex gap-2 items-center"}`}
    >
      {/* fotoğraf kısmı */}
      <div>
        <img
          className={`max-w-none rounded-lg ${!isRow && "w-full"} ${
            isRow && "w-40 h-20"
          }`}
          src={
            isHover && video.richThumbnail
              ? (video.richThumbnail !== null && video.richThumbnail[0]?.url) ||
                (video.richThumbnail === null &&
                  video.thumbnail[video.thumbnail?.length - 1].url)
              : video.thumbnail[video.thumbnail?.length - 1].url
          }
        />
      </div>
      {/* alt detay alanı */}
      <div className="flex gap-4 mt-5">
        <img
          className={`w-14 h-14 rounded-full ${isRow && "hidden"}`}
          src={
            video.channelThumbnail
              ? video.channelThumbnail[0]?.url
              : "/default.png"
          }
        />
        <div className="text-[#aaa]">
          <h4 className={`font-bold text-white ${isRow && "line-clamp-1"}`}>
            {video.title}
          </h4>
          <p>{video.channelTitle}</p>
          <div className="flex gap-2">
            <p className="line-clamp-1 whitespace-nowrap text-sm">
              {millify(video.viewCount)} görüntülenme
            </p>
            <p className=" whitespace-nowrap text-sm">
              {video.publishedTimeText}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
