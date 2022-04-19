import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import { useNavigate, useParams } from "react-router-dom";
import Button from "@mui/material/Button";
import AppsBar from "./shared/AppsBar";

const EditData = () => {
  const { rowindex } = useParams();
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
  const getData = async () => {
    try {
      const res = await fetch(
        `https://sheet.best/api/sheets/dba1548f-991e-4677-b1b0-4ec3d9f1154c/${rowindex}`
      );
      const data = await res.json();
      setData(data[0]);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(
        `https://sheet.best/api/sheets/dba1548f-991e-4677-b1b0-4ec3d9f1154c/${rowindex}`,
        {
          method: "PUT",
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
        <h2>
          Edit <i>{data.name}</i> file:{" "}
        </h2>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item lg={6}>
              <TextField
                name="name"
                id="outlined-basic"
                label="Name"
                variant="outlined"
                value={data.name}
                onChange={handleChange}
              />
            </Grid>
            <Grid item lg={6}>
              <TextField
                name="email"
                id="outlined-basic"
                label="Email"
                variant="outlined"
                value={data.email}
                onChange={handleChange}
              />{" "}
            </Grid>
            <Grid item lg={6}>
              <TextField
                name="age"
                id="outlined-basic"
                label="age"
                value={data.age}
                variant="outlined"
                onChange={handleChange}
              />{" "}
            </Grid>
            <Grid item lg={6}>
              <TextField
                name="phone"
                id="outlined-basic"
                label="Phone"
                value={data.phone}
                variant="outlined"
                onChange={handleChange}
              />
            </Grid>
            <Grid item lg={6}>
              <TextField
                name="message"
                id="outlined-basic"
                label="Message"
                value={data.message}
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
            Update Data
          </Button>
        </form>
      </Container>
    </>
  );
};

export default EditData;
