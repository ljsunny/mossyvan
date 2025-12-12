import { Logo1, Logo2, Logo3, Logo4, Logo5 } from './logos';

interface LogoShowcaseProps {
  darkMode: boolean;
}

export function LogoShowcase({ darkMode }: LogoShowcaseProps) {
  const logos = [
    { 
      name: 'Variation 1: Overlapping Circles', 
      component: Logo1,
      description: 'Community & connection through soft organic forms'
    },
    { 
      name: 'Variation 2: Gentle Waves', 
      component: Logo2,
      description: 'Coastal calm with abstract flow'
    },
    { 
      name: 'Variation 3: Rounded Geometry', 
      component: Logo3,
      description: 'Modern minimal with soft edges'
    },
    { 
      name: 'Variation 4: Organic Droplet', 
      component: Logo4,
      description: 'Natural form meets digital simplicity'
    },
    { 
      name: 'Variation 5: Soft Cluster', 
      component: Logo5,
      description: 'Discovery & gathering represented through dots'
    },
  ];

  return (
    <section>
      <h2 className={`text-2xl mb-8 ${darkMode ? 'text-white' : 'text-[#2a2a2a]'}`}>
        Logo Variations
      </h2>
      
      <div className="space-y-12">
        {logos.map((logo, index) => {
          const LogoComponent = logo.component;
          return (
            <div 
              key={index}
              className={`rounded-2xl p-8 transition-colors ${
                darkMode ? 'bg-[#222222]' : 'bg-white'
              }`}
            >
              <div className="mb-6">
                <h3 className={`text-xl mb-1 ${darkMode ? 'text-white' : 'text-[#2a2a2a]'}`}>
                  {logo.name}
                </h3>
                <p className={darkMode ? 'text-[#a0a0a0]' : 'text-[#6b6b6b]'}>
                  {logo.description}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Icon Only */}
                <div>
                  <p className={`mb-4 uppercase tracking-wide ${
                    darkMode ? 'text-[#808080]' : 'text-[#999999]'
                  }`}>Icon Only</p>
                  <div className={`rounded-xl p-8 flex items-center justify-center ${
                    darkMode ? 'bg-[#1a1a1a]' : 'bg-[#f5f3f0]'
                  }`}>
                    <LogoComponent type="icon" darkMode={darkMode} size={80} />
                  </div>
                </div>

                {/* Wordmark Only */}
                <div>
                  <p className={`mb-4 uppercase tracking-wide ${
                    darkMode ? 'text-[#808080]' : 'text-[#999999]'
                  }`}>Wordmark Only</p>
                  <div className={`rounded-xl p-8 flex items-center justify-center ${
                    darkMode ? 'bg-[#1a1a1a]' : 'bg-[#f5f3f0]'
                  }`}>
                    <LogoComponent type="wordmark" darkMode={darkMode} />
                  </div>
                </div>

                {/* Combined */}
                <div>
                  <p className={`mb-4 uppercase tracking-wide ${
                    darkMode ? 'text-[#808080]' : 'text-[#999999]'
                  }`}>Icon + Wordmark</p>
                  <div className={`rounded-xl p-8 flex items-center justify-center ${
                    darkMode ? 'bg-[#1a1a1a]' : 'bg-[#f5f3f0]'
                  }`}>
                    <LogoComponent type="combined" darkMode={darkMode} />
                  </div>
                </div>
              </div>

              {/* Size Variations */}
              <div className="mt-8 pt-8 border-t" style={{
                borderColor: darkMode ? '#2a2a2a' : '#e8e5e0'
              }}>
                <p className={`mb-4 uppercase tracking-wide ${
                  darkMode ? 'text-[#808080]' : 'text-[#999999]'
                }`}>Scalability Test</p>
                <div className={`rounded-xl p-8 flex items-center justify-center gap-8 ${
                  darkMode ? 'bg-[#1a1a1a]' : 'bg-[#f5f3f0]'
                }`}>
                  <LogoComponent type="icon" darkMode={darkMode} size={24} />
                  <LogoComponent type="icon" darkMode={darkMode} size={40} />
                  <LogoComponent type="icon" darkMode={darkMode} size={64} />
                  <LogoComponent type="icon" darkMode={darkMode} size={96} />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
