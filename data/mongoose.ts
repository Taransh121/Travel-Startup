import mongoose from "mongoose";

const MONGO_DB_PASSWORD = process.env.MONGO_DB_PASSWORD;

if (!MONGO_DB_PASSWORD) {
  throw new Error(
    "Please define the MONGO_DB_PASSWORD environment variable in .env.local"
  );
}

mongoose.set("strictQuery", false);

// MongoDB Connection URL
const mongoURL: string = `mongodb+srv://dbUser:${MONGO_DB_PASSWORD}@admin.ktgct.mongodb.net/?retryWrites=true&w=majority&appName=admin`;

// Extend global type for TypeScript
interface MongooseCache {
  conn: mongoose.Mongoose | null;
  promise: Promise<mongoose.Mongoose> | null;
}

declare global {
  var mongooseCache: MongooseCache;
}

// Initialize global cache if it doesn’t exist
global.mongooseCache = global.mongooseCache || { conn: null, promise: null };

async function connectDB(): Promise<mongoose.Mongoose> {
  if (global.mongooseCache.conn) {
    console.log("Using existing MongoDB connection");
    return global.mongooseCache.conn;
  }

  if (!global.mongooseCache.promise) {
    global.mongooseCache.promise = mongoose
      .connect(mongoURL, {} as mongoose.ConnectOptions)
      .then((mongooseInstance) => {
        console.log("Database connected");
        return mongooseInstance;
      })
      .catch((error) => {
        console.error("Database connection error:", error);
        throw error;
      });
  }

  global.mongooseCache.conn = await global.mongooseCache.promise;
  return global.mongooseCache.conn;
}

export default connectDB;
