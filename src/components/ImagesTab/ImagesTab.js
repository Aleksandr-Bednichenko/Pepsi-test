// import { useState } from "react";
import s from "./ImagesTab.module.css";
import FRA from "../../images/FRA.png";
import GRB from "../../images/GRB.png";
import ITA from "../../images/ITA.png";
import total from "../../images/total.png";
import filtr from "../../images/filtr.png";
// import SimpleSelect from "../SimpleSelect";
// import db from "../../db/db";

// import IconButton from "@material-ui/core/IconButton";
// import DeleteIcon from "@material-ui/icons/Delete";

import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
// import FunctionsRoundedIcon from "@mui/icons-material/FunctionsRounded";
// import FunctionsRoundedIcon from "@material-ui/icons/FunctionsRoundedIcon";
const useStyles = makeStyles({
  container: {
    // boxShadow:
    //   "0px 2px 1px -1px rgba(235,235,235,0.2), 0px 1px 1px 0px rgba(235,235,235,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)",
    boxShadow: "0 3px 5px 5px rgb(235,235,235)",
    borderRadius: "4px",
    width: 1110,
    collapse: "collapse",
  },
  headRow: {},
  body: {},
  bodyRow: {
    border: "black",
  },
  headCell: {
    padding: 15,
    color: "black",
    // textTransform: "uppercase",
    letterSpacing: 1,
  },
  cell: {
    padding: 15,
  },
});

const ImagesTab = () => {
  const classes = useStyles();

  return (
    <div className={s.positionTable}>
      <TableContainer className={classes.container}>
        <Table className={classes.table} aria-label="customized table">
          <TableHead></TableHead>
          <TableBody className={classes.body}>
            <TableRow className={classes.headRow}>
              <TableCell className={classes.headCell}>
                country
                <img className={s.iconfiltr} src={filtr} alt={"filtr"} />
              </TableCell>
              <TableCell className={classes.headCell}>
                first name
                <img className={s.iconfiltr} src={filtr} alt={"filtr"} />
              </TableCell>
              <TableCell className={classes.headCell}>
                last name
                <img className={s.iconfiltr} src={filtr} alt={"filtr"} />
              </TableCell>
              <TableCell className={classes.headCell}>
                gender
                <img className={s.iconfiltr} src={filtr} alt={"filtr"} />
              </TableCell>
              <TableCell className={classes.headCell}>
                A
                <img className={s.iconfiltr} src={filtr} alt={"filtr"} />
              </TableCell>
              <TableCell className={classes.headCell}>
                B
                <img className={s.iconfiltr} src={filtr} alt={"filtr"} />
              </TableCell>
              <TableCell className={classes.headCell}>
                manager
                <img className={s.iconfiltr} src={filtr} alt={"filtr"} />
              </TableCell>
              <TableCell className={classes.headCell}>
                status
                <img className={s.iconfiltr} src={filtr} alt={"filtr"} />
              </TableCell>
            </TableRow>
            <TableRow className={classes.bodyRow}>
              <TableCell className={classes.cell} component="td" scope="row">
                <img className={s.icontab} src={GRB} alt={"flag"} />
                <span>GRB</span>
              </TableCell>
              <TableCell className={classes.cell}>Ivan</TableCell>
              <TableCell className={classes.cell}>Petrov</TableCell>
              <TableCell className={classes.cell}>M</TableCell>
              <TableCell className={classes.cell}>5</TableCell>
              <TableCell className={classes.cell}>53</TableCell>
              <TableCell className={classes.cell}>manager1</TableCell>
              <TableCell className={classes.cell}>action</TableCell>
            </TableRow>
            <TableRow className={classes.bodyRow}>
              <TableCell className={classes.cell} component="td" scope="row">
                <img className={s.icontab} src={GRB} alt={"flag"} />
                <span>GRB</span>
              </TableCell>
              <TableCell className={classes.cell}>Victoria</TableCell>
              <TableCell className={classes.cell}>Gura</TableCell>
              <TableCell className={classes.cell}>W</TableCell>
              <TableCell className={classes.cell}>4</TableCell>
              <TableCell className={classes.cell}>12</TableCell>
              <TableCell className={classes.cell}>manager2</TableCell>
              <TableCell className={classes.cell}>action</TableCell>
            </TableRow>
            <TableRow className={classes.bodyRow}>
              <TableCell className={classes.cell} component="td" scope="row">
                <img className={s.icontab} src={FRA} alt={"flag"} />
                <span>FRA</span>
              </TableCell>
              <TableCell className={classes.cell}>Maria</TableCell>
              <TableCell className={classes.cell}>Los</TableCell>
              <TableCell className={classes.cell}>W</TableCell>
              <TableCell className={classes.cell}>7</TableCell>
              <TableCell className={classes.cell}>2</TableCell>
              <TableCell className={classes.cell}>manager1</TableCell>
              <TableCell className={classes.cell}>action</TableCell>
            </TableRow>
            <TableRow className={classes.bodyRow}>
              <TableCell className={classes.cell} component="td" scope="row">
                <img className={s.icontab} src={ITA} alt={"flag"} />
                <span>ITA</span>
              </TableCell>
              <TableCell className={classes.cell}>Petr</TableCell>
              <TableCell className={classes.cell}>Ivanov</TableCell>
              <TableCell className={classes.cell}>M</TableCell>
              <TableCell className={classes.cell}>15</TableCell>
              <TableCell className={classes.cell}>8</TableCell>
              <TableCell className={classes.cell}>manager2</TableCell>
              <TableCell className={classes.cell}>action</TableCell>
            </TableRow>
            <TableRow className={classes.bodyRow}>
              <TableCell className={classes.cell} component="td" scope="row">
                <img className={s.icontab} src={GRB} alt={"flag"} />
                <span>GRB</span>
              </TableCell>
              <TableCell className={classes.cell}>Leonid</TableCell>
              <TableCell className={classes.cell}>Yakubovich</TableCell>
              <TableCell className={classes.cell}>M</TableCell>
              <TableCell className={classes.cell}>3</TableCell>
              <TableCell className={classes.cell}>29</TableCell>
              <TableCell className={classes.cell}>manager3</TableCell>
              <TableCell className={classes.cell}>action</TableCell>
            </TableRow>
            <TableRow className={classes.bodyRow}>
              <TableCell className={classes.cell} component="td" scope="row">
                <img className={s.icontab} src={FRA} alt={"flag"} />
                <span>FRA</span>
              </TableCell>
              <TableCell className={classes.cell}>Gloria</TableCell>
              <TableCell className={classes.cell}>Josh</TableCell>
              <TableCell className={classes.cell}>W</TableCell>
              <TableCell className={classes.cell}>4</TableCell>
              <TableCell className={classes.cell}>37</TableCell>
              <TableCell className={classes.cell}>manager2</TableCell>
              <TableCell className={classes.cell}>action</TableCell>
            </TableRow>
            <TableRow className={classes.bodyRow}>
              <TableCell className={classes.cell} component="td" scope="row">
                <img className={s.icontab} src={FRA} alt={"flag"} />
                <span>FRA</span>
              </TableCell>
              <TableCell className={classes.cell}>Maria</TableCell>
              <TableCell className={classes.cell}>Gura</TableCell>
              <TableCell className={classes.cell}>W</TableCell>
              <TableCell className={classes.cell}>4</TableCell>
              <TableCell className={classes.cell}>12</TableCell>
              <TableCell className={classes.cell}>manager2</TableCell>
              <TableCell className={classes.cell}>action</TableCell>
            </TableRow>
            <TableRow className={classes.bodyRow}>
              <TableCell className={classes.cell} component="td" scope="row">
                <img className={s.icontab} src={ITA} alt={"flag"} />
                <span>ITA</span>
              </TableCell>
              <TableCell className={classes.cell}>Matvey</TableCell>
              <TableCell className={classes.cell}>Golosha</TableCell>
              <TableCell className={classes.cell}>M</TableCell>
              <TableCell className={classes.cell}>14</TableCell>
              <TableCell className={classes.cell}>2</TableCell>
              <TableCell className={classes.cell}>manager1</TableCell>
              <TableCell className={classes.cell}>action</TableCell>
            </TableRow>
            <TableRow className={classes.bodyRow}>
              <TableCell className={classes.cell} component="td" scope="row">
                <img className={s.icontab} src={ITA} alt={"flag"} />
                <span>ITA</span>
              </TableCell>
              <TableCell className={classes.cell}>Darina</TableCell>
              <TableCell className={classes.cell}>Kosh</TableCell>
              <TableCell className={classes.cell}>W</TableCell>
              <TableCell className={classes.cell}>14</TableCell>
              <TableCell className={classes.cell}>14</TableCell>
              <TableCell className={classes.cell}>manager1</TableCell>
              <TableCell className={classes.cell}>action</TableCell>
            </TableRow>
            <TableRow className={classes.bodyRow}>
              <TableCell
                colspan="4"
                className={classes.cell}
                component="td"
                scope="row"
              >
                {/* <FunctionsRoundedIcon /> */}
                Total:
              </TableCell>
              <TableCell className={classes.cell}>66</TableCell>
              <TableCell className={classes.cell}>127</TableCell>
              <TableCell colspan="2" className={classes.cell}>
                193
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};
export default ImagesTab;

//       <td className={s.tableItem}>
//         {" "}
//         <button type="button" onClick={toggleModal}>
//           Action
//           {openModal && (
//             <div className={s.actionMenu}>
//               <ul>
//                 <li>
//                   <p>Action1</p>
//                 </li>
//                 <li>
//                   <p>Action2</p>
//                 </li>
//                 <li>
//                   <p>Action3</p>
//                 </li>
//               </ul>
//             </div>
//           )}
//         </button>
//       </td>
//     </tr>
//   </tbody>
//
