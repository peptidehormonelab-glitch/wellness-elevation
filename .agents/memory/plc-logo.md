---
name: PLC Optimization Logo
description: The logo is an SVG wordmark React component, not a hosted PNG. Lovable CDN asset URLs won't work in Replit.
---

## Rule
The logo lives in `src/components/Logo.tsx` as `<PLCLogo />` and `<PLCIcon />` SVG components.

**Why:** The original project used Lovable's asset hosting (`/__l5e/assets-v1/...`). These URLs are 404 in Replit. An inline SVG component is the reliable solution.

**How to apply:** Always import from `@/components/Logo`, never from the `.asset.json` files. The `plc-logo-official.png.asset.json` and `plc-logo.png.asset.json` files still exist but their URLs are non-functional outside Lovable.
