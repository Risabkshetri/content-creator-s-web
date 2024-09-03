'use client'
export default function HeroPage() {


  return (
    <>
    <div className="min-h-lvh flex flex-col items-center justify-center bg-transparent p-4 relative">
      <div className="absolute inset-0 w-full h-full bg-black bg-opacity-50 z-0"></div>
      <video
        className="absolute inset-0 w-full h-full object-cover z-0 bg-black bg-opacity-70 bg-fixed"
        src="/images/herovideo.mp4"
        autoPlay
        loop
        muted
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-6 z-10 bg-black bg-opacity-70 rounded-lg">
        <div className="p-4 flex flex-col gap-4 items-center justify-center text-white ">
        <div className="mt-10 flex flex-col items-center justify-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-center mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
            Welcome to My Creative World
          </h1>
         
          <p className="text-lg sm:text-xl md:text-xl font-light text-center max-w-2xl">
            Explore a universe of innovative content, where imagination meets technology. Join me on this exciting journey of creativity and discovery.
          </p>
         
        </div>
          <button
            className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded transition duration-300"
          >
            Join Us
          </button>
        </div>
      </div>
    </div>
    </>
  );
}
