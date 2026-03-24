export function AccountPage() {
  return (
    <section id="account-page" className="mb-10">
      <h2 className="text-2xl font-bold mb-6 border-b pb-2">User Profile</h2>
      <div className="bg-white shadow rounded-lg p-6 max-w-lg border-l-4 border-blue-500">
        <div className="flex items-center space-x-4 mb-6">
          <div className="w-16 h-16 bg-blue-500 rounded-full text-white flex items-center justify-center text-2xl font-bold">
            U
          </div>
          <div>
            <h3 className="text-xl font-bold">Tên Của Em</h3>
            <p className="text-blue-500 font-medium">Admin / Role</p>
          </div>
        </div>
        <div className="space-y-3 text-gray-700">
          <p>
            <strong className="w-32 inline-block">User ID:</strong> 99
          </p>
          <p>
            <strong className="w-32 inline-block">Phone:</strong> 09xxxx
          </p>
          <p>
            <strong className="w-32 inline-block">Email:</strong>{" "}
            hanh.nhi@eiu...
          </p>
        </div>
      </div>
    </section>
  );
}
