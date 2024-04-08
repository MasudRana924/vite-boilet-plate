import { InputAdornment, TextField } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";
import { GiCheckMark } from "react-icons/gi";
const Register = () => {
  const [phone, setPhone] = useState();
  const [password, setPassword] = useState();
  return (
    <div className="border rounded-lg ">
      {/* <img src={logo} alt="" className="w-2/4 mx-auto h-32 lg:mt-8" /> */}
      <div className=" p-8">
        <h2 className="text-start text-md font-medium leading-6 text-gray-900">
          Don't have account ? Create new{" "}
        </h2>

        <form action="" className="space-y-6 py-6 mt-6">
          <TextField
            id="standard-basic"
            label="Phone "
            InputProps={{
              startAdornment: (
                <InputAdornment position="start"></InputAdornment>
              ),
            }}
            variant="standard"
            className="w-full py-3 px-6"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <TextField
            id="standard-basic"
            label="Pin"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start"></InputAdornment>
              ),
            }}
            variant="standard"
            className="w-full py-3 px-6"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <div className="">
            {phone?.length > 10 && password?.length === 5 ? (
              <button className="h-12 w-full  bg-violet-500 border-violet-500 hover:bg-violet-500  hover:border-violet-500 border rounded-full">
               Signup
              </button>
            ) : (
              <button
                disabled
                className="h-12 w-full  bg-gray-500 border-gray-500 hover:bg-gray-500  hover:border-gray-500 border rounded-full disabled"
              >
                Signup
              </button>
            )}
          </div>
          <div>
            <span className="text-sm tracking-wide text-gray-400 mt-5">
              Already have an account?
            </span>{" "}
            <Link to="/account/login">
              {" "}
              <span className="text-sm font-semibold leading-6 text-violet-500">
                Be login
              </span>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
