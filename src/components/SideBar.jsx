import { useContext } from "react";
import { categories } from "./../constants/index";
import { YoutubeContext } from "../context/youtubeContext";

const SideBar = () => {
  const { selectedCategory, setSelectedCategory } = useContext(YoutubeContext);
  return (
    <div className="flex flex-col p-1 md:m-4">
      {categories.map((item, i) => (
        <div onClick={() => setSelectedCategory(item)} key={i}>
          <div
            className={`${
              item.name === selectedCategory.name && "bg-[#2d2d2d]"
            } flex transition duration-300 items-center gap-2 py-4 px-2 md:px-3 text-md md:text-lg cursor-pointer rounded-md hover:bg-[#2d2d2d]`}
          >
            <span className="max-sm:text-2xl">{item.icon}</span>
            <span className="max-sm:hidden">{item.name}</span>
          </div>
          {/* divider değeri true ise çizgi çek */}
          {item.divider && <hr />}
        </div>
      ))}
    </div>
  );
};

export default SideBar;
