import { useState } from 'react';
import { Logo1 } from './logos';
import { Search, Sun, Moon, Home, Compass, Plus, Heart, User, Menu } from 'lucide-react';
import { DealCard } from './DealCard';

interface HomePageProps {
  darkMode: boolean;
  onToggleDarkMode: () => void;
}

const categories = ['All Deals', 'Happy Hour', 'Flash Deals', 'Weekly Specials'];

const deals = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1622744527656-8ca8ae3ac038?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicnVuY2glMjBjb2ZmZWV8ZW58MXx8fHwxNzY1MTAzOTU1fDA&ixlib=rb-4.1.0&q=80&w=1080',
    business: 'Cafe Medina',
    description: 'Weekend brunch special with signature waffles',
    tag: 'Flash',
    discount: '20% off',
    timeLeft: '2 days left',
    location: 'Downtown Vancouver'
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1685956030838-bde2f02234c1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYWZlJTIwaW50ZXJpb3IlMjB3YXJtfGVufDF8fHx8MTc2NTAzNzE3Nnww&ixlib=rb-4.1.0&q=80&w=1080',
    business: 'Revolver Coffee',
    description: 'Afternoon coffee & pastry bundle',
    tag: 'Weekly',
    discount: '15% off',
    timeLeft: '5 days left',
    location: 'Gastown'
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1598994671512-395d7a6147e0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2NrdGFpbCUyMGJhcnxlbnwxfHx8fDE3NjUwNDU5MjV8MA&ixlib=rb-4.1.0&q=80&w=1080',
    business: 'The Diamond',
    description: 'Happy hour cocktails and small plates',
    tag: 'Always',
    discount: '30% off',
    timeLeft: 'Daily 3-6pm',
    location: 'Gastown'
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1684568519320-8c6b14f7e65f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXN0YXVyYW50JTIwZm9vZCUyMHBsYXRpbmd8ZW58MXx8fHwxNzY1MDI1NDc4fDA&ixlib=rb-4.1.0&q=80&w=1080',
    business: 'Published on Main',
    description: 'Farm-to-table dinner for two',
    tag: 'Weekly',
    discount: '25% off',
    timeLeft: '3 days left',
    location: 'Main Street'
  },
  {
    id: 5,
    image: 'https://images.unsplash.com/photo-1696721497670-d57754966c1e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYWtlcnklMjBwYXN0cmllc3xlbnwxfHx8fDE3NjUwOTI1NjF8MA&ixlib=rb-4.1.0&q=80&w=1080',
    business: 'Beaucoup Bakery',
    description: 'Fresh croissants & artisan breads',
    tag: 'Flash',
    discount: '10% off',
    timeLeft: '1 day left',
    location: 'Kitsilano'
  },
  {
    id: 6,
    image: 'https://images.unsplash.com/photo-1615222599276-3d8149bc51ed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b2dhJTIwc3R1ZGlvJTIwY2FsbXxlbnwxfHx8fDE3NjUwMTc5NDN8MA&ixlib=rb-4.1.0&q=80&w=1080',
    business: 'Yyoga Studios',
    description: 'First month unlimited classes',
    tag: 'Weekly',
    discount: '40% off',
    timeLeft: '7 days left',
    location: 'Multiple Locations'
  },
];

export function HomePage({ darkMode, onToggleDarkMode }: HomePageProps) {
  const [selectedCategory, setSelectedCategory] = useState('All Deals');
  const [activeNav, setActiveNav] = useState('Home');

  return (
    <div className={`min-h-screen transition-colors duration-300 lg:pb-0 pb-20 ${
      darkMode ? 'bg-[#1a1a1a]' : 'bg-[#faf9f7]'
    }`}>
      {/* Desktop Top Navigation - Hidden on mobile */}
      <nav className={`hidden lg:block sticky top-0 z-20 transition-colors backdrop-blur-lg ${
        darkMode ? 'bg-[#1a1a1a]/95 border-b border-[#2a2a2a]' : 'bg-[#faf9f7]/95 border-b border-[#e8e5e0]'
      }`}>
        <div className="max-w-[1440px] mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Logo1 type="combined" darkMode={darkMode} size={28} />
            
            {/* Desktop Nav Links */}
            <div className="flex items-center gap-8">
              <DesktopNavButton
                icon={<Home className="w-5 h-5" />}
                label="Home"
                active={activeNav === 'Home'}
                darkMode={darkMode}
                onClick={() => setActiveNav('Home')}
              />
              <DesktopNavButton
                icon={<Compass className="w-5 h-5" />}
                label="Explore"
                active={activeNav === 'Explore'}
                darkMode={darkMode}
                onClick={() => setActiveNav('Explore')}
              />
              <DesktopNavButton
                icon={<Heart className="w-5 h-5" />}
                label="Saved"
                active={activeNav === 'Favorites'}
                darkMode={darkMode}
                onClick={() => setActiveNav('Favorites')}
              />
              <DesktopNavButton
                icon={<User className="w-5 h-5" />}
                label="Profile"
                active={activeNav === 'Profile'}
                darkMode={darkMode}
                onClick={() => setActiveNav('Profile')}
              />
            </div>

            {/* Right side actions */}
            <div className="flex items-center gap-3">
              <button
                className={`px-6 py-2.5 rounded-xl transition-all bg-[#c99a6e] text-white hover:bg-[#a67c52] flex items-center gap-2`}
                onClick={() => setActiveNav('Add')}
              >
                <Plus className="w-5 h-5" />
                Add Deal
              </button>
              <button
                onClick={onToggleDarkMode}
                className={`p-2.5 rounded-xl transition-colors ${
                  darkMode 
                    ? 'bg-[#2a2a2a] text-white hover:bg-[#333333]' 
                    : 'bg-[#f0ede8] text-[#2a2a2a] hover:bg-[#e8e5e0]'
                }`}
                aria-label="Toggle dark mode"
              >
                {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Header - Hidden on desktop */}
      <header className={`lg:hidden sticky top-0 z-10 transition-colors backdrop-blur-lg ${
        darkMode ? 'bg-[#1a1a1a]/95 border-b border-[#2a2a2a]' : 'bg-[#faf9f7]/95 border-b border-[#e8e5e0]'
      }`}>
        <div className="max-w-2xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between mb-4">
            <Logo1 type="combined" darkMode={darkMode} size={32} />
            <button
              onClick={onToggleDarkMode}
              className={`p-2 rounded-full transition-colors ${
                darkMode 
                  ? 'bg-[#2a2a2a] text-white hover:bg-[#333333]' 
                  : 'bg-[#f0ede8] text-[#2a2a2a] hover:bg-[#e8e5e0]'
              }`}
              aria-label="Toggle dark mode"
            >
              {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
          </div>
          
          <div className="mb-3">
            <h1 className={`text-2xl mb-1 ${darkMode ? 'text-white' : 'text-[#2a2a2a]'}`}>
              Discover deals near you
            </h1>
            <p className={darkMode ? 'text-[#a0a0a0]' : 'text-[#6b6b6b]'}>
              Vancouver, BC
            </p>
          </div>

          {/* Search Bar */}
          <div className="relative">
            <Search className={`absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 ${
              darkMode ? 'text-[#808080]' : 'text-[#999999]'
            }`} />
            <input
              type="text"
              placeholder="Search deals, cafés, restaurants…"
              className={`w-full pl-12 pr-4 py-3 rounded-xl transition-colors ${
                darkMode 
                  ? 'bg-[#222222] text-white placeholder:text-[#808080] border border-[#2a2a2a] focus:border-[#c99a6e]' 
                  : 'bg-white text-[#2a2a2a] placeholder:text-[#999999] border border-[#e8e5e0] focus:border-[#c99a6e]'
              } outline-none`}
            />
          </div>
        </div>
      </header>

      {/* Desktop Layout with Sidebar */}
      <div className="hidden lg:flex max-w-[1440px] mx-auto">
        {/* Left Sidebar - Filters */}
        <aside className={`w-64 sticky top-[73px] h-[calc(100vh-73px)] p-6 transition-colors ${
          darkMode ? 'bg-[#1a1a1a] border-r border-[#2a2a2a]' : 'bg-[#faf9f7] border-r border-[#e8e5e0]'
        }`}>
          {/* Location & Search */}
          <div className="mb-6">
            <h2 className={`mb-1 ${darkMode ? 'text-white' : 'text-[#2a2a2a]'}`}>
              Vancouver, BC
            </h2>
            <p className={`mb-4 ${darkMode ? 'text-[#a0a0a0]' : 'text-[#6b6b6b]'}`}>
              Explore local deals
            </p>
            
            <div className="relative">
              <Search className={`absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 ${
                darkMode ? 'text-[#808080]' : 'text-[#999999]'
              }`} />
              <input
                type="text"
                placeholder="Search..."
                className={`w-full pl-10 pr-3 py-2.5 rounded-xl transition-colors ${
                  darkMode 
                    ? 'bg-[#222222] text-white placeholder:text-[#808080] border border-[#2a2a2a] focus:border-[#c99a6e]' 
                    : 'bg-white text-[#2a2a2a] placeholder:text-[#999999] border border-[#e8e5e0] focus:border-[#c99a6e]'
                } outline-none`}
              />
            </div>
          </div>

          {/* Category Filters */}
          <div>
            <h3 className={`mb-3 ${darkMode ? 'text-[#a0a0a0]' : 'text-[#6b6b6b]'}`}>
              Categories
            </h3>
            <div className="space-y-1">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`w-full text-left px-4 py-2.5 rounded-xl transition-all ${
                    selectedCategory === category
                      ? 'bg-[#c99a6e] text-white shadow-sm'
                      : darkMode
                      ? 'text-[#a0a0a0] hover:bg-[#222222]'
                      : 'text-[#6b6b6b] hover:bg-[#f0ede8]'
                  }`}
                >
                  {category}
                </button>
              ))}
              <button
                onClick={() => setSelectedCategory('Saved')}
                className={`w-full text-left px-4 py-2.5 rounded-xl transition-all ${
                  selectedCategory === 'Saved'
                    ? 'bg-[#c99a6e] text-white shadow-sm'
                    : darkMode
                    ? 'text-[#a0a0a0] hover:bg-[#222222]'
                    : 'text-[#6b6b6b] hover:bg-[#f0ede8]'
                }`}
              >
                Saved
              </button>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6">
          <h2 className={`mb-6 ${darkMode ? 'text-white' : 'text-[#2a2a2a]'}`}>
            This week's top deals
          </h2>

          {/* Desktop Grid - 2 or 3 columns */}
          <div className="grid grid-cols-2 xl:grid-cols-3 gap-6">
            {deals.map((deal) => (
              <DealCard key={deal.id} deal={deal} darkMode={darkMode} />
            ))}
          </div>
        </main>
      </div>

      {/* Mobile Category Pills - Hidden on desktop */}
      <div className="lg:hidden max-w-2xl mx-auto px-4 py-4">
        <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full whitespace-nowrap transition-all ${
                selectedCategory === category
                  ? 'bg-[#c99a6e] text-white shadow-sm'
                  : darkMode
                  ? 'bg-[#222222] text-[#a0a0a0] hover:bg-[#2a2a2a]'
                  : 'bg-white text-[#6b6b6b] hover:bg-[#f0ede8]'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Mobile Main Deal Feed - Hidden on desktop */}
      <main className="lg:hidden max-w-2xl mx-auto px-4">
        {/* Section Title */}
        <h2 className={`text-xl mb-4 ${darkMode ? 'text-white' : 'text-[#2a2a2a]'}`}>
          This week&apos;s top deals
        </h2>

        {/* Deal Cards */}
        <div className="space-y-4">
          {deals.map((deal) => (
            <DealCard key={deal.id} deal={deal} darkMode={darkMode} />
          ))}
        </div>
      </main>

      {/* Bottom Navigation Bar - Mobile Only */}
      <nav className={`lg:hidden fixed bottom-0 left-0 right-0 border-t transition-colors backdrop-blur-lg ${
        darkMode ? 'bg-[#1a1a1a]/95 border-[#2a2a2a]' : 'bg-white/95 border-[#e8e5e0]'
      }`}>
        <div className="max-w-2xl mx-auto px-4 py-3">
          <div className="flex items-center justify-around">
            <NavButton
              icon={<Home className="w-6 h-6" />}
              label="Home"
              active={activeNav === 'Home'}
              darkMode={darkMode}
              onClick={() => setActiveNav('Home')}
            />
            <NavButton
              icon={<Compass className="w-6 h-6" />}
              label="Explore"
              active={activeNav === 'Explore'}
              darkMode={darkMode}
              onClick={() => setActiveNav('Explore')}
            />
            <NavButton
              icon={
                <div className="w-12 h-12 -mt-6 rounded-full bg-[#c99a6e] flex items-center justify-center shadow-lg">
                  <Plus className="w-6 h-6 text-white" />
                </div>
              }
              label="Add"
              active={activeNav === 'Add'}
              darkMode={darkMode}
              onClick={() => setActiveNav('Add')}
              isCenter
            />
            <NavButton
              icon={<Heart className="w-6 h-6" />}
              label="Favorites"
              active={activeNav === 'Favorites'}
              darkMode={darkMode}
              onClick={() => setActiveNav('Favorites')}
            />
            <NavButton
              icon={<User className="w-6 h-6" />}
              label="Profile"
              active={activeNav === 'Profile'}
              darkMode={darkMode}
              onClick={() => setActiveNav('Profile')}
            />
          </div>
        </div>
      </nav>
    </div>
  );
}

interface NavButtonProps {
  icon: React.ReactNode;
  label: string;
  active: boolean;
  darkMode: boolean;
  onClick: () => void;
  isCenter?: boolean;
}

function NavButton({ icon, label, active, darkMode, onClick, isCenter }: NavButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`flex flex-col items-center gap-1 transition-colors ${
        isCenter ? 'flex-shrink-0' : ''
      } ${
        active
          ? 'text-[#c99a6e]'
          : darkMode
          ? 'text-[#808080] hover:text-[#a0a0a0]'
          : 'text-[#999999] hover:text-[#6b6b6b]'
      }`}
    >
      {icon}
      {!isCenter && <span className="text-xs">{label}</span>}
    </button>
  );
}

interface DesktopNavButtonProps {
  icon: React.ReactNode;
  label: string;
  active: boolean;
  darkMode: boolean;
  onClick: () => void;
}

function DesktopNavButton({ icon, label, active, darkMode, onClick }: DesktopNavButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-2 px-3 py-2 rounded-xl transition-all ${
        active
          ? 'text-[#c99a6e] bg-[#c99a6e]/10'
          : darkMode
          ? 'text-[#a0a0a0] hover:text-white hover:bg-[#222222]'
          : 'text-[#6b6b6b] hover:text-[#2a2a2a] hover:bg-[#f0ede8]'
      }`}
    >
      {icon}
      <span>{label}</span>
    </button>
  );
}