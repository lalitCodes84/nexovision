import { MongoClient, type Db } from "mongodb";

const dbName = process.env.MONGODB_DB ?? "nexovision";

declare global {
  // eslint-disable-next-line no-var
  var _mongoClient: MongoClient | undefined;
}

export async function getDb(): Promise<Db> {
  const uri = process.env.MONGODB_URI;

  if (!uri) {
    throw new Error("MONGODB_URI is not configured");
  }

  let client = global._mongoClient;

  if (!client) {
    client = new MongoClient(uri, {
      maxPoolSize: 10,
    });

    await client.connect();
    global._mongoClient = client;
  }

  return client.db(dbName);
}






// import { MongoClient, type Db } from "mongodb";

// const uri = process.env.MONGODB_URI;
// const dbName = process.env.MONGODB_DB ?? "nexovision";

// if (!uri) {
//   // Don't throw at import time in dev hot reload; throw on first use.
//   console.warn("[mongodb] MONGODB_URI is not set. Database calls will fail.");
// }

// declare global {
//   // eslint-disable-next-line no-var
//   var _mongoClientPromise: Promise<MongoClient> | undefined;
// }

// function createClient(): Promise<MongoClient> {
//   if (!uri) throw new Error("MONGODB_URI is not configured");
//   const client = new MongoClient(uri, { maxPoolSize: 10 });
//   return client.connect();
// }

// const clientPromise: Promise<MongoClient> =
//   process.env.NODE_ENV === "development"
//     ? (global._mongoClientPromise ??= createClient())
//     : createClient();

// export async function getDb(): Promise<Db> {
//   const client = await clientPromise;
//   return client.db(dbName);
// }

// export default clientPromise;