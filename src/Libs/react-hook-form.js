import React from "react";
import { useForm, Controller } from "react-hook-form";
import { FormControl, Button, TextField } from "@mui/material";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup
  .object({
    email: yup.string().email().required("Enter Email"),
  })
  .required();

export default function ReactHookForm() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "asdf",
    },
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormControl>
        <Controller
          name="email"
          control={control}
          render={({ field }) => (
            <TextField label="Email" variant="standard" {...field} />
          )}
        />
        {errors.email && <p>Invalid Email.</p>}

        <Button type="submit">Submit</Button>
      </FormControl>
    </form>
  );
}
