import { Client, Databases } from "appwrite";

export const client = new Client();
export const databases = new Databases(client);
const appwriteKey = import.meta.env.PUBLIC_APPWRITE_KEY;

client.setEndpoint("https://cloud.appwrite.io/v1").setProject(appwriteKey);
