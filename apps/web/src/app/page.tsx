import Link from "next/link";
import { getAllCards } from "@cometpisces/tarot-kit";

export default function Home() {
  const cards = getAllCards();

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold">Arcana Nyx</h1>
      <p className="mt-2">Total cards loaded: {cards.length}</p>

      <div className="mt-4">
        <Link href="/daily" className="text-blue-600 underline">
          Go to Daily Draw
        </Link>
      </div>

      <ul className="mt-4 space-y-2">
        {cards.map((card) => (
          <li key={card.id} className="rounded border p-3">
            <div className="font-medium">{card.name.en}</div>
            <div className="text-sm text-gray-600">{card.name.zh}</div>
          </li>
        ))}
      </ul>
    </main>
  );
}
