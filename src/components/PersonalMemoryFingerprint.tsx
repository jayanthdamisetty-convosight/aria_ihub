import React from 'react';
interface MemoryFingerprintProps {
  totalInsights: number;
}
const PersonalMemoryFingerprint: React.FC<MemoryFingerprintProps> = ({
  totalInsights = 242
}) => {
  // Behavioral signatures with personal voice
  const behavioralSignatures = [{
    icon: '🌅',
    title: 'Your Monday Morning Ritual',
    details: ['Like clockwork, you start every Monday scanning the weekend landscape', 'Between 9:00-10:00 AM, without fail', "It's been 46 out of the last 50 Mondays"],
    color: 'bg-blue-50 border-blue-200'
  }, {
    icon: '🌙',
    title: 'Your Friday Wind-Down',
    details: ['You always close the week with competitive intelligence reviews', 'Usually around 4-5 PM, preparing Monday strategies', 'I prep your weekend reading list automatically now'],
    color: 'bg-purple-50 border-purple-200'
  }, {
    icon: '🎨',
    title: 'Visual Thinker Through and Through',
    details: ['You ask for visuals in 78% of our conversations', 'Charts speak louder than spreadsheets for you', "I've learned to lead with the graphs, follow with the data"],
    color: 'bg-green-50 border-green-200'
  }, {
    icon: '🦅',
    title: 'Always Watching the Competition',
    details: ["L'Oréal, P&G, and Estée Lauder are basically on your speed dial", 'You check competitor moves before making any major decision', "I now automatically include them - you don't even have to ask"],
    color: 'bg-yellow-50 border-yellow-200'
  }, {
    icon: '✨',
    title: 'The Trend Archaeologist',
    details: ['You never trust a trend until you see it on at least 3 platforms', 'TikTok for discovery, Instagram for validation, YouTube for depth', 'I cross-reference everything now, just like you taught me'],
    color: 'bg-red-50 border-red-200'
  }];
  // Business context with personal observations
  const businessContext = [{
    icon: '🎯',
    title: "Your Brand's North Star",
    points: ["Unilever's premium skincare is your baby - I know how much it means to you", "Sustainability isn't just a buzzword for you - it's personal", 'That Q2 2025 Asia launch keeps you up at night (in a good way)', 'Clean beauty is your differentiator, and you never compromise on it']
  }, {
    icon: '👁️',
    title: 'The Competitors You Respect (and Fear)',
    points: ["L'Oréal's innovation speed genuinely impresses you", "P&G's scale advantage is your biggest strategic concern", "You admire The Ordinary's transparency but think you can do it better", 'K-beauty brands are your innovation benchmark - you check them weekly']
  }, {
    icon: '💭',
    title: 'The Audience in Your Head',
    points: ["Every decision starts with 'Would a 22-year-old in Mumbai buy this?'", 'You know they care more about ingredients than their parents did', "TikTok isn't just a platform for them - it's their search engine", "5-step routines are the minimum now, and you've accepted that"]
  }, {
    icon: '📋',
    title: 'How You Like Your Intel Served',
    points: ['Three slides. Always three. Not two, not four.', 'Executive summary that your CEO could read in an elevator', 'Real examples from real brands - hypotheticals annoy you', "Every insight needs an 'so what' and a 'now what'"]
  }];
  // Working style profile with personal insights
  const workingStyleProfile = [{
    name: 'Context Sharing',
    score: 75,
    label: 'The Full Picture Person',
    description: 'You paint the whole canvas before asking for help - I appreciate that'
  }, {
    name: 'Analysis Style',
    score: 82,
    label: 'Deep Diver',
    description: 'Surface-level answers frustrate you - you want the why behind the why'
  }, {
    name: 'Visual Processing',
    score: 88,
    label: 'Picture Worth 1000 Words',
    description: "You think in infographics and I've learned to speak your language"
  }, {
    name: 'Decision Speed',
    score: 91,
    label: 'Strategic Pauser',
    description: 'You take time to think, but when you decide, you commit fully'
  }, {
    name: 'Innovation Appetite',
    score: 73,
    label: 'Calculated Risk-Taker',
    description: "You'll try new things, but only with data to back them up"
  }];
  // Personalization strength - how well I know you
  const personalizationScores = [{
    name: 'Understanding You',
    score: 94,
    description: "I rarely have to ask 'what do you mean?' anymore"
  }, {
    name: 'Getting It Right',
    score: 87,
    description: 'Most of my first drafts are keepers now'
  }, {
    name: 'Remembering Context',
    score: 92,
    description: 'I know about the Q2 launch, the budget constraints, all of it'
  }, {
    name: 'Matching Your Style',
    score: 89,
    description: 'Bullet points, visual-first, always with competitive context'
  }];
  // Our journey together
  const learningMilestones = [{
    period: 'Day 3',
    learned: 'You asked about competitors in every single query',
    now: "I include them automatically - saved you typing 'vs L'Oréal' 847 times"
  }, {
    period: 'Week 2',
    learned: "You kept asking for 'more visual' analysis",
    now: 'I lead with charts and your engagement went up 73%'
  }, {
    period: 'Month 1',
    learned: 'Monday mornings are sacred research time',
    now: 'Your weekend trends summary is waiting when you log in'
  }, {
    period: 'Month 3',
    learned: 'You think in quarters but plan in years',
    now: 'I frame everything in both timeframes'
  }, {
    period: 'Month 6',
    learned: 'Sustainability is non-negotiable for your brand',
    now: 'I flag greenwashing risks before you even ask'
  }, {
    period: 'Today',
    learned: 'I can predict your follow-up questions with 89% accuracy',
    now: 'I answer them preemptively'
  }];
  // Things I've noticed about you
  const uniqueObservations = {
    queryStyle: ["You ask 'why' 3x more than 'what'", 'You want implications, not just observations', 'Every trend needs a business case'],
    communicationQuirks: ['You read bullet points first, paragraphs later', 'You love real brand examples', 'Hypotheticals make you suspicious'],
    decisionTriggers: ['ROI calculation is always question #2', 'Gen Z approval is your litmus test', 'Speed beats perfection (but not by much)'],
    stressPoints: ['Greenwashing accusations terrify you', 'Influencer drama keeps you up at night', 'Ingredient controversies = immediate red alert']
  };
  // What I'm ready for
  const anticipatedNeeds = {
    questionsYouWillAsk: ['But how does this compare to last quarter?', "What's L'Oréal doing differently?", 'Will this work on TikTok?', "What's the budget impact?"],
    thingsIvePrepared: ['Weekend competitor moves summary', 'Emerging K-beauty ingredients report', 'Gen Z vocabulary shifts this week', 'Sustainability talking points for the board']
  };
  const getScoreColor = (score: number) => {
    if (score >= 90) return '#10b981';
    if (score >= 70) return '#3b82f6';
    return '#6b7280';
  };
  return <div className="space-y-8 max-w-4xl mx-auto p-6">
      {/* Header */}
      <div className="bg-white rounded-xl border border-gray-200 p-8 text-center">
        <h2 className="text-2xl font-bold mb-3">
          After {totalInsights} conversations, here's what I've learned about
          you
        </h2>
        <p className="text-gray-600">
          This isn't just data - it's how I've learned to work with you,
          specifically you.
        </p>
      </div>
      {/* Section 1: Behavioral Signatures */}
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <h3 className="text-xl font-bold mb-6">
          How You Work (Your Signature Patterns)
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {behavioralSignatures.map((item, index) => <div key={index} className={`rounded-lg p-4 border ${item.color} hover:shadow-md transition-all`}>
              <div className="flex items-start mb-3">
                <span className="text-2xl mr-3">{item.icon}</span>
                <h4 className="font-semibold text-gray-800">{item.title}</h4>
              </div>
              <ul className="space-y-2">
                {item.details.map((detail, detailIndex) => <li key={detailIndex} className="text-sm text-gray-600 flex items-start">
                    <span className="text-blue-500 mr-2 mt-1">•</span>
                    <span>{detail}</span>
                  </li>)}
              </ul>
            </div>)}
        </div>
      </div>
      {/* Section 2: Business Context */}
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <h3 className="text-xl font-bold mb-6">
          Your Business World (As I Understand It)
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {businessContext.map((item, index) => <div key={index} className="bg-gray-50 rounded-lg p-5">
              <div className="flex items-center mb-3">
                <span className="text-2xl mr-2">{item.icon}</span>
                <h4 className="font-semibold text-gray-800">{item.title}</h4>
              </div>
              <ul className="space-y-2">
                {item.points.map((point, pointIndex) => <li key={pointIndex} className="text-sm text-gray-600 flex items-start">
                    <span className="text-green-500 mr-2 mt-1">→</span>
                    <span>{point}</span>
                  </li>)}
              </ul>
            </div>)}
        </div>
      </div>
      {/* Section 3: Working Style Profile */}
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <h3 className="text-xl font-bold mb-6">
          Your Working Style (The Nuances I've Learned)
        </h3>
        <div className="space-y-4">
          {workingStyleProfile.map((item, index) => <div key={index} className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium text-gray-700">
                  {item.name}
                </span>
                <span className="text-sm font-semibold text-blue-600">
                  {item.label}
                </span>
              </div>
              <div className="relative h-2 bg-gray-100 rounded-full overflow-hidden">
                <div className="absolute h-full rounded-full transition-all duration-500" style={{
              width: `${item.score}%`,
              backgroundColor: getScoreColor(item.score)
            }} />
              </div>
              <p className="text-xs text-gray-500 italic">
                "{item.description}"
              </p>
            </div>)}
        </div>
      </div>
      {/* Section 4: Personalization Strength */}
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <h3 className="text-xl font-bold mb-6">How Well I Know You Now</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {personalizationScores.map((item, index) => <div key={index} className="text-center">
              <div className="relative inline-block w-20 h-20 mb-3">
                <svg viewBox="0 0 36 36" className="w-full h-full">
                  <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="#e5e7eb" strokeWidth="3" />
                  <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke={getScoreColor(item.score)} strokeWidth="3" strokeDasharray={`${item.score}, 100`} />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-lg font-bold">{item.score}%</span>
                </div>
              </div>
              <h4 className="font-medium text-sm mb-1">{item.name}</h4>
              <p className="text-xs text-gray-500">{item.description}</p>
            </div>)}
        </div>
      </div>
      {/* Section 5: Learning Journey */}
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <h3 className="text-xl font-bold mb-6">Our Journey Together</h3>
        <div className="space-y-6">
          {learningMilestones.map((milestone, index) => <div key={index} className="relative pl-8">
              {index < learningMilestones.length - 1 && <div className="absolute top-6 left-3 w-0.5 h-full bg-blue-100" />}
              <div className="absolute left-0 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                <div className="w-2 h-2 bg-white rounded-full" />
              </div>
              <div>
                <h4 className="font-semibold text-blue-600 mb-1">
                  {milestone.period}
                </h4>
                <p className="text-sm text-gray-600 mb-1">
                  <span className="font-medium">Noticed:</span>{' '}
                  {milestone.learned}
                </p>
                <p className="text-sm text-gray-600">
                  <span className="font-medium">Now:</span> {milestone.now}
                </p>
              </div>
            </div>)}
        </div>
      </div>
      {/* Section 6: Unique Observations */}
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <h3 className="text-xl font-bold mb-6">
          The Little Things I've Noticed
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold text-gray-700 mb-3">
                How You Ask Questions
              </h4>
              <div className="flex flex-wrap gap-2">
                {uniqueObservations.queryStyle.map((item, index) => <span key={index} className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm">
                    {item}
                  </span>)}
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-gray-700 mb-3">
                Your Communication Style
              </h4>
              <div className="flex flex-wrap gap-2">
                {uniqueObservations.communicationQuirks.map((item, index) => <span key={index} className="bg-purple-50 text-purple-700 px-3 py-1 rounded-full text-sm">
                    {item}
                  </span>)}
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold text-gray-700 mb-3">
                What Drives Your Decisions
              </h4>
              <div className="flex flex-wrap gap-2">
                {uniqueObservations.decisionTriggers.map((item, index) => <span key={index} className="bg-green-50 text-green-700 px-3 py-1 rounded-full text-sm">
                    {item}
                  </span>)}
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-gray-700 mb-3">
                What Keeps You Up at Night
              </h4>
              <div className="flex flex-wrap gap-2">
                {uniqueObservations.stressPoints.map((item, index) => <span key={index} className="bg-red-50 text-red-700 px-3 py-1 rounded-full text-sm">
                    {item}
                  </span>)}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Section 7: Anticipated Needs */}
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <h3 className="text-xl font-bold mb-6">Always One Step Ahead</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-blue-50 rounded-lg p-5">
            <h4 className="font-semibold text-gray-800 mb-3">
              Questions I Know Are Coming
            </h4>
            <ul className="space-y-2">
              {anticipatedNeeds.questionsYouWillAsk.map((item, index) => <li key={index} className="text-sm text-gray-600">
                  <span className="text-blue-500 mr-2">?</span> "{item}"
                </li>)}
            </ul>
          </div>
          <div className="bg-green-50 rounded-lg p-5">
            <h4 className="font-semibold text-gray-800 mb-3">
              Already Working On
            </h4>
            <ul className="space-y-2">
              {anticipatedNeeds.thingsIvePrepared.map((item, index) => <li key={index} className="text-sm text-gray-600">
                  <span className="text-green-500 mr-2">✓</span> {item}
                </li>)}
            </ul>
          </div>
        </div>
      </div>
      {/* Footer */}
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <div className="text-center mb-6">
          <p className="text-gray-500 text-sm">
            This understanding deepens with every conversation. Last refined 2
            hours ago.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          <div className="text-center">
            <p className="text-2xl font-bold text-blue-600">1,247</p>
            <p className="text-xs text-gray-500">correct predictions</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-green-600">94%</p>
            <p className="text-xs text-gray-500">accuracy rate</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-purple-600">12</p>
            <p className="text-xs text-gray-500">months together</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-gray-700">∞</p>
            <p className="text-xs text-gray-500">still learning</p>
          </div>
        </div>
        <div className="flex justify-center gap-3">
          <button className="px-4 py-2 bg-blue-50 text-blue-700 rounded-lg text-sm hover:bg-blue-100 transition-colors">
            Refine My Preferences
          </button>
          <button className="px-4 py-2 bg-gray-50 text-gray-700 rounded-lg text-sm hover:bg-gray-100 transition-colors">
            Download My Profile
          </button>
        </div>
      </div>
    </div>;
};
export default PersonalMemoryFingerprint;