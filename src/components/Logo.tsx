// Inline SVG logo to avoid broken asset.json image references
const SVG_LOGO =
  'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"%3E%3Crect width="200" height="200" fill="none"/%3E%3Ctext x="100" y="115" font-size="48" font-weight="bold" text-anchor="middle" fill="%23333"%3EPLC%3C/text%3E%3Ctext x="100" y="145" font-size="12" text-anchor="middle" fill="%23666"%3EOptimization%3C/text%3E%3C/svg%3E';

export const PLC_LOGO_URL = SVG_LOGO;

export function PLCLogo({ className = "" }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 200 200"
      alt="PLC Optimization — Take Back Control. Live Your Best Life."
      className={className}
      loading="eager"
      decoding="async"
      style={{ pointerEvents: "none" }}
    >
      <rect width="200" height="200" fill="none" />
      <text
        x="100"
        y="115"
        fontSize="48"
        fontWeight="bold"
        textAnchor="middle"
        fill="#333"
      >
        PLC
      </text>
      <text
        x="100"
        y="145"
        fontSize="12"
        textAnchor="middle"
        fill="#666"
      >
        Optimization
      </text>
    </svg>
  );
}

export function PLCIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 200 200"
      alt="PLC Optimization"
      className={className}
      loading="eager"
      decoding="async"
      style={{ pointerEvents: "none" }}
    >
      <rect width="200" height="200" fill="none" />
      <text
        x="100"
        y="115"
        fontSize="48"
        fontWeight="bold"
        textAnchor="middle"
        fill="#333"
      >
        PLC
      </text>
      <text
        x="100"
        y="145"
        fontSize="12"
        textAnchor="middle"
        fill="#666"
      >
        Optimization
      </text>
    </svg>
  );
}
