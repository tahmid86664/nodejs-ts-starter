export default {
  server: {
    port: "8080",
    host: "",
    projectName: "",
    environment: "DEV"
  },
  db: {
    uri: ""
  },
  smtp: {
    email: "",
    password: ""
  },
  auth: {
    accessTokenPublicKey: "",
    accessTokenPrivateKey: "",
    accessTokenExpiry: "1d",
    refreshTokenPublicKey: "",
    refreshTokenPrivateKey: "",
    refreshTokenExpiry: "30d"
  },
  firebase: {
    type: "",
    projectId: "",
    privateKeyId: "",
    privateKey: "",
    clientEmail: "",
    clientId: "",
    authUri: "",
    tokenUri: "",
    authProviderCertUrl: "",
    clientCertUrl: ""
  }
};
