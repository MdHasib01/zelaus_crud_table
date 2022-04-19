import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import { useNavigate } from "react-router-dom";
import AppsBar from "./shared/AppsBar";
import Button from "@mui/material/Button";

const AddData = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    age: "",
    phone: "",
    message: "",
    date: new Date().toString(),
  });
  const navigate = useNavigate();
  const handleChange = (e) =>
    setData({ ...data, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(
        "https://sheet.best/api/sheets/dba1548f-991e-4677-b1b0-4ec3d9f1154c",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );
      if (res.ok) {
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <AppsBar></AppsBar>
      <Container>
        <h2>Add data to database</h2>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item lg={6}>
              <TextField
                required
                name="name"
                id="outlined-basic"
                label="Name"
                variant="outlined"
                onChange={handleChange}
              />
            </Grid>
            <Grid item lg={6}>
              <TextField
                required
                name="email"
                id="outlined-basic"
                label="Email"
                variant="outlined"
                onChange={handleChange}
              />{" "}
            </Grid>
            <Grid item lg={6}>
              <TextField
                required
                name="age"
                id="outlined-basic"
                label="age"
                variant="outlined"
                onChange={handleChange}
              />{" "}
            </Grid>
            <Grid item lg={6}>
              <TextField
                required
                name="phone"
                id="outlined-basic"
                label="Phone"
                variant="outlined"
                onChange={handleChange}
              />
            </Grid>
            <Grid item lg={6}>
              <TextField
                required
                name="message"
                id="outlined-basic"
                label="Message"
                variant="outlined"
                onChange={handleChange}
              />
            </Grid>
          </Grid>

          <Button
            style={{ marginTop: "10px" }}
            variant="contained"
            align="center"
            type="submit"
          >
            Add Data
          </Button>
        </form>
      </Container>
    </>
  );
};

export default AddData;
