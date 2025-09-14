import React, { useState } from 'react';
import { InsightFolder, CoreInsight } from '../utils/mockData';
import InsightFolderPage from './InsightFolderPage';

interface CoreInsightsProps {
  folders: InsightFolder[];
}

const CoreInsights: React.FC<CoreInsightsProps> = ({ folders }) => {
  const [selectedFolder, setSelectedFolder] = useState<InsightFolder | null>(null);

  // If a folder is selected, show the folder page
  if (selectedFolder) {
    return (
      <InsightFolderPage 
        folder={selectedFolder} 
        onBack={() => setSelectedFolder(null)} 
      />
    );
  }

  // Main folder overview
  const totalInsights = folders.reduce((sum, folder) => sum + folder.totalInsights, 0);

  return (
    <div className="mb-10">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-2xl font-light text-gray-900 mb-2">Bookmarked Insights</h2>
          <p className="text-gray-500">Your curated collection of valuable discoveries from Aria conversations</p>
        </div>
        <div className="text-right">
          <div className="text-sm text-gray-500">
            {folders.length} folders • {totalInsights} insights bookmarked
          </div>
        </div>
      </div>

      {/* Folders Grid */}
      {folders.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {folders.map((folder) => (
            <div
              key={folder.id}
              onClick={() => setSelectedFolder(folder)}
              className="bg-white rounded-xl p-6 border border-gray-100 hover:border-gray-200 hover:shadow-md transition-all cursor-pointer group"
            >
              <div className="flex items-center gap-4 mb-4">
                <span className="text-3xl">{folder.icon}</span>
                <div className="flex-1">
                  <h3 className="text-lg font-medium text-gray-900 group-hover:text-gray-700">
                    {folder.name}
                  </h3>
                  <p className="text-sm text-gray-500">
                    {folder.totalInsights} bookmarked insights
                  </p>
                </div>
              </div>
              
              {folder.insights.length > 0 && (
                <div className="mb-4">
                  <p className="text-gray-700 text-sm leading-relaxed italic">
                    "{folder.insights[0].highlightedText.substring(0, 100)}..."
                  </p>
                </div>
              )}
              
              <div className="flex items-center justify-between text-xs text-gray-400 group-hover:text-gray-600 transition-colors">
                <span>Last updated {new Date(folder.lastUpdated).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</span>
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="bg-white rounded-xl p-12 text-center border border-gray-100">
          <div className="text-5xl mb-6">📚</div>
          <h3 className="text-xl font-medium text-gray-900 mb-3">No insights bookmarked yet</h3>
          <p className="text-gray-500 mb-8 max-w-md mx-auto">
            Start highlighting and bookmarking valuable insights from your Aria conversations to build your personal knowledge library.
          </p>
          <button className="inline-flex items-center px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
            Learn How to Bookmark
          </button>
        </div>
      )}
    </div>
  );
};

export default CoreInsights;
