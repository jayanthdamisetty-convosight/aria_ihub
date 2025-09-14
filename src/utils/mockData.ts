// Types
export interface UserProfile {
  userId: string;
  displayName: string;
  title: string;
  company: string;
  location: string;
  avatarUrl: string;
  joinDate: string;
  stats: {
    totalInsights: number;
    yearOverYearGrowth: number;
    currentStreak: number;
    longestStreak: number;
    level: string;
    productivityGains: {
      queriesCompleted: number;
      researchHoursSaved: number;
      workDaysReturned: number;
      workWeeksReturned: number;
      fteEquivalent: number;
    };
  };
  annualGoals: AnnualGoal[];
  activityData: ActivityData[];
  queryTypes: QueryType[];
  categoryExpertise: CategoryExpertise[];
  usagePatterns: UsagePattern[];
  achievements: Achievement[];
}
export interface AnnualGoal {
  id: string;
  title: string;
  target: string;
  contributingQueries: number;
  bookmarkedInsights: number;
  lastContribution: string;
  achievementIndicator: 'very-active' | 'moderate' | 'needs-attention';
  color: string;
}
export interface ActivityData {
  date: string;
  count: number;
  queryTypes: Record<string, number>;
}
export interface QueryType {
  name: string;
  count: number;
  color: string;
}
export interface CategoryExpertise {
  name: string;
  count: number;
  percentage: number;
  color: string;
}
export interface UsagePattern {
  day: string;
  activityLevel: number;
  note?: string;
  color: string;
}
export interface Achievement {
  id: string;
  name: string;
  description: string;
  icon: string;
  unlockedAt?: string;
  progress?: number;
}

export interface BookmarkedInsight {
  id: string;
  query: string;
  insight: string;
  date: string;
  impact: 'high' | 'medium' | 'low';
  tags: string[];
}

// Core Insights types
export interface CoreInsight {
  id: string;
  query: string;
  highlightedText: string;
  fullContext: string;
  date: string;
  reason: 'campaign' | 'strategy' | 'trend' | 'product' | 'follow-up' | 'general';
  impact: 'high' | 'medium' | 'low';
  tags: string[];
}

export interface InsightFolder {
  id: string;
  name: string;
  icon: string;
  color: string;
  insights: CoreInsight[];
  lastUpdated: string;
  totalInsights: number;
}
// Leaderboard types
export interface LeaderboardUser {
  rank: number;
  avatar: string;
  initials: string;
  name: string;
  title: string;
  badges: Array<'power' | 'consistent' | 'rising'>;
  queries: number;
  activeDays: {
    count: number;
    total: number;
    percentage: number;
  };
  streak: number;
  activityHeatmap: number[]; // 0-4 representing activity level for each of the last 28 days
}

export interface GlobalLeaderboardUser {
  rank: number;
  name: string;
  title: string;
  company: string;
  avatar: string;
  queries: number;
  hoursSaved: number;
  badge: 'power' | 'consistent' | 'rising';
}
export interface AgentAdoption {
  name: string;
  usagePercentage: number;
}
export interface LeaderboardStats {
  activeUsers: {
    value: number;
    change: number;
  };
  adoptionRate: {
    value: number;
    change: number;
  };
  totalQueries: {
    value: string;
    change: number;
  };
  avgPerUser: {
    value: number;
    change: number;
  };
  dailyActive: {
    value: number;
    percentage: number;
  };
  avgAgentsUsed: {
    value: number;
    total: number;
  };
}
// Generate random activity data for the past year
const generateActivityData = (): ActivityData[] => {
  const activityData: ActivityData[] = [];
  const today = new Date();
  // Query types with their colors
  const queryTypeOptions = [{
    name: 'Trend Analysis',
    color: '#FF6B6B'
  }, {
    name: 'Competitor Intel',
    color: '#4ECDC4'
  }, {
    name: 'Content Strategy',
    color: '#45B7D1'
  }, {
    name: 'Influencer Research',
    color: '#96CEB4'
  }, {
    name: 'Deep Research',
    color: '#FFEAA7'
  }, {
    name: 'Product Development',
    color: '#DDA0DD'
  }];
  // Generate data for the past 365 days
  for (let i = 0; i < 365; i++) {
    const date = new Date(today);
    date.setDate(date.getDate() - 364 + i);
    const dateStr = date.toISOString().split('T')[0];
    // Generate random activity count (more activity on weekdays)
    const dayOfWeek = date.getDay();
    const isWeekday = dayOfWeek >= 1 && dayOfWeek <= 5;
    const maxActivity = isWeekday ? 12 : 3;
    // More activity in recent months
    const monthsAgo = Math.floor((today.getTime() - date.getTime()) / (30 * 24 * 60 * 60 * 1000));
    const activityMultiplier = monthsAgo < 3 ? 1 : monthsAgo < 6 ? 0.8 : 0.6;
    // Generate random count
    let count = Math.floor(Math.random() * maxActivity * activityMultiplier);
    // Ensure some days have zero activity
    if (Math.random() < 0.3) count = 0;
    // Generate query types for this day
    const queryTypes: Record<string, number> = {};
    if (count > 0) {
      // Distribute count across 1-3 query types
      const numTypes = Math.min(count, Math.floor(Math.random() * 3) + 1);
      let remainingCount = count;
      for (let j = 0; j < numTypes; j++) {
        const typeIndex = Math.floor(Math.random() * queryTypeOptions.length);
        const typeName = queryTypeOptions[typeIndex].name;
        if (j === numTypes - 1) {
          // Last type gets all remaining count
          queryTypes[typeName] = remainingCount;
        } else {
          // Distribute randomly
          const typeCount = Math.floor(Math.random() * remainingCount) + 1;
          queryTypes[typeName] = typeCount;
          remainingCount -= typeCount;
        }
      }
    }
    activityData.push({
      date: dateStr,
      count,
      queryTypes
    });
  }
  return activityData;
};
// Generate query type totals from activity data
const generateQueryTypes = (activityData: ActivityData[]): QueryType[] => {
  const queryTypeTotals: Record<string, number> = {};
  // Sum up all query types
  activityData.forEach(day => {
    Object.entries(day.queryTypes).forEach(([type, count]) => {
      queryTypeTotals[type] = (queryTypeTotals[type] || 0) + count;
    });
  });
  // Map to QueryType array with colors
  const queryTypeColors: Record<string, string> = {
    'Trend Analysis': '#FF6B6B',
    'Competitor Intel': '#4ECDC4',
    'Content Strategy': '#45B7D1',
    'Influencer Research': '#96CEB4',
    'Deep Research': '#FFEAA7',
    'Product Development': '#DDA0DD'
  };
  return Object.entries(queryTypeTotals).map(([name, count]) => ({
    name,
    count,
    color: queryTypeColors[name] || '#ccc'
  })).sort((a, b) => b.count - a.count); // Sort by count descending
};
// Generate mock user profile
export const mockUserProfile: UserProfile = (() => {
  const activityData = generateActivityData();
  const queryTypes = generateQueryTypes(activityData);
  // Calculate total insights
  const totalInsights = activityData.reduce((sum, day) => sum + day.count, 0);
  // Calculate current streak
  let currentStreak = 0;
  for (let i = activityData.length - 1; i >= 0; i--) {
    if (activityData[i].count > 0) {
      currentStreak++;
    } else {
      break;
    }
  }
  // Calculate longest streak
  let longestStreak = 0;
  let currentStreakCount = 0;
  activityData.forEach(day => {
    if (day.count > 0) {
      currentStreakCount++;
      if (currentStreakCount > longestStreak) {
        longestStreak = currentStreakCount;
      }
    } else {
      currentStreakCount = 0;
    }
  });
  // Generate category expertise
  const categoryExpertise: CategoryExpertise[] = [{
    name: 'Skin Care',
    count: 134,
    percentage: 0, // Will be calculated below
    color: '#FF6B6B'
  }, {
    name: 'Hair Care',
    count: 98,
    percentage: 0, // Will be calculated below
    color: '#4ECDC4'
  }, {
    name: 'Cosmetics',
    count: 76,
    percentage: 0, // Will be calculated below
    color: '#45B7D1'
  }, {
    name: 'Fragrance',
    count: 45,
    percentage: 0, // Will be calculated below
    color: '#96CEB4'
  }];

  // Calculate total queries across all categories
  const totalCategoryQueries = categoryExpertise.reduce((sum, category) => sum + category.count, 0);
  
  // Calculate percentages based on total queries
  categoryExpertise.forEach(category => {
    category.percentage = Math.round((category.count / totalCategoryQueries) * 100);
  });
  // Generate usage patterns
  const usagePatterns: UsagePattern[] = [{
    day: 'Mon',
    activityLevel: 8,
    note: 'Campaign Planning',
    color: '#FF6B6B'
  }, {
    day: 'Tue',
    activityLevel: 6,
    color: '#FF8E8E'
  }, {
    day: 'Wed',
    activityLevel: 9,
    note: 'Trend Research',
    color: '#FF5151'
  }, {
    day: 'Thu',
    activityLevel: 7,
    color: '#FF7676'
  }, {
    day: 'Fri',
    activityLevel: 8,
    note: 'Weekly Reviews',
    color: '#FF6B6B'
  }, {
    day: 'Sat',
    activityLevel: 2,
    color: '#FFC2C2'
  }, {
    day: 'Sun',
    activityLevel: 1,
    color: '#FFD6D6'
  }];
  // Generate achievements
  const achievements: Achievement[] = [{
    id: 'hot-streak',
    name: 'Hot Streak',
    description: '7 day streak',
    icon: '🔥',
    unlockedAt: '2024-02-15T00:00:00Z'
  }, {
    id: 'dedicated',
    name: 'Dedicated',
    description: '30 day streak',
    icon: '🌟',
    progress: 80
  }, {
    id: 'rising-star',
    name: 'Rising Star',
    description: '100 insights',
    icon: '🚀',
    unlockedAt: '2024-01-20T00:00:00Z'
  }, {
    id: 'expert-analyst',
    name: 'Expert Analyst',
    description: '500 insights',
    icon: '🏆',
    progress: 48
  }, {
    id: 'trend-spotter',
    name: 'Trend Spotter',
    description: '50 trend analyses',
    icon: '🔍',
    unlockedAt: '2024-03-05T00:00:00Z'
  }, {
    id: 'competitor-hunter',
    name: 'Competitor Hunter',
    description: '25 competitor analyses',
    icon: '⚔️',
    unlockedAt: '2024-02-28T00:00:00Z'
  }, {
    id: 'category-expert',
    name: 'Category Expert',
    description: '100 queries in one category',
    icon: '🎯',
    unlockedAt: '2024-01-10T00:00:00Z'
  }, {
    id: 'cross-category',
    name: 'Cross-Category',
    description: 'Active in 3+ categories',
    icon: '🌍',
    unlockedAt: '2024-02-05T00:00:00Z'
  }];
  // Generate annual goals
  const annualGoals: AnnualGoal[] = [{
    id: 'gen-z',
    title: 'Annual Goal: "Increase Gen Z engagement by 30%"',
    target: 'Increase Gen Z engagement by 30%',
    contributingQueries: 147,
    bookmarkedInsights: 23,
    lastContribution: '2 days ago',
    achievementIndicator: 'very-active',
    color: '#4ECDC4'
  }, {
    id: 'products',
    title: 'Annual Goal: "Launch 3 successful new products"',
    target: 'Launch 3 successful new products',
    contributingQueries: 89,
    bookmarkedInsights: 12,
    lastContribution: '1 week ago',
    achievementIndicator: 'moderate',
    color: '#FF6B6B'
  }, {
    id: 'sustainability',
    title: 'Annual Goal: "Improve brand perception in sustainability"',
    target: 'Improve brand perception in sustainability',
    contributingQueries: 234,
    bookmarkedInsights: 31,
    lastContribution: '1 day ago',
    achievementIndicator: 'very-active',
    color: '#45B7D1'
  }, {
    id: 'opportunities',
    title: 'Annual Goal: "Identify 5 new market opportunities"',
    target: 'Identify 5 new market opportunities',
    contributingQueries: 67,
    bookmarkedInsights: 8,
    lastContribution: '3 weeks ago',
    achievementIndicator: 'needs-attention',
    color: '#96CEB4'
  }];

  // Generate mock insights for each goal
  const generateGoalInsights = (goalId: string): BookmarkedInsight[] => {
    const insightsByGoal: Record<string, BookmarkedInsight[]> = {
      'gen-z': [
        {
          id: 'gen-z-1',
          query: 'What are the latest Gen Z social media trends for beauty brands?',
          insight: 'Gen Z is increasingly drawn to authentic, unfiltered content and values sustainability. TikTok remains the dominant platform, with 78% of Gen Z users discovering new beauty products through short-form video content.',
          date: '2024-03-15',
          impact: 'high',
          tags: ['social media', 'trends', 'authenticity']
        },
        {
          id: 'gen-z-2',
          query: 'How do Gen Z consumers respond to influencer partnerships?',
          insight: 'Gen Z shows 3x higher engagement rates with micro-influencers (10K-100K followers) compared to mega-influencers. They value relatability over celebrity status.',
          date: '2024-03-12',
          impact: 'high',
          tags: ['influencers', 'engagement', 'micro-influencers']
        },
        {
          id: 'gen-z-3',
          query: 'What messaging resonates with Gen Z for sustainable beauty products?',
          insight: 'Gen Z responds best to transparent messaging about ingredient sourcing and environmental impact. 67% are willing to pay premium for genuinely sustainable products.',
          date: '2024-03-10',
          impact: 'medium',
          tags: ['sustainability', 'messaging', 'pricing']
        }
      ],
      'products': [
        {
          id: 'products-1',
          query: 'What are emerging product categories in the beauty industry?',
          insight: 'Blue light protection skincare and microbiome-friendly products are showing 45% year-over-year growth. These categories align with post-pandemic wellness trends.',
          date: '2024-03-14',
          impact: 'high',
          tags: ['product development', 'wellness', 'blue light']
        },
        {
          id: 'products-2',
          query: 'How are competitors launching new products in Q1 2024?',
          insight: 'Major competitors are focusing on limited-edition collaborations and seasonal launches. The average time-to-market has decreased by 30% due to streamlined development processes.',
          date: '2024-03-11',
          impact: 'medium',
          tags: ['competitors', 'launch strategy', 'time-to-market']
        }
      ],
      'sustainability': [
        {
          id: 'sustainability-1',
          query: 'What sustainability initiatives are resonating with beauty consumers?',
          insight: 'Refillable packaging programs show 89% customer satisfaction. Consumers prioritize carbon-neutral shipping and biodegradable packaging materials.',
          date: '2024-03-16',
          impact: 'high',
          tags: ['packaging', 'refillable', 'carbon neutral']
        },
        {
          id: 'sustainability-2',
          query: 'How do consumers perceive our brand\'s sustainability efforts?',
          insight: 'Brand perception improved by 23% after launching the refillable program. Consumers particularly appreciate the transparency in supply chain reporting.',
          date: '2024-03-13',
          impact: 'high',
          tags: ['brand perception', 'transparency', 'supply chain']
        },
        {
          id: 'sustainability-3',
          query: 'What are the latest sustainable packaging innovations?',
          insight: 'Seaweed-based packaging and mushroom-derived materials are emerging as viable alternatives to plastic. These innovations show promise for beauty product applications.',
          date: '2024-03-09',
          impact: 'medium',
          tags: ['packaging innovation', 'biodegradable', 'seaweed']
        }
      ],
      'opportunities': [
        {
          id: 'opportunities-1',
          query: 'What untapped markets exist for premium beauty products?',
          insight: 'The men\'s grooming market in Southeast Asia shows 34% growth potential. Premium men\'s skincare is particularly underserved in Thailand and Vietnam.',
          date: '2024-03-08',
          impact: 'high',
          tags: ['men\'s grooming', 'Southeast Asia', 'premium']
        },
        {
          id: 'opportunities-2',
          query: 'How is the aging population affecting beauty product demand?',
          insight: 'The 50+ demographic is driving 28% of premium beauty sales growth. Anti-aging products with natural ingredients show particular promise.',
          date: '2024-03-05',
          impact: 'medium',
          tags: ['aging population', 'anti-aging', 'natural ingredients']
        }
      ]
    };
    return insightsByGoal[goalId] || [];
  };

  return {
    userId: 'user123',
    displayName: 'Sarah Chen',
    title: 'Senior Brand Manager',
    company: 'Unilever',
    location: 'New York, NY',
    avatarUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80',
    joinDate: '2023-06-15T00:00:00Z',
    stats: {
      totalInsights: 242,
      yearOverYearGrowth: 127,
      currentStreak,
      longestStreak,
      level: 'Expert',
      productivityGains: {
        queriesCompleted: 1247,
        researchHoursSaved: 3117,
        workDaysReturned: 389,
        workWeeksReturned: 78,
        fteEquivalent: 1.5
      }
    },
    annualGoals,
    activityData,
    queryTypes,
    categoryExpertise,
    usagePatterns,
    achievements
  };
})();

// Mock global leaderboard data
export const mockGlobalLeaderboard: GlobalLeaderboardUser[] = [
  {
    rank: 1,
    name: 'Alexandra Rodriguez',
    title: 'VP of Marketing',
    company: 'TechCorp',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80',
    queries: 2847,
    hoursSaved: 7118,
    badge: 'power'
  },
  {
    rank: 2,
    name: 'Marcus Chen',
    title: 'Head of Strategy',
    company: 'InnovateLabs',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80',
    queries: 2653,
    hoursSaved: 6633,
    badge: 'consistent'
  },
  {
    rank: 3,
    name: 'Sophie Williams',
    title: 'Brand Director',
    company: 'CreativeStudio',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80',
    queries: 2398,
    hoursSaved: 5995,
    badge: 'rising'
  }
];

// Export function to get insights for a specific goal
export const getGoalInsights = (goalId: string): BookmarkedInsight[] => {
  const insightsByGoal: Record<string, BookmarkedInsight[]> = {
    'gen-z': [
      {
        id: 'gen-z-1',
        query: 'What are the latest Gen Z social media trends for beauty brands?',
        insight: 'Gen Z is increasingly drawn to authentic, unfiltered content and values sustainability. TikTok remains the dominant platform, with 78% of Gen Z users discovering new beauty products through short-form video content.',
        date: '2024-03-15',
        impact: 'high',
        tags: ['social media', 'trends', 'authenticity']
      },
      {
        id: 'gen-z-2',
        query: 'How do Gen Z consumers respond to influencer partnerships?',
        insight: 'Gen Z shows 3x higher engagement rates with micro-influencers (10K-100K followers) compared to mega-influencers. They value relatability over celebrity status.',
        date: '2024-03-12',
        impact: 'high',
        tags: ['influencers', 'engagement', 'micro-influencers']
      },
      {
        id: 'gen-z-3',
        query: 'What messaging resonates with Gen Z for sustainable beauty products?',
        insight: 'Gen Z responds best to transparent messaging about ingredient sourcing and environmental impact. 67% are willing to pay premium for genuinely sustainable products.',
        date: '2024-03-10',
        impact: 'medium',
        tags: ['sustainability', 'messaging', 'pricing']
      }
    ],
    'products': [
      {
        id: 'products-1',
        query: 'What are emerging product categories in the beauty industry?',
        insight: 'Blue light protection skincare and microbiome-friendly products are showing 45% year-over-year growth. These categories align with post-pandemic wellness trends.',
        date: '2024-03-14',
        impact: 'high',
        tags: ['product development', 'wellness', 'blue light']
      },
      {
        id: 'products-2',
        query: 'How are competitors launching new products in Q1 2024?',
        insight: 'Major competitors are focusing on limited-edition collaborations and seasonal launches. The average time-to-market has decreased by 30% due to streamlined development processes.',
        date: '2024-03-11',
        impact: 'medium',
        tags: ['competitors', 'launch strategy', 'time-to-market']
      }
    ],
    'sustainability': [
      {
        id: 'sustainability-1',
        query: 'What sustainability initiatives are resonating with beauty consumers?',
        insight: 'Refillable packaging programs show 89% customer satisfaction. Consumers prioritize carbon-neutral shipping and biodegradable packaging materials.',
        date: '2024-03-16',
        impact: 'high',
        tags: ['packaging', 'refillable', 'carbon neutral']
      },
      {
        id: 'sustainability-2',
        query: 'How do consumers perceive our brand\'s sustainability efforts?',
        insight: 'Brand perception improved by 23% after launching the refillable program. Consumers particularly appreciate the transparency in supply chain reporting.',
        date: '2024-03-13',
        impact: 'high',
        tags: ['brand perception', 'transparency', 'supply chain']
      },
      {
        id: 'sustainability-3',
        query: 'What are the latest sustainable packaging innovations?',
        insight: 'Seaweed-based packaging and mushroom-derived materials are emerging as viable alternatives to plastic. These innovations show promise for beauty product applications.',
        date: '2024-03-09',
        impact: 'medium',
        tags: ['packaging innovation', 'biodegradable', 'seaweed']
      }
    ],
    'opportunities': [
      {
        id: 'opportunities-1',
        query: 'What untapped markets exist for premium beauty products?',
        insight: 'The men\'s grooming market in Southeast Asia shows 34% growth potential. Premium men\'s skincare is particularly underserved in Thailand and Vietnam.',
        date: '2024-03-08',
        impact: 'high',
        tags: ['men\'s grooming', 'Southeast Asia', 'premium']
      },
      {
        id: 'opportunities-2',
        query: 'How is the aging population affecting beauty product demand?',
        insight: 'The 50+ demographic is driving 28% of premium beauty sales growth. Anti-aging products with natural ingredients show particular promise.',
        date: '2024-03-05',
        impact: 'medium',
        tags: ['aging population', 'anti-aging', 'natural ingredients']
      }
    ]
  };
  return insightsByGoal[goalId] || [];
};

// Mock leaderboard data for different time periods
export const mockLeaderboardData = {
  today: {
    stats: {
      activeUsers: { value: 23, change: 8 },
      adoptionRate: { value: 68, change: 8 },
      totalQueries: { value: '1.2K', change: 15 },
      avgPerUser: { value: 52.2, change: 5 },
      dailyActive: { value: 89, percentage: 36 },
      avgAgentsUsed: { value: 5.2, total: 9 }
    },
    users: [
      { rank: 1, avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80', initials: 'JL', name: 'James Liu', title: 'Marketing Manager', badges: ['rising'], queries: 52, activeDays: { count: 1, total: 1, percentage: 100 }, streak: 21, activityHeatmap: [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4] },
      { rank: 2, avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80', initials: 'SC', name: 'Sarah Chen', title: 'Senior Brand Manager', badges: ['power', 'consistent'], queries: 48, activeDays: { count: 1, total: 1, percentage: 100 }, streak: 47, activityHeatmap: [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3] },
      { rank: 3, avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80', initials: 'RD', name: 'Rachel Davis', title: 'Brand Director', badges: ['consistent'], queries: 41, activeDays: { count: 1, total: 1, percentage: 100 }, streak: 18, activityHeatmap: [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3] },
      { rank: 4, avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80', initials: 'MK', name: 'Michael Kumar', title: 'Strategy Director', badges: ['power'], queries: 35, activeDays: { count: 1, total: 1, percentage: 100 }, streak: 32, activityHeatmap: [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2] },
      { rank: 5, avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80', initials: 'AP', name: 'Amanda Park', title: 'Product Manager', badges: ['consistent'], queries: 29, activeDays: { count: 1, total: 1, percentage: 100 }, streak: 28, activityHeatmap: [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2] }
    ],
    agentAdoption: [{
      name: 'Trend Analysis',
      usagePercentage: 89
    }, {
      name: 'Competitor Intel',
      usagePercentage: 76
    }, {
      name: 'Visual Content Analysis',
      usagePercentage: 67
    }, {
      name: 'Deep Research',
      usagePercentage: 54
    }, {
      name: 'Influencer Discovery',
      usagePercentage: 48
    }, {
      name: 'Content Ideas',
      usagePercentage: 41
    }, {
      name: 'Product Development',
      usagePercentage: 38
    }, {
      name: 'Engagement Summary',
      usagePercentage: 32
    }, {
      name: 'Emerging Trends',
      usagePercentage: 27
    }]
  },
  week: {
    stats: {
      activeUsers: { value: 89, change: 15 },
      adoptionRate: { value: 68, change: 8 },
      totalQueries: { value: '4.8K', change: 18 },
      avgPerUser: { value: 54.0, change: 8 },
      dailyActive: { value: 89, percentage: 36 },
      avgAgentsUsed: { value: 5.2, total: 9 }
    },
    users: [
      { rank: 1, avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80', initials: 'AP', name: 'Amanda Park', title: 'Product Manager', badges: ['consistent'], queries: 201, activeDays: { count: 7, total: 7, percentage: 100 }, streak: 28, activityHeatmap: [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4] },
      { rank: 2, avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80', initials: 'MK', name: 'Michael Kumar', title: 'Strategy Director', badges: ['power'], queries: 187, activeDays: { count: 6, total: 7, percentage: 86 }, streak: 32, activityHeatmap: [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3] },
      { rank: 3, avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80', initials: 'SC', name: 'Sarah Chen', title: 'Senior Brand Manager', badges: ['power', 'consistent'], queries: 172, activeDays: { count: 7, total: 7, percentage: 100 }, streak: 47, activityHeatmap: [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3] },
      { rank: 4, avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80', initials: 'RD', name: 'Rachel Davis', title: 'Brand Director', badges: ['consistent'], queries: 145, activeDays: { count: 6, total: 7, percentage: 86 }, streak: 18, activityHeatmap: [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2] },
      { rank: 5, avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80', initials: 'JL', name: 'James Liu', title: 'Marketing Manager', badges: ['rising'], queries: 128, activeDays: { count: 5, total: 7, percentage: 71 }, streak: 21, activityHeatmap: [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2] }
    ],
    agentAdoption: [{
      name: 'Trend Analysis',
      usagePercentage: 89
    }, {
      name: 'Competitor Intel',
      usagePercentage: 76
    }, {
      name: 'Visual Content Analysis',
      usagePercentage: 67
    }, {
      name: 'Deep Research',
      usagePercentage: 54
    }, {
      name: 'Influencer Discovery',
      usagePercentage: 48
    }, {
      name: 'Content Ideas',
      usagePercentage: 41
    }, {
      name: 'Product Development',
      usagePercentage: 38
    }, {
      name: 'Engagement Summary',
      usagePercentage: 32
    }, {
      name: 'Emerging Trends',
      usagePercentage: 27
    }]
  },
  month: {
    stats: {
      activeUsers: { value: 247, change: 12 },
      adoptionRate: { value: 68, change: 8 },
      totalQueries: { value: '18.4K', change: 24 },
      avgPerUser: { value: 74.5, change: 11 },
      dailyActive: { value: 89, percentage: 36 },
      avgAgentsUsed: { value: 5.2, total: 9 }
    },
    users: [{
    rank: 1,
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80',
    initials: 'SC',
    name: 'Sarah Chen',
    title: 'Senior Brand Manager',
    badges: ['power', 'consistent'],
    queries: 1247,
    activeDays: {
      count: 28,
      total: 30,
      percentage: 93
    },
    streak: 47,
    activityHeatmap: [3, 4, 3, 4, 4, 2, 1, 4, 4, 3, 4, 3, 1, 2, 4, 3, 4, 4, 3, 0, 1, 3, 4, 4, 3, 4, 2, 1]
  }, {
    rank: 2,
    avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80',
    initials: 'MK',
    name: 'Michael Kumar',
    title: 'Strategy Director',
    badges: ['power'],
    queries: 1089,
    activeDays: {
      count: 27,
      total: 30,
      percentage: 90
    },
    streak: 32,
    activityHeatmap: [3, 3, 4, 3, 3, 1, 0, 4, 3, 3, 4, 3, 2, 1, 3, 4, 3, 3, 4, 1, 0, 4, 3, 3, 4, 3, 2, 1]
  }, {
    rank: 3,
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80',
    initials: 'AP',
    name: 'Amanda Park',
    title: 'Product Manager',
    badges: ['consistent'],
    queries: 967,
    activeDays: {
      count: 26,
      total: 30,
      percentage: 87
    },
    streak: 28,
    activityHeatmap: [2, 3, 3, 4, 3, 1, 0, 3, 3, 4, 3, 2, 1, 1, 4, 3, 3, 3, 4, 0, 0, 3, 4, 3, 3, 3, 1, 2]
  }, {
    rank: 4,
    avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80',
    initials: 'JL',
    name: 'James Liu',
    title: 'Marketing Manager',
    badges: ['rising'],
    queries: 834,
    activeDays: {
      count: 25,
      total: 30,
      percentage: 83
    },
    streak: 21,
    activityHeatmap: [2, 3, 2, 3, 3, 0, 0, 3, 2, 3, 3, 2, 1, 0, 3, 3, 2, 3, 3, 0, 1, 2, 3, 3, 2, 3, 1, 0]
  }, {
    rank: 5,
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80',
    initials: 'RD',
    name: 'Rachel Davis',
    title: 'Brand Director',
    badges: ['consistent'],
    queries: 756,
    activeDays: {
      count: 24,
      total: 30,
      percentage: 80
    },
    streak: 18,
    activityHeatmap: [2, 2, 3, 2, 2, 0, 0, 3, 2, 2, 3, 2, 1, 0, 2, 3, 2, 2, 3, 0, 0, 2, 2, 3, 2, 2, 1, 1]
  }, {
    rank: 6,
    avatar: 'https://images.unsplash.com/photo-1552058544-f2b08422138a?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80',
    initials: 'TW',
    name: 'Tom Wilson',
    title: 'Junior Analyst',
    badges: ['rising'],
    queries: 623,
    activeDays: {
      count: 22,
      total: 30,
      percentage: 73
    },
    streak: 14,
    activityHeatmap: [1, 2, 2, 3, 2, 0, 0, 2, 2, 3, 2, 1, 1, 0, 2, 3, 3, 2, 2, 0, 1, 2, 3, 2, 2, 3, 1, 1]
  }, {
    rank: 7,
    avatar: 'https://images.unsplash.com/photo-1554151228-14d9def656e4?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80',
    initials: 'EJ',
    name: 'Emily Johnson',
    title: 'Creative Director',
    badges: ['rising'],
    queries: 567,
    activeDays: {
      count: 20,
      total: 30,
      percentage: 67
    },
    streak: 12,
    activityHeatmap: [1, 1, 2, 2, 1, 0, 0, 2, 1, 2, 2, 1, 0, 0, 1, 2, 2, 1, 2, 0, 0, 1, 2, 2, 1, 2, 1, 1]
  }],
  agentAdoption: [{
    name: 'Trend Analysis',
    usagePercentage: 89
  }, {
    name: 'Competitor Intel',
    usagePercentage: 76
  }, {
    name: 'Visual Content Analysis',
    usagePercentage: 67
  }, {
    name: 'Deep Research',
    usagePercentage: 54
  }, {
    name: 'Influencer Discovery',
    usagePercentage: 48
  }, {
    name: 'Content Ideas',
    usagePercentage: 41
  }, {
    name: 'Product Development',
    usagePercentage: 38
  }, {
    name: 'Engagement Summary',
    usagePercentage: 32
  }, {
    name: 'Emerging Trends',
    usagePercentage: 27
  }],
    agentAdoption: [{
      name: 'Trend Analysis',
      usagePercentage: 89
    }, {
      name: 'Competitor Intel',
      usagePercentage: 76
    }, {
      name: 'Visual Content Analysis',
      usagePercentage: 67
    }, {
      name: 'Deep Research',
      usagePercentage: 54
    }, {
      name: 'Influencer Discovery',
      usagePercentage: 48
    }, {
      name: 'Content Ideas',
      usagePercentage: 41
    }, {
      name: 'Product Development',
      usagePercentage: 38
    }, {
      name: 'Engagement Summary',
      usagePercentage: 32
    }, {
      name: 'Emerging Trends',
      usagePercentage: 27
    }]
  },
  quarter: {
    stats: {
      activeUsers: { value: 892, change: 18 },
      adoptionRate: { value: 68, change: 8 },
      totalQueries: { value: '67.2K', change: 32 },
      avgPerUser: { value: 75.3, change: 15 },
      dailyActive: { value: 89, percentage: 36 },
      avgAgentsUsed: { value: 5.2, total: 9 }
    },
    users: [
      { rank: 1, avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80', initials: 'RD', name: 'Rachel Davis', title: 'Brand Director', badges: ['consistent'], queries: 4123, activeDays: { count: 88, total: 90, percentage: 98 }, streak: 18, activityHeatmap: [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4] },
      { rank: 2, avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80', initials: 'JL', name: 'James Liu', title: 'Marketing Manager', badges: ['rising'], queries: 3789, activeDays: { count: 86, total: 90, percentage: 96 }, streak: 21, activityHeatmap: [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3] },
      { rank: 3, avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80', initials: 'SC', name: 'Sarah Chen', title: 'Senior Brand Manager', badges: ['power', 'consistent'], queries: 3456, activeDays: { count: 89, total: 90, percentage: 99 }, streak: 47, activityHeatmap: [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3] },
      { rank: 4, avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80', initials: 'AP', name: 'Amanda Park', title: 'Product Manager', badges: ['consistent'], queries: 3123, activeDays: { count: 85, total: 90, percentage: 94 }, streak: 28, activityHeatmap: [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2] },
      { rank: 5, avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80', initials: 'MK', name: 'Michael Kumar', title: 'Strategy Director', badges: ['power'], queries: 2890, activeDays: { count: 87, total: 90, percentage: 97 }, streak: 32, activityHeatmap: [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2] }
    ],
    agentAdoption: [{
      name: 'Trend Analysis',
      usagePercentage: 89
    }, {
      name: 'Competitor Intel',
      usagePercentage: 76
    }, {
      name: 'Visual Content Analysis',
      usagePercentage: 67
    }, {
      name: 'Deep Research',
      usagePercentage: 54
    }, {
      name: 'Influencer Discovery',
      usagePercentage: 48
    }, {
      name: 'Content Ideas',
      usagePercentage: 41
    }, {
      name: 'Product Development',
      usagePercentage: 38
    }, {
      name: 'Engagement Summary',
      usagePercentage: 32
    }, {
      name: 'Emerging Trends',
      usagePercentage: 27
    }]
  }
};

// Mock core insights data
export const mockCoreInsights: InsightFolder[] = [
  {
    id: 'campaign-insights',
    name: 'Campaign Insights',
    icon: '🎯',
    color: '#3B82F6',
    lastUpdated: '2024-03-15',
    totalInsights: 5,
    insights: [
      {
        id: 'gen-z-engagement',
        query: 'How do Gen Z consumers respond to influencer partnerships?',
        highlightedText: 'Gen Z shows 3x higher engagement rates with micro-influencers (10K-100K followers) compared to mega-influencers. They value relatability over celebrity status.',
        fullContext: 'Based on recent social media analytics, Gen Z consumers demonstrate significantly different engagement patterns compared to older demographics. Our research shows that Gen Z shows 3x higher engagement rates with micro-influencers (10K-100K followers) compared to mega-influencers. They value relatability over celebrity status, preferring authentic content creators who share their values and experiences. This trend has been consistent across platforms like TikTok, Instagram, and YouTube.',
        date: '2024-03-15',
        reason: 'campaign',
        impact: 'high',
        tags: ['gen-z', 'influencers', 'engagement']
      },
      {
        id: 'sustainability-messaging',
        query: 'What messaging resonates with Gen Z for sustainable beauty products?',
        highlightedText: 'Gen Z responds best to transparent messaging about ingredient sourcing and environmental impact. 67% are willing to pay premium for genuinely sustainable products.',
        fullContext: 'Sustainability messaging for Gen Z requires a different approach than traditional marketing. Our analysis reveals that Gen Z responds best to transparent messaging about ingredient sourcing and environmental impact. 67% are willing to pay premium for genuinely sustainable products, but they demand authenticity and proof of claims. Greenwashing is quickly called out and can damage brand reputation significantly.',
        date: '2024-03-12',
        reason: 'campaign',
        impact: 'high',
        tags: ['sustainability', 'gen-z', 'messaging']
      },
      {
        id: 'tiktok-trends',
        query: 'What are the latest Gen Z social media trends for beauty brands?',
        highlightedText: 'TikTok remains the dominant platform, with 78% of Gen Z users discovering new beauty products through short-form video content.',
        fullContext: 'Social media trends for beauty brands continue to evolve rapidly. TikTok remains the dominant platform, with 78% of Gen Z users discovering new beauty products through short-form video content. The platform\'s algorithm favors authentic, unfiltered content over polished advertisements. Brands that successfully engage Gen Z focus on user-generated content, challenges, and educational content rather than traditional product showcases.',
        date: '2024-03-10',
        reason: 'campaign',
        impact: 'medium',
        tags: ['tiktok', 'social-media', 'gen-z']
      }
    ]
  },
  {
    id: 'competitor-intel',
    name: 'Competitor Intel',
    icon: '🔍',
    color: '#EF4444',
    lastUpdated: '2024-03-14',
    totalInsights: 3,
    insights: [
      {
        id: 'competitor-launch-strategy',
        query: 'How are competitors launching new products in Q1 2024?',
        highlightedText: 'Major competitors are focusing on limited-edition collaborations and seasonal launches. The average time-to-market has decreased by 30% due to streamlined development processes.',
        fullContext: 'Competitive analysis reveals significant shifts in product launch strategies. Major competitors are focusing on limited-edition collaborations and seasonal launches. The average time-to-market has decreased by 30% due to streamlined development processes. This acceleration is driven by consumer demand for novelty and social media\'s fast-paced content cycle. Brands are investing heavily in rapid prototyping and agile development methodologies.',
        date: '2024-03-14',
        reason: 'strategy',
        impact: 'high',
        tags: ['competitors', 'launch-strategy', 'time-to-market']
      },
      {
        id: 'pricing-strategies',
        query: 'What pricing strategies are competitors using for premium beauty products?',
        highlightedText: 'Competitors are implementing dynamic pricing with seasonal adjustments and loyalty program integration, showing 15% higher retention rates.',
        fullContext: 'Pricing strategies in the premium beauty sector have evolved significantly. Competitors are implementing dynamic pricing with seasonal adjustments and loyalty program integration, showing 15% higher retention rates. The approach combines psychological pricing with data-driven personalization, creating perceived value while maximizing revenue per customer.',
        date: '2024-03-11',
        reason: 'strategy',
        impact: 'medium',
        tags: ['pricing', 'retention', 'loyalty']
      }
    ]
  },
  {
    id: 'trend-analysis',
    name: 'Trend Analysis',
    icon: '📈',
    color: '#10B981',
    lastUpdated: '2024-03-16',
    totalInsights: 4,
    insights: [
      {
        id: 'blue-light-skincare',
        query: 'What are emerging product categories in the beauty industry?',
        highlightedText: 'Blue light protection skincare and microbiome-friendly products are showing 45% year-over-year growth. These categories align with post-pandemic wellness trends.',
        fullContext: 'The beauty industry continues to evolve with new product categories emerging rapidly. Blue light protection skincare and microbiome-friendly products are showing 45% year-over-year growth. These categories align with post-pandemic wellness trends, as consumers prioritize health-conscious beauty choices. The growth is driven by increased screen time, awareness of digital aging, and scientific advances in microbiome research.',
        date: '2024-03-16',
        reason: 'trend',
        impact: 'high',
        tags: ['blue-light', 'microbiome', 'wellness']
      },
      {
        id: 'men-grooming-growth',
        query: 'What untapped markets exist for premium beauty products?',
        highlightedText: 'The men\'s grooming market in Southeast Asia shows 34% growth potential. Premium men\'s skincare is particularly underserved in Thailand and Vietnam.',
        fullContext: 'Market analysis reveals significant untapped opportunities in the men\'s grooming sector. The men\'s grooming market in Southeast Asia shows 34% growth potential. Premium men\'s skincare is particularly underserved in Thailand and Vietnam, where cultural attitudes toward male grooming are rapidly evolving. This represents a $2.3B opportunity over the next three years.',
        date: '2024-03-13',
        reason: 'trend',
        impact: 'high',
        tags: ['men-grooming', 'southeast-asia', 'premium']
      }
    ]
  }
];