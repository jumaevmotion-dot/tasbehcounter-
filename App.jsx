import { useState, useEffect, useCallback } from "react";

const THEMES = [
  {
    id: "night",
    name: "Tungi Osmon",
    emoji: "🌙",
    bg: "linear-gradient(160deg, #0d1b2a 0%, #1b2d40 50%, #0a1628 100%)",
    card: "rgba(201,169,110,0.06)",
    cardBorder: "rgba(201,169,110,0.15)",
    accent: "#c9a96e",
    accentLight: "#e8d9b5",
    muted: "#8ba5c4",
    text: "#e8d9b5",
    btnBg: "radial-gradient(circle, #c9a96e, #a07840)",
    btnActive: "radial-gradient(circle, #d4a857, #b8873a)",
    beadFill: "#c9a96e",
    beadStroke: "#e8d9b5",
    beadEmpty: "rgba(201,169,110,0.15)",
    complete: "radial-gradient(circle, #2d6a3f, #1a3d26)",
    completeTxt: "#a8f0c0",
    progress: "linear-gradient(90deg, #c9a96e, #e8d9b5)",
    trackStroke: "rgba(201,169,110,0.08)",
    shadow: "0 0 0 8px rgba(201,169,110,0.08), 0 8px 32px rgba(0,0,0,0.5)",
    rippleShadow: "0 0 0 20px rgba(201,169,110,0.05), 0 0 40px rgba(201,169,110,0.3)",
  },
  {
    id: "emerald",
    name: "Yashil Bog'",
    emoji: "🌿",
    bg: "linear-gradient(160deg, #071a0e 0%, #0d2b18 50%, #051410 100%)",
    card: "rgba(52,211,153,0.06)",
    cardBorder: "rgba(52,211,153,0.18)",
    accent: "#34d399",
    accentLight: "#a7f3d0",
    muted: "#6ee7b7",
    text: "#d1fae5",
    btnBg: "radial-gradient(circle, #059669, #065f46)",
    btnActive: "radial-gradient(circle, #10b981, #047857)",
    beadFill: "#34d399",
    beadStroke: "#a7f3d0",
    beadEmpty: "rgba(52,211,153,0.12)",
    complete: "radial-gradient(circle, #064e3b, #022c22)",
    completeTxt: "#6ee7b7",
    progress: "linear-gradient(90deg, #059669, #34d399)",
    trackStroke: "rgba(52,211,153,0.08)",
    shadow: "0 0 0 8px rgba(52,211,153,0.08), 0 8px 32px rgba(0,0,0,0.6)",
    rippleShadow: "0 0 0 20px rgba(52,211,153,0.06), 0 0 40px rgba(52,211,153,0.25)",
  },
  {
    id: "rose",
    name: "Atirgul",
    emoji: "🌹",
    bg: "linear-gradient(160deg, #1a0510 0%, #2d0d1f 50%, #150310 100%)",
    card: "rgba(251,113,133,0.06)",
    cardBorder: "rgba(251,113,133,0.18)",
    accent: "#fb7185",
    accentLight: "#fecdd3",
    muted: "#fda4af",
    text: "#ffe4e6",
    btnBg: "radial-gradient(circle, #e11d48, #9f1239)",
    btnActive: "radial-gradient(circle, #f43f5e, #be123c)",
    beadFill: "#fb7185",
    beadStroke: "#fecdd3",
    beadEmpty: "rgba(251,113,133,0.12)",
    complete: "radial-gradient(circle, #4c0519, #2d0010)",
    completeTxt: "#fda4af",
    progress: "linear-gradient(90deg, #e11d48, #fb7185)",
    trackStroke: "rgba(251,113,133,0.08)",
    shadow: "0 0 0 8px rgba(251,113,133,0.08), 0 8px 32px rgba(0,0,0,0.6)",
    rippleShadow: "0 0 0 20px rgba(251,113,133,0.06), 0 0 40px rgba(251,113,133,0.3)",
  },
  {
    id: "pearl",
    name: "Oq Nur",
    emoji: "🕊️",
    bg: "linear-gradient(160deg, #f0f4f8 0%, #e2e8f0 50%, #f8fafc 100%)",
    card: "rgba(100,116,139,0.06)",
    cardBorder: "rgba(100,116,139,0.18)",
    accent: "#475569",
    accentLight: "#1e293b",
    muted: "#64748b",
    text: "#1e293b",
    btnBg: "radial-gradient(circle, #334155, #1e293b)",
    btnActive: "radial-gradient(circle, #475569, #334155)",
    beadFill: "#475569",
    beadStroke: "#1e293b",
    beadEmpty: "rgba(100,116,139,0.18)",
    complete: "radial-gradient(circle, #166534, #14532d)",
    completeTxt: "#bbf7d0",
    progress: "linear-gradient(90deg, #334155, #64748b)",
    trackStroke: "rgba(100,116,139,0.15)",
    shadow: "0 0 0 8px rgba(100,116,139,0.08), 0 8px 32px rgba(0,0,0,0.15)",
    rippleShadow: "0 0 0 20px rgba(100,116,139,0.05), 0 0 40px rgba(100,116,139,0.2)",
  },
  {
    id: "violet",
    name: "Binafsha",
    emoji: "💜",
    bg: "linear-gradient(160deg, #0f0720 0%, #1e0a3c 50%, #0a0418 100%)",
    card: "rgba(167,139,250,0.06)",
    cardBorder: "rgba(167,139,250,0.18)",
    accent: "#a78bfa",
    accentLight: "#ddd6fe",
    muted: "#c4b5fd",
    text: "#ede9fe",
    btnBg: "radial-gradient(circle, #7c3aed, #5b21b6)",
    btnActive: "radial-gradient(circle, #8b5cf6, #6d28d9)",
    beadFill: "#a78bfa",
    beadStroke: "#ddd6fe",
    beadEmpty: "rgba(167,139,250,0.12)",
    complete: "radial-gradient(circle, #2e1065, #1e0a3c)",
    completeTxt: "#c4b5fd",
    progress: "linear-gradient(90deg, #7c3aed, #a78bfa)",
    trackStroke: "rgba(167,139,250,0.08)",
    shadow: "0 0 0 8px rgba(167,139,250,0.08), 0 8px 32px rgba(0,0,0,0.6)",
    rippleShadow: "0 0 0 20px rgba(167,139,250,0.06), 0 0 40px rgba(167,139,250,0.3)",
  },
];

const DHIKR_LIST = [
  { text: "سُبْحَانَ اللّٰهِ", transliteration: "Subhanalloh", meaning: "Alloh pok va muqaddas", target: 33 },
  { text: "اَلْحَمْدُ لِلّٰهِ", transliteration: "Alhamdulliloh", meaning: "Barcha hamd Allohniki", target: 33 },
  { text: "اَللّٰهُ أَكْبَرُ", transliteration: "Allohu Akbar", meaning: "Alloh ulug'dir", target: 34 },
  { text: "لَا إِلٰهَ إِلَّا اللّٰهُ", transliteration: "La ilaha illalloh", meaning: "Allohdan boshqa iloh yo'q", target: 100 },
  { text: "أَسْتَغْفِرُ اللّٰهَ", transliteration: "Astaghfirulloh", meaning: "Allohdan mag'firat so'rayman", target: 100 },
  { text: "صَلَّى اللّٰهُ عَلَيْهِ وَسَلَّم", transliteration: "Allohummag'fir", meaning: "Payg'ambarga salavot", target: 100 },
  { text: "لَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللّٰهِ", transliteration: "La havla vala quvvata", meaning: "Kuch-quvvat faqat Allohda", target: 33 },
];

const BEAD_COUNT = 33;

export default function TasbehApp() {
  const [themeIdx, setThemeIdx] = useState(0);
  const [selected, setSelected] = useState(0);
  const [count, setCount] = useState(0);
  const [rounds, setRounds] = useState(0);
  const [ripple, setRipple] = useState(false);
  const [flash, setFlash] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [showThemes, setShowThemes] = useState(false);
  const [showStats, setShowStats] = useState(false);
  const [history, setHistory] = useState([]);
  const [vibrate, setVibrate] = useState(true);

  const theme = THEMES[themeIdx];
  const dhikr = DHIKR_LIST[selected];
  const beadsCompleted = count % BEAD_COUNT;
  const totalCount = rounds * BEAD_COUNT + beadsCompleted;
  const progressPercent = Math.min((totalCount / dhikr.target) * 100, 100);
  const isComplete = totalCount >= dhikr.target;

  const handleCount = useCallback(() => {
    if (isComplete) return;
    setRipple(true);
    setTimeout(() => setRipple(false), 400);
    if (vibrate && navigator.vibrate) navigator.vibrate(30);

    const newCount = count + 1;
    if (newCount >= BEAD_COUNT) {
      setCount(0);
      setRounds(r => r + 1);
      setFlash(true);
      setTimeout(() => setFlash(false), 700);
    } else {
      setCount(newCount);
    }
  }, [count, isComplete, vibrate]);

  useEffect(() => {
    const handler = (e) => {
      if (e.code === "Space" || e.code === "Enter") { e.preventDefault(); handleCount(); }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [handleCount]);

  const reset = () => {
    if (totalCount > 0) {
      setHistory(h => [{ dhikr: dhikr.transliteration, count: totalCount, date: new Date().toLocaleDateString("uz-UZ") }, ...h].slice(0, 10));
    }
    setCount(0); setRounds(0); setFlash(false);
  };

  const selectDhikr = (i) => { setSelected(i); reset(); setShowMenu(false); };

  const beadAngles = Array.from({ length: BEAD_COUNT }, (_, i) => (i * 360) / BEAD_COUNT);
  const R = 130;

  const isPearlTheme = theme.id === "pearl";
  const menuBg = isPearlTheme ? "rgba(240,244,248,0.98)" : "rgba(10,15,25,0.97)";

  return (
    <div style={{
      minHeight: "100vh",
      background: theme.bg,
      display: "flex", flexDirection: "column", alignItems: "center",
      fontFamily: "'Segoe UI', system-ui, sans-serif",
      color: theme.text,
      padding: "0 16px 48px",
      userSelect: "none",
      transition: "background 0.5s ease",
    }}>
      <style>{`
        @keyframes flashRing {
          0% { transform: translate(-50%,-50%) scale(0.8); opacity: 0.9; }
          100% { transform: translate(-50%,-50%) scale(1.6); opacity: 0; }
        }
        @keyframes completePop {
          0% { transform: translate(-50%,-50%) scale(0.9); }
          60% { transform: translate(-50%,-50%) scale(1.08); }
          100% { transform: translate(-50%,-50%) scale(1); }
        }
        .stat-card:hover { transform: translateY(-2px); }
      `}</style>

      {/* Header */}
      <div style={{ width: "100%", maxWidth: 440, display: "flex", justifyContent: "space-between", alignItems: "center", padding: "20px 0 12px" }}>
        <div>
          <div style={{ fontSize: 10, letterSpacing: 3, color: theme.muted, textTransform: "uppercase", marginBottom: 2 }}>Raqamli Tasbeh</div>
          <div style={{ fontSize: 19, fontWeight: 700, color: theme.accent }}>✦ Zikr Hisoblagich</div>
        </div>
        <div style={{ display: "flex", gap: 8 }}>
          <button onClick={() => { setShowStats(!showStats); setShowMenu(false); setShowThemes(false); }}
            style={{ background: `${theme.card}`, border: `1px solid ${theme.cardBorder}`, borderRadius: 10, color: theme.accent, padding: "8px 12px", cursor: "pointer", fontSize: 16 }}>
            📊
          </button>
          <button onClick={() => { setShowThemes(!showThemes); setShowMenu(false); setShowStats(false); }}
            style={{ background: `${theme.card}`, border: `1px solid ${theme.cardBorder}`, borderRadius: 10, color: theme.accent, padding: "8px 12px", cursor: "pointer", fontSize: 16 }}>
            🎨
          </button>
          <button onClick={() => { setShowMenu(!showMenu); setShowThemes(false); setShowStats(false); }}
            style={{ background: `${theme.card}`, border: `1px solid ${theme.cardBorder}`, borderRadius: 10, color: theme.accent, padding: "8px 12px", cursor: "pointer", fontSize: 14, fontWeight: 600 }}>
            ☰
          </button>
        </div>
      </div>

      {/* Theme Panel */}
      {showThemes && (
        <div style={{ width: "100%", maxWidth: 440, background: menuBg, border: `1px solid ${theme.cardBorder}`, borderRadius: 18, marginBottom: 14, padding: 16, transition: "all 0.3s" }}>
          <div style={{ fontSize: 11, letterSpacing: 2, color: theme.muted, textTransform: "uppercase", marginBottom: 12 }}>Rang Teması</div>
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
            {THEMES.map((t, i) => (
              <button key={t.id} onClick={() => setThemeIdx(i)}
                style={{
                  flex: "1 1 calc(33% - 10px)", minWidth: 80,
                  padding: "10px 8px", borderRadius: 12, cursor: "pointer",
                  border: themeIdx === i ? `2px solid ${t.accent}` : "2px solid transparent",
                  background: t.bg.includes("f0f4") ? "#e2e8f0" : "rgba(255,255,255,0.05)",
                  color: themeIdx === i ? t.accent : theme.muted,
                  fontSize: 12, fontWeight: themeIdx === i ? 700 : 400,
                  display: "flex", flexDirection: "column", alignItems: "center", gap: 4,
                  transition: "all 0.2s",
                }}>
                <span style={{ fontSize: 20 }}>{t.emoji}</span>
                <span>{t.name}</span>
              </button>
            ))}
          </div>
          <div style={{ marginTop: 14, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <span style={{ fontSize: 12, color: theme.muted }}>📳 Tebranish</span>
            <button onClick={() => setVibrate(v => !v)}
              style={{
                background: vibrate ? theme.accent : "transparent",
                border: `1px solid ${theme.accent}`, borderRadius: 20, padding: "5px 16px",
                color: vibrate ? (isPearlTheme ? "#fff" : "#000") : theme.accent,
                cursor: "pointer", fontSize: 12, fontWeight: 600, transition: "all 0.2s"
              }}>
              {vibrate ? "Yoqiq" : "O'chiq"}
            </button>
          </div>
        </div>
      )}

      {/* Stats Panel */}
      {showStats && (
        <div style={{ width: "100%", maxWidth: 440, background: menuBg, border: `1px solid ${theme.cardBorder}`, borderRadius: 18, marginBottom: 14, padding: 16 }}>
          <div style={{ fontSize: 11, letterSpacing: 2, color: theme.muted, textTransform: "uppercase", marginBottom: 12 }}>So'nggi sessiyalar</div>
          {history.length === 0 ? (
            <div style={{ color: theme.muted, fontSize: 13, textAlign: "center", padding: "12px 0" }}>Hali ma'lumot yo'q</div>
          ) : history.map((h, i) => (
            <div key={i} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "10px 0", borderBottom: i < history.length - 1 ? `1px solid ${theme.cardBorder}` : "none" }}>
              <div>
                <div style={{ fontSize: 13, color: theme.text, fontWeight: 600 }}>{h.dhikr}</div>
                <div style={{ fontSize: 11, color: theme.muted }}>{h.date}</div>
              </div>
              <div style={{ fontSize: 20, fontWeight: 700, color: theme.accent }}>{h.count}</div>
            </div>
          ))}
        </div>
      )}

      {/* Dhikr menu */}
      {showMenu && (
        <div style={{ width: "100%", maxWidth: 440, background: menuBg, border: `1px solid ${theme.cardBorder}`, borderRadius: 18, marginBottom: 14, overflow: "hidden" }}>
          {DHIKR_LIST.map((d, i) => (
            <button key={i} onClick={() => selectDhikr(i)}
              style={{
                width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center",
                padding: "13px 18px",
                background: selected === i ? `${theme.card}` : "transparent",
                border: "none", borderBottom: i < DHIKR_LIST.length - 1 ? `1px solid ${theme.cardBorder}` : "none",
                color: selected === i ? theme.accent : theme.muted, cursor: "pointer", textAlign: "left",
                transition: "all 0.15s",
              }}>
              <div>
                <div style={{ fontSize: 15, fontFamily: "serif", direction: "rtl", color: selected === i ? theme.text : theme.muted }}>{d.text}</div>
                <div style={{ fontSize: 11, marginTop: 2 }}>{d.transliteration}</div>
              </div>
              <div style={{ fontSize: 11, color: theme.accent, background: theme.card, borderRadius: 8, padding: "4px 10px", border: `1px solid ${theme.cardBorder}` }}>{d.target}x</div>
            </button>
          ))}
        </div>
      )}

      {/* Current dhikr card */}
      <div style={{ width: "100%", maxWidth: 440, background: theme.card, border: `1px solid ${theme.cardBorder}`, borderRadius: 20, padding: "18px 20px", marginBottom: 22, textAlign: "center", transition: "all 0.4s" }}>
        <div style={{ fontSize: 30, fontFamily: "serif", direction: "rtl", color: theme.text, lineHeight: 1.5, marginBottom: 6 }}>{dhikr.text}</div>
        <div style={{ fontSize: 14, color: theme.accent, fontStyle: "italic", marginBottom: 3 }}>{dhikr.transliteration}</div>
        <div style={{ fontSize: 11, color: theme.muted }}>{dhikr.meaning}</div>
      </div>

      {/* Bead ring */}
      <div style={{ position: "relative", width: 320, height: 320, marginBottom: 18 }}>
        <svg width="320" height="320" viewBox="0 0 320 320">
          <circle cx="160" cy="160" r={R} fill="none" stroke={theme.trackStroke} strokeWidth="2" />
          {beadAngles.map((angle, i) => {
            const rad = ((angle - 90) * Math.PI) / 180;
            const x = 160 + R * Math.cos(rad);
            const y = 160 + R * Math.sin(rad);
            const filled = i < beadsCompleted;
            return (
              <circle key={i} cx={x} cy={y} r={filled ? 7 : 5}
                fill={filled ? theme.beadFill : theme.beadEmpty}
                stroke={filled ? theme.beadStroke : "transparent"}
                strokeWidth={filled ? 1.5 : 0}
                style={{ transition: "all 0.25s cubic-bezier(0.34,1.56,0.64,1)" }}
              />
            );
          })}
        </svg>

        {/* Center button */}
        <button onClick={handleCount} disabled={isComplete}
          style={{
            position: "absolute", top: "50%", left: "50%",
            transform: "translate(-50%, -50%)",
            width: 144, height: 144, borderRadius: "50%",
            background: isComplete ? theme.complete : ripple ? theme.btnActive : theme.btnBg,
            border: "none",
            boxShadow: ripple ? theme.rippleShadow : theme.shadow,
            cursor: isComplete ? "default" : "pointer",
            display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
            transition: "all 0.18s cubic-bezier(0.34,1.56,0.64,1)",
            outline: "none",
            animation: isComplete ? "completePop 0.4s ease" : "none",
          }}>
          {isComplete ? (
            <>
              <div style={{ fontSize: 30 }}>✓</div>
              <div style={{ fontSize: 10, color: theme.completeTxt, fontWeight: 700, letterSpacing: 1 }}>BARAKALLO</div>
            </>
          ) : (
            <>
              <div style={{ fontSize: 42, fontWeight: 900, color: isPearlTheme ? "#fff" : "#0d1b2a", lineHeight: 1 }}>{totalCount}</div>
              <div style={{ fontSize: 10, color: isPearlTheme ? "rgba(255,255,255,0.7)" : "rgba(13,27,42,0.6)", fontWeight: 700, letterSpacing: 1.5 }}>BOSING</div>
            </>
          )}
        </button>

        {/* Flash ring */}
        {flash && (
          <div style={{
            position: "absolute", top: "50%", left: "50%",
            width: 200, height: 200, borderRadius: "50%",
            border: `3px solid ${theme.accent}`,
            animation: "flashRing 0.6s ease-out forwards",
            pointerEvents: "none",
          }} />
        )}
      </div>

      {/* Progress bar */}
      <div style={{ width: "100%", maxWidth: 440, marginBottom: 18 }}>
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 12, color: theme.muted, marginBottom: 7 }}>
          <span style={{ fontWeight: 600 }}>{totalCount} / {dhikr.target}</span>
          <span>{Math.round(progressPercent)}% bajarildi</span>
        </div>
        <div style={{ height: 8, background: theme.card, borderRadius: 10, overflow: "hidden", border: `1px solid ${theme.cardBorder}` }}>
          <div style={{
            height: "100%", width: `${progressPercent}%`,
            background: isComplete ? "#4ade80" : theme.progress,
            borderRadius: 10, transition: "width 0.35s ease",
          }} />
        </div>
        {rounds > 0 && (
          <div style={{ fontSize: 11, color: theme.accent, marginTop: 6, textAlign: "center" }}>
            🔄 {rounds} ta aylana yakunlandi
          </div>
        )}
      </div>

      {/* Stats row */}
      <div style={{ width: "100%", maxWidth: 440, display: "flex", gap: 10, marginBottom: 20 }}>
        {[
          { label: "Jami", value: totalCount, icon: "📿" },
          { label: "Aylana", value: rounds, icon: "🔄" },
          { label: "Qoldi", value: Math.max(0, dhikr.target - totalCount), icon: "⏳" },
        ].map(({ label, value, icon }) => (
          <div key={label} className="stat-card" style={{
            flex: 1, background: theme.card, border: `1px solid ${theme.cardBorder}`,
            borderRadius: 16, padding: "14px 6px", textAlign: "center",
            transition: "transform 0.2s ease",
          }}>
            <div style={{ fontSize: 16, marginBottom: 4 }}>{icon}</div>
            <div style={{ fontSize: 24, fontWeight: 800, color: theme.accent, lineHeight: 1 }}>{value}</div>
            <div style={{ fontSize: 10, color: theme.muted, marginTop: 4, letterSpacing: 0.5 }}>{label}</div>
          </div>
        ))}
      </div>

      {/* Buttons row */}
      <div style={{ display: "flex", gap: 10, width: "100%", maxWidth: 440 }}>
        <button onClick={reset}
          style={{
            flex: 1, background: "transparent", border: `1px solid ${theme.cardBorder}`,
            color: theme.muted, borderRadius: 14, padding: "13px",
            cursor: "pointer", fontSize: 13, fontWeight: 600, letterSpacing: 0.5,
            transition: "all 0.2s",
          }}
          onMouseOver={e => e.currentTarget.style.color = theme.accent}
          onMouseOut={e => e.currentTarget.style.color = theme.muted}
        >
          ↺ Qayta boshlash
        </button>
        <button onClick={() => selectDhikr((selected + 1) % DHIKR_LIST.length)}
          style={{
            flex: 1, background: theme.card, border: `1px solid ${theme.cardBorder}`,
            color: theme.accent, borderRadius: 14, padding: "13px",
            cursor: "pointer", fontSize: 13, fontWeight: 600, letterSpacing: 0.5,
            transition: "all 0.2s",
          }}
        >
          ➜ Keyingi zikr
        </button>
      </div>

      <div style={{ marginTop: 18, fontSize: 10, color: `${theme.muted}60`, textAlign: "center", letterSpacing: 1 }}>
        SPACE · ENTER yoki ekranga bosing
      </div>
    </div>
  );
}
