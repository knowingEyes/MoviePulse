export default function LoaderSkelenton() {
  return (
    <div
      className=" fixed inset-0 bg-[#080808] p-4 
    [&>div]:rounded-lg [&_div]:rounded-lg overflow-y-hidden duration-75 z-50"
    >
      <div className="w-full h-[200px] bg-gray-800/30 animate-pulse"></div>
      <div className="w-60 h-7 bg-gray-800/30 mt-5 animate-pulse"></div>
      <div className="flex [&>div]:w-20 gap-3 [&>div]:bg-gray-800/30 [&>div]:h-5 pt-3 [&div>]:animate-pulse">
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div className="w-60 h-4 bg-gray-800/30 my-2 animate-pulse"></div>
      <div className="[&>div]:p-5 [&>div]:bg-gray-800/30  [&>div]:mb-2 [&div>]:animate-pulse">
        <div></div>
        <div></div>
      </div>
      <div className="[&>div]:bg-gray-800/30 [&>div]:p-2 [&>div]:mb-2 [&div>]:animate-pulse">
        <div className="  w-80 "></div>
        <div className="  w-60"></div>
      </div>
      <div className="[&>div]:bg-gray-800/30  [&>div]:h-35 [&>div]:w-22 [&>div]:mb-3 mt-5 [&div>]:aniamte-pulse">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}
