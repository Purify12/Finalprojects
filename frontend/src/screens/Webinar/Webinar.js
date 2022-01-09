import React, { useEffect } from "react";
import { Accordion, Badge, Button, Card } from "react-bootstrap";
import WebinarScreen from "../../components/WebinarScreen";
import { Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";

import { useDispatch, useSelector } from "react-redux";
import { deleteWebinarAction, listWebinar } from "../../actions/webinarActions";
import Loading from "../../components/Loading";
import ErrorMessage from "../../components/ErrorMessage";

function Webinar({ history, search }) {
  const dispatch = useDispatch();

  const webinarList = useSelector((state) => state.webinarList);
  const { loading, error, webinar } = webinarList;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const webinarDelete = useSelector((state) => state.webinarDelete);
  const {
    loading: loadingDelete,
    error: errorDelete,
    success: successDelete,
  } = webinarDelete;

  const webinarCreate = useSelector((state) => state.webinarCreate);
  const { success: successCreate } = webinarCreate;

  const webinarUpdate = useSelector((state) => state.webinarUpdate);
  const { success: successUpdate } = webinarUpdate;

  useEffect(() => {
    dispatch(listWebinar());
    if (!userInfo) {
      history.push("/");
    }
  }, [
    dispatch,
    history,
    userInfo,
    successDelete,
    successCreate,
    successUpdate,
  ]);

  const deleteHandler = (id) => {
    if (window.confirm("Are you sure?")) {
      dispatch(deleteWebinarAction(id));
    }
  };

  return (
    <WebinarScreen title={`Welcome Back ${userInfo && userInfo.name}..`}>
      {console.log(webinar)}
      <Link to="/createwebinar">
        <Button style={{ marginLeft: 10, marginBottom: 6 }} size="lg">
          Create new Webinar
        </Button>
      </Link>
      {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
      {errorDelete && (
        <ErrorMessage variant="danger">{errorDelete}</ErrorMessage>
      )}
      {loading && <Loading />}
      {loadingDelete && <Loading />}
      {webinar &&
        webinar
          .filter((filteredWebinar) =>
            filteredWebinar.title.toLowerCase().includes(search.toLowerCase())
          )
          .reverse()
          .map((webinar) => (
            <Accordion>
              <Card style={{ margin: 10 }} key={webinar._id}>
                <Card.Header style={{ display: "flex" }}>
                  <span

                    style={{
                      color: "black",
                      textDecoration: "none",
                      flex: 1,
                      cursor: "pointer",
                      alignSelf: "center",
                      fontSize: 18,
                    }}
                  >
                    <Accordion.Toggle
                      as={Card.Text}
                      variant="link"
                      eventKey="0"
                    >
                      {webinar.title}
                    </Accordion.Toggle>
                  </span>

                  <div>
                    <Button href={`/webinar/${webinar._id}`}>Edit</Button>
                    <Button
                      variant="danger"
                      className="mx-2"
                      onClick={() => deleteHandler(webinar._id)}
                    >
                      Delete
                    </Button>
                  </div>
                </Card.Header>
                <Accordion.Collapse eventKey="0">
                  <Card.Body>
                    <h4>
                      <Badge variant="success">
                        Category - {webinar.category}
                      </Badge>
                    </h4>
                    <blockquote className="blockquote mb-0">
                      <ReactMarkdown>{webinar.content}</ReactMarkdown>
                      <footer className="blockquote-footer">
                        Created on{" "}
                        <cite title="Source Title">
                          {webinar.createdAt.substring(0, 10)}
                        </cite>
                      </footer>
                    </blockquote>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            </Accordion>
          ))}
    </WebinarScreen>
  );
}

export default Webinar;
