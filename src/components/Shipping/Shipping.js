import React from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router';
import useAuth from '../../hooks/useAuth';

const Shipping = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { user } = useAuth();
  const history = useHistory()
  const onSubmit = (data) => {
      console.log(data);
        history.push('/placeOrder')
    }
  return (
    <div>
      <form
        className="d-flex flex-column container w-50 mx-auto mt-5"
        onSubmit={handleSubmit(onSubmit)}
      >
        <input
          className="form-control"
          placeholder="Name"
          defaultValue={user.displayName}
          {...register('name')}
        />
        <br />
        <input
          className="form-control"
          placeholder="Email"
          defaultValue={user.email}
          {...register('email', { required: true })}
        />
        <br />
        <input
          placeholder="Address"
          className="form-control"
          defaultValue=""
          {...register('address')}
        />
        <br />
        <input
          placeholder="Phone No"
          className="form-control"
          defaultValue=""
          {...register('phone')}
        />
        <br />
        {errors.email && (
          <span className="text-danger">This field is required</span>
        )}
        <br />

        <input className="btn btn-primary" type="submit" />
      </form>
    </div>
  );
};

export default Shipping;
