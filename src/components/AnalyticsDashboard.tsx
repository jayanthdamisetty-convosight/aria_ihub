import React, { useState } from 'react';
import { QueryType, CategoryExpertise } from '../utils/mockData';
interface AnalyticsDashboardProps {
  queryTypes: QueryType[];
  categoryExpertise: CategoryExpertise[];
}
const AnalyticsDashboard: React.FC<AnalyticsDashboardProps> = ({
  queryTypes,
  categoryExpertise
}) => {
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);
  
  // Calculate total queries for percentages
  const totalQueries = queryTypes.reduce((sum, type) => sum + type.count, 0);
  
  // Calculate hours saved with better baseline logic
  // Baseline: Traditional research takes 2.5 hours per query on average
  // ARIA reduces this to 15 minutes per query (0.25 hours)
  // So each query saves 2.25 hours
  const hoursSavedPerQuery = 2.25;
  const totalHoursSaved = Math.round(totalQueries * hoursSavedPerQuery);
  
  // Calculate work days returned (8 hours per work day)
  const workDaysReturned = Math.round(totalHoursSaved / 8);
  
  // Calculate work weeks returned (5 days per week)
  const workWeeksReturned = Math.round(workDaysReturned / 5);
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
        <div className="flex items-center justify-center">
          <div className="relative">
            {/* 3D Pie Chart */}
            <div className="relative w-64 h-64">
              <svg viewBox="0 0 200 200" className="w-full h-full transform rotate-[-90deg]">
                {(() => {
                  let cumulativePercentage = 0;
                  const radius = 80;
                  const centerX = 100;
                  const centerY = 100;
                  
                  return categoryExpertise.map((category, index) => {
                    const percentage = category.percentage;
                    const startAngle = (cumulativePercentage / 100) * 360;
                    const endAngle = ((cumulativePercentage + percentage) / 100) * 360;
                    
                    const startAngleRad = (startAngle * Math.PI) / 180;
                    const endAngleRad = (endAngle * Math.PI) / 180;
                    
                    const x1 = centerX + radius * Math.cos(startAngleRad);
                    const y1 = centerY + radius * Math.sin(startAngleRad);
                    const x2 = centerX + radius * Math.cos(endAngleRad);
                    const y2 = centerY + radius * Math.sin(endAngleRad);
                    
                    const largeArcFlag = percentage > 50 ? 1 : 0;
                    
                    const pathData = [
                      `M ${centerX} ${centerY}`,
                      `L ${x1} ${y1}`,
                      `A ${radius} ${radius} 0 ${largeArcFlag} 1 ${x2} ${y2}`,
                      'Z'
                    ].join(' ');
                    
                    cumulativePercentage += percentage;
                    
                    const isHovered = hoveredCategory === category.name;
                    const isOtherHovered = hoveredCategory && hoveredCategory !== category.name;
                    
                    return (
                      <path
                        key={category.name}
                        d={pathData}
                        fill={isOtherHovered ? '#E5E7EB' : category.color}
                        stroke="white"
                        strokeWidth="2"
                        style={{
                          filter: isHovered 
                            ? 'drop-shadow(0 6px 12px rgba(0,0,0,0.15))' 
                            : 'drop-shadow(0 4px 8px rgba(0,0,0,0.1))',
                          transform: isHovered 
                            ? `translateZ(${index * 2 + 4}px) scale(1.02)` 
                            : `translateZ(${index * 2}px)`,
                          transition: 'all 0.2s ease-in-out',
                          cursor: 'pointer'
                        }}
                        onMouseEnter={() => setHoveredCategory(category.name)}
                        onMouseLeave={() => setHoveredCategory(null)}
                      />
                    );
                  });
                })()}
              </svg>
            </div>
            
            {/* Legend */}
            <div className="mt-6 grid grid-cols-2 gap-4">
              {categoryExpertise.map(category => {
                const isHovered = hoveredCategory === category.name;
                const isOtherHovered = hoveredCategory && hoveredCategory !== category.name;
                
                return (
                  <div 
                    key={category.name} 
                    className={`flex items-center transition-all duration-200 ${
                      isOtherHovered ? 'opacity-40' : 'opacity-100'
                    }`}
                    onMouseEnter={() => setHoveredCategory(category.name)}
                    onMouseLeave={() => setHoveredCategory(null)}
                  >
                    <div 
                      className={`w-3 h-3 rounded-full mr-3 transition-all duration-200 ${
                        isHovered ? 'scale-125' : 'scale-100'
                      }`}
                      style={{ 
                        backgroundColor: isOtherHovered ? '#E5E7EB' : category.color 
                      }}
                    />
                    <div className="flex-1">
                      <div className={`text-sm font-medium transition-colors duration-200 ${
                        isHovered ? 'text-gray-900' : isOtherHovered ? 'text-gray-400' : 'text-gray-900'
                      }`}>
                        {category.name}
                      </div>
                      <div className={`text-xs transition-colors duration-200 ${
                        isHovered ? 'text-gray-600' : isOtherHovered ? 'text-gray-300' : 'text-gray-500'
                      }`}>
                        {category.count} queries ({category.percentage}%)
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      {/* Productivity Impact - New section replacing peak usage times */}
      <div className="bg-white rounded-xl p-8 md:col-span-2">
        <h2 className="text-xl font-light mb-6">Your Productivity Impact</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="text-3xl font-light text-gray-900 mb-2">
              {totalHoursSaved.toLocaleString()}
            </div>
            <div className="text-sm text-gray-500 mb-1">Hours Saved</div>
            <div className="text-xs text-gray-400">
              Based on 2.25h saved per query vs traditional research
            </div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-light text-gray-900 mb-2">
              {workDaysReturned}
            </div>
            <div className="text-sm text-gray-500 mb-1">Work Days Returned</div>
            <div className="text-xs text-gray-400">
              Equivalent to {workWeeksReturned} work weeks
            </div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-light text-gray-900 mb-2">
              {totalQueries.toLocaleString()}
            </div>
            <div className="text-sm text-gray-500 mb-1">Total Queries</div>
            <div className="text-xs text-gray-400">
              Research queries completed
            </div>
          </div>
        </div>
      </div>
    </div>;
};
export default AnalyticsDashboard;