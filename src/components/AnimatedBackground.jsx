import React, { useEffect, useRef } from "react";

export default function AnimatedBackground() {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const onMove = (e) => {
      const rect = el.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      el.style.setProperty("--mx", `${x}%`);
      el.style.setProperty("--my", `${y}%`);
    };

    const onTouch = (e) => {
      if (e.touches && e.touches[0]) onMove(e.touches[0]);
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("touchmove", onTouch, { passive: true });

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("touchmove", onTouch);
    };
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none"
      style={{ transform: "translateZ(0)" }}
    >
      {/* Neon reactive gradients */}
      <div className="absolute inset-0 mix-blend-screen">
        <div
          className="w-full h-full"
          style={{
            background:
              "radial-gradient(700px circle at var(--mx,50%) var(--my,50%), rgba(0,245,255,0.14), transparent 10%)," +
              "radial-gradient(500px circle at calc(var(--mx,50%) + 20%) calc(var(--my,50%) - 10%), rgba(124,77,255,0.10), transparent 12%)," +
              "radial-gradient(300px circle at calc(var(--mx,50%) - 25%) calc(var(--my,50%) + 20%), rgba(0,150,255,0.06), transparent 18%)",
          }}
        />
      </div>

      {/* Floating glow blobs */}
      <div
        className="absolute -left-40 -top-20 w-80 h-80 rounded-full blur-3xl opacity-30"
        style={{
          background: "linear-gradient(90deg,#00f5ff,#7c4dff)",
        }}
      />
      <div
        className="absolute right-[-120px] bottom-[-60px] w-96 h-96 rounded-full blur-3xl opacity-20"
        style={{
          background: "linear-gradient(90deg,#004cff,#00f5ff)",
        }}
      />
    </div>
  );
}
