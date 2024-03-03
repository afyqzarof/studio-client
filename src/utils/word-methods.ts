import axios from "axios";

type WordObj = {
  freq: number;
  word: string;
};

const isOneWord = (str: string): boolean => {
  return str.trim().split(" ").length === 1;
};

const getRhymes = async (word: string): Promise<string[]> => {
  const { data } = await axios.get(
    `https://rhymebrain.com/talk?function=getRhymes&maxResults=20&word=${word}`
  );
  const filteredWords = data.filter((obj: WordObj) => obj.freq >= 23);
  const words = filteredWords.map((wordObj: WordObj) => wordObj.word);

  return words;
};

// getRhymes("harder");

export { isOneWord, getRhymes };
