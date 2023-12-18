import { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { useSearchParams } from "react-router-dom";
import { getData } from "./../utils/getData";
import { AiFillLike, AiFillDislike } from "react-icons/ai";
import millify from "millify";
import StringArea from "../components/StringArea";
import Loader from "./../components/Loader";
import VideoCard from "./../components/VideoCard";
import CommentPage from "./../components/CommentPage";

const VideoDetail = () => {
  const [video, setVideo] = useState(null);
  const [comments, setComments] = useState(null);
  // 1- URL'den arama(?) parametresini al useSearchParams

  const [searchParams] = useSearchParams();
  // searchparams.get ile arama parametresini idyi aldık
  // ismine göre parametrenin değerine eriştik
  const id = searchParams.get("v");

  // idsini bildiğimz video için api isteği at detayları al

  useEffect(() => {
    setVideo(null);
    getData(`/video/info?id=${id}&extend=1`).then((data) => setVideo(data));
  }, [searchParams]);

  useEffect(() => {
    getData(`/comments?id=${id}`).then((data) => setComments(data.data));
  }, [id]);
  return (
    <div className="detail-page p-5 h-screen overflow-auto">
      {/* video detail üst kısım ve açıklama */}
      <div className="rounded">
        {/* video kısmı */}
        <ReactPlayer
          width={"100%"}
          height={"50vh"}
          playing
          controls
          url={`https://www.youtube.com/watch?v=${id}`}
        />

        {/* alt içerik kısmı */}
        {!video ? (
          <p>Yükleniyor...</p>
        ) : (
          <div className="px-3">
            <h1 className="my-3 text-xl font-bold">{video.title}</h1>

            <div className="flex justify-between ">
              {/* sol */}
              <div className="flex items-center gap-4">
                <img
                  className="rounded-full w-12 h-12"
                  src={
                    video.channelThumbnail[video.channelThumbnail.length - 1]
                      .url
                  }
                />
                <div>
                  <h4 className="font-bold">{video.channelTitle}</h4>
                  <p className="text-gray-400">{video.subscriberCountText}</p>
                </div>
                <button className="bg-white text-black rounded-full px-3 h-9 transition hover:bg-gray-400">
                  Abone Ol
                </button>
              </div>
              {/* sağ */}
              <div className="flex items-center bg-[#272727] rounded-full cursor-pointer">
                <div className="flex items-center gap-3 py-2 px-4 border-r">
                  <AiFillLike />
                  <p>{millify(video.likeCount)}</p>
                </div>
                <div className="py-2 px-4">
                  <AiFillDislike />
                </div>
              </div>
            </div>

            <div className="bg-[#272727] rounded p-2 mt-4 cursor-pointer hover:bg-opacity-70">
              <div className="flex gap-3">
                <p>{millify(video.viewCount)} görüntülenme</p>
                <p>{new Date(video.publishDate).toLocaleDateString()}</p>
              </div>
              <StringArea text={video.description} />
            </div>

            {/* yorumlar kısmı */}
            <div>
              <div className="flex gap-3 items-center p-5">
                <img
                  className="rounded-full"
                  src={video.channelThumbnail[0].url}
                  alt=""
                />
                <input
                  className="bg-transparent outline-none transition duration-500 focus:border-white  p-3 border-b-[1px] border-gray-500 w-full"
                  type="text"
                  placeholder="Yorum ekleyin.."
                />
              </div>
              {!comments ? (
                <p>Loading</p>
              ) : (
                comments.map((comment) => (
                  <div className="p-1" key={comment.commentId}>
                    <CommentPage comment={comment} />
                  </div>
                ))
              )}
            </div>
          </div>
        )}
      </div>

      {/* alakalı videolar kısmı */}
      <div className=" flex flex-col gap-5 p-5">
        {!video ? (
          <Loader isRow={true} />
        ) : (
          video.relatedVideos.data.map(
            (item, i) =>
              item.type === "video" && (
                <VideoCard key={i} isRow={true} video={item} />
              )
          )
        )}
      </div>
    </div>
  );
};

export default VideoDetail;
