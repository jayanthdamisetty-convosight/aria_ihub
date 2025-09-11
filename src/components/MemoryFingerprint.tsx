import React, { memo } from 'react';
import { UserProfile } from '../utils/mockData';
interface MemoryFingerprintProps {
  profile: UserProfile;
}
const MemoryFingerprint: React.FC<MemoryFingerprintProps> = ({
  profile
}) => {
  // Personalization strength scores
  const personalizationScores = [{
    name: 'Query Understanding',
    score: 94,
    description: 'I rarely need clarification anymore'
  }, {
    name: 'First Draft Accuracy',
    score: 87,
    description: 'Plans approved without changes'
  }, {
    name: 'Context Retention',
    score: 92,
    description: 'I remember your ongoing projects'
  }, {
    name: 'Style Match',
    score: 89,
    description: 'Responses in your preferred format'
  }];
  // Business context memory
  const businessContext = [{
    icon: '📌',
    title: 'Brand Context',
    points: ["Primary focus: Unilever's premium skincare portfolio", "Always benchmarks against L'Oréal, P&G, and Estée Lauder", 'Sustainability and clean beauty are key differentiators', 'Launching in Asian markets Q2 2025']
  }, {
    icon: '🎯',
    title: 'Competitor Tracking',
    points: ['The Ordinary for ingredient transparency trends', 'K-beauty brands for innovation patterns', 'Glossier for D2C marketing tactics', 'CeraVe for derm-recommended positioning']
  }, {
    icon: '👥',
    title: 'Target Audience',
    points: ['Gen Z (18-24) in Tier 1 cities', 'Values-driven consumers prioritizing sustainability', 'Skincare enthusiasts with 5+ step routines', 'TikTok-first content consumers']
  }, {
    icon: '📊',
    title: 'Reporting Preferences',
    points: ['3-slide executive summaries with visual data', 'Competitor benchmarking always included', 'Actionable recommendations, not just insights', 'Links to quarterly OKRs and KPIs']
  }];
  // Behavioral signatures
  const behavioralSignatures = [{
    icon: '🔍',
    title: 'The Monday Scanner',
    details: ['Starts every week with broad trend queries', 'Timing: Every Monday, 9:00-10:00 AM', 'Pattern strength: 92% consistent'],
    color: 'bg-blue-50 border-blue-200'
  }, {
    icon: '🎨',
    title: 'The Visual First',
    details: ['78% of queries request visual content analysis', 'Prefers infographics over text reports', 'Pattern strength: Strong and increasing'],
    color: 'bg-purple-50 border-purple-200'
  }, {
    icon: '🦅',
    title: 'The Competitor Hawk',
    details: ['Includes competitor analysis in 82% of plans', 'Weekly deep dives on top 3 competitors', 'Pattern strength: Core behavior'],
    color: 'bg-yellow-50 border-yellow-200'
  }, {
    icon: '⚡',
    title: 'The Quick Refiner',
    details: ['Average 1.8 iterations to perfect plan', 'Platform average: 3.2 iterations', 'Improvement: 44% more efficient'],
    color: 'bg-green-50 border-green-200'
  }, {
    icon: '📈',
    title: 'The Trend Validator',
    details: ['Cross-references TikTok trends with Instagram', 'Validates with 3+ platforms before decisions', 'Pattern strength: Emerging pattern'],
    color: 'bg-red-50 border-red-200'
  }];
  // Working style profile
  const workingStyleProfile = [{
    name: 'Brief Style',
    score: 75,
    label: 'Detail-Oriented',
    description: 'You provide comprehensive context upfront'
  }, {
    name: 'Analysis Depth',
    score: 82,
    label: 'Deep Diver',
    description: 'You want thorough analysis with citations'
  }, {
    name: 'Visual Preference',
    score: 88,
    label: 'Visual Storyteller',
    description: 'Charts and visuals over raw data'
  }, {
    name: 'Iteration Speed',
    score: 22,
    label: 'Efficient',
    description: 'You get it right with minimal revisions'
  }, {
    name: 'Strategic Focus',
    score: 91,
    label: 'Big Picture',
    description: 'You connect insights to business strategy'
  }];
  // Learning milestones
  const learningMilestones = [{
    period: 'Week 1',
    learned: 'You always want competitor context',
    now: 'Auto-include competitive benchmarking'
  }, {
    period: 'Week 2',
    learned: 'Visual content drives your decisions',
    now: 'Prioritize image/video analysis'
  }, {
    period: 'Month 1',
    learned: 'Monday morning research pattern',
    now: 'Pre-load weekend trend summaries'
  }, {
    period: 'Month 3',
    learned: 'Sustainability is core to your brand',
    now: 'Highlight eco-conscious trends'
  }, {
    period: 'Month 6',
    learned: 'You think in quarterly cycles',
    now: 'Align insights to Q1/Q2/Q3/Q4 goals'
  }, {
    period: 'Month 12',
    learned: 'Your complete decision framework',
    now: 'Anticipate your next question'
  }];
  // Unique preferences
  const uniquePreferences = {
    queryPatterns: ['Prefers "why" over "what" questions', 'Asks for implications, not just data', 'Links social trends to business impact'],
    communicationStyle: ['Bullet points for quick scans', 'Executive summary first, details second', 'Real brand examples, not hypotheticals'],
    decisionFactors: ['ROI and budget impact always considered', 'Gen Z authenticity as north star', 'Speed to market is critical'],
    redFlags: ['Greenwashing accusations', 'Influencer controversies', 'Ingredient safety concerns']
  };
  // Predictive assistance
  const predictiveAssistance = {
    willAskAbout: ['How this compares to last quarter', "What L'Oréal is doing differently", 'The TikTok virality potential', 'Budget implications for Q2'],
    prepared: ['Competitor moves from the weekend', 'Trending ingredients in K-beauty', 'Emerging Gen Z vocabulary shifts', 'Sustainability report angles']
  };
  // Helper function to determine color based on score
  const getScoreColor = (score: number) => {
    if (score >= 90) return 'text-green-600';
    if (score >= 70) return 'text-blue-600';
    return 'text-gray-600';
  };
  const getScoreRingColor = (score: number) => {
    if (score >= 90) return '#10b981'; // green
    if (score >= 70) return '#3b82f6'; // blue
    return '#6b7280'; // gray
  };
  return <div className="space-y-8">
      {/* Header Section */}
      <div className="bg-white rounded-xl border border-[#f2f2f7] p-6 shadow-sm text-center">
        <h2 className="text-2xl font-bold mb-2">
          Your ARIA Memory Fingerprint
        </h2>
        <p className="text-[#6e6e73]">
          After {profile.stats.totalInsights} insights together, here's how I've
          learned to work with you
        </p>
      </div>

      {/* Section 1: Personalization Strength Score */}
      <div className="bg-white rounded-xl border border-[#f2f2f7] p-6 shadow-sm">
        <h3 className="text-xl font-bold mb-4">
          Personalization Strength Score
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {personalizationScores.map((item, index) => <div key={index} className="flex flex-col items-center text-center">
              <div className="relative inline-block w-24 h-24 mb-3">
                <svg viewBox="0 0 36 36" className="w-full h-full">
                  <path d="M18 2.0845
                      a 15.9155 15.9155 0 0 1 0 31.831
                      a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="#eee" strokeWidth="3" />
                  <path d="M18 2.0845
                      a 15.9155 15.9155 0 0 1 0 31.831
                      a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke={getScoreRingColor(item.score)} strokeWidth="3" strokeDasharray={`${item.score}, 100`} />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className={`text-lg font-bold ${getScoreColor(item.score)}`}>
                    {item.score}%
                  </span>
                </div>
              </div>
              <h4 className="font-medium mb-1">{item.name}</h4>
              <p className="text-sm text-[#6e6e73]">"{item.description}"</p>
            </div>)}
        </div>
      </div>

      {/* Section 2: Business Context Memory */}
      <div className="bg-white rounded-xl border border-[#f2f2f7] p-6 shadow-sm">
        <h3 className="text-xl font-bold mb-4">Business Context Memory</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {businessContext.map((item, index) => <div key={index} className="bg-[#fbfbfd] rounded-lg p-4">
              <div className="flex items-center mb-3">
                <span className="text-2xl mr-2">{item.icon}</span>
                <h4 className="font-medium">{item.title}</h4>
              </div>
              <ul className="space-y-2 text-sm">
                {item.points.map((point, pointIndex) => <li key={pointIndex} className="text-[#6e6e73] flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    <span>{point}</span>
                  </li>)}
              </ul>
            </div>)}
        </div>
      </div>

      {/* Section 3: Behavioral Signatures */}
      <div className="bg-white rounded-xl border border-[#f2f2f7] p-6 shadow-sm">
        <h3 className="text-xl font-bold mb-4">Behavioral Signatures</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {behavioralSignatures.map((item, index) => <div key={index} className={`rounded-lg p-4 border ${item.color} transition-transform duration-300 hover:-translate-y-1`}>
              <div className="flex items-center mb-3">
                <span className="text-2xl mr-2">{item.icon}</span>
                <h4 className="font-medium">{item.title}</h4>
              </div>
              <ul className="space-y-2 text-sm">
                {item.details.map((detail, detailIndex) => <li key={detailIndex} className="text-[#6e6e73] flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    <span>{detail}</span>
                  </li>)}
              </ul>
            </div>)}
        </div>
      </div>

      {/* Section 4: Working Style Profile */}
      <div className="bg-white rounded-xl border border-[#f2f2f7] p-6 shadow-sm">
        <h3 className="text-xl font-bold mb-4">Working Style Profile</h3>
        <div className="space-y-4">
          {workingStyleProfile.map((item, index) => <div key={index} className="space-y-1">
              <div className="flex justify-between text-sm">
                <span>{item.name}</span>
                <span className={`${getScoreColor(item.score)} font-medium`}>
                  {item.score}% {item.label}
                </span>
              </div>
              <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                <div className={`h-full ${item.score >= 90 ? 'bg-green-500' : item.score >= 70 ? 'bg-blue-500' : 'bg-gray-500'}`} style={{
              width: `${item.score}%`
            }}></div>
              </div>
              <p className="text-xs text-[#6e6e73]">"{item.description}"</p>
            </div>)}
        </div>
      </div>

      {/* Section 5: Learning Milestones */}
      <div className="bg-white rounded-xl border border-[#f2f2f7] p-6 shadow-sm">
        <h3 className="text-xl font-bold mb-4">Learning Milestones</h3>
        <div className="space-y-6">
          {learningMilestones.map((milestone, index) => <div key={index} className="relative">
              {index < learningMilestones.length - 1 && <div className="absolute top-4 left-4 w-0.5 h-full bg-blue-100"></div>}
              <div className="flex">
                <div className="relative z-10">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="font-medium text-blue-600">
                    {milestone.period} 📍
                  </h4>
                  <p className="mt-1 text-[#6e6e73]">
                    <span className="font-medium">Learned:</span>{' '}
                    {milestone.learned}
                  </p>
                  <p className="mt-1 text-[#6e6e73]">
                    <span className="font-medium">💡 Now I:</span>{' '}
                    {milestone.now}
                  </p>
                </div>
              </div>
            </div>)}
        </div>
      </div>

      {/* Section 6: Unique Preferences */}
      <div className="bg-white rounded-xl border border-[#f2f2f7] p-6 shadow-sm">
        <h3 className="text-xl font-bold mb-4">Unique Preferences</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div>
              <h4 className="font-medium mb-2">Query Patterns:</h4>
              <div className="flex flex-wrap gap-2">
                {uniquePreferences.queryPatterns.map((item, index) => <span key={index} className="bg-blue-50 text-blue-700 rounded-full px-3 py-1 text-sm">
                    {item}
                  </span>)}
              </div>
            </div>
            <div>
              <h4 className="font-medium mb-2">Communication Style:</h4>
              <div className="flex flex-wrap gap-2">
                {uniquePreferences.communicationStyle.map((item, index) => <span key={index} className="bg-purple-50 text-purple-700 rounded-full px-3 py-1 text-sm">
                    {item}
                  </span>)}
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <div>
              <h4 className="font-medium mb-2">Decision Factors:</h4>
              <div className="flex flex-wrap gap-2">
                {uniquePreferences.decisionFactors.map((item, index) => <span key={index} className="bg-green-50 text-green-700 rounded-full px-3 py-1 text-sm">
                    {item}
                  </span>)}
              </div>
            </div>
            <div>
              <h4 className="font-medium mb-2">Red Flags You Watch:</h4>
              <div className="flex flex-wrap gap-2">
                {uniquePreferences.redFlags.map((item, index) => <span key={index} className="bg-red-50 text-red-700 rounded-full px-3 py-1 text-sm">
                    {item}
                  </span>)}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section 7: Predictive Assistance */}
      <div className="bg-white rounded-xl border border-[#f2f2f7] p-6 shadow-sm">
        <h3 className="text-xl font-bold mb-4">Predictive Assistance</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-[#fbfbfd] rounded-lg p-4">
            <h4 className="font-medium mb-3">I Know You'll Ask About:</h4>
            <ul className="space-y-2">
              {predictiveAssistance.willAskAbout.map((item, index) => <li key={index} className="text-[#6e6e73] flex items-start">
                  <span className="text-blue-500 mr-2">•</span> {item}
                </li>)}
            </ul>
          </div>
          <div className="bg-[#fbfbfd] rounded-lg p-4">
            <h4 className="font-medium mb-3">I've Prepared:</h4>
            <ul className="space-y-2">
              {predictiveAssistance.prepared.map((item, index) => <li key={index} className="text-[#6e6e73] flex items-start">
                  <span className="text-green-500 mr-2">•</span> {item}
                </li>)}
            </ul>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <div className="bg-white rounded-xl border border-[#f2f2f7] p-6 shadow-sm">
        <div className="text-center mb-4">
          <p className="text-[#6e6e73]">
            This fingerprint evolves with every interaction. Last updated: 2
            hours ago
          </p>
        </div>
        <div className="flex justify-center gap-6 mb-6">
          <div className="text-center">
            <p className="text-xl font-bold">1,247</p>
            <p className="text-sm text-[#6e6e73]">successful predictions</p>
          </div>
          <div className="text-center">
            <p className="text-xl font-bold">94%</p>
            <p className="text-sm text-[#6e6e73]">preference accuracy</p>
          </div>
          <div className="text-center">
            <p className="text-xl font-bold">12</p>
            <p className="text-sm text-[#6e6e73]">month relationship</p>
          </div>
          <div className="text-center">
            <p className="text-xl font-bold">Trusted Partner</p>
            <p className="text-sm text-[#6e6e73]">Level</p>
          </div>
        </div>
        <div className="flex justify-center gap-3">
          <button className="px-4 py-2 bg-blue-50 text-blue-700 rounded-md text-sm hover:bg-blue-100 transition-colors">
            Adjust Preferences
          </button>
          <button className="px-4 py-2 bg-gray-50 text-gray-700 rounded-md text-sm hover:bg-gray-100 transition-colors">
            Reset Category Memory
          </button>
          <button className="px-4 py-2 bg-gray-50 text-gray-700 rounded-md text-sm hover:bg-gray-100 transition-colors">
            Export My Profile
          </button>
        </div>
      </div>
    </div>;
};
export default MemoryFingerprint;