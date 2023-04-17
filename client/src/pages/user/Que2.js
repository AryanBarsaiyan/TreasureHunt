import Card from "react-bootstrap/Card";
import { useState } from "react";
import { toast } from "react-hot-toast";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { DownloadOutlined } from "@ant-design/icons";
import styles from "../HomeStyle.module.css";
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';

export default function Que2() {
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const answer = e.target.answer.value;

    if (answer === "") {
      toast.error("Please enter your answer");
      return;
    }

    try {
      const res = await axios.post(`${process.env.REACT_APP_API}/que2`, {
        answer: answer,
      });

      if (res.data === "wrong") {
        toast.error("Answer is wrong");
        // setTimeout(function () {
        //   window.location.reload();
        // }, 1000);
      } else if (res.data === "correct") {
        toast.success("Answer is correct");

        navigate("/dashboard/que3");
      }
    } catch (error) {
      console.log(error);
      toast.error("Network error");
    }
  };
  const [open, setOpen] = useState(false);
  return (
    <div className={styles.home2}>
      <div className="container mt-3">
        <Card style={{ width: "auto" }}>
          <Card.Body>
            <Card.Title>Problem-2</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">Statement</Card.Subtitle>
            <Card.Text>
              <br></br>
              Loves cartoon ! Jerry is your flag,Tom is searching for it . Help Tom ! <br></br>
              <Link to="https://res.cloudinary.com/ddkj8wsjy/video/upload/v1681663865/videofinal1_ob1wdg.mp4" target="_blank"><DownloadOutlined /></Link>
              <br></br>
              <br></br>
              <Button
                onClick={() => setOpen(!open)}
                aria-controls="example-collapse-text"
                aria-expanded={open}
              >
                Hint
              </Button>
              <Collapse in={open}>
                <div id="example-collapse-text">
                1. watch interstellar <br></br>
                2. there are 4 number systems : binary , decimal, octal, &nbsp;&nbsp;&nbsp;hexadecimal .
                </div>
              </Collapse>
            </Card.Text>
          </Card.Body>
        </Card>

        <form onSubmit={handleSubmit}>
          <div className="form-group mt-2">
            <label htmlFor="answer"></label>
            <input
              type="text"
              className="form-control mt-2 w-25 p-3"
              id="answer"
              placeholder="Enter your answer"
            />
          </div>
          <button type="submit" className="btn btn-dark mt-2">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
