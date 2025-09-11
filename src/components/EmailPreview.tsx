import React from 'react';
import { UserProfile } from '../utils/mockData';
interface EmailPreviewProps {
  profile: UserProfile;
}
const EmailPreview: React.FC<EmailPreviewProps> = ({
  profile
}) => {
  // Generate 12 weeks of activity data for the heatmap
  const generateHeatmapData = () => {
    const weeks = [];
    for (let w = 0; w < 12; w++) {
      const days = [];
      for (let d = 0; d < 7; d++) {
        // Generate random activity level (0-4)
        const level = Math.floor(Math.random() * 5);
        days.push(level);
      }
      weeks.push(days);
    }
    return weeks;
  };
  const heatmapData = generateHeatmapData();
  // Get level class for heatmap squares
  const getLevelClass = (level: number) => {
    switch (level) {
      case 0:
        return 'bg-gray-200';
      case 1:
        return 'bg-green-100';
      case 2:
        return 'bg-green-200';
      case 3:
        return 'bg-green-300';
      case 4:
        return 'bg-green-400';
      default:
        return 'bg-gray-200';
    }
  };
  return <div className="max-w-4xl mx-auto p-6">
      <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100">
        {/* Email Header */}
        <div className="px-8 py-6 border-b border-gray-100">
          <div className="text-sm text-gray-500 mb-2">
            From: {profile.displayName} via ARIA Insights
          </div>
          <div className="text-xl font-light text-gray-900 mb-4">
            Q1 Competitive Analysis: Skincare Market Dynamics
          </div>
          <div className="text-sm text-gray-400">Today at 10:34 AM</div>
        </div>
        {/* Email Body */}
        <div className="px-8 py-6">
          <div className="text-sm leading-relaxed text-gray-700 mb-6">
            Hi Michael,
            <br />
            <br />
            Following our discussion, I've completed the competitive landscape
            analysis for Q1. The report includes TikTok virality patterns and
            emerging K-beauty threats we discussed.
            <br />
            <br />
            You can ask the report any questions that you have and if there are
            still questions ping me and I'll be happy to get on a call with you
          </div>
          {/* Report Link Card */}
          <a href="https://aria-chat-insights.lovable.app/shared/mf9d9cai" target="_blank" rel="noopener noreferrer" className="block">
            <div className="bg-gradient-to-r from-blue-500 to-blue-700 rounded-xl p-6 mb-8 transform transition-all duration-200 hover:-translate-y-1 hover:shadow-lg cursor-pointer">
              <div className="text-white text-lg font-light mb-2">
                Q1 2025 Skincare Competitive Intelligence Report
              </div>
              <div className="text-white/90 text-sm leading-relaxed">
                {profile.stats.totalInsights} insights analyzed • 5 key
                competitors benchmarked • 3 emerging opportunities identified
              </div>
              <div className="text-white text-sm font-light mt-3 flex items-center gap-1.5">
                View Full Report and Ask it any questions
                <span className="transform transition-transform duration-200 group-hover:translate-x-1">
                  →
                </span>
              </div>
            </div>
          </a>
          {/* Mini Profile Card */}
          <div className="bg-gray-50 border border-gray-100 rounded-xl p-5 relative">
            {/* Colored top border */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-pink-500"></div>
            <div className="flex items-start gap-4 mb-5">
              <img src={profile.avatarUrl} alt={`${profile.displayName}'s avatar`} className="w-14 h-14 rounded-full object-cover border-2 border-gray-100 flex-shrink-0" />
              <div className="flex-1">
                <div className="text-base font-light text-gray-900 mb-0.5">
                  {profile.displayName}
                </div>
                <div className="text-sm text-gray-500 mb-1">
                  {profile.title}
                </div>
                <div className="text-xs text-gray-400">
                  {profile.company} • {profile.location}
                </div>
              </div>
              {/* Activity Heatmap in top right */}
              <div className="flex-shrink-0">
                <div className="text-xs text-gray-500 mb-1 text-right">
                  🔥 Last 12 weeks
                </div>
                <div className="flex gap-0.5 justify-end">
                  {heatmapData.slice(0, 6).map((week, weekIndex) => <div key={weekIndex} className="flex flex-col gap-0.5">
                      {week.slice(0, 5).map((level, dayIndex) => <div key={`${weekIndex}-${dayIndex}`} className={`w-2 h-2 rounded-sm ${getLevelClass(level)}`}></div>)}
                    </div>)}
                </div>
              </div>
            </div>
            {/* Specialties */}
            <div className="flex flex-wrap gap-2 mb-4">
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white border border-gray-100 rounded-full text-xs">
                <span className="text-sm">💄</span>
                <span className="font-light text-gray-900">Skincare</span>
                <span className="text-gray-500">87%</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white border border-gray-100 rounded-full text-xs">
                <span className="text-sm">🏆</span>
                <span className="font-light text-gray-900">
                  Competitor Intel
                </span>
                <span className="text-gray-500">78%</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white border border-gray-100 rounded-full text-xs">
                <span className="text-sm">📈</span>
                <span className="font-light text-gray-900">Trend Analysis</span>
                <span className="text-gray-500">92%</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white border border-gray-100 rounded-full text-xs">
                <span className="text-sm">👥</span>
                <span className="font-light text-gray-900">
                  Consumer Insights
                </span>
                <span className="text-gray-500">85%</span>
              </div>
            </div>
            {/* Trust Indicator */}
            <div className="flex items-center justify-center gap-2 pt-4 border-t border-gray-100 text-xs text-gray-500">
              <span className="text-blue-500 font-light flex items-center gap-1">
                ✓ ARIA Verified Profile Activity
              </span>
              •<span>12 months of consistent insights</span>
            </div>
          </div>
        </div>
        {/* Email Footer */}
        <div className="px-8 py-6 bg-gray-50 border-t border-gray-100 text-center text-xs text-gray-400">
          Sent via ARIA Insights Platform • Powered by social intelligence from
          5M+ data points
        </div>
      </div>
    </div>;
};
export default EmailPreview;