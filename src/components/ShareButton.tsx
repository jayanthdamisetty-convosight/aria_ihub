import React, { useState, Component } from 'react';
import { UserProfile } from '../utils/mockData';
import { ShareIcon, CheckIcon, CopyIcon, LinkedinIcon, TwitterIcon } from 'lucide-react';
interface ShareButtonProps {
  profile: UserProfile;
}
const ShareButton: React.FC<ShareButtonProps> = ({
  profile
}) => {
  const [isShared, setIsShared] = useState(false);
  const [showOptions, setShowOptions] = useState(false);
  const generateShareText = () => {
    return `🚀 Just hit ${profile.stats.totalInsights}+ marketing insights on @ARIA!
📊 My ${new Date().getFullYear()} analytics:
• ${profile.queryTypes[0].count} ${profile.queryTypes[0].name.toLowerCase()}
• ${profile.queryTypes[1].count} ${profile.queryTypes[1].name.toLowerCase()}
• ${profile.queryTypes[2].count} ${profile.queryTypes[2].name.toLowerCase()}
• ${profile.stats.longestStreak}-day streak record!
#MarketingAnalytics #DataDriven #BrandStrategy`;
  };
  const handleCopyToClipboard = () => {
    const shareText = generateShareText();
    navigator.clipboard.writeText(shareText).then(() => {
      setIsShared(true);
      setTimeout(() => setIsShared(false), 2000);
    }).catch(err => {
      console.error('Failed to copy: ', err);
    });
  };
  const handleShareLinkedIn = () => {
    const shareText = encodeURIComponent(generateShareText());
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=https://aria.ai&summary=${shareText}`, '_blank');
  };
  const handleShareTwitter = () => {
    const shareText = encodeURIComponent(generateShareText());
    window.open(`https://twitter.com/intent/tweet?text=${shareText}`, '_blank');
  };
  const toggleOptions = () => {
    setShowOptions(!showOptions);
  };
  return <div className="relative">
      <button onClick={toggleOptions} className="flex items-center gap-2 bg-gray-900 hover:bg-black text-white font-light py-3 px-6 rounded-full transition-all duration-300">
        <ShareIcon size={18} />
        Share My Analytics Profile
      </button>
      {showOptions && <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-3 bg-white rounded-lg shadow-lg p-2 min-w-[220px] z-10 animate-fadeIn">
          <button onClick={handleCopyToClipboard} className="w-full flex items-center gap-2 px-4 py-2 hover:bg-gray-50 rounded-md transition-colors text-left">
            {isShared ? <CheckIcon size={18} className="text-green-500" /> : <CopyIcon size={18} />}
            <span>
              {isShared ? 'Copied to clipboard!' : 'Copy to clipboard'}
            </span>
          </button>
          <button onClick={handleShareLinkedIn} className="w-full flex items-center gap-2 px-4 py-2 hover:bg-gray-50 rounded-md transition-colors text-left">
            <LinkedinIcon size={18} className="text-[#0077b5]" />
            <span>Share on LinkedIn</span>
          </button>
          <button onClick={handleShareTwitter} className="w-full flex items-center gap-2 px-4 py-2 hover:bg-gray-50 rounded-md transition-colors text-left">
            <TwitterIcon size={18} className="text-[#1DA1F2]" />
            <span>Share on Twitter</span>
          </button>
        </div>}
    </div>;
};
export default ShareButton;