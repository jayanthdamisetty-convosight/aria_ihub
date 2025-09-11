import React, { useState } from 'react';
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
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);
  
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