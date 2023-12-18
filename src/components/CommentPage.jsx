import { AiOutlineDislike, AiOutlineLike } from "react-icons/ai";
import { FaCaretDown } from "react-icons/fa";

const CommentPage = ({ comment }) => {
  return (
    <div className="comment p-3 ">
      <div className=" w-[50px] h-[50px]">
        <img
          className="max-w-none w-full h-full rounded-full object-cover"
          src={comment.authorThumbnail[comment.authorThumbnail.length - 1].url}
        />
      </div>
      <div className="flex flex-col gap-1">
        <div className="flex gap-3 items-center">
          <h5
            className={`font-bold text-base ${
              comment.authorIsChannelOwner &&
              "bg-[#888888] rounded-full text-sm px-3 py-1"
            }`}
          >
            {comment.authorText}
          </h5>
          <p className="text-xs text-gray-400">{comment.publishedTimeText}</p>
        </div>
        <div>
          <p className="text-sm">{comment.textDisplay}</p>
        </div>
        {/* buttons */}
        <div className="flex gap-1 text-xl items-center">
          <div className="flex items-center ">
            <button className="p-3 hover:bg-[#272727] rounded-full">
              <AiOutlineLike />
            </button>
            {comment.likesCount > 0 && (
              <p className="text-xs">{comment.likesCount}</p>
            )}
          </div>
          <button className="p-3 hover:bg-[#272727] rounded-full">
            <AiOutlineDislike />
          </button>
          <button className="text-sm p-2 hover:bg-[#272727] rounded-full">
            Yanıtla
          </button>
        </div>
        {/* cevaplama kısmı */}
        {comment.replyCount > 0 && (
          <div>
            <button className="text-blue-500  text-sm px-3 py-2 font-bold flex items-center gap-2 hover:bg-[#263850] rounded-full ">
              <FaCaretDown />
              <p>{comment.replyCount} yanıt</p>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CommentPage;
