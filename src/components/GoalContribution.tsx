import React from 'react';
import { AnnualGoal } from '../utils/mockData';
import { Bookmark, Calendar, ChevronRight } from 'lucide-react';

interface GoalContributionProps {
  goals: AnnualGoal[];
  onGoalClick: (goal: AnnualGoal) => void;
}

const GoalContribution: React.FC<GoalContributionProps> = ({
  goals,
  onGoalClick
}) => {
  const getAchievementIndicatorStyle = (indicator: 'very-active' | 'moderate' | 'needs-attention') => {
    switch (indicator) {
      case 'very-active':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'moderate':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'needs-attention':
        return 'bg-red-100 text-red-800 border-red-200';
    }
  };

  const getAchievementText = (indicator: 'very-active' | 'moderate' | 'needs-attention') => {
    switch (indicator) {
      case 'very-active':
        return 'Very Active';
      case 'moderate':
        return 'Moderate';
      case 'needs-attention':
        return 'Needs Attention';
    }
  };

  return (
    <div className="mb-10">
      <div className="bg-white rounded-xl p-8">
        <h2 className="text-xl font-light mb-6">
          🎯 Goal Contribution (Q1 2025)
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {goals.map(goal => (
            <div 
              key={goal.id} 
              className="space-y-3 p-4 rounded-lg border border-gray-200 hover:border-gray-300 hover:shadow-sm transition-all cursor-pointer group"
              onClick={() => onGoalClick(goal)}
            >
              <div className="flex justify-between items-start">
                <p className="text-sm text-gray-700 font-medium group-hover:text-gray-900 transition-colors">
                  {goal.target}
                </p>
                <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-gray-600 transition-colors" />
              </div>
              
              <div className="flex items-center justify-between">
                <div className={`px-2 py-1 rounded-full text-xs font-medium border ${getAchievementIndicatorStyle(goal.achievementIndicator)}`}>
                  {getAchievementText(goal.achievementIndicator)}
                </div>
                <span className="text-xs text-gray-500">
                  {goal.lastContribution}
                </span>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs text-gray-600">
                  <span className="flex items-center">
                    <Bookmark className="w-3 h-3 mr-1" />
                    {goal.bookmarkedInsights} insights
                  </span>
                  <span className="flex items-center">
                    <Calendar className="w-3 h-3 mr-1" />
                    {goal.contributingQueries} queries
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default GoalContribution;