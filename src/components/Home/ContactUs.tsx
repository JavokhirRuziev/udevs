import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import React from "react";
import Container from "@mui/material/Container";
import TextField from "../TextFields/index";
import { Field, Form, Formik } from "formik";
import { Button } from "@mui/material";
import { contactsArr, socialMediaArr } from "../../assets/data/contactsData";

interface FormValues {
  name: string;
  email: string;
  project: string;
}

interface FormErrors {
  name?: string;
  email?: string;
}

const validations = (values: FormValues) => {
  const errors: FormErrors = {};
  if (!values?.name) {
    errors["name"] = "Fill in the field";
  }
  if (!values?.email) {
    errors["email"] = "Fill in the field";
  }
  return errors;
};

const handleSubmit = (
  values: FormValues,
  { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void }
) => {
  setTimeout(() => {
    alert(JSON.stringify(values, null, 2));
    setSubmitting(false);
  }, 400);
};
const ContactUs = () => {
  return (
    <Box className="bg-main">
      <Container>
        <Box sx={{ p: "80px 0px" }}>
          <Typography
            variant="h1"
            color="primary.main"
            mb={"43px"}
            fontSize={"64px !important"}
            width={"800px"}
          >
            Contact us
          </Typography>

          <Box sx={contentWrapperStyles}>
            <Box sx={{ maxWidth: 424, width: "100%" }}>
              <Typography variant="h3" mb={"50px"}>
                Leave us a message
              </Typography>
              <Formik
                initialValues={{ name: "", email: "", project: "" }}
                validate={validations}
                onSubmit={handleSubmit}
              >
                {({}) => (
                  <Form>
                    <Field name="name" component={TextField} label="Name" />
                    <Field
                      name="email"
                      component={TextField}
                      label="Your email"
                    />
                    <Field
                      name="project"
                      component={TextField}
                      label="Briefly describe your project"
                      multiline
                      rows={4}
                    />
                    <Button type="submit" size="medium" fullWidth>
                      Submit
                    </Button>
                  </Form>
                )}
              </Formik>
            </Box>
            <Box sx={{ maxWidth: 424, width: "100%" }}>
              <Box sx={{ display: "flex", flexDirection: "column", rowGap: 4 }}>
                {contactsArr?.map((el, ind, arr) => (
                  <Box sx={contactCardStyles}>
                    {el?.icon}
                    <Typography variant="body1" fontSize={"16px !important"}>
                      {el?.name}
                    </Typography>
                  </Box>
                ))}
              </Box>
              <Box sx={socialMediaContainerStyles}>
                {socialMediaArr?.map((el) => (
                  <Box sx={{ cursor: "pointer" }}>{el?.icon}</Box>
                ))}
              </Box>
              <Box sx={{ mt: 2 }}>
                <iframe
                  src="https://yandex.com/map-widget/v1/?um=constructor%3A3d9eefa927bd54bcc9e8fa398a73c8cafb60622737263c96ad9341c32c21fa69&source=constructor"
                  width={424}
                  height={232}
                  style={{ border: "none", borderRadius: "12px" }}
                ></iframe>
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default ContactUs;

const contactCardStyles = {
  display: "flex",
  alignItems: "center",
  columnGap: 1,
};

const contentWrapperStyles = {
  boxShadow: "2px 10px 28px rgba(75,0,129,.12)",
  p: "40px 98px 88px",
  borderRadius: "10px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  bgcolor: "common.white",
};

const socialMediaContainerStyles = {
  display: "flex",
  alignItems: "center",
  columnGap: "20px",
  mt: "30px",
};
