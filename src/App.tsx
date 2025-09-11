import React, { useState } from 'react';
import TabSystem from './components/TabSystem';
import DashboardContent from './components/DashboardContent';
import LeaderboardTab from './components/LeaderboardTab';
import GoalInsightsLibrary from './components/GoalInsightsLibrary';
import { mockUserProfile, mockLeaderboardData, getGoalInsights, AnnualGoal } from './utils/mockData';

export function App() {
  const [selectedGoal, setSelectedGoal] = useState<AnnualGoal | null>(null);

  const handleGoalClick = (goal: AnnualGoal) => {
    setSelectedGoal(goal);
  };

  const handleBackToProfile = () => {
    setSelectedGoal(null);
  };

  // If a goal is selected, show the insights library
  if (selectedGoal) {
    const insights = getGoalInsights(selectedGoal.id);
    return (
      <GoalInsightsLibrary
        goal={selectedGoal}
        insights={insights}
        onBack={handleBackToProfile}
      />
    );
  }

  return (
    <div className="min-h-screen w-full bg-[#FAFAFA] font-sans text-gray-900">
      <main className="max-w-5xl mx-auto px-6 py-12">
        <div className="mb-10 text-center">
          <h1 className="text-4xl font-light tracking-tight text-gray-900 mb-3">
            ARIA's   i-hub
          </h1>
          <p className="text-gray-500 font-light">
            Track your social media intelligence journey
          </p>
        </div>
        <TabSystem tabNames={['My Profile', 'Leaderboard']}>
          <DashboardContent profile={mockUserProfile} onGoalClick={handleGoalClick} />
          <LeaderboardTab stats={mockLeaderboardData.stats} users={mockLeaderboardData.users} agentAdoption={mockLeaderboardData.agentAdoption} />
        </TabSystem>
        <footer className="text-center text-sm text-gray-400 mt-12 pb-8">
          <p>
            Member since:{' '}
            {new Date(mockUserProfile.joinDate).toLocaleDateString('en-US', {
            month: 'long',
            year: 'numeric'
          })}
          </p>
          <p className="mt-2">
            Last updated:{' '}
            {new Date().toLocaleDateString('en-US', {
            month: 'long',
            day: 'numeric',
            year: 'numeric'
          })}
          </p>
        </footer>
      </main>
    </div>
  );
}