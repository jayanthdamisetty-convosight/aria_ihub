import React from 'react';
import { UserProfile } from '../utils/mockData';
interface ProfileHeaderProps {
  profile: UserProfile;
}
const ProfileHeader: React.FC<ProfileHeaderProps> = ({
  profile
}) => {
  return <div className="mb-10">
      <div className="bg-white rounded-xl p-8">
        {/* Desktop layout */}
        <div className="hidden md:flex items-start gap-8">
          {/* Avatar */}
          <div className="flex-shrink-0">
            <img src={profile.avatarUrl} alt={`${profile.displayName}'s avatar`} className="w-20 h-20 rounded-full object-cover" />
          </div>
          {/* User info and stats in a flex container */}
          <div className="flex flex-grow justify-between items-start gap-6">
            {/* User info */}
            <div className="flex-grow">
              <h1 className="text-2xl font-light mb-1">
                {profile.displayName}
              </h1>
              <p className="text-gray-500 mb-1">{profile.title}</p>
              <p className="text-gray-500">
                @{profile.company} • {profile.location}
              </p>
            </div>
            {/* Stats */}
            <div className="flex-shrink-0">
              <div className="bg-gray-50 rounded-lg p-5 min-w-[300px]">
                <div className="grid grid-cols-2 gap-y-3">
                  <div>
                    <p className="text-gray-900 font-bold text-sm">
                      Queries Completed:
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-gray-900 font-medium flex items-center justify-end">
                      <span className="mr-2">🔄</span>
                      {profile.stats.productivityGains.queriesCompleted.toLocaleString()}
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-900 font-bold text-sm">
                      Strategic Time Saved:
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-gray-900 font-medium flex items-center justify-end">
                      <span className="mr-2">⏱️</span>
                      {profile.stats.productivityGains.researchHoursSaved.toLocaleString()}{' '}
                      hours
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Mobile layout */}
        <div className="md:hidden space-y-6">
          <div className="flex justify-center">
            <img src={profile.avatarUrl} alt={`${profile.displayName}'s avatar`} className="w-20 h-20 rounded-full object-cover" />
          </div>
          <div className="text-center">
            <h1 className="text-2xl font-light mb-1">{profile.displayName}</h1>
            <p className="text-gray-500 mb-1">{profile.title}</p>
            <p className="text-gray-500">
              @{profile.company} • {profile.location}
            </p>
          </div>
          {/* Mobile Productivity Stats */}
          <div className="bg-gray-50 rounded-lg p-4">
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <p className="text-gray-900 font-bold text-sm">
                  Queries Completed:
                </p>
                <p className="text-gray-900 font-medium flex items-center">
                  <span className="mr-2">🔄</span>
                  {profile.stats.productivityGains.queriesCompleted.toLocaleString()}
                </p>
              </div>
              <div className="flex justify-between items-center">
                <p className="text-gray-900 font-bold text-sm">
                  Strategic Time Saved:
                </p>
                <p className="text-gray-900 font-medium flex items-center">
                  <span className="mr-2">⏱️</span>
                  {profile.stats.productivityGains.researchHoursSaved.toLocaleString()}{' '}
                  hrs
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>;
};
export default ProfileHeader;