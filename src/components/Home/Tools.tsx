import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import React, { useEffect, useState } from "react";
import Container from "@mui/material/Container";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import { programsArr } from "../../assets/data/toolsData";

const programsNameArr = [
    { name: "Frontend", id: "Frontend" },
    { name: "Backend", id: "Backend" },
    { name: "Devops", id: "Devops" },
    { name: "Testing", id: "Testing" },
    { name: "UX/UI", id: "UX/UI" },
    { name: "Infrastructure", id: "Infrastructure" },
    { name: "Mobile", id: "Mobile" },
];

interface Program {
    name: string;
    id: string;
    icon: any;
    color: string;
}

const ProgramCard = ({ el }: { el: Program }) => {
    return (
        <Box sx={programCardStyles(el.color)}>
            <img src={el?.icon} alt="icon" width={24} height={24} />
            <Typography variant="subtitle2">{el.name}</Typography>
        </Box>
    );
};

const Tools = () => {
    const [selected, setSelected] = useState<string | null>(null);
    const [programs, setPrograms] = useState<Program[]>(
        programsArr as Program[]
    );

    const handleChange = (e: null | string) => {
        if (e !== selected) {
            setSelected(e);
        } else {
            setSelected(null);
        }
    };

    useEffect(() => {
        const filteredArr: Program[] = programsArr.map((el) => {
            if (selected !== null) {
                if (el.id !== selected) {
                    return { ...el, color: "transparent" };
                } else {
                    return el;
                }
            } else {
                return el;
            }
        }) as Program[];
        setPrograms(filteredArr);
    }, [selected]);

    useEffect(() => {
        const elements = document.querySelectorAll(".staggered, .hidden");
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    if (entry.target.classList.contains("staggered")) {
                        entry.target.classList.remove("hidden");
                        entry.target.classList.add("SlideFromBottomToTop");
                    }
                    observer.unobserve(entry.target);
                }
            });
        });

        elements.forEach((element) => {
            observer.observe(element);
        });

        return () => observer.disconnect();
    }, []);

    return (
        <Box sx={{ bgcolor: "primary.light" }}>
            <Container>
                <Box sx={{ p: "80px 0px" }}>
                    <Typography
                        variant="h1"
                        color="primary.main"
                        sx={textStyles}
                        className="staggered hidden"
                    >
                        Tools
                    </Typography>
                    <FormControl
                        sx={{ mb: "48px" }}
                        className="staggered hidden"
                    >
                        <RadioGroup row value={selected} sx={radioDroupStyles}>
                            {programsNameArr?.map((el) => (
                                <FormControlLabel
                                    key={el.id}
                                    sx={{
                                        ".MuiRadio-root": {
                                            color: "primary.main",
                                        },
                                    }}
                                    control={
                                        <Radio
                                            onClick={() => handleChange(el?.id)}
                                            value={el?.id}
                                        />
                                    }
                                    label={
                                        <Typography variant="body1">
                                            {el.name}
                                        </Typography>
                                    }
                                />
                            ))}
                        </RadioGroup>
                    </FormControl>
                    <Box
                        sx={programsWrapperStyles}
                        className="staggered hidden"
                    >
                        {programs?.map((el) => (
                            <ProgramCard key={el.id} el={el} />
                        ))}
                    </Box>
                </Box>
            </Container>
        </Box>
    );
};

export default Tools;

const programCardStyles = (color: string) => ({
    width: 86,
    height: 90,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    rowGap: "15px",
    bgcolor: color,
    borderRadius: "5px",
    opacity: color === "transparent" ? 0.5 : 1,
});

const textStyles = {
    mb: "80px",
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

const programsWrapperStyles = {
    display: "flex",
    flexWrap: "wrap",
    gap: 1,
    justifyContent: {
        mobile: "center",
        tablet: "unset",
        desktop: "unset",
    },
};

const radioDroupStyles = {
    whiteSpace: "nowrap",
    display: {
        mobile: "grid",
        tablet: "block",
        desktop: "block",
    },
    gridTemplateColumns: "1fr 1fr",
};
