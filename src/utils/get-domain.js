const isUrlValid = (string) => {
  try {
    new URL(string);
    return true;
  } catch (err) {
    return false;
  }
};

const getDomain = (url) => {
  url = url.replace("https://", "");
  url = url.replace("http://", "");
  url = url.replace("www.", "");
  url = url.replace("open.", "");
  const array = url.split(".");
  return array[0] === "m" ? array[1] : array[0];
};

const getYoutubeId = (url) => {
  const urlArray = url.split("?");
  const queryParams = urlArray[1].split("&");
  const index = queryParams.findIndex((el) => el.includes("v"));
  console.log(index);

  return queryParams[index].split("=")[1];
};

const getYoutuId = (url) => {
  const domainArray = url.split("?")[0].split("/");
  return domainArray[domainArray.length - 1];
};
export { isUrlValid, getDomain, getYoutubeId, getYoutuId };
