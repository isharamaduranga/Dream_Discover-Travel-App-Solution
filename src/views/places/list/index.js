// ** React Imports
import { Link } from 'react-router-dom'
import { Fragment, useState, useEffect } from 'react'

// ** Third Party Components
import classnames from 'classnames'
import { MessageSquare } from 'react-feather'

// ** Custom Components
import Sidebar from '../BlogSidebar'
import Avatar from '@components/avatar'
import Breadcrumbs from '@components/breadcrumbs'

// ** Reactstrap Imports
import {
  Row,
  Col,
  Card,
  CardBody,
  CardText,
  CardTitle,
  CardImg,
  Badge,
  Pagination,
  PaginationItem,
  PaginationLink
} from 'reactstrap'

// ** Styles
import '@styles/base/pages/page-blog.scss'
import { getAllPlaces } from "@src/services/place"
import moment from "moment"
import SpinnerComponent from "@components/spinner/Fallback-spinner";

const BlogList = () => {
  // ** States
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  

  /** Fetch All Places in Backend proceed */

  const fetchAllPlaces = async () => {
    setLoading(true)
    try {
      const response = await getAllPlaces() 
      if (response.status === 200) {
         console.log(response.data.data)
        setData(response.data.data)
      } else {
        console.error("Error fetching places:", response.message)
      }
    } catch (error) {
      console.error("An error occurred:", error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchAllPlaces()
  }, [])


  const badgeColorsArr = {
    Adventure: 'light-info',
    WildLife: 'light-danger',
    WaterSport: 'light-primary',
    Nature: 'light-success',
    Camping: 'light-danger',
    Ancient: 'light-warning',
    Festive: 'light-secondary'
  }
  const renderRenderList = () => {
    return data.map(item => {
      const renderTags = () => {
        return item.tags.map((tag, index) => {
          return (
            <a key={index} href='/' onClick={e => e.preventDefault()}>
              <Badge
                className={classnames({
                  'me-50': index !== item.tags.length - 1
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

      return (
        <Col key={item.title} md='4'>
          <Card>
            <Link to={`/pages/blog/detail/${item.id}`}>
              <CardImg className='img-fluid' src={item.img} alt={item.title} top />
            </Link>
            <CardBody>
              <CardTitle tag='h3'>
                <Link className='blog-title-truncate text-body-heading' to={`/pages/blog/detail/${item.id}`}>
                  {item.title}
                </Link>
              </CardTitle>
              <div className='d-flex'>
                <Avatar className='me-50' img={item.user_image} imgHeight='25' imgWidth='25' />
                <div>
                  <small className='text-muted fw-bold me-25'>by</small>
                  <small className={'fw-bold'}>
                    <a className='text-body' href='/' onClick={e => e.preventDefault()}>
                      {item.user_full_name}
                    </a>
                  </small>
                  <span className='text-dark ms-50 me-25'>|</span>
                  <small className='text-secondary fw-bold'>{moment(item.posted_date).format('lll')}</small>
                </div>
              </div>
              <div className='my-1 py-25'>{renderTags()}</div>
              <CardText className='blog-content-truncate'>{item.content.split(' ').slice(0, 10).join(' ')}...</CardText>
              <hr />
              <div className='d-flex justify-content-between align-items-center'>
                <Link to={`/pages/blog/detail/${item.id}`}>
                  <MessageSquare size={15} className='text-body me-50' />
                  <span className='text-body fw-bold'>{item.comments.length} Comments</span>
                </Link>
                <Link className='fw-bold' to={`/pages/blog/detail/${item.id}`}>
                  Read More
                </Link>
              </div>
            </CardBody>
          </Card>
        </Col>
      )
    })
  }

  return (
    <>
      {loading === true ? (
        <SpinnerComponent />
      ) : (
    <Fragment>
      <Breadcrumbs title='Place List' data={[{ title: 'Places' }]} />
      <div className='blog-wrapper'>
        <div className='content-detached content-right'>
          <div className='content-body'>
            {data !== null ? (
              <div className='blog-list-wrapper'>
                <Row>{renderRenderList()}</Row>
                <Row>
                  <Col sm='12'>
                    <Pagination className='d-flex justify-content-center mt-2'>
                      <PaginationItem className='prev-item'>
                        <PaginationLink href='#' onClick={e => e.preventDefault()}></PaginationLink>
                      </PaginationItem>
                      <PaginationItem active>
                        <PaginationLink href='#' onClick={e => e.preventDefault()}>
                          1
                        </PaginationLink>
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink href='#' onClick={e => e.preventDefault()}>
                          2
                        </PaginationLink>
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink href='#' onClick={e => e.preventDefault()}>
                          3
                        </PaginationLink>
                      </PaginationItem>
                      <PaginationItem >
                        <PaginationLink href='#' onClick={e => e.preventDefault()}>
                          4
                        </PaginationLink>
                      </PaginationItem>
                      <PaginationItem className='next-item'>
                        <PaginationLink href='#' onClick={e => e.preventDefault()}></PaginationLink>
                      </PaginationItem>
                    </Pagination>
                  </Col>
                </Row>
              </div>
            ) : null}
          </div>
        </div>
        <Sidebar />
      </div>
    </Fragment>
      )}
    </>
  )
}

export default BlogList
