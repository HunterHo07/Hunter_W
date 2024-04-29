import Header from "@/components/Header";
import Note from "@/components/Note";
import db from "@/db";
import { notes } from "@/db/schemas/notes";
import { getUser } from "@/lib/auth";
import { desc, eq } from "drizzle-orm";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"


export default async function Home() {
  const user = await getUser();

  const _notes = await db
    .select()
    .from(notes)
    .where(eq(notes.userId, user.id))
    .orderBy(desc(notes.updatedAt));

  return (
    <main className="flex min-h-screen flex-col items-center px-4 pb-24">
      <Header />

      <div className="mt-8 grid w-full max-w-[1800px] grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      
          <Select>
  <SelectTrigger className="w-[180px]">
    <SelectValue placeholder="Theme" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="light">Light</SelectItem>
    <SelectItem value="dark">Dark</SelectItem>
    <SelectItem value="system">System</SelectItem>
  </SelectContent>
</Select>
        {_notes.map((note) => (
          <>

          <Note key={note.id} note={note} />
          </>
        ))}
      </div>
    </main>
  );
}
