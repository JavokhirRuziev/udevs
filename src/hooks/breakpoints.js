import useMediaQuery from "@mui/material/useMediaQuery";
import { theme } from "../theme";

const useBreakpoints = () => {
    const mobile = useMediaQuery(theme.breakpoints.down("tablet"));
    const tablet = useMediaQuery(
        theme.breakpoints.between("tablet", "desktop")
    );
    const desktop = useMediaQuery(theme.breakpoints.up("desktop"));

    return { mobile, tablet, desktop };
};

export default useBreakpoints;
