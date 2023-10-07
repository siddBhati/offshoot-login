import { MongoClient } from "mongodb";

export default async function connectToDatabase() {
  const client = await MongoClient.connect(
    "mongodb://127.0.0.1:27017/offShoot"
  );

  return client;
}
