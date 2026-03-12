const config = {
  appName: process.env.NEXT_PUBLIC_APP_NAME || "ShopNest",
  apiURL: process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000",
  stripeKey: process.env.NEXT_PUBLIC_STRIPE_KEY || "",
};
export default config;
