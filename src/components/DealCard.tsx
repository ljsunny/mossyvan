import { Clock } from 'lucide-react';
import { useState } from 'react';

interface Deal {
  id: number;
  image: string;
  business: string;
  description: string;
  tag: string;
  discount: string;
  timeLeft: string;
  location: string;
}

interface DealCardProps {
  deal: Deal;
  darkMode: boolean;
}

export function DealCard({ deal, darkMode }: DealCardProps) {
  const [isSaved, setIsSaved] = useState(false);

  const getTagColor = (tag: string) => {
    switch (tag) {
      case 'Flash':
        return '#c99a6e';
      case 'Weekly':
        return '#a67c52';
      case 'Always':
        return '#a8b5a0';
      default:
        return '#c99a6e';
    }
  };

  return (
    <div
      onClick={() => {
        // Handle card tap to open deal details
        console.log('Opening deal:', deal.id);
      }}
      className={`rounded-2xl overflow-hidden transition-all cursor-pointer h-full flex flex-col ${
        darkMode 
          ? 'bg-[#222222] hover:bg-[#2a2a2a]' 
          : 'bg-white hover:shadow-lg'
      } ${isSaved ? 'ring-2 ring-[#c99a6e]' : ''}`}
    >
      {/* Deal Image */}
      <div className="relative h-48 lg:h-52 overflow-hidden flex-shrink-0">
        <img 
          src={deal.image} 
          alt={deal.business}
          className="w-full h-full object-cover"
        />
        
        {/* Tag Badge */}
        <div 
          className="absolute top-3 left-3 px-3 py-1 rounded-full text-white text-sm backdrop-blur-sm"
          style={{ backgroundColor: `${getTagColor(deal.tag)}CC` }}
        >
          {deal.tag}
        </div>

        {/* Discount Badge */}
        <div className="absolute top-3 right-3 px-4 py-2 rounded-xl bg-[#c99a6e] text-white shadow-lg">
          {deal.discount}
        </div>
      </div>

      {/* Card Content */}
      <div className="p-4 flex flex-col flex-1">
        {/* Business Name & Description */}
        <div className="mb-3 flex-1">
          <h3 className={`mb-1 ${darkMode ? 'text-white' : 'text-[#2a2a2a]'}`}>
            {deal.business}
          </h3>
          <p className={darkMode ? 'text-[#a0a0a0]' : 'text-[#6b6b6b]'}>
            {deal.description}
          </p>
        </div>

        {/* Time & Location */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
          <div className={`flex items-center gap-1 ${
            darkMode ? 'text-[#808080]' : 'text-[#999999]'
          }`}>
            <Clock className="w-4 h-4 flex-shrink-0" />
            <span className="text-sm">{deal.timeLeft}</span>
          </div>
          
          <div className={`text-sm ${darkMode ? 'text-[#808080]' : 'text-[#999999]'}`}>
            {deal.location}
          </div>
        </div>

        {/* Save Action (Swipe or Tap) */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            setIsSaved(!isSaved);
          }}
          className={`w-full py-2 rounded-xl transition-all ${
            isSaved
              ? 'bg-[#c99a6e] text-white'
              : darkMode
              ? 'bg-[#2a2a2a] text-[#a0a0a0] hover:bg-[#333333]'
              : 'bg-[#f0ede8] text-[#6b6b6b] hover:bg-[#e8e5e0]'
          }`}
        >
          {isSaved ? 'Saved' : 'Save Deal'}
        </button>
      </div>
    </div>
  );
}