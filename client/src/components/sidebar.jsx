import React, { useState } from "react";

import moment from "moment";

import {
  Grid,
  Paper,
  Typography,
  Chip,
  Divider,
  Box,
  SwipeableDrawer,
  Toolbar,
  TextField,
} from "@mui/material";
import { styled, alpha } from "@mui/material/styles";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";
import SentimentDissatisfiedIcon from "@mui/icons-material/SentimentDissatisfied";
import SentimentNeutralIcon from "@mui/icons-material/SentimentNeutral";
import SentimentSatisfiedIcon from "@mui/icons-material/SentimentSatisfied";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAlt";
import FunctionsIcon from "@mui/icons-material/Functions";
import DatePicker from "./datePicker";

const hdate = require("human-date");

export default function Sidebar({ p, n, vn, vp, neu, window, date, setDate }) {
  //   const { archives, description, social, title, date } = props;
  const [toggleDrawer, setToggleDrawer] = useState(false);
  const currDate = new Date(Date.now()).toLocaleString().split(",")[0];

  const DatePickerArea = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.25),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.35),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  }));

  const bar = (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={() => setToggleDrawer(true)}
      onKeyDown={() => setToggleDrawer(false)}
    >
      <Grid item xs={12} md={4}>
        <Paper elevation={0} sx={{ p: 2, bgcolor: "grey.200" }}>
          <Divider>Filter by Date</Divider>
          <br />
          <DatePickerArea>
            <DatePicker value={date} setValue={setDate} />
          </DatePickerArea>
          <Typography align="center">{hdate.prettyPrint(currDate)}</Typography>
          <br />
          <Divider>sentiment data</Divider>
          <br />
          <div>
            <Chip
              size="small"
              sx={{ mx: "2px" }}
              icon={<SentimentVeryDissatisfiedIcon />}
              label={vn}
            />
            <Chip
              size="small"
              sx={{ mx: "2px" }}
              icon={<SentimentDissatisfiedIcon />}
              label={n}
            />
            <Chip
              size="small"
              sx={{ mx: "2px" }}
              icon={<SentimentNeutralIcon />}
              label={neu}
            />
            <Chip
              size="small"
              sx={{ mx: "2px" }}
              icon={<SentimentSatisfiedIcon />}
              label={p}
            />
            <Chip
              size="small"
              sx={{ mx: "2px" }}
              icon={<SentimentSatisfiedAltIcon />}
              label={vp}
            />
          </div>
          <br />
          <Chip
            icon={<FunctionsIcon />}
            label={`notes = ${vn + n + neu + p + vp}`}
            variant="outlined"
          />
        </Paper>
      </Grid>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    // <Grid xs={3} sx={{ marginLeft: "auto", mt: 5 }}>
    <Box
      component="nav"
      sx={{ width: { sm: 240 }, flexShrink: { sm: 0 } }}
      aria-label="mailbox folders"
    >
      <SwipeableDrawer
        container={container}
        variant="temporary"
        ModalProps={{
          keepMounted: true,
        }}
        sx={{ display: { xs: "block", sm: "none" } }}
        anchor="right"
        open={toggleDrawer}
        onClose={() => setToggleDrawer(false)}
        onOpen={() => setToggleDrawer(true)}
      >
        <Toolbar />

        {bar}
      </SwipeableDrawer>
      <Grid item xs={12} md={4} sx={{ display: { xs: "none", sm: "block" } }}>
        {bar}
      </Grid>
    </Box>
    // </Grid>
  );
}
