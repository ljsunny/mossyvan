interface DocumentationProps {
  darkMode: boolean;
}

export function HomePageDocumentation({ darkMode }: DocumentationProps) {
  return (
    <div className={`max-w-3xl mx-auto p-8 rounded-2xl my-8 ${
      darkMode ? 'bg-[#222222]' : 'bg-white'
    }`}>
      <h1 className={`text-3xl mb-6 ${darkMode ? 'text-white' : 'text-[#2a2a2a]'}`}>
        Mossy Home Page - How It Works
      </h1>

      {/* Overview */}
      <section className="mb-8">
        <h2 className={`text-2xl mb-3 ${darkMode ? 'text-white' : 'text-[#2a2a2a]'}`}>
          Overview
        </h2>
        <p className={`mb-3 ${darkMode ? 'text-[#a0a0a0]' : 'text-[#6b6b6b]'}`}>
          The Mossy home page is designed as a warm, minimal discovery feed where users can browse local deals in Vancouver. 
          The interface prioritizes clarity and ease of use, with intuitive navigation and quick access to deals organized by category.
        </p>
      </section>

      {/* Key Features */}
      <section className="mb-8">
        <h2 className={`text-2xl mb-3 ${darkMode ? 'text-white' : 'text-[#2a2a2a]'}`}>
          Key Features & Sections
        </h2>
        
        <div className="space-y-4">
          <div className={`p-4 rounded-xl ${darkMode ? 'bg-[#1a1a1a]' : 'bg-[#f5f3f0]'}`}>
            <h3 className={`mb-2 ${darkMode ? 'text-white' : 'text-[#2a2a2a]'}`}>
              1. Header Area
            </h3>
            <ul className={`list-disc list-inside space-y-1 ${
              darkMode ? 'text-[#a0a0a0]' : 'text-[#6b6b6b]'
            }`}>
              <li>Logo (icon + wordmark) for brand recognition</li>
              <li>Personalized greeting: &quot;Discover deals near you&quot;</li>
              <li>Location indicator showing &quot;Vancouver, BC&quot; (text only, no icons)</li>
              <li>Dark mode toggle for user preference</li>
              <li>Sticky header that stays visible while scrolling</li>
            </ul>
          </div>

          <div className={`p-4 rounded-xl ${darkMode ? 'bg-[#1a1a1a]' : 'bg-[#f5f3f0]'}`}>
            <h3 className={`mb-2 ${darkMode ? 'text-white' : 'text-[#2a2a2a]'}`}>
              2. Search Bar
            </h3>
            <ul className={`list-disc list-inside space-y-1 ${
              darkMode ? 'text-[#a0a0a0]' : 'text-[#6b6b6b]'
            }`}>
              <li>Minimal rounded design with search icon</li>
              <li>Placeholder: &quot;Search deals, cafés, restaurants…&quot;</li>
              <li>Focuses on border color (brand terracotta) when active</li>
              <li>Adapts to light and dark modes seamlessly</li>
            </ul>
          </div>

          <div className={`p-4 rounded-xl ${darkMode ? 'bg-[#1a1a1a]' : 'bg-[#f5f3f0]'}`}>
            <h3 className={`mb-2 ${darkMode ? 'text-white' : 'text-[#2a2a2a]'}`}>
              3. Category Pills
            </h3>
            <ul className={`list-disc list-inside space-y-1 ${
              darkMode ? 'text-[#a0a0a0]' : 'text-[#6b6b6b]'
            }`}>
              <li>Horizontal scrollable row of rounded pill buttons</li>
              <li>Categories: All Deals, Happy Hour, Flash Deals, Weekly Specials</li>
              <li>Active category highlighted with brand terracotta color</li>
              <li>Smooth transitions and hover states</li>
              <li>Easy thumb-friendly navigation on mobile</li>
            </ul>
          </div>

          <div className={`p-4 rounded-xl ${darkMode ? 'bg-[#1a1a1a]' : 'bg-[#f5f3f0]'}`}>
            <h3 className={`mb-2 ${darkMode ? 'text-white' : 'text-[#2a2a2a]'}`}>
              4. Main Deal Feed
            </h3>
            <ul className={`list-disc list-inside space-y-1 ${
              darkMode ? 'text-[#a0a0a0]' : 'text-[#6b6b6b]'
            }`}>
              <li>Vertical scrolling card layout for easy browsing</li>
              <li>Each card contains: hero image, business name, description</li>
              <li>Tag badges (Flash/Weekly/Always) with color-coded styling</li>
              <li>Discount badge (e.g., &quot;20% off&quot;) in brand highlight color</li>
              <li>Time remaining indicator with clock icon</li>
              <li>Location text only (no map pin icons)</li>
              <li>&quot;Save Deal&quot; button for quick bookmarking</li>
            </ul>
          </div>

          <div className={`p-4 rounded-xl ${darkMode ? 'bg-[#1a1a1a]' : 'bg-[#f5f3f0]'}`}>
            <h3 className={`mb-2 ${darkMode ? 'text-white' : 'text-[#2a2a2a]'}`}>
              5. Bottom Navigation
            </h3>
            <ul className={`list-disc list-inside space-y-1 ${
              darkMode ? 'text-[#a0a0a0]' : 'text-[#6b6b6b]'
            }`}>
              <li>Fixed bottom bar with 5 navigation items</li>
              <li>Home, Explore, Add Deal, Favorites, Profile</li>
              <li>Center &quot;Add Deal&quot; button elevated for emphasis</li>
              <li>Simple line icons from Lucide React</li>
              <li>Active state shown in brand terracotta color</li>
              <li>Backdrop blur effect for modern feel</li>
            </ul>
          </div>
        </div>
      </section>

      {/* User Interactions */}
      <section className="mb-8">
        <h2 className={`text-2xl mb-3 ${darkMode ? 'text-white' : 'text-[#2a2a2a]'}`}>
          Key User Interactions
        </h2>
        
        <div className="space-y-3">
          <div className={`p-4 rounded-xl ${darkMode ? 'bg-[#1a1a1a]' : 'bg-[#f5f3f0]'}`}>
            <h4 className={`mb-1 ${darkMode ? 'text-white' : 'text-[#2a2a2a]'}`}>
              Tap to Open Deal
            </h4>
            <p className={darkMode ? 'text-[#a0a0a0]' : 'text-[#6b6b6b]'}>
              Tapping anywhere on a deal card opens the full deal details page with business info, terms, and redemption options.
            </p>
          </div>

          <div className={`p-4 rounded-xl ${darkMode ? 'bg-[#1a1a1a]' : 'bg-[#f5f3f0]'}`}>
            <h4 className={`mb-1 ${darkMode ? 'text-white' : 'text-[#2a2a2a]'}`}>
              Save Deal
            </h4>
            <p className={darkMode ? 'text-[#a0a0a0]' : 'text-[#6b6b6b]'}>
              Tap the &quot;Save Deal&quot; button to bookmark. The card shows a visual ring indicator and the button changes to &quot;Saved&quot; state.
              Saved deals can be accessed from the Favorites tab.
            </p>
          </div>

          <div className={`p-4 rounded-xl ${darkMode ? 'bg-[#1a1a1a]' : 'bg-[#f5f3f0]'}`}>
            <h4 className={`mb-1 ${darkMode ? 'text-white' : 'text-[#2a2a2a]'}`}>
              Filter by Category
            </h4>
            <p className={darkMode ? 'text-[#a0a0a0]' : 'text-[#6b6b6b]'}>
              Tap category pills to filter the deal feed. The active category is highlighted, and the feed updates to show relevant deals.
            </p>
          </div>

          <div className={`p-4 rounded-xl ${darkMode ? 'bg-[#1a1a1a]' : 'bg-[#f5f3f0]'}`}>
            <h4 className={`mb-1 ${darkMode ? 'text-white' : 'text-[#2a2a2a]'}`}>
              Search
            </h4>
            <p className={darkMode ? 'text-[#a0a0a0]' : 'text-[#6b6b6b]'}>
              Type in the search bar to find specific deals, businesses, or cuisines. Real-time search results appear as you type.
            </p>
          </div>

          <div className={`p-4 rounded-xl ${darkMode ? 'bg-[#1a1a1a]' : 'bg-[#f5f3f0]'}`}>
            <h4 className={`mb-1 ${darkMode ? 'text-white' : 'text-[#2a2a2a]'}`}>
              Navigation
            </h4>
            <p className={darkMode ? 'text-[#a0a0a0]' : 'text-[#6b6b6b]'}>
              Use the bottom navigation to switch between Home, Explore new areas, Add your own deals, view Favorites, or access your Profile.
            </p>
          </div>
        </div>
      </section>

      {/* Light/Dark Mode Adaptation */}
      <section className="mb-8">
        <h2 className={`text-2xl mb-3 ${darkMode ? 'text-white' : 'text-[#2a2a2a]'}`}>
          Light & Dark Mode Adaptation
        </h2>
        
        <div className="space-y-3">
          <div className={`p-4 rounded-xl ${darkMode ? 'bg-[#1a1a1a]' : 'bg-[#f5f3f0]'}`}>
            <h4 className={`mb-1 ${darkMode ? 'text-white' : 'text-[#2a2a2a]'}`}>
              Light Mode (Default)
            </h4>
            <ul className={`list-disc list-inside space-y-1 ${
              darkMode ? 'text-[#a0a0a0]' : 'text-[#6b6b6b]'
            }`}>
              <li>Background: Warm Sand (#faf9f7)</li>
              <li>Cards: White with subtle shadows</li>
              <li>Text: Charcoal (#2a2a2a) for primary, Slate Gray for secondary</li>
              <li>Borders: Soft Linen (#f0ede8)</li>
              <li>Creates a bright, welcoming, daytime experience</li>
            </ul>
          </div>

          <div className={`p-4 rounded-xl ${darkMode ? 'bg-[#1a1a1a]' : 'bg-[#f5f3f0]'}`}>
            <h4 className={`mb-1 ${darkMode ? 'text-white' : 'text-[#2a2a2a]'}`}>
              Dark Mode
            </h4>
            <ul className={`list-disc list-inside space-y-1 ${
              darkMode ? 'text-[#a0a0a0]' : 'text-[#6b6b6b]'
            }`}>
              <li>Background: Deep Charcoal (#1a1a1a)</li>
              <li>Cards: Slightly lighter charcoal (#222222)</li>
              <li>Text: White for primary, muted grays for secondary</li>
              <li>Borders: Dark separators (#2a2a2a)</li>
              <li>Creates a calm, easy-on-eyes evening experience</li>
            </ul>
          </div>

          <div className={`p-4 rounded-xl ${darkMode ? 'bg-[#1a1a1a]' : 'bg-[#f5f3f0]'}`}>
            <h4 className={`mb-1 ${darkMode ? 'text-white' : 'text-[#2a2a2a]'}`}>
              Consistent Elements
            </h4>
            <ul className={`list-disc list-inside space-y-1 ${
              darkMode ? 'text-[#a0a0a0]' : 'text-[#6b6b6b]'
            }`}>
              <li>Brand colors (Terracotta, Clay, Sage) remain consistent</li>
              <li>Logo adapts to show proper contrast</li>
              <li>Buttons and accents maintain brand identity</li>
              <li>Smooth transitions between modes (300ms duration)</li>
              <li>User preference is saved and persists across sessions</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Design Principles */}
      <section>
        <h2 className={`text-2xl mb-3 ${darkMode ? 'text-white' : 'text-[#2a2a2a]'}`}>
          Design Principles
        </h2>
        
        <ul className={`list-disc list-inside space-y-2 ${
          darkMode ? 'text-[#a0a0a0]' : 'text-[#6b6b6b]'
        }`}>
          <li><strong>Warm Minimal:</strong> Clean layouts with warm, natural color palette</li>
          <li><strong>Calm & Modern:</strong> Ample white space, soft shadows, rounded corners</li>
          <li><strong>Friendly:</strong> Approachable language and intuitive interactions</li>
          <li><strong>No Clichés:</strong> Avoided map pins, leaves, coupon tags, % symbols</li>
          <li><strong>Soft Geometry:</strong> Rounded shapes and organic forms throughout</li>
          <li><strong>Accessibility:</strong> High contrast ratios, clear hierarchy, readable text</li>
          <li><strong>Mobile-First:</strong> Optimized for thumb navigation and single-hand use</li>
          <li><strong>Vancouver Spirit:</strong> Reflects the city&apos;s natural, relaxed, coastal vibe</li>
        </ul>
      </section>
    </div>
  );
}
