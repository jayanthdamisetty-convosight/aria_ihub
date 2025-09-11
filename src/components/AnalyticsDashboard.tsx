import React from 'react';
import { QueryType, CategoryExpertise, UsagePattern } from '../utils/mockData';
interface AnalyticsDashboardProps {
  queryTypes: QueryType[];
  categoryExpertise: CategoryExpertise[];
  usagePatterns: UsagePattern[];
}
const AnalyticsDashboard: React.FC<AnalyticsDashboardProps> = ({
  queryTypes,
  categoryExpertise,
  usagePatterns
}) => {
  // Calculate total queries for percentages
  const totalQueries = queryTypes.reduce((sum, type) => sum + type.count, 0);
  return <div className="mb-10 grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Query Type Distribution */}
      <div className="bg-white rounded-xl p-8">
        <h2 className="text-xl font-light mb-6">Agents I love to use</h2>
        <div className="space-y-6">
          {queryTypes.map(queryType => {
          const percentage = Math.round(queryType.count / totalQueries * 100);
          return <div key={queryType.name}>
                <div className="flex justify-between mb-2">
                  <span className="text-sm text-gray-700">
                    {queryType.name}
                  </span>
                  <span className="text-sm text-gray-500">
                    {queryType.count} queries ({percentage}%)
                  </span>
                </div>
                <div className="w-full h-1 bg-gray-100 rounded-full overflow-hidden">
                  <div className="h-full rounded-full" style={{
                width: `${percentage}%`,
                backgroundColor: queryType.color
              }} />
                </div>
              </div>;
        })}
        </div>
      </div>
      {/* Category Expertise */}
      <div className="bg-white rounded-xl p-8">
        <h2 className="text-xl font-light mb-6">My Category Expertise</h2>
        <div className="grid grid-cols-2 gap-6">
          {categoryExpertise.map(category => <div key={category.name} className="text-center">
              <h3 className="text-sm text-gray-700 mb-4">{category.name}</h3>
              <div className="relative inline-block w-20 h-20 mb-3">
                <svg viewBox="0 0 36 36" className="w-full h-full">
                  <path d="M18 2.0845
                      a 15.9155 15.9155 0 0 1 0 31.831
                      a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="#f3f4f6" strokeWidth="2" />
                  <path d="M18 2.0845
                      a 15.9155 15.9155 0 0 1 0 31.831
                      a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke={category.color} strokeWidth="2" strokeDasharray={`${category.percentage}, 100`} />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-lg font-light">
                    {category.percentage}%
                  </span>
                </div>
              </div>
              <p className="text-sm text-gray-500">{category.count} queries</p>
            </div>)}
        </div>
      </div>
      {/* Usage Patterns */}
      <div className="bg-white rounded-xl p-8 md:col-span-2">
        <h2 className="text-xl font-light mb-6">Peak Activity Times</h2>
        <div className="grid grid-cols-1 md:grid-cols-7 gap-4">
          {usagePatterns.map(day => {
          // Calculate bar height percentage (max 100%)
          const heightPercentage = day.activityLevel / 10 * 100;
          return <div key={day.day} className="flex flex-col">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-700">{day.day}</span>
                  <span className="text-xs text-gray-500">
                    {day.activityLevel}/10
                  </span>
                </div>
                <div className="h-24 bg-gray-50 rounded-md relative mb-2">
                  <div className="absolute bottom-0 left-0 right-0 transition-all duration-500 ease-out" style={{
                height: `${heightPercentage}%`,
                backgroundColor: day.color
              }} />
                </div>
                {day.note && <span className="text-xs text-gray-500 truncate" title={day.note}>
                    {day.note}
                  </span>}
              </div>;
        })}
        </div>
      </div>
    </div>;
};
export default AnalyticsDashboard;