/**
 * Site-wide atmosphere: masked grid, two slow-drifting colour fields, a
 * vignette and a film-grain pass. Fixed to the viewport so every section
 * shares one continuous backdrop instead of each re-declaring its own.
 */
export default function BackgroundFX() {
    return (
        <div aria-hidden className="fixed inset-0 -z-10 overflow-hidden">
            <div className="absolute inset-0 bg-grid-fade" />

            <div className="aurora animate-drift-a top-[-12%] right-[-10%] w-[38rem] h-[38rem] bg-accent/[0.10]" />
            <div className="aurora animate-drift-b bottom-[-18%] left-[-12%] w-[32rem] h-[32rem] bg-[var(--gradient-end)] opacity-[0.08]" />
            <div className="aurora animate-drift-b top-[38%] left-[42%] w-[26rem] h-[26rem] bg-accent-2/[0.06]" />

            {/* Vignette — pulls the eye toward the centre column */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_45%,transparent_0%,var(--background)_100%)] opacity-70" />

            <div className="noise-overlay" />
        </div>
    );
}
