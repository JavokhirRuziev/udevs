import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import React, { useState } from "react";
import Container from "@mui/material/Container";
import TextField from "../TextFields/index";
import { Field, Form, Formik } from "formik";
import { Button } from "@mui/material";
import { contactsArr, socialMediaArr } from "../../assets/data/contactsData";
import Success from "../Modals/Success";

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

const ContactUs = () => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const handleSubmit = (
        values: FormValues,
        { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void }
    ) => {
        setTimeout(() => {
            handleOpen();
            setSubmitting(false);
        }, 400);
    };
    return (
        <Box className="bg-main">
            <Container>
                <Success {...{ open, handleClose }} />
                <Box sx={{ p: "80px 0px" }}>
                    <Typography
                        variant="h1"
                        color="primary.main"
                        sx={textStyles}
                    >
                        Contact us
                    </Typography>
                    <Box sx={contentWrapperStyles}>
                        <Box sx={formContainerStyles}>
                            <Typography variant="h3" mb={"50px"}>
                                Leave us a message
                            </Typography>
                            <Formik
                                initialValues={{
                                    name: "",
                                    email: "",
                                    project: "",
                                }}
                                validate={validations}
                                onSubmit={handleSubmit}
                            >
                                {() => (
                                    <Form>
                                        <Field
                                            name="name"
                                            component={TextField}
                                            label="Name"
                                        />
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
                                        <Button
                                            type="submit"
                                            size="medium"
                                            fullWidth
                                        >
                                            Submit
                                        </Button>
                                    </Form>
                                )}
                            </Formik>
                        </Box>
                        <Box sx={leftSideContainerStyles}>
                            <Box sx={contactsWrapperStyles}>
                                {contactsArr?.map((el, ind, arr) => (
                                    <Box sx={contactCardStyles}>
                                        {el?.icon}
                                        <Typography
                                            variant="body1"
                                            fontSize={"16px !important"}
                                        >
                                            {el?.name}
                                        </Typography>
                                    </Box>
                                ))}
                            </Box>
                            <Box sx={socialMediaContainerStyles}>
                                {socialMediaArr?.map((el) => (
                                    <Box sx={{ cursor: "pointer" }}>
                                        {el?.icon}
                                    </Box>
                                ))}
                            </Box>
                            <Box sx={iframeContainerStyles}>
                                <iframe
                                    id="iframe"
                                    title="udevs"
                                    src="https://yandex.com/map-widget/v1/?um=constructor%3A3d9eefa927bd54bcc9e8fa398a73c8cafb60622737263c96ad9341c32c21fa69&source=constructor"
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
    boxShadow: {
        mobile: "none",
        tablet: "2px 10px 28px rgba(75,0,129,.12)",
        desktop: "2px 10px 28px rgba(75,0,129,.12)",
    },
    p: { desktop: "40px 98px 88px", tablet: "40px 50px 88px" },
    borderRadius: "10px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    bgcolor: "common.white",
    gap: "20px",
    flexDirection: { mobile: "column", tablet: "unset", desktop: "unset" },
};

const socialMediaContainerStyles = {
    display: "flex",
    alignItems: "center",
    columnGap: "20px",
    mt: "30px",
};

const iframeContainerStyles = {
    mt: 2,
    "#iframe": {
        maxWidth: 424,
        height: 232,
        border: "none",
        borderRadius: "12px",
        width: "100%",
        display: { mobile: "none", tablet: "block", desktop: "block" },
    },
};

const textStyles = {
    mb: "43px",
    fontSize: {
        mobile: "32px !important",
        desktop: "64px !important",
        tablet: "64px !important",
    },
    width: {
        mobile: "100%",
        tablet: "800px",
        desktop: "800px",
    },
};

const formContainerStyles = {
    maxWidth: {
        mobile: "100%",
        tablet: 424,
        desktop: 424,
    },
    width: {
        mobile: "100%",
        tablet: "50%",
        desktop: "50%",
    },
};

const leftSideContainerStyles = {
    maxWidth: {
        mobile: "100%",
        tablet: 424,
        desktop: 424,
    },
    width: {
        mobile: "100%",
        tablet: "50%",
        desktop: "50%",
    },
};

const contactsWrapperStyles = {
    display: "flex",
    flexDirection: "column",
    rowGap: 4,
};
