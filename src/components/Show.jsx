import "../App.css";
import {
  Button,
  Card,
  Row,
  Col,
} from "react-bootstrap";
import { MdDelete } from "react-icons/md";
import { GrUpdate } from "react-icons/gr";
import { MdDone } from "react-icons/md";
import { IoMdClose } from "react-icons/io";

const Show = ({ ToDoList, deleteToDo, finisToDo }) => {
  return (
    <>
      {ToDoList.map((data, i) => {
        return (
          <Card key={i}>
            <Card.Body>
              <Row>
                <Col md={8}>
                  <h5>{data.task}</h5>
                </Col>
                <Col md={4} className="text-end">
                  <Button
                    style={{ width: "60px" }}
                    className="btn btn-danger mx-1"
                    onClick={() => deleteToDo(i)}
                  >
                    <MdDelete />
                  </Button>
                  <Button
                    style={{ width: "60px" }}
                    className="btn btn-warning mx-1"
                  >
                    <GrUpdate />
                  </Button>
                  <Button
                    style={{ width: "60px" }}
                    variant={data.status ? "secondary" : "success"}
                    className=" mx-1"
                    onClick={() => finisToDo(i)}
                  >
                    {data.status ? 
						  <IoMdClose />
						  : 
						  <MdDone /> 
						}
                  </Button>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        );
      })}
    </>
  );
};

export default Show;
