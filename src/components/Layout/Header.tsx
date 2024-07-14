import React, { useState } from "react";
import { ReactComponent as Logo } from "../../assets/images/icons/logo.svg";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { headerCategories } from "../../assets/data/headerData";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { theme } from "../../theme";
import Tooltip from "@mui/material/Tooltip";
import { ReactComponent as ArrowBottom } from "../../assets/images/icons/arrow-bottom.svg";
import useBreakpoints from "../../hooks/breakpoints";
import SideBarMobile from "../Drawers/SideBarMobile";

const Header = () => {
    const { mobile } = useBreakpoints();
    const [activeTab, setIsActive] = useState<null | string>(null);

    const handleScroll = (id: string) => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
        if (id !== "Language") {
            setIsActive(id);
        }
        console.log("working");
    };
    return (
        <>
            <div id="Top" />
            <Box sx={wrapperStyles} className="SlideFromTopToBottom">
                <Container>
                    <Box sx={containerStyles}>
                        <Logo
                            style={{ width: 96, height: 31 }}
                            onClick={() => handleScroll("Top")}
                        />
                        {!mobile ? (
                            <Box sx={categoriesWrapperStyles}>
                                {headerCategories?.map((el, index) => (
                                    <Tooltip
                                        key={index}
                                        title={
                                            el?.children && (
                                                <Box
                                                    sx={{
                                                        minWidth:
                                                            el?.name !==
                                                            "Language"
                                                                ? 300
                                                                : 120,
                                                    }}
                                                >
                                                    {el?.name !==
                                                        "Language" && (
                                                        <Typography
                                                            variant="subtitle1"
                                                            p={"0px 24px"}
                                                            m={"0px 0px 20px"}
                                                        >
                                                            {el?.name}
                                                        </Typography>
                                                    )}
                                                    {el?.children?.map(
                                                        (e, ind) => (
                                                            <Box
                                                                sx={tooltipChildrenStyles(
                                                                    el
                                                                )}
                                                                key={ind}
                                                                onClick={() =>
                                                                    handleScroll(
                                                                        e?.id
                                                                    )
                                                                }
                                                            >
                                                                <Box
                                                                    width={
                                                                        el?.name !==
                                                                        "Language"
                                                                            ? 48
                                                                            : 28
                                                                    }
                                                                >
                                                                    {e?.icon}
                                                                </Box>
                                                                <Typography
                                                                    id="text"
                                                                    color={
                                                                        "common.black"
                                                                    }
                                                                    variant={
                                                                        el?.name !==
                                                                        "Language"
                                                                            ? "body2"
                                                                            : "body1"
                                                                    }
                                                                >
                                                                    {e?.name}
                                                                </Typography>
                                                            </Box>
                                                        )
                                                    )}
                                                </Box>
                                            )
                                        }
                                        placement="bottom"
                                    >
                                        <Typography
                                            variant="body1"
                                            sx={categoryTextStyles(
                                                Boolean(el?.children),
                                                activeTab,
                                                el?.name
                                            )}
                                            onClick={(e) =>
                                                handleScroll(el?.name)
                                            }
                                        >
                                            {el?.name}
                                            {el?.children && <ArrowBottom />}
                                        </Typography>
                                    </Tooltip>
                                ))}

                                <Button
                                    color="primary"
                                    size="small"
                                    onClick={() => handleScroll("Contact")}
                                >
                                    Contact
                                </Button>
                            </Box>
                        ) : (
                            <SideBarMobile {...{ handleScroll, Logo }} />
                        )}
                    </Box>
                </Container>
            </Box>
        </>
    );
};

export default Header;

const wrapperStyles = {
    borderBottom: `2px solid ${theme.palette.grey[200]}`,
    position: "fixed",
    top: 0,
    width: "100%",
    bgcolor: "common.white",
    zIndex: 3,
};

const containerStyles = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    height: 72,
};

const categoryTextStyles = (
    children: boolean,
    activeTab: string | null,
    name: string
) => ({
    ":hover": {
        borderBottom: `3px solid ${
            children && activeTab !== name
                ? "transparent"
                : theme.palette.primary.main
        }`,
    },
    borderBottom:
        activeTab === name
            ? `3px solid ${theme.palette.primary.main}`
            : `3px solid transparent`,
    cursor: "pointer",
    p: "10px 0px",
    display: "flex",
    alignItems: "center",
    columnGap: "3px",
});

const tooltipChildrenStyles = (el: { name: string }) => ({
    display: "flex",
    alignItems: "center",
    columnGap: el?.name !== "Language" ? "24px" : "16px",
    p: el?.name !== "Language" ? "8px 11px 8px 34px" : "8px 11px",
    ":hover": {
        bgcolor: "primary.main",
        "#text": { color: "common.white" },
    },
    cursor: "pointer",
});

const categoriesWrapperStyles = {
    display: "flex",
    alignItems: "center",
    columnGap: "32px",
};
