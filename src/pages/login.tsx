
import React, { FC, useEffect } from "react";
import { useForm } from "react-hook-form";
import { authenticateUser, useAppDispatch, useAppSelector } from "@/store";
import toast from "react-hot-toast";
import { history } from "@/helper";
import { LoginForm } from "@/types";
import authService from "@/services/auth.services";


type Props = {
  name?: string;
};

export const Login: FC<Props> = ({ name }) => {
  const dispatch = useAppDispatch();

  const isAuthenticated = useAppSelector(state => state.auth.isAuthenticated);

  useEffect(() => {
    if (isAuthenticated) {
      history.navigate('/')
    }
  }, [isAuthenticated]);


  const { register, handleSubmit, formState } = useForm<LoginForm>();
  const { errors, isSubmitting } = formState;

  const onSubmit = (loginForm: LoginForm): void => {

    dispatch(authenticateUser(loginForm));

    // toast.success("Successfully toasted!");
  };

  return (
    <div className="col-md-6 offset-md-3 mt-5">
      <div className="card">
        <h4 className="card-header">Login</h4>
        <div className="card-body">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group">
              <label>Username</label>
              <input
                type="text"
                {...register("username", { required: true, maxLength: 100 })}
                className={`form-control ${errors.username ? "is-invalid" : ""
                  } dark: text-black`}
              />
              {errors?.username && <div>Username is required</div>}
              {/* <div className="invalid-feedback">{errors}</div> */}
            </div>
            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                {...register("password", { required: true, maxLength: 30 })}
                className={`form-control ${errors.password ? "is-invalid" : ""
                  } dark: text-black`}
              />
              {/* <div className="invalid-feedback">{errors.username?.message}</div> */}
              {errors?.password && <div>Password is required</div>}
            </div>

            <button disabled={isSubmitting} className="btn btn-primary bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
              {isSubmitting && (
                <span className="spinner-border spinner-border-sm mr-1"></span>
              )}
              Login
            </button>
            {/* {authError &&
              <div className="alert alert-danger mt-3 mb-0">{authError.message}</div>
            } */}
          </form>
        </div>
      </div>
    </div>
  );
};
