/**
 * Firebase Database Seeder
 *
 * This script seeds your Firebase Firestore database with sample data
 * from the MockBackend for testing the Firebase backend implementation.
 *
 * Usage:
 * 1. Make sure Firebase is properly configured in your .env file
 * 2. Run: node src/scripts/seedFirebase.js
 */

import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  addDoc,
  doc,
  setDoc,
  Timestamp,
  serverTimestamp,
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

// Sample data (from MockBackend) - Fixed timestamps and data structure
const sampleData = {
  communities: [
    {
      id: 1,
      name: "Laravel Cameroun",
      location: "Cameroon",
      members: 785,
      description:
        "Laravel Cameroun is a community of developers and enthusiasts who specialize in building web applications using the Laravel framework. This community shares knowledge, organizes meetups, and collaborates on open-source projects to advance the Laravel ecosystem in Cameroon.",
      logo: "/communities/laravel-cm.png",
      tags: ["PHP", "Laravel", "MySQL"],

      created_at: serverTimestamp(),
      updated_at: serverTimestamp(),
      links: "https://laravel.cm/",
    },
    {
      id: 2,
      name: "Dot NET Cameroun",
      location: "Cameroon",
      members: 1245,
      description:
        "Dot NET Cameroun is a community for .NET developers in Cameroon. It provides a platform for professionals and enthusiasts to learn, share, and develop their skills in .NET technologies, including web, desktop, and cloud applications.",
      logo: "/communities/dot-net.png",
      tags: ["C#", ".NET Core", "Azure"],
      created_at: serverTimestamp(),
      updated_at: serverTimestamp(),
      links: "https://dotnetcameroon.azurewebsites.net/",
    },
    {
      id: 3,
      name: "Flutter & Dart Community",
      location: "Cameroon",
      members: 632,
      description:
        "The Flutter & Dart Community in Cameroon is dedicated to mobile application development using the Flutter framework and Dart programming language. Members of this community engage in collaborative projects, workshops, and knowledge-sharing sessions to enhance their expertise in building cross-platform apps.",
      logo: "/communities/flutter-cm.png",
      tags: ["Dart", "Flutter", "Mobile Dev"],
      created_at: serverTimestamp(),
      updated_at: serverTimestamp(),
      links: "https://chat.whatsapp.com/J5ToUhSX2ADKR9k1qyh0Vf",
    },
    {
      id: 4,
      name: "FOF - Douala",
      location: "Douala, Littoral",
      members: 418,
      description:
        "FOF - Douala (Friends of Figma - Douala) is a community of designers and developers who use Figma for creating user interfaces and experiences. The community provides a platform for sharing knowledge, organizing workshops, and collaborating on design projects using Figma and related tools.",
      logo: "/communities/fof-douala.png",
      tags: ["UI/UX Design", "Figma", "Prototyping"],
      created_at: serverTimestamp(),
      updated_at: serverTimestamp(),
      links: "https://t.me/FOF_Cameroon",
    },
  ],
  events: [
    {
      title: "Annual Cameroon Tech Conference",
      date: "2025-06-15",
      time: "09:00 AM - 05:00 PM",
      location: "Yaounde Conference Center",
      host: "Yaounde Tech Hub",
      hostId: "2",
      description:
        "Join the biggest tech event in Cameroon featuring keynote speakers, workshops, and networking opportunities.",
      type: "Conference",
      status: "upcoming",
      created_at: serverTimestamp(),
      updated_at: serverTimestamp(),
    },
    {
      title: "Women in Tech Mentorship Workshop",
      date: "2025-06-22",
      time: "02:00 PM - 05:00 PM",
      location: "University of Buea",
      host: "Women Techmakers Buea",
      hostId: "4",
      description:
        "Empowering the next generation of women tech leaders through mentorship and hands-on workshops.",
      type: "Workshop",
      status: "upcoming",
      created_at: serverTimestamp(),
      updated_at: serverTimestamp(),
    },
  ],
};

async function seedFirestore() {
  try {
    console.log("🔥 Initializing Firebase...");

    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);

    console.log("📊 Starting to seed Firestore database...");

    // Seed communities
    console.log("🏘️  Seeding communities...");
    for (let i = 0; i < sampleData.communities.length; i++) {
      const community = sampleData.communities[i];
      const docId = (i + 1).toString(); // Use simple numeric IDs
      await setDoc(doc(db, "communities", docId), community);
      console.log(`   ✅ Added community: ${community.name}`);
    }

    // Seed events
    console.log("📅 Seeding events...");
    for (let i = 0; i < sampleData.events.length; i++) {
      const event = sampleData.events[i];
      const docId = (i + 1).toString(); // Use simple numeric IDs
      await setDoc(doc(db, "events", docId), event);
      console.log(`   ✅ Added event: ${event.title}`);
    }

    console.log("");
    console.log("🎉 Firebase seeding completed successfully!");
    console.log("");
    console.log("📋 Summary:");
    console.log(`   Communities: ${sampleData.communities.length}`);
    console.log(`   Events: ${sampleData.events.length}`);
    console.log("");
    console.log(
      "🔄 You can now switch to Firebase backend by updating your .env:"
    );
    console.log("   VITE_BACKEND_TYPE=firebase");
    console.log("");
    console.log("🎯 Next Steps:");
    console.log("   1. Update your .env file: VITE_BACKEND_TYPE=firebase");
    console.log("   2. Restart your development server");
    console.log("   3. Visit /test-backend to verify Firebase integration");
    console.log("   4. Check your Firebase Console to see the data");
  } catch (error) {
    console.error("❌ Error seeding Firestore:", error);
    console.error("Error details:", error.message);
    process.exit(1);
  }
}

// Run the seeder
seedFirestore();
