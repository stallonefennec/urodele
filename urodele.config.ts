export const config = {
  github: {
    login: "stallonefennec", // github login name, not user name
    repo: "urodele", //"urodele",
    logInUrl: "",
    logInAuthUrl: "",
  },
  head: {
    title: "WTF!",
  },
  footer: {
    copyright: "© Glink",
    copyrightUrl: "https://github.com/stallonefennec",
  },
  giscus: false as object | false,
} as const;

export default config;
