import { useCallback } from "react";
import Particles from "react-tsparticles";
import type { Engine } from "tsparticles-engine";
import { loadFull } from "tsparticles";
import { useReducedMotion } from "../../hooks/useReducedMotion";

/**
 * Particle Background Component
 * Subtle floating particles for a premium feel
 */
const ParticleBackground = () => {
    const prefersReducedMotion = useReducedMotion();

    const particlesInit = useCallback(async (engine: Engine) => {
        await loadFull(engine);
    }, []);

    if (prefersReducedMotion) return null;

    return (
        <Particles
            className="absolute inset-0 -z-10"
            id="tsparticles"
            init={particlesInit}
            options={{
                background: {
                    color: {
                        value: "transparent",
                    },
                },
                fpsLimit: 120,
                interactivity: {
                    events: {
                        onHover: {
                            enable: true,
                            mode: "bubble",
                        },
                        resize: true,
                    },
                    modes: {
                        bubble: {
                            distance: 200,
                            duration: 2,
                            opacity: 0.2,
                            size: 2,
                        },
                    },
                },
                particles: {
                    color: {
                        value: ["#06b6d4", "#a855f7"],
                    },
                    links: {
                        color: "#64748b",
                        distance: 150,
                        enable: true,
                        opacity: 0.1,
                        width: 1,
                    },
                    move: {
                        direction: "none",
                        enable: true,
                        outModes: {
                            default: "bounce",
                        },
                        random: true,
                        speed: 0.5,
                        straight: false,
                    },
                    number: {
                        density: {
                            enable: true,
                            area: 800,
                        },
                        value: 40,
                    },
                    opacity: {
                        value: 0.1,
                    },
                    shape: {
                        type: "circle",
                    },
                    size: {
                        value: { min: 1, max: 3 },
                    },
                },
                detectRetina: true,
            }}
        />
    );
};

export default ParticleBackground;
