export const config = {
  github: {
    login: "stallonefennec", // github login name, not user name
    repo: "stallonefennec.github.io", //"urodele",
    logInUrl: "",
    logInAuthUrl: "",
  },
  head: {
    title: "WTF",
  },
  footer: {
    copyright: "© Glink",
    copyrightUrl: "https://github.com/glink25",
  },
  giscus: false as object | false,
} as const;

export default config;
