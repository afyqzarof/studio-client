import axios from "axios";

const isOneWord = (str) => {
  return str.trim().split(" ").length === 1;
};

const getRhymes = async (word) => {
  const { data } = await axios.get(
    `https://rhymebrain.com/talk?function=getRhymes&maxResults=20&word=${word}`
  );
  const filteredWords = data.filter((obj) => obj.freq >= 23);
  const words = filteredWords.map((wordObj) => wordObj.word);

  return words;
};

// getRhymes("harder");

export { isOneWord, getRhymes };
