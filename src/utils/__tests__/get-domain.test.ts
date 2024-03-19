import {
  getDomain,
  getPinterestId,
  getSpotifyId,
  getYoutuId,
  getYoutubeId,
  isUrlValid,
} from "../get-domain";
import { describe, test, expect, it } from "vitest";

describe("is url valid", () => {
  it("returns true", () => {
    const result = isUrlValid(
      "https://open.spotify.com/track/5LsmuKO5tsF8budo3nVbRp?si=e691837d9fd84b58"
    );
    expect(result).toBe(true);
  });
  it("returns false", () => {
    const result = isUrlValid("not valid");
    expect(result).toBe(false);
  });
});
describe("check domain functions", () => {
  test("gets youtube domain", () => {
    expect(getDomain("https://www.youtube.com/")).toBe("youtube");
  });
  test("gets youtube domain 2", () => {
    expect(
      getDomain(
        "http://m.youtube.com/watch?v=yZv2daTWRZU&feature=em-uploademail"
      )
    ).toBe("youtube");
  });
  test("gets short domain", () => {
    expect(getDomain("https://youtu.be/MSRaPMaup0g?si=olGN-nnRp-MqfYIg")).toBe(
      "youtu"
    );
  });
  test("gets pinterest domain", () => {
    expect(getDomain("https://www.pinterest.co.uk/")).toBe("pinterest");
  });
  test("gets pinterest domain short", () => {
    expect(getDomain("https://pin.it/6FtDWdc")).toBe("pin");
  });
  test("gets insta domain", () => {
    expect(getDomain("https://www.instagram.com/p/CL4HvpajtDh/?hl=en")).toBe(
      "instagram"
    );
  });
  test("gets insta domain short", () => {
    expect(
      getDomain(
        "https://www.instagram.com/p/CL4HvpajtDh/?utm_source=ig_web_button_share_sheet&igsh=MzRlODBiNWFlZA=="
      )
    ).toBe("instagram");
  });
  test("gets spotify domain short", () => {
    expect(
      getDomain(
        "https://open.spotify.com/track/6UFivO2zqqPFPoQYsEMuCc?si=3981156d45604abe"
      )
    ).toBe("spotify");
  });
});

describe("get id from urls", () => {
  it("returns youtube id", () => {
    const id = getYoutubeId("https://www.youtube.com/watch?v=W13Ydr_AcjI");
    expect(id).toBe("W13Ydr_AcjI");
  });

  it("returns youtu id", () => {
    const id = getYoutuId("https://youtu.be/QO4SK9yZ84E?si=lolFiSQC22nNZ6HN");
    expect(id).toBe("QO4SK9yZ84E");
  });

  it("returns spotify id", () => {
    const id = getSpotifyId(
      "https://open.spotify.com/track/5LsmuKO5tsF8budo3nVbRp?si=e691837d9fd84b58"
    );
    expect(id).toBe("5LsmuKO5tsF8budo3nVbRp");
  });
  it("returns pinterest id", () => {
    const id = getPinterestId(
      "https://www.pinterest.co.uk/pin/766597167849640881/"
    );
    expect(id).toBe("766597167849640881");
  });
});
