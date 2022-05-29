import { useContext } from "react";
import "./Modal.scss";
import AppContext from "../../context/AppContext";

const Modal = () => {
  const { episodes, setModal } = useContext(AppContext);

  return (
    <div className="modal">
      <p className="modal-x" onClick={() => setModal(false)}>
        X
      </p>
      <div className="modal-div">
        {episodes?.map((item) => (
          <h1 className="modal-text" key={item.match(/\d+/)[0]}>
            {item}
          </h1>
        ))}
      </div>
    </div>
  );
};

export default Modal;
