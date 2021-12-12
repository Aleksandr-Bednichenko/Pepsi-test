import s from "./InputCountry.module.css";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import USA from "../../images/USA.png";
import FRA from "../../images/FRA.png";
import GRB from "../../images/GRB.png";
import ITA from "../../images/ITA.png";
import SVN from "../../images/SVN.png";
import UKR from "../../images/UKR.png";
import ETH from "../../images/ETH.png";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 350,
    borderColor: "black",
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function SimpleSelect() {
  const classes = useStyles();
  const [country, setCountry] = React.useState("");
  const handleChange = (event) => {
    // console.log(event.target.value);
    if (event.target.value === 1) {
      setCountry("United States of America");
    }
    setCountry(event.target.value);
  };
  return (
    <>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">Country</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={country}
          onChange={handleChange}
        >
          <MenuItem value={"USA"}>
            <img className={s.iconItem} src={USA} alt={"flag"} />
            USA
          </MenuItem>

          <MenuItem value={"UKR"}>
            <img className={s.iconItem} src={UKR} alt={"flag"} />
            UKR
          </MenuItem>
          <MenuItem value={"ITA"}>
            <img className={s.iconItem} src={ITA} alt={"flag"} />
            ITA
          </MenuItem>
          <MenuItem value={"SVN"}>
            <img className={s.iconItem} src={SVN} alt={"flag"} />
            SVN
          </MenuItem>
          <MenuItem value={"ETH"}>
            <img className={s.iconItem} src={ETH} alt={"flag"} />
            ETH
          </MenuItem>
          <MenuItem value={"FRA"}>
            <img className={s.iconItem} src={FRA} alt={"flag"} />
            FRA
          </MenuItem>
          <MenuItem value={"GRB Britain"}>
            <img className={s.iconItem} src={GRB} alt={"flag"} />
            GRB
          </MenuItem>
        </Select>
      </FormControl>
    </>
  );
}
