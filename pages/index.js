// pages/index.js

import { useRef, useState } from "react";
import html2canvas from "html2canvas";
import CardPreview from "../components/CardPreview";
import ControlPanel from "../components/ControlPanel";

export default function Home() {
  const [form, setForm] = useState({
    discord: "",
    x: "",
    role: "",
    joined: "",
    region: "",
    avatarUrl: ""
  });

  const onChange = (k, v) => setForm((f) => ({ ...f, [k]: v }));
  const cardRef = useRef(null);

  async function handleDownload() {
    if (!cardRef.current) return;
    const canvas = await html2canvas(cardRef.current, { backgroundColor: null, scale: 2 });
    const a = document.createElement("a");
    a.download = `rialo-id-${(form.discord || "member").replace(/\s+/g, "-")}.png`;
    a.href = canvas.toDataURL("image/png");
    a.click();
  }

  function handleReset() {
    setForm({ discord: "", x: "", role: "", joined: "", region: "", avatarUrl: "" });
  }

  return (
    // CHANGE: Removed 'max-w-7xl' to use full viewport width.
    // 'mx-auto' keeps it centered if there's any implicit centering, but the grid takes over the width.
    <main className="mx-auto p-6 grid grid-cols-1 lg:grid-cols-5 gap-8"> 
      {/* Panel kiri: input - Span 2 columns (40%) */}
      <section className="bg-white rounded-3xl shadow-soft border border-neutral-200 p-6 lg:col-span-2">
        <h1 className="text-xl font-semibold mb-4">Rialo ID Card — Controls</h1>
        <ControlPanel form={form} onChange={onChange} />
      </section>

      {/* Panel kanan: preview + action bar - Span 3 columns (60%) */}
      <section className="flex flex-col items-center justify-start lg:col-span-3">
        <CardPreview ref={cardRef} form={form} />
        <div className="mt-4 flex gap-3">
          <button onClick={handleDownload} className="px-4 py-2 rounded-xl bg-neutral-900 text-white">
            Download PNG
          </button>
          <button onClick={handleReset} className="px-4 py-2 rounded-xl border border-neutral-300">
            Reset
          </button>
        </div>
      </section>
    </main>
  );
}