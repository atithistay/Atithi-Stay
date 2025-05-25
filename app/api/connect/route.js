import { MongoClient } from "mongodb";
import { NextResponse } from "next/server";

// MongoDB connection URI - replace with your actual connection string
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost:27017";
const DATABASE_NAME = process.env.DATABASE_NAME || "atithi";
const COLLECTION_NAME = process.env.COLLECTION_NAME || "inquiry";

let cachedClient = null;

async function connectToDatabase() {
  if (cachedClient) {
    return cachedClient;
  }

  try {
    const client = new MongoClient(MONGODB_URI);
    await client.connect();
    cachedClient = client;
    return client;
  } catch (error) {
    console.error("Failed to connect to MongoDB:", error);
    throw error;
  }
}

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, mobile, occupancy } = body;
    console.log(body, " --body");
    // Validation
    if (!name || !email || !mobile) {
      return NextResponse.json(
        { error: "Name, email, and mobile are required fields" },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Please enter a valid email address" },
        { status: 400 }
      );
    }

    // Validate occupancy enum
    if (occupancy && !["single", "sharing"].includes(occupancy)) {
      return NextResponse.json({ error: "Invalid Occupancy" }, { status: 400 });
    }

    // Connect to MongoDB
    const client = await connectToDatabase();
    const db = client.db(DATABASE_NAME);
    const collection = db.collection(COLLECTION_NAME);

    // Create the document to insert
    const document = {
      name: name.trim(),
      email: email.trim().toLowerCase(),
      mobile: mobile.trim(),
      occupancy: occupancy || "single",
      submittedAt: new Date(),
      createdAt: new Date(),
    };

    // Insert the document
    const result = await collection.insertOne(document);

    return NextResponse.json(
      {
        success: true,
        message: "Submission successful",
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error processing submission:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

// Optional: GET method to retrieve submissions (for admin purposes)
export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const page = parseInt(searchParams.get("page")) || 1;
    const limit = parseInt(searchParams.get("limit")) || 10;
    const skip = (page - 1) * limit;

    const client = await connectToDatabase();
    const db = client.db(DATABASE_NAME);
    const collection = db.collection(COLLECTION_NAME);

    const submissions = await collection
      .find({})
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit)
      .toArray();

    const total = await collection.countDocuments();

    return NextResponse.json({
      submissions,
      pagination: {
        page,
        limit,
        total,
        pages: Math.ceil(total / limit),
      },
    });
  } catch (error) {
    console.error("Error fetching submissions:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
