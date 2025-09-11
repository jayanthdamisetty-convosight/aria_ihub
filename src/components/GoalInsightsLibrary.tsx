import React from 'react';
import { AnnualGoal, BookmarkedInsight } from '../utils/mockData';
import { ArrowLeft, Bookmark, Calendar, TrendingUp, TrendingDown, Minus } from 'lucide-react';

interface GoalInsightsLibraryProps {
  goal: AnnualGoal;
  insights: BookmarkedInsight[];
  onBack: () => void;
}

const GoalInsightsLibrary: React.FC<GoalInsightsLibraryProps> = ({
  goal,
  insights,
  onBack
}) => {
  const getImpactIcon = (impact: 'high' | 'medium' | 'low') => {
    switch (impact) {
      case 'high':
        return <TrendingUp className="w-4 h-4 text-green-600" />;
      case 'medium':
        return <Minus className="w-4 h-4 text-yellow-600" />;
      case 'low':
        return <TrendingDown className="w-4 h-4 text-red-600" />;
    }
  };

  const getImpactColor = (impact: 'high' | 'medium' | 'low') => {
    switch (impact) {
      case 'high':
        return 'bg-green-50 text-green-700 border-green-200';
      case 'medium':
        return 'bg-yellow-50 text-yellow-700 border-yellow-200';
      case 'low':
        return 'bg-red-50 text-red-700 border-red-200';
    }
  };

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
    <div className="min-h-screen w-full bg-[#FAFAFA] font-sans text-gray-900">
      <main className="max-w-4xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="mb-8">
          <button
            onClick={onBack}
            className="flex items-center text-gray-600 hover:text-gray-900 mb-4 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Profile
          </button>
          
          <div className="bg-white rounded-xl p-8">
            <div className="flex items-start justify-between mb-6">
              <div>
                <h1 className="text-2xl font-light text-gray-900 mb-2">
                  {goal.target}
                </h1>
                <div className="flex items-center gap-4 text-sm text-gray-600">
                  <span className="flex items-center">
                    <Bookmark className="w-4 h-4 mr-1" />
                    {goal.bookmarkedInsights} insights saved
                  </span>
                  <span className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    Last contribution: {goal.lastContribution}
                  </span>
                </div>
              </div>
              <div className={`px-3 py-1 rounded-full text-xs font-medium border ${getAchievementIndicatorStyle(goal.achievementIndicator)}`}>
                {getAchievementText(goal.achievementIndicator)}
              </div>
            </div>

            {/* Goal Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="text-2xl font-light text-gray-900">{goal.contributingQueries}</div>
                <div className="text-sm text-gray-600">Queries Contributed</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-light text-gray-900">{goal.bookmarkedInsights}</div>
                <div className="text-sm text-gray-600">Insights Bookmarked</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-light text-gray-900">{goal.lastContribution}</div>
                <div className="text-sm text-gray-600">Last Activity</div>
              </div>
            </div>
          </div>
        </div>

        {/* Insights List */}
        <div className="bg-white rounded-xl p-8">
          <h2 className="text-xl font-light mb-6">Bookmarked Insights</h2>
          
          {insights.length === 0 ? (
            <div className="text-center py-12 text-gray-500">
              <Bookmark className="w-12 h-12 mx-auto mb-4 text-gray-300" />
              <p>No insights bookmarked for this goal yet.</p>
              <p className="text-sm mt-2">Start contributing queries to build your insights library.</p>
            </div>
          ) : (
            <div className="space-y-6">
              {insights.map((insight) => (
                <div key={insight.id} className="border border-gray-200 rounded-lg p-6 hover:shadow-sm transition-shadow">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-2">
                      {getImpactIcon(insight.impact)}
                      <span className={`px-2 py-1 rounded text-xs font-medium border ${getImpactColor(insight.impact)}`}>
                        {insight.impact} impact
                      </span>
                    </div>
                    <span className="text-sm text-gray-500">{insight.date}</span>
                  </div>
                  
                  <div className="mb-4">
                    <h3 className="font-medium text-gray-900 mb-2">Query:</h3>
                    <p className="text-gray-700 italic">"{insight.query}"</p>
                  </div>
                  
                  <div>
                    <h3 className="font-medium text-gray-900 mb-2">Insight:</h3>
                    <p className="text-gray-700">{insight.insight}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default GoalInsightsLibrary;
