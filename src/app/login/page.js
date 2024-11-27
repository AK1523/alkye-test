'use client';
import {
  Box,
  Button,
  Grid2,
  TextField,
  Typography,
} from "@mui/material";
import { redirect } from "next/navigation";
import React, { useState } from "react";

const Page = () => {
    const [emailUser, setEmailUser] = useState("");
    const reDirect = () => {
        localStorage.setItem('registerStateEmail', JSON.stringify(emailUser));
        redirect("/register");
    };

  return (
    <Box 
        sx={{
            minHeight: "60vh",
            bgcolor: "#F9F9F9",
            p: 10,
        }}
    >
      <Grid2 
        container 
        sx={{   
            display: "flex",
            padding: "50px",
            width: "100%",
            bgcolor: "#FFF",
            borderRadius: "50px",
            justifyContent: "space-around",
            alignItems: "center",
            minHeight: "50vh",
        }}
        columnSpacing={5}
      >
        {/* Main Content */}
        <Grid2
          item="true"
          size={{ xs: 12, sm: 5, md: 5, lg: 5}}
        >
          <Typography variant="subtitle1" gutterBottom>
            STEP 1
          </Typography>
          <Typography
            variant="h1"
            gutterBottom
          >
            Enter your email address to continue
          </Typography>
          <Typography
            variant="h5"
            gutterBottom
          >
            Log in to your account. If you don’t have one, you will be prompted
            to create one.
          </Typography>
        </Grid2>
        <Grid2
          item="true"
          xs={12}
          sm={8}
          md={8}
          size={{xs: 12, sm: 7, md: 7, lg: 7}}
          display="flex"
          flexDirection="column"
        >
          <TextField
            fullWidth
            label="Email Address"
            variant="outlined"
            sx={{ mb: 2 }}
            value={emailUser}
            onChange={(e) => setEmailUser(e.target.value)}
          />
          <Button sx={{ marginLeft: "auto"}}variant="contained" color="primary" onClick={reDirect}>
            Continue
          </Button>
        </Grid2>
      </Grid2>
    </Box>
  );
}

export default Page;
