import { Box } from "@mui/material";

function Footer() {
  return (
    <Box component="footer">
      <p>
        Copyright &copy; {new Date().getFullYear()} G-UP. All rights reserved.
      </p>

      <ul className="social_list">
        <li className="social_item">
          <p>Logo</p>
        </li>
        <li className="social_item">
          <p>Logo</p>
        </li>
        <li className="social_item">
          <p>Logo</p>
        </li>
        <li className="social_item">
          <p>Logo</p>
        </li>
      </ul>
    </Box>
  );
}

export default Footer;
