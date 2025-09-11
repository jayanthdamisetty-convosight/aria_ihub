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
  progress: number;
  progressText: string;
  contributingQueries: number;
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
    percentage: 87,
    color: '#FF6B6B'
  }, {
    name: 'Hair Care',
    count: 98,
    percentage: 64,
    color: '#4ECDC4'
  }, {
    name: 'Cosmetics',
    count: 76,
    percentage: 49,
    color: '#45B7D1'
  }, {
    name: 'Fragrance',
    count: 45,
    percentage: 29,
    color: '#96CEB4'
  }];
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
    progress: 80,
    progressText: '24% achieved',
    contributingQueries: 147,
    color: '#4ECDC4'
  }, {
    id: 'products',
    title: 'Annual Goal: "Launch 3 successful new products"',
    target: 'Launch 3 successful new products',
    progress: 66,
    progressText: '2 of 3 launched',
    contributingQueries: 89,
    color: '#FF6B6B'
  }, {
    id: 'sustainability',
    title: 'Annual Goal: "Improve brand perception in sustainability"',
    target: 'Improve brand perception in sustainability',
    progress: 82,
    progressText: '82% positive sentiment',
    contributingQueries: 234,
    color: '#45B7D1'
  }, {
    id: 'opportunities',
    title: 'Annual Goal: "Identify 5 new market opportunities"',
    target: 'Identify 5 new market opportunities',
    progress: 100,
    progressText: '7 identified (140%)',
    contributingQueries: 67,
    color: '#96CEB4'
  }];
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

// Mock leaderboard data
export const mockLeaderboardData = {
  stats: {
    activeUsers: {
      value: 247,
      change: 12
    },
    adoptionRate: {
      value: 68,
      change: 8
    },
    totalQueries: {
      value: '18.4K',
      change: 24
    },
    avgPerUser: {
      value: 74.5,
      change: 11
    },
    dailyActive: {
      value: 89,
      percentage: 36
    },
    avgAgentsUsed: {
      value: 5.2,
      total: 9
    }
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
    avatar: '',
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
    avatar: '',
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
    avatar: '',
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
    avatar: '',
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
    avatar: '',
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
    avatar: '',
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
  }]
};