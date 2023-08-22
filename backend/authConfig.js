import * as dotenv from "dotenv";
dotenv.config();
const TENANT_SUBDOMAIN = process.env.TENANT_SUBDOMAIN || "DallEDuplicatus";
const REDIRECT_URI =
  process.env.REDIRECT_URI || "http://localhost:3000/auth/redirect";
const POST_LOGOUT_REDIRECT_URI =
  process.env.POST_LOGOUT_REDIRECT_URI || "http://localhost:3000";

/**
 * Configuration object to be passed to MSAL instance on creation.
 * For a full list of MSAL Node configuration parameters, visit:
 * https://github.com/AzureAD/microsoft-authentication-library-for-js/blob/dev/lib/msal-node/docs/configuration.md
 */
const msalConfig = {
  auth: {
    clientId: process.env.CLIENT_ID || "ebaa9529-d9dd-4972-a910-f5f57ba5b918", // 'Application (client) ID' of app registration in Azure portal - this value is a GUID
    authority:
      process.env.AUTHORITY || `https://${TENANT_SUBDOMAIN}.ciamlogin.com/`, // replace "Enter_the_Tenant_Subdomain_Here" with your tenant name
    clientSecret:
      process.env.CLIENT_SECRET || "U1h8Q~ZDTkNub4GSxiZkAtjRIBUCVcdhZtuFVcRN", // Client secret generated from the app registration in Azure portal
  },
  system: {
    loggerOptions: {
      loggerCallback(loglevel, message, containsPii) {
        console.log(message);
      },
      piiLoggingEnabled: false,
      logLevel: "Info",
    },
  },
};

module.exports = {
  msalConfig,
  REDIRECT_URI,
  POST_LOGOUT_REDIRECT_URI,
  TENANT_SUBDOMAIN,
};
