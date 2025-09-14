import React, { useState } from 'react';
import { InsightFolder, CoreInsight } from '../utils/mockData';

interface InsightFolderPageProps {
  folder: InsightFolder;
  onBack: () => void;
}

const InsightFolderPage: React.FC<InsightFolderPageProps> = ({ folder, onBack }) => {
  const [selectedInsight, setSelectedInsight] = useState<CoreInsight | null>(null);

  const getReasonConfig = (reason: string) => {
    const configs = {
      campaign: { label: 'Campaign', color: 'bg-blue-50 text-blue-700 border-blue-200', icon: '🎯' },
      strategy: { label: 'Strategy', color: 'bg-green-50 text-green-700 border-green-200', icon: '📊' },
      trend: { label: 'Trend', color: 'bg-purple-50 text-purple-700 border-purple-200', icon: '📈' },
      product: { label: 'Product', color: 'bg-orange-50 text-orange-700 border-orange-200', icon: '💡' },
      'follow-up': { label: 'Follow-up', color: 'bg-yellow-50 text-yellow-700 border-yellow-200', icon: '🔄' },
      general: { label: 'General', color: 'bg-gray-50 text-gray-700 border-gray-200', icon: '⭐' }
    };
    return configs[reason as keyof typeof configs] || configs.general;
  };

  const getImpactIcon = (impact: string) => {
    const icons = {
      high: '⭐',
      medium: '⚡',
      low: '💫'
    };
    return icons[impact as keyof typeof icons] || '💫';
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffTime = Math.abs(now.getTime() - date.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays === 1) return 'Yesterday';
    if (diffDays < 7) return `${diffDays} days ago`;
    if (diffDays < 30) return `${Math.ceil(diffDays / 7)} weeks ago`;
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
  };

  const truncateText = (text: string, maxLength: number) => {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + '...';
  };

  // If a specific insight is selected, show detailed view
  if (selectedInsight) {
    const reasonConfig = getReasonConfig(selectedInsight.reason);
    
    return (
      <div className="min-h-screen w-full bg-[#FAFAFA] font-sans text-gray-900">
        <main className="max-w-4xl mx-auto px-6 py-12">
          {/* Back button */}
          <div className="mb-8">
            <button
              onClick={() => setSelectedInsight(null)}
              className="flex items-center text-gray-500 hover:text-gray-700 transition-colors group"
            >
              <svg className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to {folder.name}
            </button>
          </div>

          {/* Insight Detail Card */}
          <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
            {/* Header */}
            <div className="flex items-start justify-between mb-8">
              <div className="flex-1">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-3xl">{folder.icon}</span>
                  <div>
                    <h1 className="text-2xl font-light text-gray-900">Bookmarked Insight</h1>
                    <p className="text-gray-500">Saved on {formatDate(selectedInsight.date)}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm border ${reasonConfig.color}`}>
                    {reasonConfig.icon} {reasonConfig.label}
                  </span>
                  <span className="text-sm text-gray-500">
                    {getImpactIcon(selectedInsight.impact)} {selectedInsight.impact} impact
                  </span>
                </div>
              </div>
            </div>

            {/* Original Query */}
            <div className="mb-8">
              <h3 className="text-sm font-medium text-gray-700 mb-3 uppercase tracking-wide">Original Query</h3>
              <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                <p className="text-gray-900 text-lg leading-relaxed">
                  "{selectedInsight.query}"
                </p>
              </div>
            </div>

            {/* Highlighted Text */}
            <div className="mb-8">
              <h3 className="text-sm font-medium text-gray-700 mb-3 uppercase tracking-wide">Your Bookmarked Insight</h3>
              <div className="bg-blue-50 border-l-4 border-blue-400 p-6 rounded-r-xl">
                <p className="text-gray-900 text-lg leading-relaxed font-medium">
                  "{selectedInsight.highlightedText}"
                </p>
              </div>
            </div>

            {/* Full Context */}
            <div className="mb-8">
              <h3 className="text-sm font-medium text-gray-700 mb-3 uppercase tracking-wide">Full Context</h3>
              <div className="bg-white border border-gray-200 rounded-xl p-6">
                <p className="text-gray-700 leading-relaxed text-base">
                  {selectedInsight.fullContext}
                </p>
              </div>
            </div>

            {/* Tags */}
            {selectedInsight.tags.length > 0 && (
              <div>
                <h3 className="text-sm font-medium text-gray-700 mb-3 uppercase tracking-wide">Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedInsight.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-gray-100 text-gray-700 border border-gray-200"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </main>
      </div>
    );
  }

  // Main folder view
  return (
    <div className="min-h-screen w-full bg-[#FAFAFA] font-sans text-gray-900">
      <main className="max-w-6xl mx-auto px-6 py-12">
        {/* Back button */}
        <div className="mb-8">
          <button
            onClick={onBack}
            className="flex items-center text-gray-500 hover:text-gray-700 transition-colors group"
          >
            <svg className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Core Insights
          </button>
        </div>

        {/* Folder Header */}
        <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm mb-8">
          <div className="flex items-center gap-6 mb-6">
            <span className="text-4xl">{folder.icon}</span>
            <div>
              <h1 className="text-3xl font-light text-gray-900 mb-2">{folder.name}</h1>
              <p className="text-gray-500 text-lg">
                {folder.totalInsights} bookmarked insights • Last updated {formatDate(folder.lastUpdated)}
              </p>
            </div>
          </div>
          <div className="border-t border-gray-100 pt-6">
            <p className="text-gray-600 leading-relaxed">
              Your curated collection of valuable insights from Aria conversations. 
              Each insight represents a key discovery you've bookmarked for future reference.
            </p>
          </div>
        </div>

        {/* Insights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {folder.insights.map((insight) => {
            const reasonConfig = getReasonConfig(insight.reason);
            
            return (
              <div
                key={insight.id}
                onClick={() => setSelectedInsight(insight)}
                className="bg-white rounded-xl p-6 border border-gray-100 hover:border-gray-200 hover:shadow-md transition-all cursor-pointer group"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs border ${reasonConfig.color}`}>
                      {reasonConfig.icon} {reasonConfig.label}
                    </span>
                    <span className="text-sm text-gray-500">
                      {getImpactIcon(insight.impact)}
                    </span>
                  </div>
                  <span className="text-xs text-gray-400">{formatDate(insight.date)}</span>
                </div>
                
                <div className="mb-4">
                  <p className="text-gray-900 leading-relaxed text-sm">
                    "{truncateText(insight.highlightedText, 120)}"
                  </p>
                </div>
                
                <div className="mb-4">
                  <p className="text-sm text-gray-500 italic">
                    Q: {truncateText(insight.query, 80)}
                  </p>
                </div>
                
                {insight.tags.length > 0 && (
                  <div className="flex flex-wrap gap-1 mb-4">
                    {insight.tags.slice(0, 3).map((tag, index) => (
                      <span
                        key={index}
                        className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-gray-100 text-gray-600"
                      >
                        #{tag}
                      </span>
                    ))}
                    {insight.tags.length > 3 && (
                      <span className="text-xs text-gray-400">+{insight.tags.length - 3} more</span>
                    )}
                  </div>
                )}

                <div className="flex items-center justify-between text-xs text-gray-400 group-hover:text-gray-600 transition-colors">
                  <span>View details</span>
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            );
          })}
        </div>
      </main>
    </div>
  );
};

export default InsightFolderPage;
