// Email regex: /\S+@\S+\.\S+/

import { NavLink } from "react-router-dom";
import { useForm } from "react-hook-form";
import Button from "../ui/Button";
import Form from "../ui/Form";
import FormRow from "../ui/FormRow";
import Input from "../ui/Input";
import { useSignUp } from "../services/useSignUp";

function SignupForm() {
  const { signUp, isPending } = useSignUp();
  const { register, formState, getValues, handleSubmit, reset } = useForm();
  const { errors } = formState;

  function onSubmit({ fullName, email, password }) {
    signUp(
      { fullName, email, password },
      {
        onSettled: reset,
      }
    );
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormRow label="Full name" error={errors?.fullname?.message}>
        <Input
          type="text"
          id="fullName"
          disabled={isPending}
          {...register("fullName", { required: "This field is required" })}
        />
      </FormRow>

      <FormRow label="Email address" error={errors?.email?.message}>
        <Input
          type="email"
          id="email"
          disabled={isPending}
          {...register("email", {
            required: "This field is required",
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: "Please provide valid Email Address",
            },
          })}
        />
      </FormRow>

      <FormRow
        label="Password (min 8 characters)"
        error={errors?.password?.message}
      >
        <Input
          type="password"
          id="password"
          disabled={isPending}
          {...register("password", {
            required: "This field is required",
            minLength: {
              value: 8,
              message: "Password needs to be at least 8 character",
            },
          })}
        />
      </FormRow>

      <FormRow
        label="Confirm password"
        error={errors?.passwordConfirm?.message}
      >
        <Input
          type="password"
          id="passwordConfirm"
          disabled={isPending}
          {...register("passwordConfirm", {
            required: "This field is required",
            validate: (value) =>
              value === getValues().password || "Password need to match",
          })}
        />
      </FormRow>
      <p>
        Already Have an Account?
        <span>
          <NavLink to="/login">
            <span style={{ marginLeft: "10px" }}>Login</span>
          </NavLink>
        </span>
      </p>
      <FormRow>
        <Button variation="secondary" type="reset" disabled={isPending}>
          Cancel
        </Button>
        <Button disabled={isPending}>Create new user</Button>
      </FormRow>
    </Form>
  );
}

export default SignupForm;
