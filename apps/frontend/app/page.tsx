import { Seed } from "@/types";

export default async function Home() {
  const response = await fetch("http://localhost:3001/seeds");
  const data: Seed[] = await response.json();

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        {data.map((seed) => (
          <div
            key={seed.id}
            className="mb-4 p-4 border border-gray-200 rounded-lg"
          >
            <p>{seed.name}</p>
          </div>
        ))}
        <button className="cursor-pointer">+ Add Seed</button>
      </main>
    </div>
  );
}
