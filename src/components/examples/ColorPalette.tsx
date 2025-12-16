interface ColorPaletteProps {
  darkMode: boolean;
}

const colors = [
  {
    name: 'Warm Sand',
    role: 'Base/Background',
    hex: '#faf9f7',
    rgb: 'rgb(250, 249, 247)',
    usage: 'Primary background, light mode surfaces'
  },
  {
    name: 'Soft Linen',
    role: 'Base/Neutral',
    hex: '#f0ede8',
    rgb: 'rgb(240, 237, 232)',
    usage: 'Secondary surfaces, subtle backgrounds'
  },
  {
    name: 'Terracotta',
    role: 'Primary Highlight',
    hex: '#c99a6e',
    rgb: 'rgb(201, 154, 110)',
    usage: 'Primary actions, accents, logo primary'
  },
  {
    name: 'Warm Clay',
    role: 'Secondary Accent',
    hex: '#a67c52',
    rgb: 'rgb(166, 124, 82)',
    usage: 'Secondary actions, hover states, logo secondary'
  },
  {
    name: 'Deep Earth',
    role: 'Grounded Accent',
    hex: '#8b6d4f',
    rgb: 'rgb(139, 109, 79)',
    usage: 'Emphasis, borders, logo depth'
  },
  {
    name: 'Soft Sage',
    role: 'Success/Positive',
    hex: '#a8b5a0',
    rgb: 'rgb(168, 181, 160)',
    usage: 'Success states, positive feedback'
  },
  {
    name: 'Charcoal',
    role: 'Text/Contrast',
    hex: '#2a2a2a',
    rgb: 'rgb(42, 42, 42)',
    usage: 'Primary text, dark mode backgrounds'
  },
  {
    name: 'Slate Gray',
    role: 'Secondary Text',
    hex: '#6b6b6b',
    rgb: 'rgb(107, 107, 107)',
    usage: 'Secondary text, captions, subtle elements'
  },
];

export function ColorPalette({ darkMode }: ColorPaletteProps) {
  return (
    <section>
      <h2 className={`text-2xl mb-4 ${darkMode ? 'text-white' : 'text-[#2a2a2a]'}`}>
        Color Palette
      </h2>
      <p className={`mb-8 ${darkMode ? 'text-[#a0a0a0]' : 'text-[#6b6b6b]'}`}>
        8 carefully selected colors for a warm, minimal, and natural feel
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {colors.map((color, index) => (
          <div 
            key={index}
            className={`rounded-2xl overflow-hidden transition-colors ${
              darkMode ? 'bg-[#222222]' : 'bg-white'
            }`}
          >
            <div 
              className="h-32 w-full"
              style={{ backgroundColor: color.hex }}
            />
            <div className="p-4">
              <h3 className={`mb-1 ${darkMode ? 'text-white' : 'text-[#2a2a2a]'}`}>
                {color.name}
              </h3>
              <p className={`mb-3 uppercase tracking-wide ${
                darkMode ? 'text-[#808080]' : 'text-[#999999]'
              }`}>
                {color.role}
              </p>
              <div className="space-y-1">
                <div className={`font-mono ${
                  darkMode ? 'text-[#a0a0a0]' : 'text-[#6b6b6b]'
                }`}>
                  {color.hex}
                </div>
                <div className={`font-mono ${
                  darkMode ? 'text-[#808080]' : 'text-[#999999]'
                }`}>
                  {color.rgb}
                </div>
              </div>
              <p className={`mt-3 ${
                darkMode ? 'text-[#808080]' : 'text-[#6b6b6b]'
              }`}>
                {color.usage}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Color Harmony Section */}
      <div className={`mt-8 rounded-2xl p-8 ${
        darkMode ? 'bg-[#222222]' : 'bg-white'
      }`}>
        <h3 className={`text-xl mb-4 ${darkMode ? 'text-white' : 'text-[#2a2a2a]'}`}>
          Color Harmony
        </h3>
        <div className="flex h-16 rounded-xl overflow-hidden">
          {colors.map((color, index) => (
            <div 
              key={index}
              className="flex-1"
              style={{ backgroundColor: color.hex }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
