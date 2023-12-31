import { AiOutlineSearch, AiFillVideoCamera, AiFillBell } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    /* inputtaki veriyi al */
    const text = e.target[0].value;
    /* sonuç sayfasına yönlendir ve parametreyi ekle */
    navigate(`/results?search_query=${text}`);
    e.target.reset();
  };

  return (
    <header className="flex items-center justify-between p-5">
      <Link to={"/"} className="flex items-center gap-[5px]">
        <img width={50} src="/youtube.png" />
        <h1 className="text-xl max-md:hidden">@ogretmenbabis</h1>
      </Link>
      <form
        onSubmit={handleSubmit}
        className="flex items-center border border-gray-400  rounded-[20px]"
      >
        <input
          className="rounded-[20px]  bg-black  outline-none px-3 py-1"
          type="text"
          placeholder="ör: komik videolar.."
        />
        <button className="border-l grid place-items-center text-xl px-2">
          <AiOutlineSearch />
        </button>
      </form>
      <div className="flex items-center gap-3 text-xl cursor-pointer">
        <div className="p-2 transition duration-500 hover:bg-gray-700 rounded-full">
          <AiFillBell />
        </div>
        <div className="p-2 transition duration-500 hover:bg-gray-700 rounded-full">
          <AiFillVideoCamera />
        </div>
      </div>
    </header>
  );
};

export default Header;
