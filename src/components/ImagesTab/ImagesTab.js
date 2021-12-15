import s from "./ImagesTab.module.css";
import FRA from "../../images/FRA.png";
import GRB from "../../images/GRB.png";
import ITA from "../../images/ITA.png";

import filter from "../../images/filter.png";

import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Sigma from "../../images/sigma.svg";

const useStyles = makeStyles({
  container: {
    borderCollapse: "collapse",
    borderColor: "rgb(170,170,170)",
    boxShadow: "0 3px 5px 5px rgb(235,235,235)",
    borderRadius: "4px",
    width: "100%",
    "@media (max-width: 730px)": {
      width: 730,
    },
  },
  headRow: {},
  body: {},
  bodyRow: {
    // border: "black",
  },
  headCell: {
    padding: 15,
    color: "black",
    textAlign: "center",
    fontWeight: "700",
    letterSpacing: 1,
  },
  cell: {
    padding: 15,
    textAlign: "center",
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
                <img className={s.iconfilter} src={filter} alt={"filter"} />
              </TableCell>
              <TableCell className={classes.headCell}>
                first name
                <img className={s.iconfilter} src={filter} alt={"filter"} />
              </TableCell>
              <TableCell className={classes.headCell}>
                last name
                <img className={s.iconfilter} src={filter} alt={"filter"} />
              </TableCell>
              <TableCell className={classes.headCell}>
                gender
                <img className={s.iconfilter} src={filter} alt={"filter"} />
              </TableCell>
              <TableCell className={classes.headCell}>
                A
                <img className={s.iconfilter} src={filter} alt={"filter"} />
              </TableCell>
              <TableCell className={classes.headCell}>
                B
                <img className={s.iconfilter} src={filter} alt={"filter"} />
              </TableCell>
              <TableCell className={classes.headCell}>
                manager
                <img className={s.iconfilter} src={filter} alt={"filter"} />
              </TableCell>
              <TableCell className={classes.headCell}>
                status
                <img className={s.iconfilter} src={filter} alt={"filter"} />
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
              <TableCell className={classes.cell}>
                <select className={s.action} name="action">
                  <option value="1">processed</option>
                  <option value="2">sent</option>
                  <option value="3">delivered</option>
                </select>
              </TableCell>
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
              <TableCell className={classes.cell}>
                <select className={s.action} name="action">
                  <option value="1">processed</option>
                  <option value="2">sent</option>
                  <option value="3">delivered</option>
                </select>
              </TableCell>
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
              <TableCell className={classes.cell}>
                <select className={s.action} name="action">
                  <option value="1">processed</option>
                  <option value="2">sent</option>
                  <option value="3">delivered</option>
                </select>
              </TableCell>
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
              <TableCell className={classes.cell}>
                <select className={s.action} name="action">
                  <option value="1">processed</option>
                  <option value="2">sent</option>
                  <option value="3">delivered</option>
                </select>
              </TableCell>
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
              <TableCell className={classes.cell}>
                <select className={s.action} name="action">
                  <option value="1">processed</option>
                  <option value="2">sent</option>
                  <option value="3">delivered</option>
                </select>
              </TableCell>
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
              <TableCell className={classes.cell}>
                <select className={s.action} name="action">
                  <option value="1">processed</option>
                  <option value="2">sent</option>
                  <option value="3">delivered</option>
                </select>
              </TableCell>
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
              <TableCell className={classes.cell}>
                <select className={s.action} name="action">
                  <option value="1">processed</option>
                  <option value="2">sent</option>
                  <option value="3">delivered</option>
                </select>
              </TableCell>
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
              <TableCell className={classes.cell}>
                <select className={s.action} name="action">
                  <option value="1">processed</option>
                  <option value="2">sent</option>
                  <option value="3">delivered</option>
                </select>
              </TableCell>
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
              <TableCell className={classes.cell}>
                <select className={s.action} name="action">
                  <option value="1">processed</option>
                  <option value="2">sent</option>
                  <option value="3">delivered</option>
                </select>
              </TableCell>
            </TableRow>
            <TableRow className={classes.bodyRow}>
              <TableCell
                colSpan="4"
                className={classes.cell}
                component="td"
                scope="row"
              >
                <div className={s.icontotal}>
                  <img src={Sigma} alt={"sigma"} />
                  <span className={s.total}>Total:</span>
                </div>
              </TableCell>
              <TableCell className={classes.cell}>
                <span className={s.textTotal}>66</span>
              </TableCell>
              <TableCell className={classes.cell}>
                <span className={s.textTotal}>127</span>
              </TableCell>
              <TableCell colSpan="2" className={classes.cell}>
                <span className={s.textTotal}>193</span>
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
