import React, { useState } from "react";
import { Button } from "react-bootstrap";
import Todo from "./Todo";
import { Add } from "../Redux/actions/acton";
import { useDispatch } from "react-redux";
const Home = () => {
  const [data, setData] = useState("");
  console.log(data);

  const disptach = useDispatch();

  const addData = () => {
    disptach(Add(data));
    setData("");
  };
  return (
    <>
      <div className="container ">
        <section className="mt-3 text-center">
          <h3>Enter Your Task</h3>
          <div className="todo col-lg-5 mx-auto d-flex justify-content-between align-items-center">
            <input
              onChange={(e) => setData(e.target.value)}
              name="task"
              value={data}
              className="form-control"
              style={{
                height: "35px",
              }}
            />
            <Button
              onClick={() => addData()}
              variant="outline-primary"
              style={{ marginLeft: 20 }}
              size="sm"
            >
              Add
            </Button>
          </div>
          <Todo />
        </section>
      </div>
    </>
  );
};

export default Home;
