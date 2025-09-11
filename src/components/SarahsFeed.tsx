import React, { useState } from 'react';
import { ArrowUpIcon, ArrowDownIcon, CheckIcon, XIcon, BookmarkIcon, BarChart3Icon, ShareIcon } from 'lucide-react';
const SarahsFeed: React.FC = () => {
  const [swipedCards, setSwipedCards] = useState<Record<string, string>>({});
  const handleSwipe = (cardId: string, direction: 'left' | 'right' | 'up' | 'down') => {
    setSwipedCards(prev => ({
      ...prev,
      [cardId]: direction
    }));
  };
  return <div className="max-w-md mx-auto bg-gray-100 min-h-screen">
      {/* Top navigation bar */}
      <div className="sticky top-0 z-10 bg-white border-b border-gray-200 px-4 py-3 flex justify-between items-center">
        <div className="text-lg font-medium">ARIA Monday Feed</div>
        <div className="flex items-center gap-2">
          <span className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded-full">
            52 min saved
          </span>
          <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white">
            SC
          </div>
        </div>
      </div>
      {/* Feed content */}
      <div className="px-2 py-4 space-y-4">
        {/* Card 1: Competitor Alert */}
        <div className={`bg-white rounded-xl overflow-hidden shadow-sm relative ${swipedCards['card1'] ? 'opacity-50' : ''}`} style={{
        aspectRatio: '9/16',
        maxHeight: '80vh'
      }}>
          <div className="relative h-full">
            {/* Split screen video */}
            <div className="flex h-full">
              <div className="w-1/2 bg-cover bg-center" style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80')"
            }}>
                <div className="absolute top-2 left-2 bg-white/20 backdrop-blur-md rounded px-2 py-1 text-xs text-white">
                  L'Oréal
                </div>
              </div>
              <div className="w-1/2 bg-cover bg-center" style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1596755094514-f87e34085b2c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80')"
            }}>
                <div className="absolute top-2 right-2 bg-white/20 backdrop-blur-md rounded px-2 py-1 text-xs text-white">
                  Your Campaign
                </div>
              </div>
            </div>
            {/* Overlay content */}
            <div className="absolute inset-x-0 top-0 p-4 bg-gradient-to-b from-black/70 to-transparent text-white">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-amber-400 text-xl">⚠️</span>
                <span className="font-bold text-lg">
                  L'ORÉAL MOVED WHILE YOU SLEPT
                </span>
              </div>
              <p className="text-sm font-medium">
                "Clean Conscious" Launch • 47K mentions
              </p>
            </div>
            {/* Bottom overlay */}
            <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/70 to-transparent text-white">
              <p className="text-sm mb-2">"They're using your playbook"</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1">
                  <span className="text-xs bg-white/20 backdrop-blur-md rounded-full px-2 py-1">
                    2.3M views
                  </span>
                </div>
                <button className="bg-blue-500 text-white text-xs rounded-full px-3 py-1 flex items-center gap-1">
                  <ArrowUpIcon size={12} />
                  <span>Counter-strategy</span>
                </button>
              </div>
            </div>
            {/* Swipe actions */}
            <div className="absolute inset-y-0 left-0 w-12 flex items-center justify-center opacity-0 hover:opacity-100">
              <button onClick={() => handleSwipe('card1', 'left')} className="w-10 h-10 rounded-full bg-white/30 backdrop-blur-md flex items-center justify-center">
                <XIcon size={20} className="text-white" />
              </button>
            </div>
            <div className="absolute inset-y-0 right-0 w-12 flex items-center justify-center opacity-0 hover:opacity-100">
              <button onClick={() => handleSwipe('card1', 'right')} className="w-10 h-10 rounded-full bg-white/30 backdrop-blur-md flex items-center justify-center">
                <CheckIcon size={20} className="text-white" />
              </button>
            </div>
          </div>
        </div>
        {/* Card 2: Viral Trend Capture */}
        <div className={`bg-white rounded-xl overflow-hidden shadow-sm relative ${swipedCards['card2'] ? 'opacity-50' : ''}`} style={{
        aspectRatio: '9/16',
        maxHeight: '80vh'
      }}>
          <div className="relative h-full">
            {/* Grid of TikToks */}
            <div className="grid grid-cols-2 grid-rows-2 h-full">
              <div className="bg-cover bg-center" style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1583001809873-a128495da465?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80')"
            }}>
                <div className="absolute top-2 left-2 bg-white/20 backdrop-blur-md rounded px-2 py-1 text-xs text-white">
                  @kbeauty_seoul
                </div>
              </div>
              <div className="bg-cover bg-center" style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1596755094514-f87e34085b2c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80')"
            }}>
                <div className="absolute top-2 right-2 bg-white/20 backdrop-blur-md rounded px-2 py-1 text-xs text-white">
                  @mumbaiglow
                </div>
              </div>
              <div className="bg-cover bg-center" style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1614159102522-45611c6fe8db?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80')"
            }}>
                <div className="absolute bottom-2 left-2 bg-white/20 backdrop-blur-md rounded px-2 py-1 text-xs text-white">
                  @skinbysarah
                </div>
              </div>
              <div className="bg-cover bg-center" style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1601049676869-702ea24cfd58?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80')"
            }}>
                <div className="absolute bottom-2 right-2 bg-white/20 backdrop-blur-md rounded px-2 py-1 text-xs text-white">
                  YOUR COMPETITOR
                </div>
              </div>
            </div>
            {/* Overlay content */}
            <div className="absolute inset-x-0 top-0 p-4 bg-gradient-to-b from-black/70 to-transparent text-white">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-red-400 text-xl">🔥</span>
                <span className="font-bold text-lg">GLASS SKIN EXPLODING</span>
              </div>
              <p className="text-sm font-medium">+347% in 48 hours</p>
            </div>
            {/* Center floating pill */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-md rounded-full px-3 py-1.5 text-white text-sm">
              "Snail mucin mentioned 89K times"
            </div>
            {/* Bottom overlay */}
            <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/70 to-transparent text-white">
              <div className="flex justify-between items-center mb-2">
                <div className="text-xs">
                  <div>4.2M views</div>
                  <div>2.8M views</div>
                </div>
                <div className="text-xs text-right">
                  <div>1.9M views</div>
                  <div>890K views</div>
                </div>
              </div>
              <button className="w-full bg-blue-500 text-white rounded-full py-2 text-sm font-medium">
                Launch Response Campaign
              </button>
            </div>
          </div>
        </div>
        {/* Card 3: Influencer Opportunity */}
        <div className={`bg-white rounded-xl overflow-hidden shadow-sm relative ${swipedCards['card3'] ? 'opacity-50' : ''}`} style={{
        aspectRatio: '9/16',
        maxHeight: '80vh'
      }}>
          <div className="relative h-full">
            {/* Influencer reel */}
            <div className="h-full bg-cover bg-center" style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1618309686339-3c5bfeb3a7ba?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80')"
          }}>
              {/* Instagram UI elements */}
              <div className="absolute top-4 left-4 flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-cover bg-center border-2 border-white" style={{
                backgroundImage: "url('https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80')"
              }}></div>
                <div className="text-white">
                  <div className="text-sm font-medium">browngirlskincare</div>
                  <div className="text-xs">Mumbai, India</div>
                </div>
              </div>
            </div>
            {/* Overlay content */}
            <div className="absolute inset-x-0 top-16 p-4 bg-gradient-to-b from-black/70 to-transparent text-white">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-blue-400 text-xl">💎</span>
                <span className="font-bold text-lg">
                  PARTNERSHIP OPPORTUNITY
                </span>
              </div>
              <p className="text-sm font-medium">
                @browngirlskincare wants to collab
              </p>
            </div>
            {/* Stats overlay */}
            <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/70 to-transparent text-white">
              <div className="mb-3">
                <div className="flex justify-between mb-1">
                  <span className="text-sm">2.3M followers • Mumbai-based</span>
                </div>
                <div className="text-sm mb-2">
                  Avg engagement: 8.7% (exceptional)
                </div>
                <div className="text-sm mb-3">
                  Her audience = Your target exactly
                </div>
                <div className="space-y-1 mb-4">
                  <div className="flex items-center gap-2">
                    <span className="text-green-400">✓</span>
                    <span className="text-sm">No controversies</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-green-400">✓</span>
                    <span className="text-sm">Authentic voice</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-green-400">✓</span>
                    <span className="text-sm">Sustainability focused</span>
                  </div>
                </div>
              </div>
              <div className="flex justify-between">
                <button onClick={() => handleSwipe('card3', 'left')} className="flex-1 bg-red-500 text-white py-2 rounded-l-full text-sm font-medium flex items-center justify-center gap-1">
                  <XIcon size={16} />
                  <span>Pass</span>
                </button>
                <button onClick={() => handleSwipe('card3', 'right')} className="flex-1 bg-green-500 text-white py-2 rounded-r-full text-sm font-medium flex items-center justify-center gap-1">
                  <CheckIcon size={16} />
                  <span>Approve</span>
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* Card 4: Crisis Dodged Alert */}
        <div className={`bg-white rounded-xl overflow-hidden shadow-sm relative ${swipedCards['card4'] ? 'opacity-50' : ''}`} style={{
        aspectRatio: '9/16',
        maxHeight: '80vh'
      }}>
          <div className="relative h-full">
            {/* Screenshot of angry comments */}
            <div className="h-full bg-cover bg-center" style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80')"
          }}>
              {/* Social media UI overlay */}
              <div className="absolute inset-0 bg-black/30">
                <div className="absolute top-16 inset-x-0 px-4">
                  <div className="bg-white rounded-lg p-3 mb-2">
                    <div className="flex items-center gap-2 mb-1">
                      <div className="w-8 h-8 rounded-full bg-cover bg-center" style={{
                      backgroundImage: "url('https://images.unsplash.com/photo-1557555187-23d685287bc3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80')"
                    }}></div>
                      <div className="text-sm font-medium">angry_customer1</div>
                    </div>
                    <p className="text-sm">
                      "These ingredients are NOT clean! 😡"
                    </p>
                  </div>
                  <div className="bg-white rounded-lg p-3 mb-2">
                    <div className="flex items-center gap-2 mb-1">
                      <div className="w-8 h-8 rounded-full bg-cover bg-center" style={{
                      backgroundImage: "url('https://images.unsplash.com/photo-1569913486515-b74bf7751574?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80')"
                    }}></div>
                      <div className="text-sm font-medium">
                        eco_beauty_lover
                      </div>
                    </div>
                    <p className="text-sm">
                      "Greenwashing at its finest. Switching brands."
                    </p>
                  </div>
                  <div className="bg-white rounded-lg p-3">
                    <div className="flex items-center gap-2 mb-1">
                      <div className="w-8 h-8 rounded-full bg-cover bg-center" style={{
                      backgroundImage: "url('https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80')"
                    }}></div>
                      <div className="text-sm font-medium">
                        conscious_consumer
                      </div>
                    </div>
                    <p className="text-sm">
                      "Switching to brands that actually care about us 👋"
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* Overlay content */}
            <div className="absolute inset-x-0 top-0 p-4 bg-gradient-to-b from-black/70 to-transparent text-white">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-blue-400 text-xl">🛡️</span>
                <span className="font-bold text-lg">
                  COMPETITOR CRISIS = YOUR WIN
                </span>
              </div>
              <p className="text-sm font-medium">
                P&G's influencer @skinbykenzie under fire
              </p>
            </div>
            {/* Bottom overlay */}
            <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/70 to-transparent text-white">
              <div className="bg-blue-500/30 backdrop-blur-sm rounded-lg p-3 mb-4">
                <div className="text-sm font-medium mb-1">Your advantage:</div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Your clean beauty score:</span>
                  <span className="text-sm font-bold">87%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Theirs:</span>
                  <span className="text-sm font-bold">41%</span>
                </div>
              </div>
              <button className="w-full bg-blue-500 text-white rounded-full py-2 text-sm font-medium">
                Draft Response Post
              </button>
            </div>
          </div>
        </div>
        {/* Card 5: Consumer Pulse Check */}
        <div className={`bg-white rounded-xl overflow-hidden shadow-sm relative ${swipedCards['card5'] ? 'opacity-50' : ''}`} style={{
        aspectRatio: '9/16',
        maxHeight: '80vh'
      }}>
          <div className="relative h-full">
            {/* Carousel indicator dots */}
            <div className="absolute top-2 inset-x-0 z-10 flex justify-center gap-1">
              <div className="w-6 h-1 rounded-full bg-white"></div>
              <div className="w-6 h-1 rounded-full bg-white/40"></div>
              <div className="w-6 h-1 rounded-full bg-white/40"></div>
              <div className="w-6 h-1 rounded-full bg-white/40"></div>
            </div>
            {/* Customer UGC */}
            <div className="h-full bg-cover bg-center" style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1596815064285-45ed8a9c0463?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80')"
          }}>
              {/* Instagram-style comment overlay */}
              <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="text-4xl font-bold mb-2">
                    "Need snail mucin NOW"
                  </div>
                  <div className="text-lg">@mumbai_skincare_lover</div>
                </div>
              </div>
            </div>
            {/* Overlay content */}
            <div className="absolute inset-x-0 top-0 p-4 bg-gradient-to-b from-black/70 to-transparent text-white pt-8">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-white text-xl">💬</span>
                <span className="font-bold text-lg">
                  WHAT MUMBAI IS SAYING TODAY
                </span>
              </div>
              <p className="text-sm font-medium">About your category:</p>
            </div>
            {/* Bottom overlay */}
            <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/70 to-transparent text-white">
              <div className="bg-white/20 backdrop-blur-md rounded-lg p-3 mb-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm">Sentiment:</span>
                  <span className="text-sm font-bold text-green-400">
                    73% purchase intent
                  </span>
                </div>
                <div className="w-full bg-white/30 h-2 rounded-full mt-1">
                  <div className="bg-green-400 h-full rounded-full" style={{
                  width: '73%'
                }}></div>
                </div>
              </div>
              <div className="flex justify-between">
                <button className="flex-1 bg-white/20 backdrop-blur-md text-white py-2 rounded-full text-sm font-medium mr-2">
                  Next Post
                </button>
                <button className="flex-1 bg-blue-500 text-white py-2 rounded-full text-sm font-medium">
                  View All Mentions
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* Card 6: Your Performance Snapshot */}
        <div className={`bg-white rounded-xl overflow-hidden shadow-sm relative ${swipedCards['card6'] ? 'opacity-50' : ''}`} style={{
        aspectRatio: '9/16',
        maxHeight: '80vh'
      }}>
          <div className="relative h-full">
            {/* Your top performing post */}
            <div className="h-full bg-cover bg-center" style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1592136957897-b2b6ca21e10d?ixlib=1.2.1&auto=format&fit=crop&w=800&q=80')"
          }}>
              {/* Instagram UI elements */}
              <div className="absolute top-4 left-4 flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-cover bg-center border-2 border-white" style={{
                backgroundImage: "url('https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80')"
              }}></div>
                <div className="text-white">
                  <div className="text-sm font-medium">Your Brand</div>
                  <div className="text-xs">Sponsored</div>
                </div>
              </div>
            </div>
            {/* Overlay content */}
            <div className="absolute inset-x-0 top-16 p-4 bg-gradient-to-b from-black/70 to-transparent text-white">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-green-400 text-xl">📈</span>
                <span className="font-bold text-lg">YOUR WEEKEND WINNER</span>
              </div>
              <p className="text-sm font-medium">
                Your sustainability post outperformed
              </p>
            </div>
            {/* Stats overlay */}
            <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/70 to-transparent text-white">
              <div className="mb-3">
                <div className="flex justify-between mb-1">
                  <span className="text-sm">487K views</span>
                  <span className="text-sm">67K likes</span>
                </div>
                <div className="text-sm mb-2">
                  8.9K shares • Beat L'Oréal's by 34%
                </div>
                <div className="bg-white/20 backdrop-blur-md rounded-lg p-3 mb-3">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-cover bg-center" style={{
                    backgroundImage: "url('https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80')"
                  }}></div>
                    <div className="text-sm">
                      <span className="font-medium">top_commenter</span> "THIS
                      is why I trust you"
                    </div>
                  </div>
                </div>
                {/* Mini heatmap */}
                <div className="flex h-12 gap-0.5 mb-4">
                  {[30, 45, 80, 65, 90, 75, 60, 40, 50, 70].map((height, i) => <div key={i} className="flex-1 bg-blue-400/20 rounded-sm flex items-end">
                      <div className="w-full bg-blue-400" style={{
                    height: `${height}%`
                  }}></div>
                    </div>)}
                </div>
              </div>
              <div className="flex justify-between">
                <button className="flex-1 bg-white/20 backdrop-blur-md text-white py-2 rounded-full text-sm font-medium mr-2">
                  View Analytics
                </button>
                <button className="flex-1 bg-blue-500 text-white py-2 rounded-full text-sm font-medium">
                  Boost Post
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* Card 7: Decision Card - Snail Mucin */}
        <div className={`bg-white rounded-xl overflow-hidden shadow-sm relative ${swipedCards['card7'] ? 'opacity-50' : ''}`} style={{
        aspectRatio: '9/16',
        maxHeight: '80vh'
      }}>
          <div className="relative h-full">
            {/* Split screen */}
            <div className="flex h-full">
              <div className="w-1/2 bg-cover bg-center" style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1609097164673-7cfbf1af49c0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80')"
            }}>
                <div className="absolute top-2 left-2 bg-white/20 backdrop-blur-md rounded px-2 py-1 text-xs text-white">
                  Korean Trend
                </div>
              </div>
              <div className="w-1/2 bg-cover bg-center" style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1604644401890-0bd678c83788?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80')"
            }}>
                <div className="absolute top-2 right-2 bg-white/20 backdrop-blur-md rounded px-2 py-1 text-xs text-white">
                  Mumbai Stores
                </div>
              </div>
            </div>
            {/* Overlay content */}
            <div className="absolute inset-x-0 top-0 p-4 bg-gradient-to-b from-black/70 to-transparent text-white">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-red-500 text-xl">🔴</span>
                <span className="font-bold text-lg">
                  DECISION NEEDED BY NOON
                </span>
              </div>
              <p className="text-sm font-medium">Snail Mucin Response</p>
              <div className="mt-2 px-2 py-1 bg-red-500/30 backdrop-blur-sm rounded text-xs inline-block">
                Decision expires in 2h 34m
              </div>
            </div>
            {/* Bottom overlay */}
            <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/70 to-transparent text-white">
              <div className="mb-4 space-y-2">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-white"></span>
                  <span className="text-sm">Korean brands: SOLD OUT</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-white"></span>
                  <span className="text-sm">Your R&D: Peptide ready</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-white"></span>
                  <span className="text-sm">
                    First-mover advantage: 72 hours
                  </span>
                </div>
              </div>
              <div className="flex justify-between">
                <button className="flex-1 bg-yellow-500 text-white py-3 rounded-l-lg text-sm font-medium">
                  Wait & Watch
                </button>
                <button className="flex-1 bg-green-500 text-white py-3 rounded-r-lg text-sm font-medium">
                  Launch Tuesday
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* Card 8: Trend Prediction */}
        <div className={`bg-white rounded-xl overflow-hidden shadow-sm relative ${swipedCards['card8'] ? 'opacity-50' : ''}`} style={{
        aspectRatio: '9/16',
        maxHeight: '80vh'
      }}>
          <div className="relative h-full">
            {/* Trend visualization */}
            <div className="h-full bg-gradient-to-br from-blue-900 to-purple-900 flex items-center justify-center">
              {/* Animated graph */}
              <div className="w-full h-3/4 p-4 relative">
                <div className="absolute bottom-0 left-0 right-0 h-1/2">
                  {/* Trend lines */}
                  <div className="absolute bottom-0 left-0 right-0 h-px bg-white/20"></div>
                  <div className="absolute bottom-1/4 left-0 right-0 h-px bg-white/20"></div>
                  <div className="absolute bottom-1/2 left-0 right-0 h-px bg-white/20"></div>
                  <div className="absolute bottom-3/4 left-0 right-0 h-px bg-white/20"></div>
                  <div className="absolute top-0 left-0 right-0 h-px bg-white/20"></div>
                  {/* Trend curve */}
                  <svg className="absolute inset-0" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <path d="M0,100 C10,95 20,85 30,70 C40,55 50,30 70,20 C85,12 95,5 100,0" fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="1" />
                    <path d="M0,100 C10,95 20,85 30,70" fill="none" stroke="#4f46e5" strokeWidth="3" />
                    <path d="M30,70 C40,55 50,30 70,20" fill="none" stroke="#8b5cf6" strokeWidth="3" strokeDasharray="4 2" />
                    <path d="M70,20 C85,12 95,5 100,0" fill="none" stroke="#d946ef" strokeWidth="3" strokeDasharray="2 2" />
                  </svg>
                  {/* Current point indicator */}
                  <div className="absolute left-[30%] bottom-[70%] w-3 h-3 bg-white rounded-full transform -translate-x-1/2 -translate-y-1/2 shadow-lg shadow-indigo-500/50"></div>
                  {/* Projected point indicator */}
                  <div className="absolute right-0 top-0 w-4 h-4 bg-pink-500 rounded-full transform -translate-x-1/2 -translate-y-1/2 animate-pulse"></div>
                </div>
                {/* Labels */}
                <div className="absolute bottom-0 left-0 text-xs text-white/70">
                  Seoul
                </div>
                <div className="absolute bottom-0 left-[30%] text-xs text-white/70 transform -translate-x-1/2">
                  Now
                </div>
                <div className="absolute bottom-0 right-0 text-xs text-white/70">
                  Mumbai (projected)
                </div>
              </div>
            </div>
            {/* Overlay content */}
            <div className="absolute inset-x-0 top-0 p-4 bg-gradient-to-b from-black/70 to-transparent text-white">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-purple-400 text-xl">🔮</span>
                <span className="font-bold text-lg">NEXT TO EXPLODE</span>
              </div>
              <p className="text-sm font-medium">
                Based on Seoul &gt; Mumbai pattern
              </p>
            </div>
            {/* Bottom overlay */}
            <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/70 to-transparent text-white">
              <div className="bg-white/20 backdrop-blur-md rounded-lg p-4 mb-4">
                <div className="text-lg font-bold mb-1">
                  "Centella Asiatica"
                </div>
                <div className="text-sm mb-2">starting to spike</div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Expected Mumbai arrival:</span>
                  <span className="font-medium">10 days</span>
                </div>
                <div className="flex justify-between text-sm mb-3">
                  <span>Current mentions:</span>
                  <span className="font-medium">12K → projected 180K</span>
                </div>
                <div className="text-xs text-right">
                  Historical accuracy: 89%
                </div>
              </div>
              <div className="flex justify-between">
                <button className="flex-1 bg-white/20 backdrop-blur-md text-white py-2 rounded-full text-sm font-medium mr-2">
                  Remind in 5 days
                </button>
                <button className="flex-1 bg-purple-500 text-white py-2 rounded-full text-sm font-medium">
                  Brief R&D Now
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* Card 9: Friday Follow-Up Success */}
        <div className={`bg-white rounded-xl overflow-hidden shadow-sm relative ${swipedCards['card9'] ? 'opacity-50' : ''}`} style={{
        aspectRatio: '9/16',
        maxHeight: '80vh'
      }}>
          <div className="relative h-full">
            {/* Split screen */}
            <div className="flex h-full">
              <div className="w-1/2 bg-cover bg-center" style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80')"
            }}>
                <div className="absolute top-2 left-2 bg-white/20 backdrop-blur-md rounded px-2 py-1 text-xs text-white">
                  Friday Prediction
                </div>
              </div>
              <div className="w-1/2 bg-cover bg-center" style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1581299894007-aaa50297cf16?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80')"
            }}>
                <div className="absolute top-2 right-2 bg-white/20 backdrop-blur-md rounded px-2 py-1 text-xs text-white">
                  Monday Result
                </div>
              </div>
            </div>
            {/* Overlay content */}
            <div className="absolute inset-x-0 top-0 p-4 bg-gradient-to-b from-black/70 to-transparent text-white">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-green-400 text-xl">✅</span>
                <span className="font-bold text-lg">YOU CALLED IT</span>
              </div>
              <p className="text-sm font-medium">
                Your Friday prediction was spot on
              </p>
            </div>
            {/* Bottom overlay */}
            <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/70 to-transparent text-white">
              <div className="mb-4">
                <div className="flex justify-between mb-2">
                  <div className="text-sm">
                    <div className="font-medium">Friday:</div>
                    <div>"MG will underperform"</div>
                  </div>
                  <div className="text-sm text-right">
                    <div className="font-medium">Monday:</div>
                    <div className="text-red-400">MG -23% engagement</div>
                  </div>
                </div>
                <div className="h-px bg-white/20 my-3"></div>
                <div className="text-sm mb-1">
                  Your instinct = Data confirmed
                </div>
                <div className="text-sm">Saved: $47K media spend</div>
              </div>
              <button className="w-full bg-green-500 text-white py-2 rounded-full text-sm font-medium flex items-center justify-center gap-2">
                <ShareIcon size={16} />
                <span>Share Win with Team</span>
              </button>
            </div>
          </div>
        </div>
        {/* Card 10: Quick Wins Available */}
        <div className={`bg-white rounded-xl overflow-hidden shadow-sm relative ${swipedCards['card10'] ? 'opacity-50' : ''}`} style={{
        aspectRatio: '9/16',
        maxHeight: '80vh'
      }}>
          <div className="relative h-full bg-gradient-to-br from-blue-800 to-indigo-900 p-6">
            {/* Header */}
            <div className="flex items-center gap-2 mb-6">
              <span className="text-yellow-400 text-2xl">⚡</span>
              <span className="text-white font-bold text-xl">
                QUICK WINS - TAP TO CLAIM
              </span>
            </div>
            {/* Story circles */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              {/* Story 1 */}
              <div className="flex flex-col items-center">
                <div className="relative mb-2">
                  <div className="w-20 h-20 rounded-full bg-cover bg-center border-2 border-white" style={{
                  backgroundImage: "url('https://images.unsplash.com/photo-1564349683136-77e08dba1ef3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80')"
                }}></div>
                  <div className="absolute inset-0 flex items-center justify-center bg-black/30 rounded-full">
                    <div className="text-xs text-white font-medium">24h</div>
                  </div>
                </div>
                <div className="text-center text-white text-xs">
                  <div className="font-medium">Trending Audio</div>
                  <div className="text-white/70">2.3M potential</div>
                </div>
              </div>
              {/* Story 2 */}
              <div className="flex flex-col items-center">
                <div className="relative mb-2">
                  <div className="w-20 h-20 rounded-full bg-cover bg-center border-2 border-white" style={{
                  backgroundImage: "url('https://images.unsplash.com/photo-1542596594-649edbc13630?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80')"
                }}></div>
                  <div className="absolute inset-0 flex items-center justify-center bg-black/30 rounded-full">
                    <div className="text-xs text-white font-medium">18h</div>
                  </div>
                </div>
                <div className="text-center text-white text-xs">
                  <div className="font-medium">#MumbaiGlow</div>
                  <div className="text-white/70">Unclaimed</div>
                </div>
              </div>
              {/* Story 3 */}
              <div className="flex flex-col items-center">
                <div className="relative mb-2">
                  <div className="w-20 h-20 rounded-full bg-cover bg-center border-2 border-white" style={{
                  backgroundImage: "url('https://images.unsplash.com/photo-1571513800374-df1bbe650e56?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80')"
                }}></div>
                  <div className="absolute inset-0 flex items-center justify-center bg-black/30 rounded-full">
                    <div className="text-xs text-white font-medium">6h</div>
                  </div>
                </div>
                <div className="text-center text-white text-xs">
                  <div className="font-medium">Vogue India</div>
                  <div className="text-white/70">Collab request</div>
                </div>
              </div>
            </div>
            {/* Stats */}
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 mb-6">
              <div className="text-white text-sm mb-3">
                This Week's Quick Wins:
              </div>
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-white">7</div>
                  <div className="text-xs text-white/70">Available</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">4</div>
                  <div className="text-xs text-white/70">Claimed</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-green-400">89%</div>
                  <div className="text-xs text-white/70">Success Rate</div>
                </div>
              </div>
            </div>
            {/* Action buttons */}
            <button className="w-full bg-gradient-to-r from-blue-500 to-indigo-500 text-white py-3 rounded-xl text-sm font-medium mb-3">
              View All Quick Wins
            </button>
            <button className="w-full bg-white/10 backdrop-blur-md text-white py-3 rounded-xl text-sm font-medium">
              Set Quick Win Preferences
            </button>
          </div>
        </div>
      </div>
      {/* Bottom navigation */}
      <div className="sticky bottom-0 z-10 bg-white border-t border-gray-200 px-2 py-3 flex justify-around">
        <button className="flex flex-col items-center text-blue-500">
          <BarChart3Icon size={20} />
          <span className="text-xs mt-1">Feed</span>
        </button>
        <button className="flex flex-col items-center text-gray-400 relative">
          <CheckIcon size={20} />
          <span className="text-xs mt-1">Decisions</span>
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-4 h-4 rounded-full flex items-center justify-center">
            3
          </span>
        </button>
        <button className="flex flex-col items-center text-gray-400">
          <ArrowUpIcon size={20} />
          <span className="text-xs mt-1">Goals</span>
        </button>
        <button className="flex flex-col items-center text-gray-400">
          <BookmarkIcon size={20} />
          <span className="text-xs mt-1">Saved</span>
        </button>
      </div>
    </div>;
};
export default SarahsFeed;