import * as React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

import {
  Input,
  Button,
  FormControl,
  Box,
  FormErrorMessage,
} from "@chakra-ui/react";

const SearchSchema = Yup.object().shape({
  website: Yup.string().url().required("Please type a valid website url"),
});

const MyInput = ({ field, form, ...props }: any) => {
  return <Input {...field} {...props} />;
};

interface ISearchBarProps {
  onSearch: (websiteUrl: string) => void;
}

export const SearchBar = ({
  onSearch = (websiteUrl) => {},
}: ISearchBarProps) => {
  return (
    <Box>
      <Formik
        initialValues={{
          website: "",
        }}
        validationSchema={SearchSchema}
        onSubmit={(values, actions) => {
          setTimeout(() => {
            onSearch(values.website);
            actions.setSubmitting(false);
          }, 1000);

          actions.setSubmitting(false);
        }}
      >
        {({ errors, touched, values }) => {
          return (
            <>
              <Form>
                <FormControl
                  isRequired
                  isInvalid={Boolean(errors?.website && touched?.website)}
                >
                  <Field
                    component={MyInput}
                    name="website"
                    placeholder="Please type a website url"
                  />
                  <FormErrorMessage>{errors.website}</FormErrorMessage>
                </FormControl>
                <Button
                  mt="10px"
                  minWidth="120px"
                  colorScheme="blue"
                  type="submit"
                >
                  Execute
                </Button>
              </Form>
            </>
          );
        }}
      </Formik>
    </Box>
  );
};
