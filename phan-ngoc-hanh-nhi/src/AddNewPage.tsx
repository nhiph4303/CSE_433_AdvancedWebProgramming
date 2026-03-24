export function AddNewPage() {
  return (
    <section id="add-new-page" className="">
      <h2 className="text-2xl font-bold mb-6 border-b pb-2">Add New Product</h2>
      <div className="bg-white shadow rounded-lg p-6 max-w-2xl">
        <form>
          <div className="mb-4 flex flex-col">
            <label className="font-medium mb-2">Product Title</label>
            <input
              type="text"
              className="border border-gray-300 rounded px-4 py-2 focus:border-blue-500"
              placeholder="Title không được Null"
            />
          </div>
          <div className="mb-4 flex flex-col">
            <label className="font-medium mb-2">Description</label>
            <textarea
              className="border border-gray-300 rounded px-4 py-2 focus:border-blue-500 h-24"
              placeholder="Description không được Null"
            ></textarea>
          </div>
          <div className="mb-6 flex flex-col">
            <label className="font-medium mb-2">Latest Version</label>
            <input
              type="text"
              className="border border-gray-300 rounded px-4 py-2 focus:border-blue-500"
              placeholder="e.g., v1.0"
            />
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
