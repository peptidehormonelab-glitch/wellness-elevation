export function PLCLogo({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 220 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="PLC Optimization"
    >
      <defs>
        <linearGradient id="logoGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="oklch(0.92 0.004 240)" />
          <stop offset="100%" stopColor="oklch(0.75 0.006 240)" />
        </linearGradient>
        <linearGradient id="accentGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="oklch(0.72 0.22 248)" />
          <stop offset="100%" stopColor="oklch(0.60 0.22 254)" />
        </linearGradient>
      </defs>
      <text
        x="0"
        y="34"
        fontFamily="Cormorant Garamond, Georgia, serif"
        fontSize="38"
        fontWeight="600"
        letterSpacing="-0.5"
        fill="url(#logoGrad)"
      >
        PLC
      </text>
      <rect x="72" y="8" width="1" height="32" fill="url(#accentGrad)" opacity="0.6" />
      <text
        x="80"
        y="28"
        fontFamily="Inter, system-ui, sans-serif"
        fontSize="8.5"
        fontWeight="500"
        letterSpacing="3.2"
        fill="url(#accentGrad)"
      >
        OPTIMIZATION
      </text>
      <text
        x="80"
        y="40"
        fontFamily="Inter, system-ui, sans-serif"
        fontSize="6.5"
        fontWeight="400"
        letterSpacing="2.5"
        fill="oklch(0.62 0.006 240)"
      >
        WELLNESS · U.S. LLC
      </text>
    </svg>
  );
}

export function PLCIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="PLC"
    >
      <defs>
        <linearGradient id="iconGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="oklch(0.72 0.22 248)" />
          <stop offset="100%" stopColor="oklch(0.60 0.22 254)" />
        </linearGradient>
      </defs>
      <rect x="1" y="1" width="38" height="38" rx="10" stroke="url(#iconGrad)" strokeWidth="1.5" />
      <text
        x="20"
        y="27"
        textAnchor="middle"
        fontFamily="Cormorant Garamond, Georgia, serif"
        fontSize="20"
        fontWeight="600"
        fill="url(#iconGrad)"
      >
        P
      </text>
    </svg>
  );
}
