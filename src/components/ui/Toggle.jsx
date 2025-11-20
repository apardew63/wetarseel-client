import { useState } from "react";

export default function Toggle() {
  const [checked, setChecked] = useState(false);

  return (
    <div className="flex items-center space-x-2">
      <button
        type="button"
        onClick={() => setChecked(!checked)}
        data-state={checked ? "checked" : "unchecked"}
        className="peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center
          rounded-full border-2 border-transparent transition-colors
          data-[state=checked]:bg-slate-900
          data-[state=unchecked]:bg-slate-200
          focus-visible:outline-none focus-visible:ring-2
          focus-visible:ring-slate-950 focus-visible:ring-offset-2
          disabled:cursor-not-allowed disabled:opacity-50
          dark:data-[state=checked]:bg-slate-50
          dark:data-[state=unchecked]:bg-slate-800"
      >
        <span
          className="pointer-events-none block h-5 w-5 rounded-full bg-white shadow-lg
            ring-0 transition-transform
            data-[state=checked]:translate-x-5
            data-[state=unchecked]:translate-x-0
            dark:bg-slate-950"
        ></span>
      </button>

      <label className="text-sm font-medium leading-none">
        Showing all Leads
      </label>
    </div>
  );
}
