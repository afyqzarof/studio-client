function getDomain(url) {
  url = url.replace("https://", "");
  url = url.replace("http://", "");
  url = url.replace("www.", "");
  url = url.replace("open.", "");
  const array = url.split(".");
  return array[0] === "m" ? array[1] : array[0];
}

const getYoutubeId = (url) => {
  const urlArray = url.split("?");
  const queryParams = urlArray[1].split("=");
  const index = queryParams.findIndex((el) => el === "v");
  return queryParams[index + 1];
};

export { getDomain, getYoutubeId };
