export default function Input(props: any) {
  return (
    <input
      {...props}
      className="
        h-14 w-full rounded-2xl
        border border-black/10
        bg-white
        px-5
        text-[#111827]
        placeholder:text-gray-400
        outline-none
        transition
        focus:border-[#6C5CE7]
        focus:ring-2
        focus:ring-[#6C5CE7]/10
      "
    />
  )
}