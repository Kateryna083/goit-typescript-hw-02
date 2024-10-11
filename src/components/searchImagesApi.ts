import axios from "axios";
import { Image } from "./App/type";

const accessKey = "OtPmhYgrbPxnaCP6C05d-PoZOITMD26CRAkDGjry23o";
axios.defaults.baseURL = "https://api.unsplash.com/search";

export interface SearchPhotosResponse {
  images: Image[];
  totalPages: number;
}

export default async function searchPhotos(
  topic: string,
  page: number
): Promise<SearchPhotosResponse> {
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
