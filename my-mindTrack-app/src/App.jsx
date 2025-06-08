import React from "react";
import StudyWellnessTracker from "./studyWellness";

export default function App() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-900 p-6">
      <h1 className="text-3xl font-bold text-center mb-6">
        📘 MindTrack: Study & Wellness Tracker
      </h1>
      <StudyWellnessTracker />
    </main>
  );
}
