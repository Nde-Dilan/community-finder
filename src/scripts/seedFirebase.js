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
  apiKey: process.env.VITE_FIREBASE_API_KEY || "AIzaSyCRnofy4OrGwedkGrIDYBV1ddlH3w7IaoE",
  authDomain: process.env.VITE_FIREBASE_AUTH_DOMAIN || "ai-recepies.firebaseapp.com",
  projectId: process.env.VITE_FIREBASE_PROJECT_ID || "ai-recepies",
  storageBucket: process.env.VITE_FIREBASE_STORAGE_BUCKET || "ai-recepies.firebasestorage.app",
  messagingSenderId: process.env.VITE_FIREBASE_MESSAGING_SENDER_ID || "717008887602",
  appId: process.env.VITE_FIREBASE_APP_ID || "1:717008887602:web:d11a883d1c26841054012b",
  measurementId: process.env.VITE_FIREBASE_MEASUREMENT_ID || "G-T70LN6XD4Q",
};

// Sample data (from MockBackend) - Fixed timestamps and data structure
const sampleData = {
  communities: [
    {
      name: "Douala Developers",
      location: "Douala, Littoral",
      region: "Littoral",
      members: 785,
      description:
        "A vibrant community of software developers sharing knowledge and building innovative solutions for local challenges.",
      logo: "https://readdy.ai/api/search-image?query=A%20modern%2C%20professional%20logo%20for%20a%20software%20development%20community%20in%20Cameroon%2C%20featuring%20abstract%20code%20symbols%2C%20clean%20lines%2C%20blue%20and%20green%20colors%2C%20minimalist%20design&width=300&height=160&seq=com1&orientation=landscape",
      tags: ["JavaScript", "Python", "Web Dev"],
      category: "Software Development",
      featured: true,
      status: "active",
      created_at: serverTimestamp(),
      updated_at: serverTimestamp(),
    },
    {
      name: "Yaounde Tech Hub",
      location: "Yaounde, Centre",
      region: "Centre",
      members: 1245,
      description:
        "The capital's premier innovation space connecting entrepreneurs, developers, and investors to build Cameroon's digital future.",
      logo: "https://readdy.ai/api/search-image?query=A%20modern%2C%20professional%20logo%20for%20a%20tech%20startup%20hub%20in%20Cameroon%2C%20featuring%20abstract%20geometric%20shapes%2C%20red%20and%20yellow%20colors%2C%20minimalist%20design%20with%20tech%20elements&width=300&height=160&seq=com2&orientation=landscape",
      tags: ["Startups", "Innovation", "Coworking"],
      category: "Startup Ecosystem",
      featured: true,
      status: "active",
      created_at: serverTimestamp(),
      updated_at: serverTimestamp(),
    },
    {
      name: "Cameroon AI Alliance",
      location: "Multiple Locations",
      region: "Multiple",
      members: 632,
      description:
        "Advancing artificial intelligence and machine learning expertise through workshops, projects and research collaborations.",
      logo: "https://readdy.ai/api/search-image?query=A%20modern%2C%20professional%20logo%20for%20an%20AI%20and%20data%20science%20community%20in%20Cameroon%2C%20featuring%20neural%20network%20patterns%2C%20purple%20and%20blue%20colors%2C%20minimalist%20tech%20design&width=300&height=160&seq=com3&orientation=landscape",
      tags: ["AI", "ML", "Data Science"],
      category: "AI & Machine Learning",
      featured: true,
      status: "active",
      created_at: serverTimestamp(),
      updated_at: serverTimestamp(),
    },
    {
      name: "Women Techmakers Buea",
      location: "Buea, South West",
      region: "South West",
      members: 418,
      description:
        "Empowering women in technology through mentorship, skill development workshops and networking opportunities.",
      logo: "https://readdy.ai/api/search-image?query=A%20modern%2C%20professional%20logo%20for%20a%20women%20in%20tech%20community%20in%20Cameroon%2C%20featuring%20abstract%20feminine%20tech%20symbols%2C%20teal%20and%20purple%20colors%2C%20minimalist%20design&width=300&height=160&seq=com4&orientation=landscape",
      tags: ["Women in Tech", "Mentorship", "Diversity"],
      category: "Women in Tech",
      featured: true,
      status: "active",
      created_at: serverTimestamp(),
      updated_at: serverTimestamp(),
    },
    {
      name: "Cameroon Blockchain Network",
      location: "Douala & Yaounde",
      region: "Multiple",
      members: 295,
      description:
        "Exploring blockchain applications for financial inclusion, supply chain and digital identity solutions in Cameroon.",
      logo: "https://readdy.ai/api/search-image?query=A%20modern%2C%20professional%20logo%20for%20a%20blockchain%20technology%20community%20in%20Cameroon%2C%20featuring%20blockchain%20pattern%20elements%2C%20green%20and%20blue%20colors%2C%20minimalist%20tech%20design&width=300&height=160&seq=com5&orientation=landscape",
      tags: ["Blockchain", "Crypto", "Web3"],
      category: "Blockchain",
      featured: true,
      status: "active",
      created_at: serverTimestamp(),
      updated_at: serverTimestamp(),
    },
    {
      name: "Cameroon UX Community",
      location: "Limbe, South West",
      region: "South West",
      members: 326,
      description:
        "Designers creating user-centered digital experiences with a focus on local context and accessibility considerations.",
      logo: "https://readdy.ai/api/search-image?query=A%20modern%2C%20professional%20logo%20for%20a%20UX%20design%20community%20in%20Cameroon%2C%20featuring%20design%20tool%20symbols%2C%20orange%20and%20blue%20colors%2C%20minimalist%20creative%20design&width=300&height=160&seq=com6&orientation=landscape",
      tags: ["UX Design", "UI", "Product"],
      category: "Design & UX",
      featured: true,
      status: "active",
      created_at: serverTimestamp(),
      updated_at: serverTimestamp(),
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
    {
      title: "AI & Machine Learning Bootcamp",
      date: "2025-07-08",
      time: "10:00 AM - 04:00 PM",
      location: "Douala Digital Center",
      host: "Cameroon AI Alliance",
      hostId: "3",
      description:
        "Intensive bootcamp covering fundamentals of AI and ML with practical applications for African markets.",
      type: "Bootcamp",
      status: "upcoming",
      created_at: serverTimestamp(),
      updated_at: serverTimestamp(),
    },
    {
      title: "Blockchain & Fintech Forum",
      date: "2025-07-15",
      time: "10:00 AM - 03:00 PM",
      location: "Sawa Hotel, Douala",
      host: "Cameroon Blockchain Network",
      hostId: "5",
      description:
        "Discussing the future of financial technology and blockchain applications in the Cameroonian economy.",
      type: "Forum",
      status: "upcoming",
      created_at: serverTimestamp(),
      updated_at: serverTimestamp(),
    },
  ],
  news: [
    {
      title: "Douala Hackathon Winners Secure $50,000 Investment",
      date: "2025-05-20",
      excerpt:
        "Team CodeCrafters from Douala Developers community won the annual hackathon with their innovative agricultural supply chain solution, securing major investment.",
      content: "Full news article content would go here...",
      image:
        "https://readdy.ai/api/search-image?query=A%20professional%20tech%20conference%20or%20hackathon%20scene%20in%20Cameroon%2C%20with%20diverse%20African%20developers%20presenting%20their%20work%20on%20stage.%20Modern%20event%20space%20with%20audience%2C%20professional%20lighting%2C%20subtle%20Cameroon%20flag%20colors%20in%20the%20background%20decorations.&width=400&height=250&seq=news1&orientation=landscape",
      category: "Achievement & Awards",
      author: "Tech News Cameroon",
      created_at: serverTimestamp(),
      updated_at: serverTimestamp(),
    },
    {
      title: "Women Techmakers Buea Launches Scholarship Program",
      date: "2025-05-15",
      excerpt:
        "The community has partnered with Google to offer 50 scholarships for women pursuing careers in software development and data science.",
      content: "Full news article content would go here...",
      image:
        "https://readdy.ai/api/search-image?query=A%20professional%20scene%20of%20African%20women%20in%20tech%20at%20a%20workshop%20or%20training%20session%20in%20Cameroon.%20Women%20engaged%20with%20laptops%20and%20technology%2C%20collaborative%20learning%20environment.%20Modern%20tech%20space%20with%20subtle%20Cameroon%20flag%20colors%20in%20the%20decor.&width=400&height=250&seq=news2&orientation=landscape",
      category: "Community News",
      author: "Women Techmakers Buea",
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

    // Seed news
    console.log("📰 Seeding news...");
    for (let i = 0; i < sampleData.news.length; i++) {
      const article = sampleData.news[i];
      const docId = (i + 1).toString(); // Use simple numeric IDs
      await setDoc(doc(db, "news", docId), article);
      console.log(`   ✅ Added news: ${article.title}`);
    }

    console.log("");
    console.log("🎉 Firebase seeding completed successfully!");
    console.log("");
    console.log("📋 Summary:");
    console.log(`   Communities: ${sampleData.communities.length}`);
    console.log(`   Events: ${sampleData.events.length}`);
    console.log(`   News Articles: ${sampleData.news.length}`);
    console.log("");
    console.log("🔄 You can now switch to Firebase backend by updating your .env:");
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