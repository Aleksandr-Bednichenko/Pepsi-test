import s from "./ImagesTab.module.css";
import USA from "../../images/USA.png";
import ETH from "../../images/ETH.png";
import FRA from "../../images/FRA.png";
import GRB from "../../images/GRB.png";
import ITA from "../../images/ITA.png";
import SVN from "../../images/SVN.png";
import UKR from "../../images/UKR.png";
import total from "../../images/total.png";
function ImagesTab() {
  return (
    <table className={s.table} border="1">
      <tr className={s.tableList}>
        <th className={s.tableItem}>Country</th>
        <th className={s.tableItem}>First name</th>
        <th className={s.tableItem}>Last name</th>
        <th className={s.tableItem}>Gender</th>
        <th className={s.tableItem}>A</th>
        <th className={s.tableItem}>B</th>
        <th className={s.tableItem}>Manager</th>
        <th className={s.tableItem}>Status</th>
      </tr>
      <tr>
        <td className={s.tableItem}>
          <img className={s.icontab} src={USA} alt={"flag"} />
          <span>USA</span>
        </td>
        <td className={s.tableItem}>Ivan</td>
        <td className={s.tableItem}>Petrov</td>
        <td className={s.tableItem}>M</td>
        <td className={s.tableItem}>5</td>
        <td className={s.tableItem}>23</td>
        <td className={s.tableItem}>Manager1</td>
        <td className={s.tableItem}>action</td>
      </tr>
      <tr>
        <td className={s.tableItem}>
          <img className={s.icontab} src={UKR} alt={"flag"} />
          <span>UKR</span>
        </td>
        <td className={s.tableItem}>Victoria</td>
        <td className={s.tableItem}>Gura</td>
        <td className={s.tableItem}>W</td>
        <td className={s.tableItem}>4</td>
        <td className={s.tableItem}>12</td>
        <td className={s.tableItem}>Manager2</td>
        <td className={s.tableItem}>action</td>
      </tr>
      <tr>
        <td className={s.tableItem}>
          <img className={s.icontab} src={ITA} alt={"flag"} />
          <span>ITA</span>
        </td>
        <td className={s.tableItem}>Maria</td>
        <td className={s.tableItem}>Los</td>
        <td className={s.tableItem}>W</td>
        <td className={s.tableItem}>7</td>
        <td className={s.tableItem}>2</td>
        <td className={s.tableItem}>Manager1</td>
        <td className={s.tableItem}>action</td>
      </tr>
      <tr>
        <td className={s.tableItem}>
          <img className={s.icontab} src={GRB} alt={"flag"} />
          <span>GRB</span>
        </td>
        <td className={s.tableItem}>Petr</td>
        <td className={s.tableItem}>Ivanov</td>
        <td className={s.tableItem}>M</td>
        <td className={s.tableItem}>15</td>
        <td className={s.tableItem}>8</td>
        <td className={s.tableItem}>Manager2</td>
        <td className={s.tableItem}>action</td>
      </tr>
      <tr>
        <td className={s.tableItem}>
          <img className={s.icontab} src={SVN} alt={"flag"} />
          <span>SVN</span>
        </td>
        <td className={s.tableItem}>Leonid</td>
        <td className={s.tableItem}>Yakubovich</td>
        <td className={s.tableItem}>M</td>
        <td className={s.tableItem}>3</td>
        <td className={s.tableItem}>29</td>
        <td className={s.tableItem}>Manager3</td>
        <td className={s.tableItem}>action</td>
      </tr>
      <tr>
        <td className={s.tableItem}>
          <img className={s.icontab} src={FRA} alt={"flag"} />
          <span>FRA</span>
        </td>
        <td className={s.tableItem}>Gloria</td>
        <td className={s.tableItem}>Josh</td>
        <td className={s.tableItem}>W</td>
        <td className={s.tableItem}>4</td>
        <td className={s.tableItem}>37</td>
        <td className={s.tableItem}>Manager2</td>
        <td className={s.tableItem}>action</td>
      </tr>
      <tr>
        <td className={s.tableItem}>
          <img className={s.icontab} src={USA} alt={"flag"} />
          <span>USA</span>
        </td>
        <td className={s.tableItem}>Matvey</td>
        <td className={s.tableItem}>Golosha</td>
        <td className={s.tableItem}>M</td>
        <td className={s.tableItem}>14</td>
        <td className={s.tableItem}>2</td>
        <td className={s.tableItem}>Manager1</td>
        <td className={s.tableItem}>action</td>
      </tr>
      <tr>
        <td className={s.tableItem}>
          <img className={s.icontab} src={ETH} alt={"flag"} />
          <span>ETH</span>
        </td>
        <td className={s.tableItem}>Darina</td>
        <td className={s.tableItem}>Kosh</td>
        <td className={s.tableItem}>W</td>
        <td className={s.tableItem}>14</td>
        <td className={s.tableItem}>14</td>
        <td className={s.tableItem}>Manager1</td>
        <td className={s.tableItem}>action</td>
      </tr>
      <tr>
        <td colspan="4">
          <img className={s.iconTot} src={total} alt={"flag"} />
          Total:
        </td>
        <td className={s.tableItem}>1</td>
        <td className={s.tableItem}>2</td>
        <td className={s.tableItem}>3</td>
      </tr>
    </table>
  );
}
export default ImagesTab;
