import React, { useState } from 'react';
import { LeaderboardUser, AgentAdoption, LeaderboardStats, mockGlobalLeaderboard, GlobalLeaderboardUser } from '../utils/mockData';
interface LeaderboardTabProps {
  stats: LeaderboardStats;
  users: LeaderboardUser[];
  agentAdoption: AgentAdoption[];
}
const LeaderboardTab: React.FC<LeaderboardTabProps> = ({
  stats,
  users,
  agentAdoption
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [timePeriod, setTimePeriod] = useState('month');
  // Additional data for users (mock data for hours saved and goal alignment)
  const getUserMetrics = (user: LeaderboardUser) => {
    // Calculate hours saved based on queries (approx 2.5 hours per query)
    const hoursSaved = Math.round(user.queries * 2.5);
    // Mock data for goal alignment percentage and goals on track
    let goalAlignmentPercent = 0;
    let goalsOnTrack = 0;
    let totalGoals = 0;
    // Generate consistent mock data based on user rank
    switch (user.rank) {
      case 1:
        // Sarah Chen
        goalAlignmentPercent = 87;
        goalsOnTrack = 4;
        totalGoals = 5;
        break;
      case 2:
        // Michael Kumar
        goalAlignmentPercent = 92;
        goalsOnTrack = 5;
        totalGoals = 5;
        break;
      case 3:
        // Amanda Park
        goalAlignmentPercent = 78;
        goalsOnTrack = 3;
        totalGoals = 4;
        break;
      default:
        // Generate somewhat random but consistent data for other users
        goalAlignmentPercent = 65 + user.queries % 30;
        totalGoals = 3 + user.rank % 3;
        goalsOnTrack = Math.max(1, totalGoals - user.rank % 3);
    }
    return {
      hoursSaved,
      goalAlignmentPercent,
      goalsOnTrack,
      totalGoals
    };
  };
  // Generate a text-based progress bar
  const getProgressBar = (completed: number, total: number) => {
    const filledBlocks = Math.round(completed / total * 10);
    const emptyBlocks = 10 - filledBlocks;
    return '█'.repeat(filledBlocks) + '░'.repeat(emptyBlocks);
  };
  // Additional users to supplement the mockData
  const additionalUsers: LeaderboardUser[] = [{
    rank: 8,
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80',
    initials: 'DM',
    name: 'David Martinez',
    title: 'Content Strategist',
    badges: ['power', 'rising'],
    queries: 521,
    activeDays: {
      count: 19,
      total: 30,
      percentage: 63
    },
    streak: 9,
    activityHeatmap: [2, 1, 3, 2, 1, 0, 0, 1, 2, 3, 2, 1, 0, 0, 3, 2, 1, 2, 3, 0, 0, 2, 3, 2, 1, 2, 0, 1]
  }, {
    rank: 9,
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80',
    initials: 'AS',
    name: 'Alicia Smith',
    title: 'Social Media Manager',
    badges: ['consistent'],
    queries: 489,
    activeDays: {
      count: 18,
      total: 30,
      percentage: 60
    },
    streak: 8,
    activityHeatmap: [1, 2, 1, 2, 2, 0, 0, 2, 1, 2, 1, 0, 0, 1, 2, 1, 2, 1, 2, 0, 1, 1, 2, 1, 2, 1, 0, 0]
  }, {
    rank: 10,
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80',
    initials: 'JR',
    name: 'Jack Rodriguez',
    title: 'Digital Marketing Lead',
    badges: ['power'],
    queries: 456,
    activeDays: {
      count: 17,
      total: 30,
      percentage: 57
    },
    streak: 6,
    activityHeatmap: [3, 2, 1, 0, 0, 1, 2, 3, 2, 1, 0, 0, 2, 3, 2, 1, 0, 1, 2, 3, 0, 1, 2, 1, 0, 0, 1, 2]
  }, {
    rank: 11,
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80',
    initials: 'KT',
    name: 'Kelly Thompson',
    title: 'PR Specialist',
    badges: ['rising'],
    queries: 423,
    activeDays: {
      count: 16,
      total: 30,
      percentage: 53
    },
    streak: 5,
    activityHeatmap: [1, 2, 1, 0, 0, 1, 0, 2, 1, 2, 0, 0, 1, 2, 1, 0, 0, 1, 2, 1, 0, 2, 1, 2, 0, 1, 0, 0]
  }, {
    rank: 12,
    avatar: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80',
    initials: 'BW',
    name: 'Brian Wilson',
    title: 'Market Research Analyst',
    badges: ['consistent'],
    queries: 402,
    activeDays: {
      count: 15,
      total: 30,
      percentage: 50
    },
    streak: 4,
    activityHeatmap: [1, 1, 0, 1, 1, 0, 0, 1, 1, 0, 1, 1, 0, 0, 1, 1, 0, 1, 1, 0, 0, 1, 1, 0, 1, 1, 0, 0]
  }];
  // Update existing users to have real avatar URLs
  const updatedUsers = users.map(user => {
    if (!user.avatar) {
      return {
        ...user,
        avatar: user.rank === 2 ? 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80' : user.rank === 3 ? 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80' : user.rank === 4 ? 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80' : user.rank === 5 ? 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80' : user.rank === 6 ? 'https://images.unsplash.com/photo-1552058544-f2b08422138a?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80' : 'https://images.unsplash.com/photo-1554151228-14d9def656e4?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80'
      };
    }
    return user;
  });
  // Combine original users with additional users
  const allUsers = [...updatedUsers, ...additionalUsers];
  // Filter users based on selected category
  const filteredUsers = selectedCategory === 'all' 
    ? allUsers 
    : allUsers.filter(user => user.badges.includes(selectedCategory as 'power' | 'consistent' | 'rising'));
  // Badge colors
  const badgeColors = {
    power: 'bg-amber-50 text-amber-700 border-amber-200',
    consistent: 'bg-blue-50 text-blue-700 border-blue-200',
    rising: 'bg-emerald-50 text-emerald-700 border-emerald-200'
  };
  // Badge icons
  const badgeIcons = {
    power: '⚡',
    consistent: '📊',
    rising: '🚀'
  };
  return <div className="space-y-10">
      {/* Time Period Selector */}
      <div className="flex justify-center">
        <div className="inline-flex rounded-full bg-gray-100 p-1">
          {['today', 'week', 'month', 'quarter'].map(period => <button key={period} className={`px-5 py-2 rounded-full text-sm font-light transition-all
                ${timePeriod === period ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-500 hover:text-gray-700'}`} onClick={() => setTimePeriod(period)}>
              {period.charAt(0).toUpperCase() + period.slice(1)}
            </button>)}
        </div>
      </div>

      {/* Stats Grid */}
      <div className="flex justify-center">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl">
          <StatCard label="Active Users" value={247} change={`↑ ${stats.activeUsers.change}% from last month`} positive={true} />
          <StatCard label="Total Queries" value={18432} change={`↑ ${stats.totalQueries.change}% from last month`} positive={true} />
          <StatCard label="Avg Queries per user" value={75} change={`↑ ${stats.avgPerUser.change}% from last month`} positive={true} />
          <StatCard label="Total hours saved" value={46080} change={`↑ ${stats.totalQueries.change}% from last month`} positive={true} />
        </div>
      </div>

      {/* Top Users Leaderboard */}
      <div className="bg-white rounded-xl p-8">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 mb-8">
          <h2 className="text-xl font-light">Top Users This Month</h2>
          <div className="flex items-center gap-3">
            <label className="text-sm text-gray-600">Filter by category:</label>
            <select 
              value={selectedCategory} 
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-gray-300 focus:border-transparent"
            >
              <option value="all">All Users</option>
              <option value="power">⚡ Power Users</option>
              <option value="consistent">📊 Most Consistent</option>
              <option value="rising">🚀 Rising Stars</option>
            </select>
          </div>
        </div>

        {/* Leaderboard Table */}
        <div className="overflow-x-auto">
          <table className="min-w-full">
            {/* Header */}
            <thead>
              <tr className="border-b border-gray-100">
                <th className="py-4 px-3 text-left text-xs font-light uppercase tracking-wider text-gray-500">
                  Rank
                </th>
                <th className="py-4 px-3 text-left text-xs font-light uppercase tracking-wider text-gray-500"></th>
                <th className="py-4 px-3 text-left text-xs font-light uppercase tracking-wider text-gray-500">
                  User
                </th>
                <th className="py-4 px-3 text-left text-xs font-light uppercase tracking-wider text-gray-500">
                  Category
                </th>
                <th className="py-4 px-3 text-left text-xs font-light uppercase tracking-wider text-gray-500">
                  Metrics
                </th>
              </tr>
            </thead>

            {/* Rows */}
            <tbody className="divide-y divide-gray-100">
              {filteredUsers.length > 0 ? filteredUsers.map(user => {
              const metrics = getUserMetrics(user);
              return <tr key={user.rank} className="hover:bg-gray-50 transition-colors">
                      <td className="py-4 px-3">
                        <span className={`font-medium ${user.rank === 1 ? 'text-amber-500' : user.rank === 2 ? 'text-gray-400' : user.rank === 3 ? 'text-amber-700' : 'text-gray-900'}`}>
                          #{user.rank}
                        </span>
                      </td>
                      <td className="py-4 px-3">
                        <img src={user.avatar} alt={user.name} className="w-9 h-9 rounded-full object-cover" />
                      </td>
                      <td className="py-4 px-3">
                        <div className="font-medium text-sm">{user.name}</div>
                        <div className="text-gray-500 text-xs">
                          {user.title}
                        </div>
                      </td>
                      <td className="py-4 px-3">
                        <div className="flex flex-wrap gap-1">
                          {user.badges.map(badge => <span key={badge} className={`inline-flex items-center px-2 py-1 rounded-full text-xs border ${badgeColors[badge]}`}>
                              {badgeIcons[badge]}{' '}
                              {badge.charAt(0).toUpperCase() + badge.slice(1)}
                            </span>)}
                        </div>
                      </td>
                      <td className="py-4 px-3">
                        <div className="space-y-3">
                          {/* Queries Metric */}
                          <div className="flex items-center gap-2">
                            <span className="text-lg" role="img" aria-label="Queries">
                              🔄
                            </span>
                            <div className="flex-grow">
                              <div className="flex items-center gap-1">
                                <span className="text-sm font-medium">
                                  {user.queries.toLocaleString()}
                                </span>
                                <span className="text-xs text-gray-500">
                                  Queries
                                </span>
                              </div>
                            </div>
                          </div>
                          {/* Hours Saved Metric */}
                          <div className="flex items-center gap-2">
                            <span className="text-lg" role="img" aria-label="Hours Saved">
                              ⏱️
                            </span>
                            <div className="flex-grow">
                              <div className="flex items-center gap-1">
                                <span className="text-sm font-medium">
                                  {metrics.hoursSaved.toLocaleString()}
                                </span>
                                <span className="text-xs text-gray-500">
                                  Hours Saved
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </td>
                    </tr>;
            }) : <tr>
                  <td colSpan={5} className="py-8 text-center text-gray-500">
                    No users match the selected filter.
                  </td>
                </tr>}
            </tbody>
          </table>
        </div>
      </div>

      {/* Agent Adoption */}
      <div className="bg-white rounded-xl p-8">
        <h2 className="text-xl font-light mb-8">Agent Usage Rate</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {agentAdoption.map(agent => {
          // Determine color based on adoption percentage
          let barColor = '';
          if (agent.usagePercentage >= 70) {
            barColor = 'bg-green-500'; // High adoption - green
          } else if (agent.usagePercentage >= 40) {
            barColor = 'bg-amber-500'; // Medium adoption - orange/amber
          } else {
            barColor = 'bg-red-500'; // Low adoption - red
          }
          return <div key={agent.name} className="flex justify-between items-center">
                <span className="text-sm text-gray-700">{agent.name}</span>
                <div className="flex items-center gap-3">
                  <div className="w-24 h-1 bg-gray-100 rounded-full overflow-hidden">
                    <div className={`h-full ${barColor} rounded-full`} style={{
                  width: `${agent.usagePercentage}%`
                }} />
                  </div>
                  <span className="text-sm text-gray-500 font-light min-w-[36px] text-right">
                    {agent.usagePercentage}%
                  </span>
                </div>
              </div>;
        })}
        </div>
      </div>

      {/* Horizontal Separator */}
      <div className="border-t border-gray-200 my-12"></div>

      {/* Global Top 3 Leaderboard */}
      <div className="bg-gradient-to-br from-green-50 via-white to-emerald-50 rounded-xl p-8 relative overflow-hidden border border-green-100">
        {/* Subtle green gradient background elements */}
        <div className="absolute inset-0 opacity-3">
          <div className="absolute top-10 left-10 w-32 h-32 bg-green-200 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-24 h-24 bg-emerald-200 rounded-full blur-2xl"></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-green-100 rounded-full blur-xl"></div>
        </div>
        
        <div className="relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-light text-gray-900 mb-2">
              Global Top Performers
            </h2>
            <p className="text-gray-500 font-light">
              Join the elite. Top performers receive exclusive recognition from Convotrack Team.
            </p>
          </div>

          {/* Olympic Podium Layout with Apple-inspired minimalism */}
          <div className="flex justify-center items-end gap-8 max-w-5xl mx-auto">
            {/* 2nd Place - Left Podium */}
            <div className="flex flex-col items-center p-4 rounded-xl border-2 border-gray-200 bg-white/50 backdrop-blur-sm">
              {/* Podium Base */}
              <div className="w-32 h-8 bg-gradient-to-r from-gray-200 to-gray-300 rounded-t-lg mb-4 relative border border-gray-300">
                <div className="absolute inset-0 bg-gradient-to-r from-gray-100 to-gray-200 rounded-t-lg opacity-50"></div>
                <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gray-400 rounded-full"></div>
              </div>
              
              {/* Avatar */}
              <div className="relative mb-4">
                <div className="w-20 h-20 rounded-full overflow-hidden border-3 border-gray-400 bg-white shadow-lg">
                  <img 
                    src={mockGlobalLeaderboard[1].avatar} 
                    alt={mockGlobalLeaderboard[1].name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -top-1 -right-1 w-7 h-7 bg-gray-500 rounded-full flex items-center justify-center shadow-md border-2 border-white">
                  <span className="text-xs font-semibold text-white">2</span>
                </div>
              </div>
              
              {/* User Info */}
              <div className="text-center">
                <h3 className="font-medium text-gray-900 text-sm">{mockGlobalLeaderboard[1].name}</h3>
                <p className="text-xs text-gray-500">{mockGlobalLeaderboard[1].title}</p>
                <p className="text-xs text-gray-400">{mockGlobalLeaderboard[1].company}</p>
                <div className="mt-2 space-y-1">
                  <div className="text-xs text-gray-600">
                    {mockGlobalLeaderboard[1].queries.toLocaleString()} queries
                  </div>
                  <div className="text-xs text-gray-600">
                    {mockGlobalLeaderboard[1].hoursSaved.toLocaleString()} hours saved
                  </div>
                </div>
              </div>
            </div>

            {/* 1st Place - Center Podium (Elevated) */}
            <div className="flex flex-col items-center p-6 rounded-xl border-3 border-amber-200 bg-white/60 backdrop-blur-sm shadow-lg">
              {/* Elevated Podium Base */}
              <div className="w-40 h-12 bg-gradient-to-r from-amber-200 to-amber-300 rounded-t-lg mb-4 relative shadow-lg border border-amber-300">
                <div className="absolute inset-0 bg-gradient-to-r from-amber-100 to-amber-200 rounded-t-lg opacity-60"></div>
                <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-amber-500 rounded-full shadow-sm"></div>
                <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-amber-600 rounded-full"></div>
              </div>
              
              {/* Avatar */}
              <div className="relative mb-4">
                <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-amber-400 bg-white shadow-xl">
                  <img 
                    src={mockGlobalLeaderboard[0].avatar} 
                    alt={mockGlobalLeaderboard[0].name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -top-1 -right-1 w-8 h-8 bg-amber-500 rounded-full flex items-center justify-center shadow-lg border-2 border-white">
                  <span className="text-sm font-bold text-white">1</span>
                </div>
              </div>
              
              {/* User Info */}
              <div className="text-center">
                <h3 className="font-medium text-gray-900">{mockGlobalLeaderboard[0].name}</h3>
                <p className="text-sm text-gray-500">{mockGlobalLeaderboard[0].title}</p>
                <p className="text-sm text-gray-400">{mockGlobalLeaderboard[0].company}</p>
                <div className="mt-2 space-y-1">
                  <div className="text-sm text-gray-600">
                    {mockGlobalLeaderboard[0].queries.toLocaleString()} queries
                  </div>
                  <div className="text-sm text-gray-600">
                    {mockGlobalLeaderboard[0].hoursSaved.toLocaleString()} hours saved
                  </div>
                </div>
              </div>
            </div>

            {/* 3rd Place - Right Podium */}
            <div className="flex flex-col items-center p-4 rounded-xl border-2 border-amber-200 bg-white/50 backdrop-blur-sm">
              {/* Podium Base */}
              <div className="w-32 h-6 bg-gradient-to-r from-amber-300 to-amber-400 rounded-t-lg mb-4 relative border border-amber-400">
                <div className="absolute inset-0 bg-gradient-to-r from-amber-200 to-amber-300 rounded-t-lg opacity-50"></div>
                <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-amber-600 rounded-full"></div>
              </div>
              
              {/* Avatar */}
              <div className="relative mb-4">
                <div className="w-20 h-20 rounded-full overflow-hidden border-3 border-amber-500 bg-white shadow-lg">
                  <img 
                    src={mockGlobalLeaderboard[2].avatar} 
                    alt={mockGlobalLeaderboard[2].name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -top-1 -right-1 w-7 h-7 bg-amber-600 rounded-full flex items-center justify-center shadow-md border-2 border-white">
                  <span className="text-xs font-semibold text-white">3</span>
                </div>
              </div>
              
              {/* User Info */}
              <div className="text-center">
                <h3 className="font-medium text-gray-900 text-sm">{mockGlobalLeaderboard[2].name}</h3>
                <p className="text-xs text-gray-500">{mockGlobalLeaderboard[2].title}</p>
                <p className="text-xs text-gray-400">{mockGlobalLeaderboard[2].company}</p>
                <div className="mt-2 space-y-1">
                  <div className="text-xs text-gray-600">
                    {mockGlobalLeaderboard[2].queries.toLocaleString()} queries
                  </div>
                  <div className="text-xs text-gray-600">
                    {mockGlobalLeaderboard[2].hoursSaved.toLocaleString()} hours saved
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Recognition Message */}
          <div className="text-center mt-12 pt-6 border-t border-gray-200">
            <p className="text-sm text-gray-500 font-light">
              🎁 Exclusive recognition and prizes delivered by Convotrack Team
            </p>
          </div>
        </div>
      </div>
    </div>;
};
interface StatCardProps {
  label: string;
  value: number | string;
  change: string;
  positive: boolean;
}
const StatCard: React.FC<StatCardProps> = ({
  label,
  value,
  change,
  positive
}) => {
  return <div className="bg-white rounded-xl p-6">
      <div className="text-xs font-light uppercase tracking-wider text-gray-500 mb-2">
        {label}
      </div>
      <div className="text-3xl font-light mb-3">{value}</div>
      <div className={`text-xs ${positive ? 'text-green-500' : 'text-red-500'}`}>
        {change}
      </div>
    </div>;
};
export default LeaderboardTab;