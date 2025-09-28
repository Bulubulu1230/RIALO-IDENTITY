// components/ControlPanel.jsx

const MAX_MB = 2;
const ALLOWED = ["image/jpeg", "image/png", "image/webp"];

// Helper function untuk inisial
function getInitials(name = "") {
  const s = name.split(/\s+/).filter(Boolean).slice(0, 2).map(w => w[0]?.toUpperCase()).join("");
  return s || "PP"; // Photo Profile
}


export default function ControlPanel({ form, onChange }) {
  const handleFile = async (e) => {
    const f = e.target.files?.[0];
    if (!f) return;

    if (!ALLOWED.includes(f.type)) {
      alert("Gunakan JPG/PNG/WEBP ya.");
      return;
    }
    if (f.size > MAX_MB * 1024 * 1024) {
      alert(`Ukuran maks ${MAX_MB}MB.`);
      return;
    }

    const url = await compressToWebP(f, 0.85); // crop square + kompres ringan
    onChange("avatarUrl", url);
  };

  return (
    <div className="grid grid-cols-1 gap-4"> 
      {/* PP display section (kotak pink) */}
      <div className="flex flex-col gap-2 mb-4 p-4 border border-neutral-300 rounded-lg bg-neutral-50">
        <label className="text-sm font-medium">Photo Profile</label>
        <div className="flex items-center gap-4">
          <div className="w-[74px] h-[74px] rounded-lg overflow-hidden border-2 border-neutral-200 shadow-sm bg-white grid place-items-center flex-shrink-0">
            {form.avatarUrl ? (
              <img src={form.avatarUrl} alt="avatar" className="w-full h-full object-cover" />
            ) : (
              <span className="text-xs font-semibold text-neutral-700">{getInitials(form.discord)}</span>
            )}
          </div>
          <div className="flex flex-col gap-2 flex-grow">
            <input type="file" accept="image/*" onChange={handleFile} className="text-sm" />
            {form.avatarUrl && (
              <button
                type="button"
                onClick={() => onChange("avatarUrl", "")}
                className="mt-1 px-3 py-1 text-sm border border-neutral-300 rounded-lg hover:bg-neutral-100"
              >
                Hapus Foto
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Existing Input Fields */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Input label="Discord" value={form.discord} onChange={(v) => onChange("discord", v)} />
        <Input label="X" value={form.x} onChange={(v) => onChange("x", v)} placeholder="@username" />
        <Input label="Role" value={form.role} onChange={(v) => onChange("role", v)} />
        <Input type="date" label="Join Date" value={form.joined} onChange={(v) => onChange("joined", v)} />
        <Input label="Region" value={form.region} onChange={(v) => onChange("region", v)} />
      </div>
    </div>
  );
}

function Input({ label, value, onChange, type = "text", placeholder }) {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-sm">{label}</label>
      <input
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        className="p-2 rounded-xl border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-neutral-700"
      />
    </div>
  );
}

// ===== Helpers =====
async function compressToWebP(file, quality = 0.85) {
  const bmp = await createImageBitmap(file);
  const canvas = document.createElement("canvas");
  const size = 512; // output square untuk avatar
  canvas.width = size; canvas.height = size;
  const ctx = canvas.getContext("2d");

  // Crop tengah agar square
  const s = Math.min(bmp.width, bmp.height);
  const sx = (bmp.width - s) / 2;
  const sy = (bmp.height - s) / 2;
  ctx.drawImage(bmp, sx, sy, s, s, 0, 0, size, size);

  return canvas.toDataURL("image/webp", quality);
}