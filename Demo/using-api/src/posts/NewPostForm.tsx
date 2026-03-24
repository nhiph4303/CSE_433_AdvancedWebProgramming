import { useForm } from "react-hook-form";


export default function NewPostForm() {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm<NewPostData>();

    const getEditorError = (name: keyof NewPostData) => {
        return errors[name]?.message;
    }

    


  return (
    <form noValidate className="border-b py-4">
      <div>
        <label htmlFor="title">Title</label>
        <input type="text" id="title" name="title" />
      </div>
      <div>
        <label htmlFor="description">Description</label>
        <input type="text" id="description" name="description" />
      </div>
      <button type="submit">Save</button>
    </form>
  );
}
