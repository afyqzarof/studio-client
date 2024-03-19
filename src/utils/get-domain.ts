const isUrlValid = (string: string) => {
  try {
    new URL(string);
    return true;
  } catch (err) {
    return false;
  }
};

const getDomain = (url: string) => {
  url = url.replace("https://", "");
  url = url.replace("http://", "");
  url = url.replace("www.", "");
  url = url.replace("open.", "");
  const array = url.split(".");
  return array[0] === "m" ? array[1] : array[0];
};

const getYoutubeId = (url: string) => {
  const urlArray = url.split("?");
  const queryParams = urlArray[1].split("&");
  const index = queryParams.findIndex((el) => el.includes("v"));

  return queryParams[index].split("=")[1];
};

const getYoutuId = (url: string) => {
  const domainArray = url.split("?")[0].split("/");
  return domainArray[domainArray.length - 1];
};

//https://open.spotify.com/track/5LsmuKO5tsF8budo3nVbRp?si=e691837d9fd84b58
const getSpotifyId = (url: string) => {
  const domainArray = url.split("?")[0].split("/");
  return domainArray[domainArray.length - 1];
};
// https://www.pinterest.co.uk/pin/766597167849640881/
const getPinterestId = (url: string) => {
  const array = url.split("/");
  const index = array.findIndex((el) => el === "pin");
  return array[index + 1];
};
export {
  isUrlValid,
  getDomain,
  getYoutubeId,
  getYoutuId,
  getSpotifyId,
  getPinterestId,
};
