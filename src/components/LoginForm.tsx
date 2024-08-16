export default function LoginForm() {
  return (
    <>
      <div className="flex flex-col">
        <h1 className="font-sans md:text-3xl font-semibold">Welcome</h1>
        <form className="space-y-6 mt-4">
          <div>
            {/* <label
            htmlFor="username"
            className="block text-sm font-medium text-gray-700"
          >
            Username
          </label> */}
            <input
              type="text"
              id="username"
              name="username"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-2xl shadow-sm focus:outline-none focus:shadow-blue focus:shadow-lg"
              placeholder="Enter your username"
            />
          </div>

          <div>
            {/* <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700"
          >
            Password
          </label> */}
            <input
              type="password"
              id="password"
              name="password"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-2xl shadow-sm focus:outline-none focus:shadow-blue focus:shadow-lg"
              placeholder="Enter your password"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#3c4046] text-white py-2 px-4 rounded-xl hover:bg-[#4d525a]"
          >
            Login
          </button>
        </form>
      </div>
    </>
  );
}
