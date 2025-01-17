"use client";

import { EXAMPLE_CHANNEL_IDS } from "@/lib/constants";
import { Form, Formik, FormikHelpers } from "formik";
import { Loader, Search } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React, { Fragment, useCallback } from "react";
import FlexContainer from "../system/flex-container";
import { Input } from "../ui/input";

interface InitialValues {
  search: string;
}

const FormContainer = () => {
  const initialValues: InitialValues = {
    search: "",
  };

  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // Get a new searchParams string by merging the current
  // searchParams with a provided key/value pair
  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );

  const handleSubmit = (
    values: InitialValues,
    action: FormikHelpers<InitialValues>
  ) => {
    console.log(values.search);
    action.setSubmitting(true);
    router.push(`${pathname}?${createQueryString("channelId", values.search)}`);
    action.setSubmitting(false);
  };
  return (
    <Fragment>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        {({ values, handleChange, isSubmitting }) => (
          <Form className="w-full max-w-4xl border-none outline-none">
            <FlexContainer variant="row-center">
              <Input
                name="search"
                value={values.search}
                className="py-5 px-10 bg-red-500 border-red-200 h-auto rounded-[99px] text-white text-lg  placeholder:text-white font-geist-mono"
                placeholder="Add channel id here"
                onChange={handleChange}
              />

              <button
                type="submit"
                className="px-5 py-5 bg-red-500 border-red-200 h-auto rounded-[99px] text-white hover:bg-red-600 hover:scale-105 duration-200 cursor-pointer"
              >
                {isSubmitting ? (
                  <Loader className="w-4 h-4 animate-spin" />
                ) : (
                  <Search className="w-4 h-4" />
                )}
              </button>
            </FlexContainer>
          </Form>
        )}
      </Formik>
      <FlexContainer variant="row-center">
        {EXAMPLE_CHANNEL_IDS.map((channelId) => (
          <button
            key={channelId}
            onClick={() => {
              router.push(
                `${pathname}?${createQueryString("channelId", channelId)}`
              );
            }}
            className="px-2 py-1.5 bg-zinc-100 rounded-3xl hover:bg-zinc-200 cursor-pointer duration-200 text-xs font-geist-mono font-semibold"
          >
            Load {channelId}
          </button>
        ))}
      </FlexContainer>
    </Fragment>
  );
};

export default FormContainer;
