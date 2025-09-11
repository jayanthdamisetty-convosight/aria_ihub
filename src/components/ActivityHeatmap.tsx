import React, { useState } from 'react';
import { ActivityData } from '../utils/mockData';
interface ActivityHeatmapProps {
  activityData: ActivityData[];
}
const ActivityHeatmap: React.FC<ActivityHeatmapProps> = ({
  activityData
}) => {
  const [tooltipData, setTooltipData] = useState<{
    date: string;
    count: number;
    queryTypes: Record<string, number>;
    position: {
      x: number;
      y: number;
    };
  } | null>(null);
  // Generate array of 365 days
  const days = [...Array(365)].map((_, i) => {
    const date = new Date();
    date.setDate(date.getDate() - 364 + i);
    const dateStr = date.toISOString().split('T')[0];
    // Find activity for this date or default to 0
    const activity = activityData.find(a => a.date === dateStr) || {
      date: dateStr,
      count: 0,
      queryTypes: {}
    };
    return activity;
  });
  // Get activity level based on count (0-4)
  const getActivityLevel = (count: number): number => {
    if (count === 0) return 0;
    if (count < 3) return 1;
    if (count < 6) return 2;
    if (count < 10) return 3;
    return 4;
  };
  // Get color based on activity level
  const getActivityColor = (level: number): string => {
    switch (level) {
      case 0:
        return '#f3f4f6';
      // gray-100
      case 1:
        return '#d1fae5';
      // green-100
      case 2:
        return '#a7f3d0';
      // green-200
      case 3:
        return '#6ee7b7';
      // green-300
      case 4:
        return '#34d399';
      // green-400
      default:
        return '#f3f4f6';
      // gray-100
    }
  };
  // Handle mouse events for tooltip
  const showTooltip = (day: ActivityData, event: React.MouseEvent) => {
    const rect = event.currentTarget.getBoundingClientRect();
    setTooltipData({
      ...day,
      position: {
        x: rect.left + window.scrollX,
        y: rect.top + window.scrollY - 120
      }
    });
  };
  const hideTooltip = () => {
    setTooltipData(null);
  };
  // Get stats
  const totalInsights = days.reduce((sum, day) => sum + day.count, 0);
  const mostActiveDay = [...days].sort((a, b) => b.count - a.count)[0];
  // Calculate streaks
  let currentStreak = 0;
  let longestStreak = 0;
  let tempStreak = 0;
  // Start from most recent day
  for (let i = days.length - 1; i >= 0; i--) {
    if (days[i].count > 0) {
      tempStreak++;
      if (i === days.length - 1) {
        currentStreak = tempStreak;
      }
    } else {
      if (tempStreak > longestStreak) {
        longestStreak = tempStreak;
      }
      tempStreak = 0;
      if (currentStreak === 0) {
        currentStreak = 0;
      }
    }
  }
  // Check if the final streak is the longest
  if (tempStreak > longestStreak) {
    longestStreak = tempStreak;
  }
  // Calculate active days percentage
  const activeDays = days.filter(day => day.count > 0).length;
  const activePercentage = Math.round(activeDays / days.length * 100);
  // Calculate average per active day
  const averagePerActiveDay = activeDays > 0 ? (totalInsights / activeDays).toFixed(1) : '0';
  return <div className="mb-10">
      <div className="bg-white rounded-xl p-8">
        <h2 className="text-xl font-light mb-6">Sarah's Curiousness</h2>
        {/* Activity grid */}
        <div className="overflow-x-auto pb-4">
          <div className="activity-grid inline-grid grid-rows-7 grid-flow-col gap-1 min-w-max">
            {days.map((day, index) => {
            const level = getActivityLevel(day.count);
            const color = getActivityColor(level);
            return <div key={index} className="w-3 h-3 rounded-sm cursor-pointer transition-all duration-200 hover:scale-150 hover:z-10" style={{
              backgroundColor: color
            }} onMouseEnter={e => showTooltip(day, e)} onMouseLeave={hideTooltip} aria-label={`${day.date}: ${day.count} insights`} />;
          })}
          </div>
        </div>
        {/* Tooltip */}
        {tooltipData && <div className="absolute z-20 bg-white rounded-lg shadow-sm p-4 border border-gray-100 w-64 text-sm transform transition-opacity duration-150 ease-in-out" style={{
        left: `${tooltipData.position.x}px`,
        top: `${tooltipData.position.y}px`
      }}>
            <div className="font-medium text-gray-900">
              {new Date(tooltipData.date).toLocaleDateString('en-US', {
            weekday: 'long',
            month: 'long',
            day: 'numeric',
            year: 'numeric'
          })}
            </div>
            <div className="mt-1 mb-2 text-base">
              {tooltipData.count === 0 ? 'No insights generated' : `${tooltipData.count} insight${tooltipData.count > 1 ? 's' : ''} generated`}
            </div>
            {Object.entries(tooltipData.queryTypes).length > 0 && <div className="border-t border-gray-100 pt-2 mt-1">
                {Object.entries(tooltipData.queryTypes).map(([type, count]) => <div key={type} className="flex justify-between items-center text-xs text-gray-500 mb-1">
                    <span>• {type}</span>
                    <span className="font-medium">{count}</span>
                  </div>)}
              </div>}
          </div>}
        {/* Legend */}
        <div className="flex items-center justify-between mt-2 text-sm text-gray-500">
          <div className="flex items-center">
            <span className="mr-2">Less</span>
            <div className="flex gap-1">
              {[0, 1, 2, 3, 4].map(level => <div key={level} className="w-3 h-3 rounded-sm" style={{
              backgroundColor: getActivityColor(level)
            }} />)}
            </div>
            <span className="ml-2">More</span>
          </div>
        </div>
        {/* Stats */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-50 rounded-lg p-5">
            <p className="text-gray-900 font-medium">
              {totalInsights} insights in the last year
            </p>
            <p className="text-gray-500 mt-2">
              • {activePercentage}% days active ({activeDays}/365)
            </p>
            <p className="text-gray-500">
              • Average: {averagePerActiveDay} insights per active day
            </p>
          </div>
          <div className="bg-gray-50 rounded-lg p-5">
            <p className="text-gray-900 font-medium">
              • Most active: {mostActiveDay.count} insights (
              {new Date(mostActiveDay.date).toLocaleDateString('en-US', {
              month: 'short',
              day: 'numeric'
            })}
              )
            </p>
            <p className="text-gray-500">
              • Longest streak: {longestStreak} days
            </p>
            <p className="text-gray-500">
              • Current streak: {currentStreak} days
            </p>
          </div>
        </div>
      </div>
    </div>;
};
export default ActivityHeatmap;