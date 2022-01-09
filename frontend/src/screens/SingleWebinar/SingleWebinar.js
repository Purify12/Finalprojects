import React, { useEffect, useState } from "react";
import WebinarScreen from "../../components/WebinarScreen";
import axios from "axios";
import { Button, Card, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { deleteWebinarAction, updateWebinarAction } from "../../actions/webinarActions";
import ErrorMessage from "../../components/ErrorMessage";
import Loading from "../../components/Loading";
import ReactMarkdown from "react-markdown";

function SingleWebinar({ match, history }) {
  const [title, setTitle] = useState();
  const [content, setContent] = useState();
  const [pic, setPic] = useState();
  const [category, setCategory] = useState();
  const [date, setDate] = useState("");

  const dispatch = useDispatch();

  const webinarUpdate = useSelector((state) => state.webinarUpdate);
  const { loading, error } = webinarUpdate;

  const webinarDelete = useSelector((state) => state.webinarDelete);
  const { loading: loadingDelete, error: errorDelete } = webinarDelete;

  const deleteHandler = (id) => {
    if (window.confirm("Are you sure?")) {
      dispatch(deleteWebinarAction(id));
    }
    history.push("/webinar");
  };

  useEffect(() => {
    const fetching = async () => {
      const { data } = await axios.get(`/api/webinar/${match.params.id}`);

      setTitle(data.title);
      setContent(data.content);
      setPic(data.pic);
      setCategory(data.category);
      setDate(data.updatedAt);
    };

    fetching();
  }, [match.params.id, date]);

  const resetHandler = () => {
    setTitle("");
    setCategory("");
    setContent("");
    setPic("");
  };

  const updateHandler = (e) => {
    e.preventDefault();
    dispatch(updateWebinarAction(match.params.id, title, content, category));
    if (!title || !content || !category) return;

    resetHandler();
    history.push("/webinar");
  };

  return (
    <WebinarScreen title="Edit Webinar">
      <Card>
        <Card.Header>Edit your Webinar</Card.Header>
        <Card.Body>
          <Form onSubmit={updateHandler}>
            {loadingDelete && <Loading />}
            {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
            {errorDelete && (
              <ErrorMessage variant="danger">{errorDelete}</ErrorMessage>
            )}
            <Form.Group controlId="title">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="title"
                placeholder="Enter the title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="content">
              <Form.Label>Content</Form.Label>
              <Form.Control
                as="textarea"
                placeholder="Enter the content"
                rows={4}
                value={content}
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

            <Form.Group controlId="content">
              <Form.Label>Category</Form.Label>
              <Form.Control
                type="content"
                placeholder="Enter the Category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              />
            </Form.Group>
            {loading && <Loading size={50} />}
            <Button variant="primary" type="submit">
              Update Webinar
            </Button>
            <Button
              className="mx-2"
              variant="danger"
              onClick={() => deleteHandler(match.params.id)}
            >
              Delete Webinar
            </Button>
          </Form>
        </Card.Body>

        <Card.Footer className="text-muted">
          Updated on - {date.substring(0, 10)}
        </Card.Footer>
      </Card>
    </WebinarScreen>
  );
}

export default SingleWebinar;
