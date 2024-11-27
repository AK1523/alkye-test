"use client";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Box,
  Button,
  FormControl,
  Grid2,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Typography,
} from "@mui/material";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

function Page() {
    const [loginCredentials, setLoginCredentials] = useState({
        username: "",
        password: "",
    });
    const router = useRouter();
    const [showPassword, setShowPassword] = useState(false);

    useEffect(() => {
      const savedUsername = localStorage.getItem("registerStateEmail");
      if (savedUsername) {
        setLoginCredentials((prev) => ({
          ...prev,
          username: JSON.parse(savedUsername),
        }));
      }
    }, []);

    const handleSubmit = async () => {
        try {
            const response = await fetch("https://untitled-twkmuar27a-uc.a.run.app/api/login/" , {
                method: "POST",
                body: JSON.stringify(loginCredentials),
                headers: {
                    "Content-Type": "application/json",
                },
            })
            const {token, user_id} = await response.json();
            localStorage.setItem("authToken", token);
            localStorage.setItem("userId", user_id);
            router.push(`/dashboard/${user_id}`);
        } catch (err) {
            console.log(err);
        }
    }
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
          width: "100%",
          bgcolor: "#FFF",
          borderRadius: "50px",
          padding: "50px",
          justifyContent: "space-around",
          alignItems: "center",
          minHeight: "50vh",
        }}
        columnSpacing={5}
      >
        {/* Main Content */}
        <Grid2
          item="true"
          size={{ xs: 12, sm: 5, md: 5, lg: 5 }}
        >
                <Typography
                    variant="h5"
                    gutterBottom
                >
                    STEP 2
                </Typography>
                <Typography
                    variant="h1"
                    gutterBottom
                >
                    Create an account to continue
                </Typography>
                <Typography
                    variant="subtitle1"
                    gutterBottom
                    sx={{color: "#000000"}}
                >
                    You’ll be able to log in to Dingoo with this email address and
                    password.
                </Typography>
        </Grid2>
        <Grid2
          item="true"
          size={{ xs: 12, sm: 7, md: 7, lg: 7 }}
        >
          <FormControl sx={{mb: 2, width: "100%" }}variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
            <OutlinedInput
                id="outlined-adornment-password"
                type={showPassword ? 'text' : 'password'}
                onChange={(e) => setLoginCredentials((prev) => ({
                    ...prev,
                    password: e.target.value
                }))}
                value={loginCredentials.password}
                endAdornment={
                <InputAdornment position="end">
                    <IconButton
                    aria-label={
                        showPassword ? 'hide the password' : 'display the password'
                    }
                    onClick={() => setShowPassword((prev => !prev))}
                    >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                </InputAdornment>
                }
                label="Password"
            />
        </FormControl>
          <Grid2
            container
            size={{ xs: 12 }}
            sx={{ display: "flex"}}
            columnSpacing={{ xs: 1, sm: 3, md: 4, lg: 5 }}
          >
            <Grid2 item="true" size={{ xs: 7, sm: 7, md: 7, lg: 7 }}>
              <Typography
                variant="h6"
                gutterBottom
              >
                Use a minimum of 6 characters (case sensitive) with at least one
                number or special character.
              </Typography>
            </Grid2>
            <Grid2 item="true" size={{ xs: 5, sm: 5, md: 5, lg: 5 }} >
              <Button sx={{ width: "100%"}} variant="contained" color="primary" onClick={handleSubmit}>
                Agree & Continue
              </Button>
            </Grid2>
          </Grid2>
        </Grid2>
        <Grid2 item="true" size={{ xs: 12}} sx={{mt: 3}}>
          <Typography
            variant="subtitle2"
            // color="text.secondary"
            gutterBottom
          >
            Dingoo will use your data to personalise and improve your Dingoo
            experience and to send you information about Dingoo. You can change
            your communication preferences anytime. We may use your data as
            described in our Privacy Policy, including sharing it with The Test
            of Companies. By clicking "Agree & Continue", you agree to
            our Subscriber Agreement and acknowledge that you have read
            our Privacy Policy and Collection Statement.
          </Typography>
        </Grid2>
      </Grid2>
    </Box>
  );
}

export default Page;
