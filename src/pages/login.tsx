import * as Yup from 'yup';
import React, { FC } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { useAppDispatch } from "@/hooks";
import toast from 'react-hot-toast';

type Props = {
  name?: string;
};

export const Login: FC<Props> = ({ name }) => {

  const dispatch = useAppDispatch();

  // form validation rules 
  const validationSchema = Yup.object().shape({
    username: Yup.string().required('Username is required'),
    password: Yup.string().required('Password is required')
  });

  const formOptions = { resolver: yupResolver(validationSchema) };


  // get functions to build form with useForm() hook
  const { register, handleSubmit, formState } = useForm(formOptions);
  const { errors, isSubmitting } = formState;


  const onSubmit = (fields: any) => {

    console.log(fields.username, fields.password);
    toast.success('Successfully toasted!')



  }

  return (
    <div className="col-md-6 offset-md-3 mt-5">
      <div className="alert alert-info">
        Username: test<br />
        Password: test
      </div>
      <div className="card">
        <h4 className="card-header">Login</h4>
        <div className="card-body">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group">
              <label>Username</label>
              <input type="text" {...register('username')} className={`form-control ${errors.username ? 'is-invalid' : ''}`} />
              {/* <div className="invalid-feedback">{errors.username?.message}</div> */}
            </div>
            <div className="form-group">
              <label>Password</label>
              <input type="password" {...register('password')} className={`form-control ${errors.password ? 'is-invalid' : ''}`} />
              {/* <div className="invalid-feedback">{errors.password?.message}</div> */}
            </div>
            <button disabled={isSubmitting} className="btn btn-primary">
              {isSubmitting && <span className="spinner-border spinner-border-sm mr-1"></span>}
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

