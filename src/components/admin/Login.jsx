import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

function Login() {
;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navi = useNavigate();
  // const username = localStorage.getItem("abc");
  // useEffect(() => {
  //   if (username === null) {
  //     handleLogin(false);
  //   } else {
  //     handleLogin(true);
  //   }
  // }, []);
  const onSubmits = (data) => {
    const { username, password } = data;
    if (username === "admin") {
      if (password === "admin") {
        // handleLogin(true);
        localStorage.setItem("abc", "def");
        navi("/product");
      } else {
        alert("Wrong password");
      }
    } else {
      alert("Wrong username");
    }
  };
  return (
    <div>
      <button onClick={() => test()}>a</button>
      <div className="flex w-full justify-center">
        <form className="w-96" onSubmit={handleSubmit(onSubmits)}>
          <div className="flex pt-2 pb-2 ">
            <label className="w-2/6">Username:</label>
            <input
              className="block w-4/6 border-solid border-slate-300 border-2"
              type="text"
              {...register("username", { required: true })}
            />
          </div>
          <div className="flex pt-2 pb-2">
            <label className="w-2/6 ">Password:</label>
            <input
              className="w-4/6 border-solid border-slate-300 border-2"
              type="password"
              {...register("password", { required: true })}
            />
          </div>
          {/* errors will return when field validation fails  */}
          {errors.exampleRequired && <span>This field is required</span>}
          <input
            className="mt-4 px-4 font-bold bg-sky-600	text-white py-2 border-2 border-solid border-sky-500"
            type="submit"
            value={"LOGIN"}
          />
        </form>
      </div>
    </div>
  );
}

export default Login;
