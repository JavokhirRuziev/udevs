import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import MenuIcon from "@mui/icons-material/Menu";
import { headerCategories } from "../../assets/data/headerData";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import Button from "@mui/material/Button";
import { socialMediaArr } from "../../assets/data/contactsData";

type Anchor = "right";
interface SliderMobileProps {
    handleScroll: (id: string) => void;
    Logo: any;
}

export default function SliderMobile({
    handleScroll,
    Logo,
}: SliderMobileProps) {
    const [state, setState] = React.useState({
        right: false,
    });
    const categories = headerCategories.filter((el) => el?.name !== "Language");

    const toggleDrawer =
        (anchor: Anchor, open: boolean) =>
        (event: React.KeyboardEvent | React.MouseEvent) => {
            if (
                event.type === "keydown" &&
                ((event as React.KeyboardEvent).key === "Tab" ||
                    (event as React.KeyboardEvent).key === "Shift")
            ) {
                return;
            }

            setState({ ...state, [anchor]: open });
        };

    const list = (anchor: Anchor) => (
        <Box
            sx={listWrapperStyles}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <Box sx={topContainerStyles}>
                <Box
                    onClick={() => handleScroll("Top")}
                    sx={{ cursor: "pointer" }}
                >
                    <Logo id="logo" />
                </Box>
                <Box
                    onClick={toggleDrawer("right", false)}
                    sx={{ cursor: "pointer" }}
                >
                    <CloseIcon color="primary" />
                </Box>
            </Box>
            <Box>
                {categories?.map((el) => (
                    <Typography
                        variant="h2"
                        fontSize={"32px !important"}
                        lineHeight={"50px"}
                        sx={{ cursor: "pointer" }}
                        onClick={() => handleScroll(el?.name)}
                    >
                        {el?.name}
                    </Typography>
                ))}
            </Box>
            <Box sx={bottomContainerStyles}>
                <Button
                    color="primary"
                    size="large"
                    fullWidth
                    sx={{ mb: 4 }}
                    onClick={() => handleScroll("Contact")}
                >
                    Contact
                </Button>
                <Box>{socialMediaArr?.map((el) => el?.icon)}</Box>
            </Box>
        </Box>
    );

    return (
        <>
            <Box
                onClick={toggleDrawer("right", true)}
                sx={{ cursor: "pointer" }}
            >
                <MenuIcon color="primary" />
            </Box>
            <Drawer
                anchor={"right"}
                open={state["right"]}
                onClose={toggleDrawer("right", false)}
            >
                {list("right")}
            </Drawer>
        </>
    );
}

const listWrapperStyles = {
    width: "100vw",
    "#logo": { width: 92, height: 32 },
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    height: "100vh",
};

const topContainerStyles = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "calc(100% - 25px)",
    mt: "10px",
};

const bottomContainerStyles = {
    p: "0px 20px",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    mb: 4,
};
