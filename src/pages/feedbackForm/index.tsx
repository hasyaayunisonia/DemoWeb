export default function FeedbackForm() {
  return (
    <div className="w-full h-screen bg-gray-50 flex items-center justify-center p-4">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          alert("Feedback terkirim!");
        }}
        className="w-full max-w-xl bg-white p-6 rounded-xl shadow-md space-y-5"
      >
        <h2 className="text-2xl font-semibold text-gray-800 text-center">
          Kirim Masukan
        </h2>

        <div className="flex flex-col">
          <label htmlFor="nama" className="text-sm mb-1 text-gray-600">
            Nama
          </label>
          <input
            id="nama"
            type="text"
            required
            className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="email" className="text-sm mb-1 text-gray-600">
            Email (opsional)
          </label>
          <input
            id="email"
            type="email"
            className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="pesan" className="text-sm mb-1 text-gray-600">
            Pesan atau Masukan
          </label>
          <textarea
            id="pesan"
            required
            rows={4}
            className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
        >
          Kirim
        </button>
      </form>
    </div>
  );
}
