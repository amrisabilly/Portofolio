import React from "react";

const FaviconGenerator = () => {
  return (
    <div className="flex flex-col items-center gap-8 p-8">
      <h2 className="text-2xl font-bold text-white mb-4">
        Favicon Design Preview
      </h2>

      {/* Main Favicon Design */}
      <div className="bg-white p-4 rounded-lg">
        <svg
          width="64"
          height="64"
          viewBox="0 0 64 64"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* Enhanced gradient with multiple stops */}
            <linearGradient id="mainGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop
                offset="0%"
                style={{ stopColor: "#00A8CD", stopOpacity: 1 }}
              />
              <stop
                offset="50%"
                style={{ stopColor: "#0099BB", stopOpacity: 1 }}
              />
              <stop
                offset="100%"
                style={{ stopColor: "#0088AA", stopOpacity: 1 }}
              />
            </linearGradient>

            {/* Shadow filter */}
            <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow
                dx="0"
                dy="4"
                stdDeviation="4"
                floodColor="#000"
                floodOpacity="0.25"
              />
            </filter>

            {/* Inner glow effect */}
            <filter id="innerGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="2" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>

            {/* Text shadow */}
            <filter
              id="textShadow"
              x="-20%"
              y="-20%"
              width="140%"
              height="140%"
            >
              <feDropShadow
                dx="0"
                dy="2"
                stdDeviation="1"
                floodColor="#000"
                floodOpacity="0.4"
              />
            </filter>
          </defs>

          {/* Background with rounded corners */}
          <rect
            width="64"
            height="64"
            rx="12"
            ry="12"
            fill="url(#mainGrad)"
            filter="url(#shadow)"
          />

          {/* Inner highlight for depth */}
          <rect
            x="2"
            y="2"
            width="60"
            height="30"
            rx="10"
            ry="10"
            fill="url(#highlight)"
            opacity="0.2"
          />

          {/* Decorative elements */}
          <circle cx="50" cy="14" r="3" fill="white" opacity="0.6" />
          <circle cx="46" cy="18" r="1.5" fill="white" opacity="0.4" />

          {/* Main letter 'A' with enhanced styling */}
          <text
            x="32"
            y="45"
            fontFamily="system-ui, -apple-system, sans-serif"
            fontSize="32"
            fontWeight="700"
            fill="white"
            textAnchor="middle"
            filter="url(#textShadow)"
          >
            A
          </text>

          {/* Small accent line under A */}
          <rect
            x="24"
            y="48"
            width="16"
            height="2"
            rx="1"
            fill="white"
            opacity="0.7"
          />
        </svg>
      </div>

      {/* Size variations */}
      <div className="flex gap-4 items-center">
        <div className="text-center">
          <p className="text-white text-sm mb-2">32x32</p>
          <div className="bg-white p-2 rounded">
            <FaviconSVG size={32} />
          </div>
        </div>

        <div className="text-center">
          <p className="text-white text-sm mb-2">16x16</p>
          <div className="bg-white p-2 rounded">
            <FaviconSVG size={16} />
          </div>
        </div>

        <div className="text-center">
          <p className="text-white text-sm mb-2">Apple Touch</p>
          <div className="bg-white p-2 rounded">
            <FaviconSVG size={48} />
          </div>
        </div>
      </div>

      {/* Download buttons */}
      <div className="flex gap-4">
        <button
          onClick={() => downloadSVG()}
          className="px-4 py-2 rounded-lg font-medium transition-all duration-300 transform hover:scale-105"
          style={{ backgroundColor: "#00A8CD", color: "white" }}
        >
          Download SVG
        </button>
        <button
          onClick={() => copyToClipboard()}
          className="px-4 py-2 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 border"
          style={{ borderColor: "#00A8CD", color: "#00A8CD" }}
        >
          Copy SVG Code
        </button>
      </div>
    </div>
  );
};

// Reusable favicon component with size prop
const FaviconSVG = ({ size = 32 }: { size?: number }) => {
  const fontSize = size * 0.5;
  const radius = size * 0.1875; // 12/64 ratio
  const lineWidth = Math.max(1, size * 0.03125); // 2/64 ratio

  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id={`grad-${size}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: "#00A8CD", stopOpacity: 1 }} />
          <stop offset="50%" style={{ stopColor: "#0099BB", stopOpacity: 1 }} />
          <stop
            offset="100%"
            style={{ stopColor: "#0088AA", stopOpacity: 1 }}
          />
        </linearGradient>

        <filter
          id={`shadow-${size}`}
          x="-20%"
          y="-20%"
          width="140%"
          height="140%"
        >
          <feDropShadow
            dx="0"
            dy={size * 0.0625}
            stdDeviation={size * 0.0625}
            floodColor="#000"
            floodOpacity="0.25"
          />
        </filter>

        <filter
          id={`textShadow-${size}`}
          x="-20%"
          y="-20%"
          width="140%"
          height="140%"
        >
          <feDropShadow
            dx="0"
            dy={size * 0.03125}
            stdDeviation={size * 0.015625}
            floodColor="#000"
            floodOpacity="0.4"
          />
        </filter>
      </defs>

      <rect
        width={size}
        height={size}
        rx={radius}
        ry={radius}
        fill={`url(#grad-${size})`}
        filter={`url(#shadow-${size})`}
      />

      {size >= 24 && (
        <>
          <circle
            cx={size * 0.78}
            cy={size * 0.22}
            r={size * 0.047}
            fill="white"
            opacity="0.6"
          />
          {size >= 32 && (
            <circle
              cx={size * 0.72}
              cy={size * 0.28}
              r={size * 0.023}
              fill="white"
              opacity="0.4"
            />
          )}
        </>
      )}

      <text
        x={size / 2}
        y={size * 0.7}
        fontFamily="system-ui, -apple-system, sans-serif"
        fontSize={fontSize}
        fontWeight="700"
        fill="white"
        textAnchor="middle"
        filter={`url(#textShadow-${size})`}
      >
        A
      </text>

      {size >= 24 && (
        <rect
          x={size * 0.375}
          y={size * 0.75}
          width={size * 0.25}
          height={lineWidth}
          rx={lineWidth / 2}
          fill="white"
          opacity="0.7"
        />
      )}
    </svg>
  );
};

// Helper functions
const downloadSVG = () => {
  const svgContent = `<svg width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style="stop-color:#00A8CD;stop-opacity:1" />
        <stop offset="50%" style="stop-color:#0099BB;stop-opacity:1" />
        <stop offset="100%" style="stop-color:#0088AA;stop-opacity:1" />
      </linearGradient>
      <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="0" dy="2" stdDeviation="2" flood-color="#000" flood-opacity="0.25"/>
      </filter>
      <filter id="textShadow" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="0" dy="1" stdDeviation="0.5" flood-color="#000" flood-opacity="0.4"/>
      </filter>
    </defs>
    <rect width="32" height="32" rx="6" ry="6" fill="url(#grad)" filter="url(#shadow)"/>
    <circle cx="25" cy="7" r="1.5" fill="white" opacity="0.6"/>
    <circle cx="23" cy="9" r="0.75" fill="white" opacity="0.4"/>
    <text x="16" y="22.5" font-family="system-ui, -apple-system, sans-serif" font-size="16" font-weight="700" fill="white" text-anchor="middle" filter="url(#textShadow)">A</text>
    <rect x="12" y="24" width="8" height="1" rx="0.5" fill="white" opacity="0.7"/>
  </svg>`;

  const blob = new Blob([svgContent], { type: "image/svg+xml" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "favicon.svg";
  a.click();
  URL.revokeObjectURL(url);
};

const copyToClipboard = () => {
  const svgContent = `<svg width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style="stop-color:#00A8CD;stop-opacity:1" />
        <stop offset="50%" style="stop-color:#0099BB;stop-opacity:1" />
        <stop offset="100%" style="stop-color:#0088AA;stop-opacity:1" />
      </linearGradient>
      <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="0" dy="2" stdDeviation="2" flood-color="#000" flood-opacity="0.25"/>
      </filter>
      <filter id="textShadow" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="0" dy="1" stdDeviation="0.5" flood-color="#000" flood-opacity="0.4"/>
      </filter>
    </defs>
    <rect width="32" height="32" rx="6" ry="6" fill="url(#grad)" filter="url(#shadow)"/>
    <circle cx="25" cy="7" r="1.5" fill="white" opacity="0.6"/>
    <circle cx="23" cy="9" r="0.75" fill="white" opacity="0.4"/>
    <text x="16" y="22.5" font-family="system-ui, -apple-system, sans-serif" font-size="16" font-weight="700" fill="white" text-anchor="middle" filter="url(#textShadow)">A</text>
    <rect x="12" y="24" width="8" height="1" rx="0.5" fill="white" opacity="0.7"/>
  </svg>`;

  navigator.clipboard.writeText(svgContent).then(() => {
    alert("SVG code copied to clipboard!");
  });
};

export default FaviconGenerator;
