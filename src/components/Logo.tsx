import logoAsset from "../assets/plc-logo-transparent.png.asset.json";

export const PLC_LOGO_URL = logoAsset.url;

export function PLCLogo({ className = "" }: { className?: string }) {
  return (
    <img
      src={logoAsset.url}
      alt="PLC Optimization — Take Back Control. Live Your Best Life."
      className={className}
      loading="eager"
      decoding="async"
      draggable={false}
    />
  );
}

export function PLCIcon({ className = "" }: { className?: string }) {
  return (
    <img
      src={logoAsset.url}
      alt="PLC Optimization"
      className={className}
      loading="eager"
      decoding="async"
      draggable={false}
    />
  );
}
