import Card from "react-bootstrap/Card";
import { useState } from "react";
import { toast } from "react-hot-toast";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { DownloadOutlined } from "@ant-design/icons";
import styles from "../HomeStyle.module.css";
import Button from 'react-bootstrap/Button';
import Fade from 'react-bootstrap/Fade';

export default function Que1() {
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const answer = e.target.answer.value;

    if (answer === "") {
      toast.error("Please enter your answer");
      return;
    }

    try {
      const res = await axios.post(`${process.env.REACT_APP_API}/que1`, {
        answer: answer,
      });

      if (res.data === "wrong") {
        toast.error("Answer is wrong");
        // setTimeout(function () {
        //   window.location.reload();
        // }, 1000);
      } else if (res.data === "correct") {
        toast.success("Answer is correct");
        navigate("/dashboard/que2");
      }
    } catch (error) {
      console.log(error);
      toast.error("Network error");
    }
  };
  const [open, setOpen] = useState(false);

  return (
    <div className= {styles.home2}>
    <div className="container mt-3">
      <Card style={{ width: "30rem" }}>
        <Card.Body>
          <Card.Title>Problem-1</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">Statement</Card.Subtitle>
          <Card.Text>
          <br></br>
          There is a hidden message in the image which needs to be found.<br></br>
          <Link to="https://res.cloudinary.com/ddkj8wsjy/image/upload/v1681663076/CRflag_me4jzc.png" target="_blank"><DownloadOutlined /></Link> to download the image.<br></br><br></br>
         
          <Button
        onClick={() => setOpen(!open)}
        aria-controls="example-fade-text"
        aria-expanded={open}
      >
        Hint  
      </Button>
      <Fade in={open}>
        <div id="example-fade-text">
          Decoder can be used.
        </div>
      </Fade>         
         
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
