"use client";

import { Note as NoteType } from "@/db/schemas/notes";
import EditButton from "./EditButton";
import DeleteButton from "./DeleteButton";

type Props = {
  note: NoteType;
};

function Warranty({ note }: Props) {
  return (
    <div className="custom-scrollbar bg-muted/80 h-96 w-full overflow-y-auto overflow-x-hidden whitespace-pre-wrap break-words rounded-lg p-6 flex flex-col">
      <div className="relative mb-2 flex justify-center items-center gap-2">
        <div className="absolute left-0">
          <EditButton note={note} />
        </div>
        <h1 className="text-muted-foreground text-lg font-semibold">
          {note.title}
        </h1>
        <DeleteButton noteId={note.id} />
      </div>

      <div className="flex-grow overflow-y-auto mb-4 p-4 mt-5">
  <p className="text-base">{note.text}</p>
</div>

<div className="mt-auto border-t border-gray-200 pt-4">
  <p className="text-sm text-gray-500">Warranty Start Date: {note.warrantyStartDate?.toISOString().slice(0, 10)}</p>
  <p className="text-sm text-gray-500">Warranty End Date: {note.warrantyEndDate?.toISOString().slice(0, 10)}</p>
</div>
      <div className="mt-auto">
        <p>Last Updated: {note.updatedAt.toISOString().slice(0, 10)}</p>
      </div>
    </div>
  );
}

export default Warranty;
