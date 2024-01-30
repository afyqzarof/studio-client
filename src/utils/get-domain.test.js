const getDomain = require("./get-domain");

describe("domains", () => {
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
