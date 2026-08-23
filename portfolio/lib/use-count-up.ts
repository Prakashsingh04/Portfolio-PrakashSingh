"use client";

import { useEffect, useState } from "react";

const easeOut = (t: number) => 1 - Math.pow(1 - t, 3);

/**
 * Counts from 0 up to `target` once `start` flips true. Jumps straight to the
 * final value when the visitor prefers reduced motion.
 */
export function useCountUp(
    target: number,
    { start = true, duration = 1300, decimals = 0 } = {}
) {
    const [value, setValue] = useState(0);

    useEffect(() => {
        if (!start) return;

        const reduced = window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        ).matches;

        if (reduced) {
            setValue(target);
            return;
        }

        let frame = 0;
        const startedAt = performance.now();

        const tick = (now: number) => {
            const progress = Math.min((now - startedAt) / duration, 1);
            setValue(target * easeOut(progress));
            if (progress < 1) {
                frame = requestAnimationFrame(tick);
            }
        };

        frame = requestAnimationFrame(tick);
        return () => cancelAnimationFrame(frame);
    }, [target, start, duration]);

    return value.toFixed(decimals);
}
