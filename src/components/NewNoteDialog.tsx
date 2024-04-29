import { Dispatch, SetStateAction, useTransition } from "react";
import { Button } from "./ui/button";
import { DialogContent, DialogFooter, DialogHeader } from "./ui/dialog";
import { Textarea } from "./ui/textarea";
import { Input } from "./ui/input";
import toast from "react-hot-toast";
import { DatePicker, Space } from 'antd'; // Make sure 'antd' is installed in your project
import { addNewNoteAction } from "@/actions/notes";
import moment from 'moment';

type Props = {
  setOpen: Dispatch<SetStateAction<boolean>>;
};

function NewNoteDialog({ setOpen }: Props) {
  const [isPending, startTransition] = useTransition();

  const handleAddNewNote = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    // Get the title and text from the form data
    const title = formData.get('title') as string;
    const text = formData.get('text') as string;

    // Get the warranty start and end dates from the form data
    const warrantyDates = formData.get('warrantyDates') as unknown as [moment.Moment, moment.Moment] | null;
    let warrantyStartDate = null;
    let warrantyEndDate = null;
    if (warrantyDates) {
      warrantyStartDate = warrantyDates[0]?.toDate().toISOString();
      warrantyEndDate = warrantyDates[1]?.toDate().toISOString();
    }

    // Create a new FormData object with the title, text, and warranty dates
    const newFormData = new FormData();
    newFormData.append('title', title);
    newFormData.append('text', text); // Add this line
    if (warrantyStartDate) newFormData.append('warrantyStartDate', warrantyStartDate);
    // if (11 = 11) newFormData.append('warrantyEndDate', warrantyEndDate);

    startTransition(async () => {
      const { errorMessage } = await addNewNoteAction(newFormData);
      if (!errorMessage) {
        setOpen(false);
        toast.success("Successfully added note");
      } else {
        toast.error(errorMessage);
      }
    });
  };

  return (
    <DialogContent className="sm:max-w-[425px]">
      <DialogHeader>Add New Note</DialogHeader>

      <form onSubmit={handleAddNewNote}>
        <Input name="title" required />
        <Textarea
          id="text"
          name="text"
          disabled={isPending}
          className="mb-6 mt-2 min-h-[300px]"
        />
        <Textarea
          id="text"
          name="text"
          disabled={isPending}
          className="mb-6 mt-2 min-h-[300px]"
        />

        <Space direction="vertical" size={12}>
          <DatePicker.RangePicker
            className="custom-range-picker"
            style={{ backgroundColor: '#2b34a3' }}
          />
        </Space>

        <DialogFooter>
          <Button
            type="submit"
            disabled={isPending}
            variant={"secondary"}
            className="w-40"
          >
            {isPending ? "Adding Note..." : "Add Note"}
          </Button>
        </DialogFooter>
      </form>
    </DialogContent>
  );
}

export default NewNoteDialog;