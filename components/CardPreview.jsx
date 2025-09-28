// components/CardPreview.jsx (patch posisi & typografi)
import { forwardRef } from "react";

function getInitials(name=""){const s=name.split(/\s+/).filter(Boolean).slice(0,2).map(w=>w[0]?.toUpperCase()).join("");return s||"PP";}
function formatDate(iso){if(!iso)return"";const d=new Date(iso);return isNaN(d.getTime())?iso:d.toLocaleDateString(undefined,{year:"numeric",month:"short",day:"2-digit"});}

const CardPreview = forwardRef(function CardPreview({ form }, ref) {
  const xHandle = form.x ? (form.x.startsWith("@") ? form.x : `@${form.x}`) : "";

  return (
    <div
      ref={ref}
      className="relative w-[1152px] h-[768px] rounded-[28px] overflow-hidden shadow-soft border border-neutral-200 bg-[#F5F3EE]"
      style={{ backgroundImage:"url('/assets/card-bg-fixed.png')", backgroundSize:"cover", backgroundPosition:"center" }}
    >
      {/* Avatar — aman dari sudut (safe area 32px) */}
      <div className="absolute left-8 top-8"> {/* 32px dari tepi */}
        <div className="w-[76px] h-[76px] rounded-full overflow-hidden border-2 border-white shadow-md bg-white/70 grid place-items-center">
          {form.avatarUrl ? <img src={form.avatarUrl} alt="avatar" className="w-full h-full object-cover" /> :
            <span className="text-sm font-semibold text-neutral-700">{getInitials(form.discord)}</span>}
        </div>
      </div>

      {/* Stack vertikal konsisten di bawah avatar */}
      <div className="absolute left-8 top-[118px] max-w-[520px] text-left flex flex-col gap-3">
        {form.discord && <Field label="Discord" value={form.discord} />}
        {xHandle && <Field label="X" value={xHandle} />}
        {form.role && <Field label="Role" value={form.role} />}
        {form.joined && <Field label="Join Date" value={formatDate(form.joined)} />}
        {form.region && <Field label="Region" value={form.region} />}
      </div>
    </div>
  );
});

export default CardPreview;

function Field({ label, value }) {
  return (
    <div className="block">
      <div className="text-[10px] uppercase tracking-[0.14em] text-neutral-500">{label}</div>
      <div className="mt-1 text-[19px] leading-[1.2] font-semibold break-words">{value}</div>
    </div>
  );
}
