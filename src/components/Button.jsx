 export default function Button({handleClick, children, bg = "bg-[#ef4444]"}) {
  return (
    <button
        className={`${bg} text-white px-6 rounded-md py-2 cursor-pointer font-bold text-sm flex items-center justify-center gap-2 `}
      onClick={handleClick}
    >
      {children}
    </button>
  );
}
