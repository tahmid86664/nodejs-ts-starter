/**
 * Define all the environment variables here from .env
 * As we are using config
 * To access the envs, using config.get() function
 * such as, config.get<string>("db.uri")
 */

export default {
  server: {
    port: "PORT",
    host: "SERVER_BASE_URL",
    projectName: "PROJECT_NAME",
    environment: "ENVIRONMENT"
  },
  db: {
    uri: "MONGODB_URI"
  },
  smtp: {
    email: "SMTP_EMAIL",
    password: "SMTP_PASSWORD"
  },
  auth: {
    accessTokenPublicKey: "ACCESS_TOKEN_PUBLIC_KEY",
    accessTokenPrivateKey: "ACCESS_TOKEN_PRIVATE_KEY",
    accessTokenExpiry: "ACCESS_TOKEN_EXPIRY",
    refreshTokenPublicKey: "REFRESH_TOKEN_PUBLIC_KEY",
    refreshTokenPrivateKey: "REFRESH_TOKEN_PRIVATE_KEY",
    refreshTokenExpiry: "REFRESH_TOKEN_EXPIRY"
  },
  firebase: {
    type: "FIREBASE_TYPE",
    projectId: "FIREBASE_PROJECT_ID",
    privateKeyId: "FIREBASE_PRIVATE_KEY_ID",
    privateKey: "FIREBASE_PRIVATE_KEY",
    clientEmail: "FIREBASE_CLIENT_EMAIL",
    clientId: "FIREBASE_CLIENT_ID",
    authUri: "FIREBASE_AUTH_URI",
    tokenUri: "FIREBASE_TOKEN_URI",
    authProviderCertUrl: "FIREBASE_AUTH_PROVIDER_CERT_URL",
    clientCertUrl: "FIREBASE_CLIENT_CERT_URL"
  }
};
