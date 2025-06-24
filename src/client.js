// /Sanity/client.js
import { createClient } from "@sanity/client";

const client = createClient({
  projectId: "v2fdy55b",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: true,
});
export default client;
