import { useState, lazy } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import s from "./Contacts.module.css";
const SubNavigationContacts = lazy(() =>
  import("../SubNavigationContacts/SubNavigationContacts")
);
const InputCountry = lazy(() => import("../InputCountry"));
const ModalAdd = lazy(() => import("../ModalAdd"));
const InfoTab = lazy(() => import("../InfoTab"));
const ImagesTab = lazy(() => import("../ImagesTab"));
const FaqTab = lazy(() => import("../FaqTab"));
const NewTab = lazy(() => import("../NewTab"));

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
