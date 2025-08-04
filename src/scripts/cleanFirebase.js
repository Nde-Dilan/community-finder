/**
 * Firebase Database Cleanup Script
 *
 * This script removes all data from your Firebase Firestore database.
 * Use this to clean up test data or reset your database.
 *
 * Usage:
 * 1. Make sure Firebase is properly configured in your .env file
 * 2. Run: node src/scripts/cleanFirebase.js
 *
 * WARNING: This will delete ALL data in your Firestore database!
 */

import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
  deleteDoc,
  doc,
  writeBatch,
} from "firebase/firestore";

// Firebase configuration from environment variables
const firebaseConfig = {
  apiKey: process.env.VITE_FIREBASE_API_KEY || "",
  authDomain: process.env.VITE_FIREBASE_AUTH_DOMAIN || "",
  projectId: process.env.VITE_FIREBASE_PROJECT_ID || "ai-recepies",
  storageBucket: process.env.VITE_FIREBASE_STORAGE_BUCKET || "",
  messagingSenderId:
    process.env.VITE_FIREBASE_MESSAGING_SENDER_ID || "717008887602",
  appId: process.env.VITE_FIREBASE_APP_ID || "",
  measurementId: process.env.VITE_FIREBASE_MEASUREMENT_ID || "",
};

// Collections to clean up
const COLLECTIONS_TO_CLEAN = [
  "communities",
  "events",
  "news",
  "contacts",
  "newsletters",
  // Add any other collections you want to clean
];

/**
 * Delete all documents in a collection using batched writes
 * @param {Firestore} db - Firestore database instance
 * @param {string} collectionName - Name of the collection to clean
 */
async function deleteCollection(db, collectionName) {
  const collectionRef = collection(db, collectionName);
  const snapshot = await getDocs(collectionRef);

  if (snapshot.empty) {
    console.log(`   📭 Collection '${collectionName}' is already empty`);
    return 0;
  }

  const batchSize = 500; // Firestore batch limit
  let deletedCount = 0;

  // Process documents in batches
  const docs = snapshot.docs;
  for (let i = 0; i < docs.length; i += batchSize) {
    const batch = writeBatch(db);
    const batchDocs = docs.slice(i, i + batchSize);

    batchDocs.forEach((docSnapshot) => {
      batch.delete(docSnapshot.ref);
    });

    await batch.commit();
    deletedCount += batchDocs.length;
    console.log(
      `   🗑️  Deleted ${deletedCount}/${docs.length} documents from '${collectionName}'`
    );
  }

  return deletedCount;
}

/**
 * Prompt user for confirmation before proceeding
 */
function getUserConfirmation() {
  return new Promise((resolve) => {
    const readline = require("readline");
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    console.log(
      "⚠️  WARNING: This will delete ALL data from your Firestore database!"
    );
    console.log("📋 Collections that will be cleaned:");
    COLLECTIONS_TO_CLEAN.forEach((col) => console.log(`   - ${col}`));
    console.log("");

    rl.question(
      "Are you sure you want to continue? (type 'yes' to confirm): ",
      (answer) => {
        rl.close();
        resolve(answer.toLowerCase() === "yes");
      }
    );
  });
}

async function cleanFirestore() {
  try {
    console.log("🔥 Firebase Database Cleanup Tool");
    console.log("==================================");
    console.log("");

    // Get user confirmation
    // const confirmed = await getUserConfirmation();
    // if (!confirmed) {
    //   console.log("❌ Cleanup cancelled by user");
    //   process.exit(0);
    // }

    console.log("");
    console.log("🔥 Initializing Firebase...");

    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);

    console.log("🧹 Starting database cleanup...");
    console.log("");

    let totalDeleted = 0;

    // Clean each collection
    for (const collectionName of COLLECTIONS_TO_CLEAN) {
      console.log(`🗂️  Cleaning collection: ${collectionName}`);
      try {
        const deletedCount = await deleteCollection(db, collectionName);
        totalDeleted += deletedCount;
        console.log(
          `   ✅ Cleaned '${collectionName}': ${deletedCount} documents deleted`
        );
      } catch (error) {
        console.log(
          `   ❌ Error cleaning '${collectionName}': ${error.message}`
        );
      }
      console.log("");
    }

    console.log("🎉 Firebase cleanup completed!");
    console.log("");
    console.log("📋 Summary:");
    console.log(`   Total documents deleted: ${totalDeleted}`);
    console.log(`   Collections processed: ${COLLECTIONS_TO_CLEAN.length}`);
    console.log("");
    console.log("✨ Your Firestore database is now clean!");
    console.log("");
    console.log("🔄 Next Steps:");
    console.log("   1. Run seedFirebase.js to add fresh sample data");
    console.log("   2. Or start adding your own data through the app");
  } catch (error) {
    console.error("❌ Error during cleanup:", error);
    console.error("Error details:", error.message);
    process.exit(1);
  }
}

// Handle process termination gracefully
process.on("SIGINT", () => {
  console.log("\n❌ Cleanup interrupted by user");
  process.exit(0);
});

// Run the cleanup script
cleanFirestore();
