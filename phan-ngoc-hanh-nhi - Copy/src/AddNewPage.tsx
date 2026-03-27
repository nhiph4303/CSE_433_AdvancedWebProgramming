import { useForm } from "react-hook-form";
type FormData = {
  title: string;
  description: string;
  latestVersion: string;
};

export function AddNewPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  function onSubmit(data: FormData) {
    fetch("http://localhost:3001/products", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
  }

  return (
    <section id="add-new-page" className="">
      <h2 className="text-2xl font-bold mb-6 border-b pb-2">Add New Product</h2>
      <div className="bg-white shadow rounded-lg p-6 max-w-2xl">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4 flex flex-col">
            <label className="font-medium mb-2">Product Title</label>
            <input
              type="text"
              {...register("title", { required: "Title không được trống" })}
              className="border border-gray-300 rounded px-4 py-2 focus:border-blue-500"
              placeholder="Title không được Null"
            />
            {errors.title && (
              <span className="text-red-500 text-sm">
                {errors.title.message}
              </span>
            )}
          </div>

          <div className="mb-4 flex flex-col">
            <label className="font-medium mb-2">Description</label>
            <textarea
              {...register("description", {
                required: "Description không được trống",
              })}
              className="border border-gray-300 rounded px-4 py-2 focus:border-blue-500 h-24"
              placeholder="Description không được Null"
            ></textarea>
            {errors.description && (
              <span className="text-red-500 text-sm">
                {errors.description.message}
              </span>
            )}
          </div>
          <div className="mb-6 flex flex-col">
            <label className="font-medium mb-2">Latest Version</label>
            <input
              type="text"
              {...register("latestVersion", {
                required: "Latest Version không được trống",
              })}
              className="border border-gray-300 rounded px-4 py-2 focus:border-blue-500"
              placeholder="e.g., v1.0"
            />
            {errors.latestVersion && (
              <span className="text-red-500 text-sm">
                {errors.latestVersion.message}
              </span>
            )}
          </div>
          <button
            type="submit"
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-6 rounded"
          >
            Add Submit
          </button>
        </form>
      </div>
    </section>
  );
}
