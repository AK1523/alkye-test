import localFont from "next/font/local";
import "./globals.css";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../theme";
import { Box, Grid2, Typography } from "@mui/material";
import { Facebook, Instagram, Twitter, YouTube } from "@mui/icons-material";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  const footerLinks = ["Privacy Policy", "Contact Us", "Cookie Preferences", "Corporate Information"];
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <main>{children}</main>
            <Box
              sx={{
                bgcolor: "#000",
                color: "#FFF",
                py: 3,
                px: 2,
                textAlign: "center",
              }}
            >
              <Grid2 container spacing={2} 
                sx={{
                  justifyContent: "center",
                  mt: 2,
                  flexWrap: "wrap",
                  minHeight: "50px",
                }} >
                <Grid2 item="true">
                  <Instagram />
                </Grid2>
                <Grid2 item="true">
                  <Facebook />
                </Grid2>
                <Grid2 item="true">
                  <Twitter />
                </Grid2>
                <Grid2 item="true">
                  <YouTube />
                </Grid2>
              </Grid2>
              <Grid2
                container
                spacing={2}
                sx={{ justifyContent: "center", mt: 2, flexWrap: "wrap" }}
              >
                {footerLinks.map((link, index) => (
                  <Grid2 item="true" key={index}>
                    <Typography sx={{color: "#FFFFFF"}} variant="h5">{link}</Typography>
                  </Grid2>
                ))}
              </Grid2>
              <Typography sx={{color: "#FFFFFF", mt: 2}} variant="h5">
                © Alkye Test
              </Typography>
            </Box>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
