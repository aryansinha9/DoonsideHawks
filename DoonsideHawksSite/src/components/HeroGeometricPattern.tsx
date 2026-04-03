import React from 'react';

export default function HeroGeometricPattern({ className = '' }: { className?: string }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 800"
            preserveAspectRatio="xMidYMid slice"
            className={className}
            style={{ width: '100%', height: '100%', display: 'block' }}
            aria-hidden="true"
        >
            <defs>
                {/* 1. Subtle Texturing (Grainy Noise Overlay) */}
                <filter id="grainyNoise">
                    <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
                    <feColorMatrix type="matrix" values="1 0 0 0 0, 0 1 0 0 0, 0 0 1 0 0, 0 0 0 0.08 0" />
                </filter>

                {/* 2. Base Vignette (Edges fading into near-black) */}
                <radialGradient id="vignette" cx="50%" cy="50%" r="75%">
                    <stop offset="30%" stopColor="#8A1326" stopOpacity="0" />
                    <stop offset="100%" stopColor="#0B0102" stopOpacity="1" />
                </radialGradient>

                {/* 3. Blood-red mid-tones (Center-left vibrant glow) */}
                <radialGradient id="bloodGlow" cx="35%" cy="45%" r="55%">
                    <stop offset="0%" stopColor="#E61A3D" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#6A1012" stopOpacity="0" />
                </radialGradient>

                {/* 4. Deepest focal area around the "V" intersection */}
                <radialGradient id="deepIntersection" cx="42%" cy="69%" r="40%">
                    <stop offset="0%" stopColor="#080101" stopOpacity="0.95" />
                    <stop offset="100%" stopColor="#30050B" stopOpacity="0" />
                </radialGradient>

                {/* 5. Parallax Panes / Carbon Fiber linear gradients */}
                <linearGradient id="leftBandGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#C41430" stopOpacity="0.8" />
                    <stop offset="50%" stopColor="#870D21" stopOpacity="0.6" />
                    <stop offset="100%" stopColor="#1C0206" stopOpacity="0.9" />
                </linearGradient>

                <linearGradient id="rightBandGrad" x1="100%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#A3114A" stopOpacity="0.5" />
                    <stop offset="60%" stopColor="#5E0816" stopOpacity="0.75" />
                    <stop offset="100%" stopColor="#140104" stopOpacity="0.95" />
                </linearGradient>

                <linearGradient id="shardGrad1" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#F5274B" stopOpacity="0.4" />
                    <stop offset="100%" stopColor="#6A1012" stopOpacity="0" />
                </linearGradient>

                <linearGradient id="shardGrad2" x1="100%" y1="100%" x2="0%" y2="0%">
                    <stop offset="0%" stopColor="#FF335E" stopOpacity="0.25" />
                    <stop offset="100%" stopColor="#2E040B" stopOpacity="0.8" />
                </linearGradient>

                <linearGradient id="darkStackGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#1F0307" stopOpacity="0.9" />
                    <stop offset="100%" stopColor="#590C19" stopOpacity="0.6" />
                </linearGradient>
            </defs>

            {/* BASE FOUNDATION */}
            {/* Rich Burgundy/Maroon Base */}
            <rect width="1440" height="800" fill="#4B0011" />

            {/* Vibrant "blood-red" light cast on center-left */}
            <circle cx="500" cy="360" r="700" fill="url(#bloodGlow)" />

            {/* GEOMETRY: ISO PANES */}
            {/* Background huge offset pane */}
            <polygon points="750,-100 1100,-100 1250,200 900,200" fill="url(#shardGrad1)" style={{ mixBlendMode: 'overlay' }} opacity="0.6" />

            {/* THE DOMINANT "V" MOTIF */}
            {/* Intersection cleanly placed at roughly x=600, y=550 */}

            {/* Right overlapping arm */}
            <polygon points="1050,-50 750,-50 300,850 600,850" fill="url(#rightBandGrad)" />

            {/* Left overlapping arm */}
            <polygon points="150,-50 450,-50 900,850 600,850" fill="url(#leftBandGrad)" />

            {/* RIGHT-SIDE CLUSTER: Fragmented horizontal shards pulling away */}
            <polygon points="850,100 1150,100 1200,200 900,200" fill="url(#shardGrad2)" />
            <polygon points="1025,250 1375,250 1450,400 1100,400" fill="url(#shardGrad1)" opacity="0.65" />
            <polygon points="1075,450 1325,450 1375,550 1125,550" fill="rgba(120, 12, 28, 0.5)" />
            <polygon points="1300,600 1450,600 1475,650 1325,650" fill="url(#shardGrad2)" opacity="0.8" />

            {/* LEFT-SIDE ACCENTS: Darker vertical stacks binding the left edge */}
            <polygon points="-50,200 100,200 140,280 -50,280" fill="url(#darkStackGrad)" />
            <polygon points="-50,320 120,320 185,450 -50,450" fill="url(#darkStackGrad)" />
            <polygon points="-50,500 150,500 225,650 -50,650" fill="url(#darkStackGrad)" />
            <polygon points="-50,700 80,700 110,760 -50,760" fill="url(#darkStackGrad)" />

            {/* OVERLAY ISO DEPTH PANES */}
            <polygon points="450,300 850,300 950,500 550,500" fill="url(#shardGrad1)" style={{ mixBlendMode: 'screen' }} opacity="0.3" />

            {/* FOCAL WEIGHT: Dark gravity well at intersection */}
            <ellipse cx="600" cy="550" rx="360" ry="240" fill="url(#deepIntersection)" style={{ mixBlendMode: 'multiply' }} />

            {/* METALLIC / GLOSSY EDGE HIGHLIGHTS */}
            {/* Outline the dominant bands with thin glowing strokes */}
            {/* Left band right edge */}
            <line x1="450" y1="-50" x2="900" y2="850" stroke="rgba(255, 120, 150, 0.3)" strokeWidth="1.5" />
            {/* Left band left edge */}
            <line x1="150" y1="-50" x2="600" y2="850" stroke="rgba(255, 60, 90, 0.15)" strokeWidth="1" />

            {/* Right band left edge */}
            <line x1="750" y1="-50" x2="300" y2="850" stroke="rgba(255, 80, 120, 0.2)" strokeWidth="1.5" />

            {/* Right cluster upper shard edges */}
            <line x1="850" y1="100" x2="1150" y2="100" stroke="rgba(255, 200, 220, 0.2)" strokeWidth="1.5" />
            <line x1="1025" y1="250" x2="1375" y2="250" stroke="rgba(255, 150, 180, 0.15)" strokeWidth="1" />

            {/* VIGNETTE AND NOISE SHADING */}
            <rect width="1440" height="800" fill="url(#vignette)" style={{ mixBlendMode: 'multiply' }} opacity="0.8" />
            <rect width="1440" height="800" filter="url(#grainyNoise)" style={{ mixBlendMode: 'overlay' }} opacity="0.35" />
        </svg>
    )
}
