import mongoose from "mongoose";

const MONGO_DB_PASSWORD = process.env.MONGO_DB_PASSWORD;

if (!MONGO_DB_PASSWORD) {
  throw new Error("Please define the MONGO_DB_PASSWORD environment variable in .env.local");
}

mongoose.set("strictQuery", false);

// MongoDB Connection URL
const mongoURL: string = `mongodb+srv://dbUser:${MONGO_DB_PASSWORD}@admin.ktgct.mongodb.net/?retryWrites=true&w=majority&appName=admin`;

// Maintain a cached connection to avoid re-connecting on every API call
interface MongooseCache {
  conn: mongoose.Connection | null;
  promise: Promise<mongoose.Connection> | null;
}

declare global {
  var mongooseCache: MongooseCache;
}

// Use a global cache to avoid multiple connections in development
global.mongooseCache = global.mongooseCache || { conn: null, promise: null };

async function connectDB(): Promise<mongoose.Connection> {
  if (global.mongooseCache.conn) {
    console.log("Using existing MongoDB connection");
    return global.mongooseCache.conn;
  }

  if (!global.mongooseCache.promise) {
    global.mongooseCache.promise = mongoose.connect(mongoURL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    } as mongoose.ConnectOptions).then((mongoose) => {
      console.log("Database connected");
      return mongoose.connection;
    }).catch((error) => {
      console.error("Database connection error:", error);
      throw error;
    });
  }

  global.mongooseCache.conn = await global.mongooseCache.promise;
  return global.mongooseCache.conn;
}

export default connectDB;
