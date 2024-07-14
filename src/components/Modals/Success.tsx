import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";

const style = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    maxWidth: 750,
    width: { mobile: "60%", tablet: "100%", desktop: "100%" },
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 4,
    borderRadius: "8px",
    height: { mobile: 300, tablet: 500, desktop: 500 },
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
};

export default function Success({
    open,
    handleClose,
}: {
    open: boolean;
    handleClose: () => void;
}) {
    return (
        <div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Box
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            flexDirection: "column",
                            rowGap: "20px",
                        }}
                    >
                        <Box
                            sx={{
                                position: "absolute",
                                top: 10,
                                right: 10,
                                cursor: "pointer",
                            }}
                            onClick={handleClose}
                        >
                            <CloseIcon color="primary" />
                        </Box>
                        <CheckCircleIcon
                            sx={{ width: 125, height: 125 }}
                            color="primary"
                        />
                        <Typography variant="h2" textAlign={"center"}>
                            Your application is accepted
                        </Typography>
                        <Typography variant="h4" textAlign={"center"}>
                            We will contact you soon
                        </Typography>
                    </Box>
                </Box>
            </Modal>
        </div>
    );
}
