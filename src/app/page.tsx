import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-lumin-black">
      <div className="relative flex place-items-center">
        <Image 
          src="logo-completa.svg" 
          alt="AR LUMIN HUB" 
          width={220} 
          height={30} 
          className="hidden md:block"
        />
        <div className="absolute -bottom-2 left-0 w-full h1 bg-lumin-purple blur-sm opacity-50"></div>
      </div>
    </main>
  );
}
