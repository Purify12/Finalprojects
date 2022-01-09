import React, { useEffect, useState } from "react";
import WebinarScreen from "../../components/WebinarScreen";
import { Button, Card, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { createWebinarAction } from "../../actions/webinarActions";
import Loading from "../../components/Loading";
import ErrorMessage from "../../components/ErrorMessage";
import ReactMarkdown from "react-markdown";

function CreateWebinar({ history }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [pic, setPic] = useState("");
  const [category, setCategory] = useState("");

  const dispatch = useDispatch();

  const webinarCreate = useSelector((state) => state.webinarCreate);
  const { loading, error, webinar } = webinarCreate;

  console.log(webinar);

  const resetHandler = () => {
    setTitle("");
    setCategory("");
    setContent("");
    setPic("");
  };

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(createWebinarAction(title, content, pic, category));
    if (!title || !content || !pic || !category) return;

    resetHandler();
    history.push("/webinar");
  };

  useEffect(() => {}, []);

  return (
    <WebinarScreen title="Create a Webinar">
      <Card>
        <Card.Header>Create a new Webinar</Card.Header>
        <Card.Body>
          <Form onSubmit={submitHandler}>
            {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
            <Form.Group controlId="title">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="title"
                value={title}
                placeholder="Enter the title"
                onChange={(e) => setTitle(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="content">
              <Form.Label>Content</Form.Label>
              <Form.Control
                as="textarea"
                value={content}
                placeholder="Enter the content"
                rows={4}
                onChange={(e) => setContent(e.target.value)}
              />
            </Form.Group>
            {content && (
              <Card>
                <Card.Header>Webinar Preview</Card.Header>
                <Card.Body>
                  <ReactMarkdown>{content}</ReactMarkdown>
                </Card.Body>
              </Card>
            )}
            <Form.Group controlId="pic">
              <Form.Label>Picture</Form.Label>
              <Form.Control
                type="pic"
                value={pic}
                placeholder="Enter the pic"
                onChange={(e) => setPic(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="content">
              <Form.Label>Category</Form.Label>
              <Form.Control
                type="content"
                value={category}
                placeholder="Enter the Category"
                onChange={(e) => setCategory(e.target.value)}
              />
            </Form.Group>
            {loading && <Loading size={50} />}
            <Button type="submit" variant="primary">
              Create Webinar
            </Button>
            <Button className="mx-2" onClick={resetHandler} variant="danger">
              Reset Feilds
            </Button>
          </Form>
        </Card.Body>

        <Card.Footer className="text-muted">
          Creating on - {new Date().toLocaleDateString()}
        </Card.Footer>
      </Card>
    </WebinarScreen>
  );
}

export default CreateWebinar;
