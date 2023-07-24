import { prisma } from '@/lib/prisma'

export default async function Home() {
  // const competitions = await prisma().competition.findMany();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {/* {competitions.map((comp) => <div key={comp.id}>{comp.name}</div>)} */}
    </main>
  )
}
