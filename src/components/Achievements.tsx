import React, { useState } from 'react';
import { Achievement } from '../utils/mockData';
interface AchievementsProps {
  achievements: Achievement[];
}
const Achievements: React.FC<AchievementsProps> = ({
  achievements
}) => {
  const [filter, setFilter] = useState<'all' | 'unlocked' | 'progress'>('all');
  // Sort achievements - completed first, then by progress
  let filteredAchievements = [...achievements];
  if (filter === 'unlocked') {
    filteredAchievements = filteredAchievements.filter(a => a.unlockedAt);
  } else if (filter === 'progress') {
    filteredAchievements = filteredAchievements.filter(a => !a.unlockedAt);
  }
  const sortedAchievements = filteredAchievements.sort((a, b) => {
    if (a.unlockedAt && !b.unlockedAt) return -1;
    if (!a.unlockedAt && b.unlockedAt) return 1;
    if (a.unlockedAt && b.unlockedAt) {
      return new Date(b.unlockedAt).getTime() - new Date(a.unlockedAt).getTime();
    }
    return (b.progress || 0) - (a.progress || 0);
  });
  const unlockedCount = achievements.filter(a => a.unlockedAt).length;
  return <div className="mb-10">
      <div className="bg-white rounded-xl p-8">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
          <h2 className="text-xl font-light">
            Achievements ({unlockedCount}/{achievements.length})
          </h2>
          <div className="inline-flex rounded-full bg-gray-100 p-1">
            <button className={`px-4 py-2 text-sm rounded-full transition-all ${filter === 'all' ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-500 hover:text-gray-700'}`} onClick={() => setFilter('all')}>
              All
            </button>
            <button className={`px-4 py-2 text-sm rounded-full transition-all ${filter === 'unlocked' ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-500 hover:text-gray-700'}`} onClick={() => setFilter('unlocked')}>
              Unlocked ({unlockedCount})
            </button>
            <button className={`px-4 py-2 text-sm rounded-full transition-all ${filter === 'progress' ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-500 hover:text-gray-700'}`} onClick={() => setFilter('progress')}>
              In Progress ({achievements.length - unlockedCount})
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {sortedAchievements.map(achievement => {
          const isUnlocked = !!achievement.unlockedAt;
          const progressPercent = achievement.progress || 0;
          return <div key={achievement.id} className={`rounded-lg p-5 transition-all duration-300 ${isUnlocked ? 'bg-gray-50' : 'bg-white border border-gray-100'}`}>
                <div className="flex items-start">
                  <div className="flex-shrink-0 mr-4 text-3xl">
                    {achievement.icon}
                  </div>
                  <div className="flex-grow">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-medium text-gray-900">
                        {achievement.name}
                      </h3>
                      {isUnlocked && <span className="text-xs text-white bg-green-400 px-2 py-0.5 rounded-full">
                          {new Date(achievement.unlockedAt).toLocaleDateString('en-US', {
                      month: 'short',
                      year: 'numeric'
                    })}
                        </span>}
                      {!isUnlocked && <span className="text-xs text-white bg-blue-400 px-2 py-0.5 rounded-full">
                          In Progress
                        </span>}
                    </div>
                    <p className="text-sm text-gray-500 mb-3">
                      {achievement.description}
                    </p>
                    <div className="w-full h-1 bg-gray-100 rounded-full overflow-hidden">
                      <div className={`h-full rounded-full transition-all duration-700 ${isUnlocked ? 'bg-green-400' : 'bg-blue-400'}`} style={{
                    width: `${isUnlocked ? 100 : progressPercent}%`
                  }} />
                    </div>
                    {!isUnlocked && progressPercent > 0 && <p className="text-xs text-right mt-1 text-blue-500">
                        {progressPercent}% complete
                      </p>}
                  </div>
                </div>
              </div>;
        })}
        </div>
        {sortedAchievements.length === 0 && <div className="text-center py-12 text-gray-500">
            No achievements match the selected filter.
          </div>}
      </div>
    </div>;
};
export default Achievements;