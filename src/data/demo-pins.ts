const image1 = "/uploads/demo-1.jpeg";
const image2 = "/uploads/demo-2.jpeg";
const image3 = "/uploads/demo-3.jpeg";

export type Pin<T> = {
  board_id: string;
  width: number;
  height: number;
  id: string;
  type: string;
  data: T;
  x_coord: number;
  y_coord: number;
};

const demoPins: Pin<object>[] = [
  {
    board_id: "demo-1",
    width: 197,
    height: 197,
    id: "bpFsl8IbVK",
    type: "TextNode",
    data: {
      text: "our, power, hour, outer, counter, tower, powder, encounter, flour, shower, founder, sour, louder, devour, browser, bower",
    },
    x_coord: -969,
    y_coord: -728,
  },
  {
    board_id: "demo-1",
    width: 621,
    height: 621,
    id: "wklK59BkCa",
    type: "ImageNode",
    data: { file: "1720541638713l7S0z.jpeg" },
    x_coord: -622,
    y_coord: 637,
  },
  {
    board_id: "demo-1",
    width: 743,
    height: 743,
    id: "BbSNGlSgiy",
    type: "ImageNode",
    data: { file: "1720541623747PBofg.jpg" },
    x_coord: -110,
    y_coord: 635,
  },
  {
    board_id: "demo-1",
    width: 450,
    height: 450,
    id: "GTRYtRHwMG",
    type: "YoutubeVidNode",
    data: { youtube_id: "VTpmhEiYuVk" },
    x_coord: 474,
    y_coord: 160,
  },
  {
    board_id: "demo-1",
    width: 663,
    height: 663,
    id: "FXWzkZkJts",
    type: "ImageNode",
    data: { file: "1720541558096JIUXb.jpg" },
    x_coord: -1186,
    y_coord: 189,
  },
  {
    board_id: "demo-1",
    width: 707,
    height: 707,
    id: "WiI-_9hz-O",
    type: "ImageNode",
    data: { file: "17205414821801BUEx.jpg" },
    x_coord: -174,
    y_coord: -978,
  },
  {
    board_id: "demo-1",
    width: 272,
    height: 272,
    id: "74ZYUKRRIv",
    type: "YoutubeVidNode",
    data: { youtube_id: "Gia9cX6gReo" },
    x_coord: -645,
    y_coord: 317,
  },
  {
    board_id: "demo-1",
    width: 272,
    height: 272,
    id: "KHES3SRxfQ",
    type: "YoutubeVidNode",
    data: { youtube_id: "atklpvgaBWA" },
    x_coord: -990,
    y_coord: -153,
  },
  {
    board_id: "demo-1",
    width: 272,
    height: 272,
    id: "vJce-frpjw",
    type: "YoutubeVidNode",
    data: { youtube_id: "C23gZcAfUj8" },
    x_coord: -516,
    y_coord: -603,
  },
  {
    board_id: "demo-1",
    width: 311,
    height: 311,
    id: "iF2ItUn-Q9",
    type: "YoutubeVidNode",
    data: { youtube_id: "EvD2h5UTFWA" },
    x_coord: -979,
    y_coord: -522,
  },
  {
    board_id: "demo-1",
    width: 235,
    height: 235,
    id: "aOG5fGByQ8",
    type: "ColorSelectorNode",
    data: { color: "#88fc9d" },
    x_coord: -579,
    y_coord: -214,
  },
  {
    board_id: "demo-1",
    width: 235,
    height: 235,
    id: "GIAEWSf4pA",
    type: "ColorSelectorNode",
    data: { color: "#9d88fc" },
    x_coord: 89,
    y_coord: 352,
  },
  {
    board_id: "demo-1",
    width: 235,
    height: 235,
    id: "0QYB92jJsw",
    type: "ColorSelectorNode",
    data: { color: "#fcd788" },
    x_coord: 152,
    y_coord: 49,
  },
  {
    board_id: "demo-1",
    width: 235,
    height: 235,
    id: "OeUY7H93EG",
    type: "ColorSelectorNode",
    data: { color: "#e7fc88" },
    x_coord: -237,
    y_coord: 298,
  },
  {
    board_id: "demo-1",
    width: 235,
    height: 235,
    id: "PbeOZrWW0d",
    type: "ColorSelectorNode",
    data: { color: "#acfc88" },
    x_coord: 99,
    y_coord: -225,
  },
  {
    board_id: "demo-1",
    width: 235,
    height: 235,
    id: "DZ8Lr5BmaP",
    type: "ColorSelectorNode",
    data: { color: "#88e7fc" },
    x_coord: -583,
    y_coord: 49,
  },
  {
    board_id: "demo-1",
    width: 329,
    height: 329,
    id: "yZi8yavGcG",
    type: "ColorSelectorNode",
    data: { color: "#fc9d88" },
    x_coord: -249,
    y_coord: -72,
  },
  {
    board_id: "demo-1",
    width: 757,
    height: 757,
    id: "GMFQ4Gf45O",
    type: "ImageNode",
    data: { file: "1720541346231YI7eP.jpg" },
    x_coord: 469,
    y_coord: -701,
  },
  {
    board_id: "demo-1",
    width: 100,
    height: 100,
    id: "S4rG3iOf5Z",
    type: "TextNode",
    data: { text: "PLAY ALL THE VIDEOS AT ONCE !!!" },
    x_coord: -277,
    y_coord: -225,
  },
  {
    board_id: "demo-1",
    width: 100,
    height: 100,
    id: "eknLoqyfb5",
    type: "TextNode",
    data: { text: "flower" },
    x_coord: -964,
    y_coord: -828,
  },

  {
    board_id: "demo-2",
    width: 596,
    height: 596,
    id: "-cFgaF47WA",
    type: "ImageNode",
    x_coord: 512,
    y_coord: 270,
    data: {
      file: image3,
    },
  },
  {
    board_id: "demo-2",
    width: 664,
    height: 467,
    id: "sNmHdBcFPy",
    type: "YoutubeVidNode",
    x_coord: -326,
    y_coord: -376,
    data: {
      youtube_id: "dHUq9xJcaZs",
    },
  },
  {
    board_id: "demo-2",
    width: 338,
    height: 700,
    id: "4KZozsrb40",
    type: "TextNode",
    data: {
      text: "your oversize clothes\nthe smile that you show\nme when\nu laugh\n\nyou obsession with food\nif i only could \nshare it \nwith you\n\ngoing walks\nyou giving your talks\non why and how\n\nand believing its true\ndon’t know how i found you\n(in this life)",
    },

    x_coord: 412,
    y_coord: -367,
  },

  {
    board_id: "demo-2",
    width: 192,
    height: 235,
    id: "qjPTLOFQgz",
    type: "ColorSelectorNode",
    data: {
      color: "#1beece",
    },

    x_coord: -248,
    y_coord: 458,
  },
  {
    board_id: "demo-2",
    width: 192,
    height: 235,
    id: "Re5lcAPv9U",
    type: "ColorSelectorNode",
    data: {
      color: "#ce1bee",
    },

    x_coord: -11,
    y_coord: 460,
  },

  {
    board_id: "demo-2",
    width: 218,
    height: 245,
    id: "slQ8bqjNiT",
    type: "ColorSelectorNode",
    data: {
      color: "#eece1d",
    },

    x_coord: -249,
    y_coord: 151,
  },

  {
    board_id: "demo-3",
    width: 582,
    height: 721,
    id: "WAV6IwtZiJ",
    type: "ImageNode",
    data: {
      file: image1,
    },
    x_coord: 881,
    y_coord: 548,
  },
  {
    board_id: "demo-3",
    width: 192,
    height: 235,
    id: "_dZbMA53TD",
    type: "ColorSelectorNode",
    data: {
      color: "#30fde2",
    },
    x_coord: 1737,
    y_coord: 180,
  },
  {
    board_id: "demo-3",
    width: 192,
    height: 235,
    id: "ga3lCXN6Q-",
    type: "ColorSelectorNode",
    data: {
      color: "#e230fd",
    },
    x_coord: 1543,
    y_coord: 172,
  },
  {
    board_id: "demo-3",
    width: 192,
    height: 235,
    id: "wZoeXPH_nA-copy",
    type: "ColorSelectorNode",
    data: {
      color: "#30fd7b",
    },
    x_coord: 1341,
    y_coord: 172,
  },
  {
    board_id: "demo-3",
    width: 596,
    height: 816,
    id: "0WS0qnJicp",
    type: "ImageNode",
    data: {
      file: image2,
    },
    x_coord: 192,
    y_coord: 201,
  },
  {
    board_id: "demo-3",
    width: 192,
    height: 235,
    id: "hwunvYLOFa",
    type: "ColorSelectorNode",
    data: {
      color: "#fde230",
    },
    x_coord: 859,
    y_coord: 172,
  },
];

export default demoPins;
