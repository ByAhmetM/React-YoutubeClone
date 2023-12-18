import axios from "axios";

//yapacağımız bütün API isteklerinin başına bu urli ekleyecek.
axios.defaults.baseURL = "https://yt-api.p.rapidapi.com";

const options = {
  params: {
    geo: "TR",
    lang: "tr",
  },
  headers: {
    "X-RapidAPI-Key": "df04d70410msh904fd0a2269d085p1e8076jsn31eb30dc63c8",
    "X-RapidAPI-Host": "yt-api.p.rapidapi.com",
  },
};

//parametre olarak aldığı url'e api isteği atıp
// elde ettiği sonucu döndüren yardımcı fonk.

export const getData = async (path) => {
  try {
    const response = await axios.get(path, options);
    return response.data;
  } catch (err) {
    console.log(err);
  }
};
