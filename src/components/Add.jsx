import {
  Form,
  Button,
  InputGroup,
  Card,
} from "react-bootstrap";
import { IoMdAdd } from "react-icons/io";

const Add = ({ handleChangeToDoName, todoName ,addTodo}) => {
  return (
    <>
      <Card>
        <Card.Header>
          <h1 className="bg-primary text-center p-2 mt-4 rounded-5 text-white">
            TODO WEB APP
          </h1>
        </Card.Header>
        <Card.Body>
          <InputGroup className="shadow mt-3">
            <Form.Control
              className="btn-outline-primary"
              placeholder="Task..."
              onChange={handleChangeToDoName}
              value={todoName}
            />
            <Button onClick={addTodo}>
              <IoMdAdd />
            </Button>
          </InputGroup>
        </Card.Body>
      </Card>
    </>
  );
};

export default Add;
