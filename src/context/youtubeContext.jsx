import { createContext, useEffect, useState } from "react";
import { categories } from "../constants";
import { getData } from "../utils/getData";

/* 1) Context temelini oluştur */
export const YoutubeContext = createContext();

/* 2 Context'de tutulan verileri uygulamaya aktaracak */
export const YoutubeProvider = ({ children }) => {
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  const [videos, setVideos] = useState(null);

  // selectedcategory her değiştiğinde api'den ilgili kategorinin verilerini çek

  useEffect(() => {
    //farklı verileri alırken öncekileri temizle
    setVideos(null);
    // eğer ki seçili kategorinin tipi home veya trending ise
    // o kategorinin tipinin ismine istek at
    if (
      selectedCategory.type === "home" ||
      selectedCategory.type === "trending"
    ) {
      getData(`/${selectedCategory.type}`).then((data) => setVideos(data.data));
    }

    // eğerki seçili kategorinin tipi category ise
    // ozaman search endpointine istek at

    if (selectedCategory.type === "category") {
      getData(`/search?query=${selectedCategory.name}`).then((res) =>
        setVideos(res.data)
      );
    }
  }, [selectedCategory]);

  return (
    <YoutubeContext.Provider
      value={{ selectedCategory, setSelectedCategory, videos }}
    >
      {children}
    </YoutubeContext.Provider>
  );
};
