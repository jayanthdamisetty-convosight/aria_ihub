import React from 'react';
import ProfileHeader from './ProfileHeader';
import GoalContribution from './GoalContribution';
import ActivityHeatmap from './ActivityHeatmap';
import AnalyticsDashboard from './AnalyticsDashboard';
import Achievements from './Achievements';
import ShareButton from './ShareButton';
import { UserProfile } from '../utils/mockData';
interface DashboardContentProps {
  profile: UserProfile;
}
const DashboardContent: React.FC<DashboardContentProps> = ({
  profile
}) => {
  return <>
      <ProfileHeader profile={profile} />
      <GoalContribution goals={profile.annualGoals} />
      <ActivityHeatmap activityData={profile.activityData} />
      <AnalyticsDashboard queryTypes={profile.queryTypes} categoryExpertise={profile.categoryExpertise} usagePatterns={profile.usagePatterns} />
      <Achievements achievements={profile.achievements} />
      <div className="mt-8 mb-12 flex justify-center">
        <ShareButton profile={profile} />
      </div>
    </>;
};
export default DashboardContent;