import axios from "axios";

export async function searchVideos(maxResults = 20) {
  const params = {
    part: "snippet",
    channelId: process.env.VUE_APP_CHANNEL_ID,
    maxResults,
    order: "viewCount",
    key: process.env.VUE_APP_API_KEY,
  };
  try {
    const response = await axios.get(`${process.env.VUE_APP_API_URL}/search/`, {
      params,
    });
    console.log(response.data.items);
    return response.data.items;
  } catch (err) {
    console.log(err);
    return null;
  }
}
