export default function Login() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-4">
      <h1 className="text-3xl font-bold">Login Page</h1>

      <input
        type="email"
        placeholder="Enter email"
        className="border p-2 rounded"
      />

      <input
        type="password"
        placeholder="Enter password"
        className="border p-2 rounded"
      />

      <button className="bg-blue-600 text-white px-6 py-2 rounded">
        Login
      </button>
    </div>
  );
}