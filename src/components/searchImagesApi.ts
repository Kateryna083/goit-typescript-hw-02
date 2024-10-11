import axios from "axios";

const accessKey = "OtPmhYgrbPxnaCP6C05d-PoZOITMD26CRAkDGjry23o";
axios.defaults.baseURL = "https://api.unsplash.com/search";

export default async function searchPhotos(topic, page) {
  const response = await axios.get("/photos", {
    headers: {
      Authorization: `Client-ID ${accessKey}`,
    },
    params: {
      query: topic,
      page,
      per_page: 12,
    },
  });
  return {
    images: response.data.results,
    totalPages: response.data.total_pages,
  };
}
