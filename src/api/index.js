import axios from "axios";
/*https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UClu474HMt895mVxZdlIHXEA&maxResults=20&order=viewCount&key=AIzaSyBS4P9JfEvguzlfqf-RXy7XdIcNMTOQpw4*/

const API_KEY = "AIzaSyBS4P9JfEvguzlfqf-RXy7XdIcNMTOQpw4";
const API_URL = "https://www.googleapis.com/youtube/v3";
const CHANNEL_ID = "UClu474HMt895mVxZdlIHXEA";

export async function searchVideos(maxResults = 20) {
  const params = {
    part: "snippet",
    channelId: CHANNEL_ID,
    maxResults,
    order: "viewCount",
    key: API_KEY,
  };
  try {
    const response = await axios.get(`${API_URL}/search/`, { params });
    console.log(response.data.items);
    return response.data.items;
  } catch (err) {
    console.log(err);
    return null;
  }
}
