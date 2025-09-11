import React from 'react';
const MondayBriefEmail: React.FC = () => {
  return <div className="max-w-4xl mx-auto p-6">
      <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100">
        {/* Email Header */}
        <div className="px-8 py-6 border-b border-gray-100">
          <div className="text-sm text-gray-500 mb-2">
            From: ARIA Analytics via aria@insights.ai
          </div>
          <div className="text-xl font-light text-gray-900 mb-4">
            Sarah's Monday Brief - March 18, 2025, 8:45 AM
          </div>
          <div className="text-sm text-gray-500 mb-2">
            Subject: Your Monday Brief: L'Oréal moved, K-beauty surprised,
            TikTok exploded
          </div>
          <div className="text-sm text-gray-400 italic">
            Preview: Weekend social moves + 2 decisions needed today
          </div>
        </div>
        {/* Email Body */}
        <div className="px-8 py-6">
          {/* Weekend Competitive Moves */}
          <div className="mb-8">
            <h2 className="text-lg font-bold text-gray-900 mb-4">
              Weekend Competitive Moves
            </h2>
            <div className="space-y-6">
              <div className="bg-blue-50 rounded-lg p-5">
                <div className="flex items-start gap-3">
                  <span className="text-xl">💄</span>
                  <div>
                    <h3 className="font-medium text-gray-900">
                      L'Oréal launched "Clean Conscious" line Saturday evening
                    </h3>
                    <ul className="mt-2 space-y-1 text-sm">
                      <li className="text-gray-700">
                        47K mentions in 48 hours (3x your typical launch)
                      </li>
                      <li className="text-gray-700">
                        Targeting your exact Gen Z segment
                      </li>
                      <li className="font-medium text-blue-700 mt-2">
                        Action needed: Accelerate your sustainability campaign?
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="bg-amber-50 rounded-lg p-5">
                <div className="flex items-start gap-3">
                  <span className="text-xl">⚠️</span>
                  <div>
                    <h3 className="font-medium text-gray-900">
                      P&G influencer controversy brewing
                    </h3>
                    <ul className="mt-2 space-y-1 text-sm">
                      <li className="text-gray-700">
                        Partnership with @skinbykenzie under fire (ingredient
                        claims)
                      </li>
                      <li className="text-gray-700">82% negative sentiment</li>
                      <li className="font-medium text-green-700 mt-2">
                        Opportunity: Your clean beauty stance differentiates
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="bg-purple-50 rounded-lg p-5">
                <div className="flex items-start gap-3">
                  <span className="text-xl">🔍</span>
                  <div>
                    <h3 className="font-medium text-gray-900">
                      K-beauty brands dominating TikTok conversations
                    </h3>
                    <ul className="mt-2 space-y-1 text-sm">
                      <li className="text-gray-700">
                        5 of top 10 trending skincare videos feature Korean
                        brands
                      </li>
                      <li className="font-medium text-blue-700 mt-2">
                        Your opportunity: Leverage your Asian expansion plans in
                        social content
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Monday Scanner */}
          <div className="mb-8">
            <h2 className="text-lg font-bold text-gray-900 mb-4">
              Your Monday Scanner (Pre-Run)
            </h2>
            <div className="space-y-6">
              <div className="bg-gray-50 rounded-lg p-5">
                <h3 className="font-medium text-gray-900 mb-3">
                  Trending Now (verified across TikTok, Instagram, YouTube)
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-white rounded-lg p-4 border border-gray-100">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-lg">💇‍♀️</span>
                      <span className="text-green-600 text-xs font-medium">
                        +412%
                      </span>
                    </div>
                    <p className="text-sm font-medium">
                      "Hair glazing" trending
                    </p>
                  </div>
                  <div className="bg-white rounded-lg p-4 border border-gray-100">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-lg">🌱</span>
                      <span className="text-green-600 text-xs font-medium">
                        98K posts
                      </span>
                    </div>
                    <p className="text-sm font-medium">
                      Rice water hair treatments
                    </p>
                  </div>
                  <div className="bg-white rounded-lg p-4 border border-gray-100">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-lg">🧴</span>
                      <span className="text-green-600 text-xs font-medium">
                        Gen Z favorite
                      </span>
                    </div>
                    <p className="text-sm font-medium">
                      Bond-building products: "hair structure repair"
                    </p>
                  </div>
                </div>
                <div className="mt-4 bg-green-50 rounded-lg p-4">
                  <h4 className="font-medium text-gray-900 mb-2">
                    Red Flags Checked:
                  </h4>
                  <ul className="space-y-1 text-sm">
                    <li className="text-gray-700 flex items-start">
                      <span className="text-green-600 mr-2">✓</span>
                      No sulfate controversy resurgence in your category
                    </li>
                    <li className="text-gray-700 flex items-start">
                      <span className="text-green-600 mr-2">✓</span>
                      Your influencer partners clean (no controversies)
                    </li>
                    <li className="text-gray-700 flex items-start">
                      <span className="text-green-600 mr-2">✓</span>
                      Keratin treatment concerns limited to specialty forums
                      only
                    </li>
                  </ul>
                </div>
                <div className="mt-4">
                  <a href="https://aria-chat-insights.lovable.app/" target="_blank" rel="noopener noreferrer" className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-lg text-sm font-medium transition-colors flex items-center justify-center">
                    Ask any question on Aria
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* Footer */}
          <div className="bg-blue-50 rounded-lg p-5 border border-blue-100">
            <div className="flex items-center gap-2">
              <span className="text-lg">⏱️</span>
              <span className="text-gray-800 font-medium">
                This briefing saved you 52 minutes of Monday research
              </span>
            </div>
            <p className="text-sm text-gray-700 mt-1">
              Contributing to 3 of your Q1 goals: Gen Z engagement,
              Sustainability leadership, Social sentiment improvement
            </p>
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
export default MondayBriefEmail;