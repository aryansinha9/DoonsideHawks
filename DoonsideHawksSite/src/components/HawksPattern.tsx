export default function HawksPattern({ className = '' }: { className?: string }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 800 800"
            preserveAspectRatio="xMidYMid slice"
            className={className}
            aria-hidden="true"
        >
            <defs>
                <radialGradient id="bgGrad" cx="50%" cy="30%" r="70%">
                    <stop offset="0%" stopColor="#8a0035" stopOpacity="1" />
                    <stop offset="100%" stopColor="#410018" stopOpacity="1" />
                </radialGradient>
            </defs>

            {/* Base fill */}
            <rect width="800" height="800" fill="url(#bgGrad)" />

            {/* === UPPER GEOMETRIC FACETS === */}
            {/* Top-left large face */}
            <polygon points="0,0 480,0 300,320 0,420" fill="#6e0128" opacity="0.5" />
            {/* Top-right angled corner cut — the grey/silver edge from the image */}
            <polygon points="780,0 800,0 800,60 760,0" fill="rgba(220,210,220,0.25)" />
            <polygon points="680,0 800,0 800,20" fill="rgba(255,255,255,0.1)" />
            {/* Top-right upper face */}
            <polygon points="480,0 800,0 800,300 540,200" fill="#5b0121" opacity="0.55" />
            {/* Central upper face */}
            <polygon points="300,320 540,200 680,440 440,500" fill="#7a0033" opacity="0.4" />
            {/* Left middle face */}
            <polygon points="0,420 300,320 200,600 0,640" fill="#620123" opacity="0.45" />

            {/* === LOWER CHEVRON / V-SHAPES (key motif from image) === */}
            {/* Left large chevron arm — pointing down-right */}
            <polygon points="-40,580 180,580 400,800 180,800" fill="#4d0018" opacity="0.6" />
            {/* Center large V / diamond chevron */}
            <polygon points="100,560 400,400 700,560 550,800 250,800" fill="#5a011e" opacity="0.55" />
            {/* Right large chevron arm */}
            <polygon points="460,560 680,560 840,800 680,800" fill="#4d0018" opacity="0.5" />
            {/* Center bottom diamond accent */}
            <polygon points="300,680 400,610 500,680 400,750" fill="#3e0015" opacity="0.7" />
            {/* Overlapping parallelogram across lower third */}
            <polygon points="0,620 500,500 800,620 800,680 500,560 0,680" fill="rgba(255,255,255,0.03)" />
            {/* Second V-layer — slightly offset for depth */}
            <polygon points="200,620 400,500 600,620 520,800 280,800" fill="rgba(83,1,34,0.5)" />
            {/* Right large diagonal slab */}
            <polygon points="580,520 800,460 800,800 640,800" fill="#430016" opacity="0.55" />

            {/* === EDGE HIGHLIGHT LINES (subtle facet edges) === */}
            <line x1="300" y1="320" x2="540" y2="200" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
            <line x1="300" y1="320" x2="200" y2="600" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
            <line x1="540" y1="200" x2="680" y2="440" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
            <line x1="100" y1="560" x2="400" y2="400" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
            <line x1="400" y1="400" x2="700" y2="560" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />

            {/* === 4-POINTED STAR SPARKLE (bottom-right, as in image) === */}
            <g transform="translate(750, 760)">
                <path
                    d="M0,-12 L2.5,-2.5 L12,0 L2.5,2.5 L0,12 L-2.5,2.5 L-12,0 L-2.5,-2.5 Z"
                    fill="rgba(255,255,255,0.55)"
                />
            </g>

            {/* Small secondary sparkle top-left area */}
            <g transform="translate(52, 52)">
                <path
                    d="M0,-7 L1.5,-1.5 L7,0 L1.5,1.5 L0,7 L-1.5,1.5 L-7,0 L-1.5,-1.5 Z"
                    fill="rgba(255,255,255,0.12)"
                />
            </g>
        </svg>
    )
}
