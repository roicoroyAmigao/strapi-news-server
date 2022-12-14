module.exports = ({ env }) => ({
  upload: {
    config: {
      provider: "cloudinary",
      providerOptions: {
        cloud_name: env("CLOUDINARY_NAME"),
        api_key: env("CLOUDINARY_KEY"),
        api_secret: env("CLOUDINARY_SECRET"),
      },
    },
  },
  'strapi-plugin-fcm': {
    enabled: true,
    resolve: './src/plugins/strapi-plugin-fcm'
  },
  'strapi-stripe': {
    enabled: true,
    resolve: './src/plugins/strapi-stripe'
  },
  chat: {
    enabled: true,
    resolve: `./src/plugins/chat`,
    config: {
      testConf: 3,
    },
  },
});
