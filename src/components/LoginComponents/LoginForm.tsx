import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "../../schemas/LoginSchema";

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <>
      <div className="flex flex-col w-1/2 lg:w-1/3">
        <h1 className="font-sans md:text-3xl font-semibold">Welcome</h1>
        <form className="space-y-6 mt-4" onSubmit={handleSubmit(onSubmit)}>
          <div>
            <input
              {...register("username")}
              type="text"
              id="username"
              name="username"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-2xl shadow-sm focus:outline-none focus:shadow-blue focus:shadow-lg"
              placeholder="Enter your username"
            />

            {errors.username && (
              <p className="text-red-700  min-h-[1.5rem]">
                {errors.username.message.toString()}
              </p>
            )}
          </div>
          <div>
            <input
              {...register("password")}
              type="password"
              id="password"
              name="password"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-2xl shadow-sm focus:outline-none focus:shadow-blue focus:shadow-lg"
              placeholder="Enter your password"
            />

            {errors.password && (
              <p className="text-red-700  min-h-[1.5rem]">
                {errors.password.message.toString()}
              </p>
            )}
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
