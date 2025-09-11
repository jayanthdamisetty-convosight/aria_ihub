import React from 'react';
import { AnnualGoal } from '../utils/mockData';
interface GoalContributionProps {
  goals: AnnualGoal[];
}
const GoalContribution: React.FC<GoalContributionProps> = ({
  goals
}) => {
  return <div className="mb-10">
      <div className="bg-white rounded-xl p-8">
        <h2 className="text-xl font-light mb-6">
          🎯 Goal Contribution (Q1 2025)
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {goals.map(goal => <div key={goal.id} className="space-y-2">
              <div className="flex justify-between items-start">
                <p className="text-sm text-gray-700">{goal.target}</p>
                <p className="text-sm text-gray-500 font-light">
                  {goal.progressText}
                </p>
              </div>
              <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                <div className="h-full rounded-full transition-all duration-500 ease-out" style={{
              width: `${goal.progress}%`,
              backgroundColor: goal.color
            }} />
              </div>
              <p className="text-xs text-gray-500">
                ARIA Insights Contributing:{' '}
                <span className="font-medium">
                  {goal.contributingQueries} queries
                </span>
              </p>
            </div>)}
        </div>
      </div>
    </div>;
};
export default GoalContribution;