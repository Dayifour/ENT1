import { Input } from "@/components/ui/input";
import React from "react";
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
} from "./ui/form";
import { Control } from "react-hook-form";
import { z } from "zod";
import { formSchema } from "@/lib/utils";

interface CustomInput {
  control: Control<z.infer<typeof formSchema>>;
  name: "email" | "password" | "prenom" | "nom" | "adresse" | "date";
  label: string;
  placeholder: string;
  description: string;
  type: string;
}

const CustomInput = ({
  control,
  name,
  label,
  placeholder,
  description,
  type,
}: CustomInput) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <Input
              placeholder={placeholder}
              type={type}
              {...field}
              className="input-class"
            />
          </FormControl>
          <FormDescription>{description}</FormDescription>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default CustomInput;
