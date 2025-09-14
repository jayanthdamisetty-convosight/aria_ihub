import React from 'react';
import ProfileHeader from './ProfileHeader';
import GoalContribution from './GoalContribution';
import ActivityHeatmap from './ActivityHeatmap';
import AnalyticsDashboard from './AnalyticsDashboard';
import Achievements from './Achievements';
import ShareButton from './ShareButton';
import { UserProfile, AnnualGoal } from '../utils/mockData';

interface DashboardContentProps {
  profile: UserProfile;
  onGoalClick: (goal: AnnualGoal) => void;
}

const DashboardContent: React.FC<DashboardContentProps> = ({
  profile,
  onGoalClick
}) => {
  return <>
      <ProfileHeader profile={profile} />
      <GoalContribution goals={profile.annualGoals} onGoalClick={onGoalClick} />
      <ActivityHeatmap activityData={profile.activityData} />
      <AnalyticsDashboard queryTypes={profile.queryTypes} categoryExpertise={profile.categoryExpertise} />
      <Achievements achievements={profile.achievements} />
      <div className="mt-8 mb-12 flex justify-center">
        <ShareButton profile={profile} />
      </div>
    </>;
};
export default DashboardContent;