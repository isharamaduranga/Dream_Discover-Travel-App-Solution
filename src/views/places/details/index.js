// ** React Imports
import React, { Fragment, useEffect, useState } from "react"

// ** Third Party Components
import classnames from "classnames"
import { Bookmark, ChevronsDown, ChevronsUp, MessageSquare, Share2, Star } from "react-feather"

// ** Utils
import { kFormatter } from "@utils"

// ** Custom Components
import Sidebar from "../BlogSidebar"
import Avatar from "@components/avatar"
import Breadcrumbs from "@components/breadcrumbs"

// ** Reactstrap Imports
import {
  Badge,
  Button,
  Card,
  CardBody,
  CardImg,
  CardText,
  CardTitle,
  Col,
  DropdownToggle,
  Form,
  Input,
  Label,
  Row,
  UncontrolledDropdown
} from "reactstrap"

// ** Styles
import "@styles/base/pages/page-blog.scss"
import Rating from "react-rating"
import { getAllPlaces } from "@src/services/place"
import moment from "moment/moment"

const BlogDetails = () => {
  // ** States
  const [data, setData] = useState(null)
  const [dataNew, setDataNew] = useState(null)
  const [displayedComments, setDisplayedComments] = useState(2)


  useEffect(() => {
    const fetchData = async () => {
      const response = await getAllPlaces()
      setDataNew(response.data.data)
      const cardId = window.location.pathname.split("/").pop()
      const cardDetails = dataNew.find((item) => String(item.id) === cardId)
      setData(cardDetails)
    }

    fetchData()
  }, [dataNew])

  const badgeColorsArr = {
    Adventure: "light-info",
    WildLife: "light-danger",
    WaterSport: "light-primary",
    Nature: "light-success",
    Camping: "light-danger",
    Ancient: "light-warning",
    Festive: "light-secondary"
  }

  const renderTags = () => {
    return data.tags.map((tag, index) => {
      return (
        <a key={index} href="/" onClick={e => e.preventDefault()}>
          <Badge
            className={classnames({
              "me-50": index !== data.tags.length - 1
            })}
            color={badgeColorsArr[tag]}
            pill
          >
            {tag}
          </Badge>
        </a>
      )
    })
  }

  const handleViewMoreClick = () => {
    setDisplayedComments(prevCount => (prevCount === data.comments.length ? 2 : data.comments.length))
  }

  const renderComments = () => {
    return data.comments.slice(0, displayedComments).map(comment => (
      <Card className="mb-2" key={comment.comment_id}>
        <CardBody>
          <div className="d-flex">
            <div>
              <Avatar className="me-75" img={comment.user_image} imgHeight="38" imgWidth="38" />
            </div>
            <div>
              <h6 className="fw-bolder mb-25">{comment.name}</h6>
              <CardText>{moment(comment.commented_at).format("lll")}</CardText>
              <CardText>{comment.comment_text}</CardText>
              <a href="/" onClick={e => e.preventDefault()}></a>
            </div>
          </div>
        </CardBody>
      </Card>
    ))
  }

  return (
    <Fragment>
      <Breadcrumbs title="Place Details" data={[{ title: "Place" }, { title: "Details" }]} />
      <div className="blog-wrapper">
        <div className="content-detached content-right">
          <div className="content-body">
            {data !== null ? (
              <Row>
                <Col sm="12">
                  <Card className="mb-2">
                    {/*className="img-fluid"*/}
                    <CardImg src={data.img} height={700} top />
                    <CardBody>
                      <CardTitle tag="h4">{data.title}</CardTitle>
                      <div className="d-flex">
                        <Avatar className="me-50" img={data.user_image} imgHeight="50" imgWidth="50" />
                        <div className={"mt-1"}>
                          <small className="text-muted me-25 fs-5">by</small>
                          <small className={"fs-5"}>
                            <a className="text-body" href="/" onClick={e => e.preventDefault()}>
                              {data.user_full_name}
                            </a>
                          </small>
                          <span className="text-muted ms-50 me-25 fw-bold">|</span>
                          <small className="text-muted fs-5">{moment(data.posted_date).format("lll")}</small>
                        </div>
                      </div>
                      <div className="my-1 py-25">{renderTags()}</div>

                      <div className={"mt-1 mb-2"}>
                        <span>Ratings<br /></span>
                        <Rating
                          readonly
                          direction={""}
                          initialRating={data.rating_score}
                          emptySymbol={<Star size={25} fill="#babfc7" stroke="#babfc7" />}
                          fullSymbol={<Star size={25} fill={"#ffc107"} stroke={"#ffc107"} />}
                        />
                      </div>

                      <div className="d-flex">
                        <div>
                          <CardText className="m-1">
                            <div
                              dangerouslySetInnerHTML={{
                                __html: data.content
                              }}
                            ></div>
                          </CardText>
                        </div>
                      </div>
                      <hr className="my-2" />
                      <div className="d-flex align-items-center justify-content-between">
                        <div className="d-flex align-items-center">
                          <div className="d-flex align-items-center me-1">
                            <a className="me-50" href="/" onClick={e => e.preventDefault()}>
                              <MessageSquare size={21} className="text-body align-middle" />
                            </a>
                            <a href="/" onClick={e => e.preventDefault()}>
                              <div className="text-body align-middle">{kFormatter(data.comments.length)}</div>
                            </a>
                          </div>
                          <div className="d-flex align-items-center">
                            <a className="me-50" href="/" onClick={e => e.preventDefault()}>
                              <Bookmark size={21} className="text-body align-middle" />
                            </a>
                            <a href="/" onClick={e => e.preventDefault()}>
                              <div className="text-body align-middle">{"10"}</div>
                            </a>
                          </div>
                        </div>
                        <UncontrolledDropdown className="dropdown-icon-wrapper">
                          <DropdownToggle tag="span">
                            <Share2 size={21} className="text-body cursor-pointer" />
                          </DropdownToggle>
                        </UncontrolledDropdown>
                      </div>
                    </CardBody>
                  </Card>
                </Col>
                <Col sm="12" id="blogComment">
                  <h6 className="section-label text-dark fs-5 mt-1">Comments</h6>
                  {renderComments()}
                  {data.comments.length > 2 && (
                    <div className={"text-center mb-2 mt-2"}>
                      <Button color="info" onClick={handleViewMoreClick}>
                        {displayedComments === 2 ? (
                          <>View More <ChevronsDown size={16} /></>
                        ) : (
                          <>View Less <ChevronsUp size={16} /></>
                        )}
                      </Button>
                    </div>
                  )}
                </Col>
                <Col sm="12" className={"mt-1"}>
                  <h6 className="section-label text-dark fs-5 mt-1">Leave a Comment</h6>
                  <Card>
                    <CardBody>
                      <Form className="form" onSubmit={e => e.preventDefault()}>
                        <Row>
                          <Col sm="6">
                            <div className="mb-2">
                              <Input placeholder="Name" />
                            </div>
                          </Col>
                          <Col sm="6">
                            <div className="mb-2">
                              <Input type="email" placeholder="Email" />
                            </div>
                          </Col>
                          <Col sm="12">
                            <div className="mb-2">
                              <Input className="mb-2" type="textarea" rows="4" placeholder="Comment" />
                            </div>
                          </Col>
                          <Col sm="12">
                            <div className="form-check mb-2">
                              <Input type="checkbox" id="save-data-checkbox" />
                              <Label className="form-check-label" for="save-data-checkbox">
                                Save my name, email, and website in this browser for the next time I comment.
                              </Label>
                            </div>
                          </Col>
                          <Col sm="12">
                            <Button color="primary">Post Comment</Button>
                          </Col>
                        </Row>
                      </Form>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            ) : null}
          </div>
        </div>
        <Sidebar />
      </div>
    </Fragment>
  )
}

export default BlogDetails
