export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center font-sans bg-gradient-to-tr from-[#629dc9] to-[#b8e4ff]">
      <div className="flex flex-col items-center justify-center">
        <div className="w-10 h-10 border-4 border-x-white/0 border-b-white/0 rounded-full animate-spin" />
        <span className="mt-6 text-white text-lg tracking-wide drop-shadow">Loading...</span>
      </div>
    </div>
  );
}