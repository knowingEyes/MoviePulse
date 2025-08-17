 export default function Button({handleClick, children, bg = "bg-[#ef4444]"}) {
  return (
    <button
        className={`${bg} text-white px-6 rounded-md py-2 cursor-pointer font-bold text-sm flex  items-center-safe justify-center gap-1 hover:scale-[1.01] transition-all ease-in-out`}
      onClick={handleClick}
    >
      {children}
    </button>
  );
}
