interface LogoProps {
  type: 'icon' | 'wordmark' | 'combined';
  darkMode: boolean;
  size?: number;
}

const Wordmark = ({ darkMode }: { darkMode: boolean }) => (
  <div 
    className={darkMode ? 'text-white' : 'text-[#2a2a2a]'}
    style={{ 
      fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      fontWeight: 500,
      fontSize: '32px',
      letterSpacing: '-0.02em'
    }}
  >
    Mossy
  </div>
);

// Logo 1: Overlapping Circles (Community & Connection)
export function Logo1({ type, darkMode, size = 64 }: LogoProps) {
  const icon = (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none">
      <circle cx="24" cy="28" r="18" fill="#c99a6e" opacity="0.8" />
      <circle cx="40" cy="28" r="18" fill="#a67c52" opacity="0.8" />
      <circle cx="32" cy="42" r="14" fill="#8b6d4f" opacity="0.9" />
    </svg>
  );

  if (type === 'icon') return icon;
  if (type === 'wordmark') return <Wordmark darkMode={darkMode} />;
  
  return (
    <div className="flex items-center gap-3">
      {icon}
      <Wordmark darkMode={darkMode} />
    </div>
  );
}

// Logo 2: Gentle Waves (Coastal Calm)
export function Logo2({ type, darkMode, size = 64 }: LogoProps) {
  const icon = (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none">
      <path 
        d="M8 32 Q 20 20, 32 32 T 56 32" 
        stroke="#c99a6e" 
        strokeWidth="8" 
        strokeLinecap="round"
        fill="none"
      />
      <path 
        d="M8 42 Q 20 30, 32 42 T 56 42" 
        stroke="#a67c52" 
        strokeWidth="8" 
        strokeLinecap="round"
        fill="none"
      />
      <circle cx="32" cy="24" r="6" fill="#8b6d4f" />
    </svg>
  );

  if (type === 'icon') return icon;
  if (type === 'wordmark') return <Wordmark darkMode={darkMode} />;
  
  return (
    <div className="flex items-center gap-3">
      {icon}
      <Wordmark darkMode={darkMode} />
    </div>
  );
}

// Logo 3: Rounded Geometry (Modern Minimal)
export function Logo3({ type, darkMode, size = 64 }: LogoProps) {
  const icon = (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none">
      <rect x="12" y="12" width="40" height="40" rx="16" fill="#c99a6e" />
      <rect x="20" y="20" width="24" height="24" rx="10" fill="#a67c52" />
      <circle cx="32" cy="32" r="6" fill="#8b6d4f" />
    </svg>
  );

  if (type === 'icon') return icon;
  if (type === 'wordmark') return <Wordmark darkMode={darkMode} />;
  
  return (
    <div className="flex items-center gap-3">
      {icon}
      <Wordmark darkMode={darkMode} />
    </div>
  );
}

// Logo 4: Organic Droplet (Natural Form)
export function Logo4({ type, darkMode, size = 64 }: LogoProps) {
  const icon = (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none">
      <path 
        d="M32 8 C 20 20, 16 28, 16 38 C 16 48, 23 56, 32 56 C 41 56, 48 48, 48 38 C 48 28, 44 20, 32 8 Z" 
        fill="#c99a6e"
      />
      <ellipse cx="32" cy="38" rx="10" ry="12" fill="#a67c52" />
      <circle cx="32" cy="35" r="4" fill="#8b6d4f" />
    </svg>
  );

  if (type === 'icon') return icon;
  if (type === 'wordmark') return <Wordmark darkMode={darkMode} />;
  
  return (
    <div className="flex items-center gap-3">
      {icon}
      <Wordmark darkMode={darkMode} />
    </div>
  );
}

// Logo 5: Soft Cluster (Discovery & Community)
export function Logo5({ type, darkMode, size = 64 }: LogoProps) {
  const icon = (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none">
      <circle cx="32" cy="24" r="10" fill="#c99a6e" />
      <circle cx="20" cy="40" r="8" fill="#a67c52" />
      <circle cx="44" cy="40" r="8" fill="#a67c52" />
      <circle cx="32" cy="48" r="6" fill="#8b6d4f" />
      <circle cx="32" cy="32" r="4" fill="#d4b896" />
    </svg>
  );

  if (type === 'icon') return icon;
  if (type === 'wordmark') return <Wordmark darkMode={darkMode} />;
  
  return (
    <div className="flex items-center gap-3">
      {icon}
      <Wordmark darkMode={darkMode} />
    </div>
  );
}
