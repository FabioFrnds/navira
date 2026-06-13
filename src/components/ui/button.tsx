export default function Button({
  children,
  loading,
  ...props
}: any) {
  return (
    <button
      {...props}
      disabled={loading}
      className="
        h-14 rounded-2xl px-8 font-semibold text-white
        bg-[#0B1F3B]
        transition-all
        hover:bg-[#132b50]
        hover:scale-[1.02]
        active:scale-[0.98]
        disabled:opacity-50
        shadow-[0_10px_30px_rgba(11,31,59,0.25)]
      "
    >
      {loading ? 'Chargement...' : children}
    </button>
  )
}