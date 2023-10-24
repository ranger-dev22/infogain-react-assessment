import { styled, useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";

const FullPageContainer = styled("div")(({ theme, isTablet }) => ({
  padding: isTablet ? theme.spacing(5) : theme.spacing(2),
  width: "100vw",
  height: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));

const BaseLayout = ({ children }) => {
  const theme = useTheme();
  const isTablet = useMediaQuery(theme.breakpoints.up("md"));
  return <FullPageContainer isTablet={isTablet}>{children}</FullPageContainer>;
};

export default BaseLayout;
