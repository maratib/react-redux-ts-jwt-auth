import apiService from '@/services';
import { Item_Form } from '@/types';
import React, { FC, useState } from 'react';
import { useForm } from 'react-hook-form';

type Props = {
    name?: string;
};

export const ItemForm: FC<Props> = ({ name }) => {



    const { register, handleSubmit, formState } = useForm<Item_Form>();
    const { errors, isSubmitting } = formState;

    const onSubmit = async (itemForm: Item_Form): void => {

        // console.log('Item-Form', itemForm);
        const data = new FormData();
        data.append('title', itemForm.title);
        data.append('desc', itemForm.desc);
        data.append('file', itemForm.file[0]);

        // console.log('DATA', data);

        const res = await apiService.addPost(data);
        console.log(res?.data);



        // console.log('File : ', itemForm.file[0]);







        // toast.success("Successfully toasted!");
    };




    return (
        <div className="col-md-6 offset-md-3 mt-5">
            <div className="card">
                <h4 className="card-header">Login</h4>
                <div className="card-body">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-group">
                            <label>Title</label>
                            <input
                                type="text"
                                {...register("title", { required: true, maxLength: 150 })}
                                className={`form-control ${errors.title ? "is-invalid" : ""
                                    } dark: text-black`}
                            />
                            {errors?.title && <div>Title is required</div>}
                        </div>
                        <div className="form-group">
                            <label>Description</label>
                            <input
                                type="text"
                                {...register("desc", { required: true, maxLength: 500 })}
                                className={`form-control ${errors.desc ? "is-invalid" : ""
                                    } dark: text-black`}
                            />

                            {errors?.desc && <div>Description is required</div>}
                        </div>
                        <div className="form-group">
                            <input type="file"
                                {...register("file", { required: true })}
                            />
                        </div>




                        <button disabled={isSubmitting} className="btn btn-primary bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                            {isSubmitting && (
                                <span className="spinner-border spinner-border-sm mr-1"></span>
                            )}
                            Add Item
                        </button>

                    </form>
                </div>
            </div>
        </div>
    );
};