import React, { useState } from "react";
import { FaEye, FaTrash } from "react-icons/fa";

import { useSelector, useDispatch } from "react-redux";
import { Remove } from "../Redux/actions/acton";
import { Modal, Button } from "react-bootstrap";

const Todo = () => {
  const { User_data } = useSelector((state) => state.name);
  console.log(User_data);
  const dispatch = useDispatch();

  const [showEye, setShowEye] = useState(false);
  const [showEyeValue, setShowEyeValue] = useState("");

  const remove = (id) => {
    dispatch(Remove(id));
    console.log(id);
  };
  return (
    <>
      <div className="todo_data col-lg-5 mx-auto mt-3 ">
        {User_data.map((elem, key) => {
          return (
            <div
              className="todo_container d-flex justify-content-between px-3 align-items-center"
              style={{
                background: "gray",
                borderRadius: 5,
                height: 30,
                marginTop: 10,
              }}
              key={key}
            >
              <li
                style={{
                  listStyle: "none",
                }}
              >
                {elem}
              </li>
              <div
                className="dlt_edit col-lg-3 py-3 d-flex justify-content-around align-items-center"
                // style={{ padding: 10 }}
                // style={{ paddingLeft: 15 }}
              >
                <FaEye
                  style={{ color: "blue", cursor: "pointer" }}
                  size={18}
                  onClick={() => {
                    setShowEye(true);
                    setShowEyeValue(elem);
                  }}
                />

                <FaTrash
                  onClick={() => remove(key)}
                  style={{ color: "red", cursor: "pointer" }}
                  size={14}
                />
              </div>
            </div>
          );
        })}

        <Modal show={showEye}>
          <h3 className="text-center mt-1" style={{ color: "blue" }}>
            {showEyeValue}
          </h3>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setShowEye(false)}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </>
  );
};

export default Todo;
