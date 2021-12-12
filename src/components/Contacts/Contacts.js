import { useState } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import SubNavigationContacts from "../SubNavigationContacts/SubNavigationContacts";
import InputCountry from "../InputCountry";
import ModalAdd from "../ModalAdd";
import InfoTab from "../InfoTab";
import ImagesTab from "../ImagesTab";
import FaqTab from "../FaqTab";
import NewTab from "../NewTab";
import s from "./Contacts.module.css";

function Contacts() {
  const [openModal, setOpenModal] = useState(false);
  // const { url } = useRouteMatch();

  const toggleModal = () => {
    setOpenModal((prev) => !prev);
  };
  return (
    <>
      <SubNavigationContacts />
      <InputCountry />

      <button className={s.add} onClick={toggleModal}>
        Add
      </button>

      <Switch>
        <Route exact path="/contacts">
          <InfoTab />
        </Route>
        <Route path="/contacts/images">
          <ImagesTab />
        </Route>
        <Route path="/contacts/questions">
          <FaqTab />
        </Route>
        <Route path="/contacts/new">
          <NewTab />
        </Route>
        <Route>
          <Redirect to={"/contacts"} />
        </Route>
      </Switch>
      {openModal && <ModalAdd onClose={toggleModal} />}
    </>
  );
}

export default Contacts;
