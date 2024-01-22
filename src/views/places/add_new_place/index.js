import React, { Fragment, useEffect, useState } from "react";
import htmlToDraft from "html-to-draftjs"
import { ContentState, EditorState } from "draft-js"
import Breadcrumbs from "@components/breadcrumbs"
import { Button, Card, CardBody, CardText, Col, Form, Input, Label, Row } from "reactstrap"
import Avatar from "@components/avatar"
import Select from "react-select"
import { selectThemeColors } from "@utils"
import { Editor } from "react-draft-wysiwyg"

// ** Styles
import '@styles/react/libs/editor/editor.scss'
import '@styles/base/plugins/forms/form-quill-editor.scss'
import '@styles/react/libs/react-select/_react-select.scss'
import '@styles/base/pages/page-blog.scss'
import { Assets } from "@src/assets/images"
import Flatpickr from 'react-flatpickr'
// ** Styles
import '@styles/react/libs/flatpickr/flatpickr.scss'
const AddNewPlace = () => {

  const initialContent = `<p>Please Type your content ...</p>`
  const contentBlock = htmlToDraft(initialContent)
  const contentState = ContentState.createFromBlockArray(contentBlock.contentBlocks)
  const editorState = EditorState.createWithContent(contentState)


  // ** States
  const [avatar, setAvatar] = useState(Assets.user),
    [title, setTitle] = useState(''),
    [content, setContent] = useState(editorState),
    [userFullName, setUserFullName] = useState(''),
    [blogPosted, setBlogPosted] = useState(new Date()),

    [blogCategories, setBlogCategories] = useState([]),
    [featuredImg, setFeaturedImg] = useState(Assets.emptyImg),
    [imgPath, setImgPath] = useState('banner.jpg'),
    [ratingScore, setRatingScore] = useState(null),
    [comments, setComments] = useState([])

  useEffect(() => {


  }, [])

  const categories = [
    { value: 'Adventure', label: 'Adventure' },
    { value: 'WildLife', label: 'WildLife' },
    { value: 'WaterSport', label: 'WaterSport' },
    { value: 'Nature', label: 'Nature' },
    { value: 'Camping', label: 'Camping' },
    { value: 'Ancient', label: 'Ancient' },
    { value: 'Festive', label: 'Festive' }
  ]

  const onChange = e => {
    const reader = new FileReader(),
      files = e.target.files
    setImgPath(files[0].name)
    reader.onload = function () {
      setFeaturedImg(reader.result)
    }
    reader.readAsDataURL(files[0])
  }
  const onChangeAvatar = e => {
    const reader = new FileReader(),
      files = e.target.files
    setImgPath(files[0].name)
    reader.onload = function () {
      setAvatar(reader.result)
    }
    reader.readAsDataURL(files[0])
  }

  const apiHandler = () => {

  }


  return (
    <div className='blog-edit-wrapper'>
      <Breadcrumbs title='Add New Place' data={[{ title: 'Add New Place' }]} />
        <Row className={'bg-white'}>
          <Col sm='12'>
            <Card>
              <CardBody>
                <div className='d-flex'>
                  <div>
                    <Row>
                      <Col md={2}>
                        <Avatar className='me-75' img={avatar} imgWidth='65' imgHeight='65' />
                      </Col>
                      <Col>
                        <div className=''>
                          <Label className='form-label' for='blog-edit-title'>
                            User Profile
                          </Label>
                          <Input
                            type='file'
                            id='exampleCustomFileBrowser'
                            name='customFile'
                            onChange={onChangeAvatar}
                            accept='.jpg, .png, .gif'
                          />
                        </div>
                      </Col>
                      <Col>
                        <Label className='form-label' for='blog-edit-title'>
                          User Name
                        </Label>
                        <Input id='blog-edit-title' value={userFullName} onChange={e => setUserFullName(e.target.value)} />
                      </Col>
                    </Row>
                  </div>
                </div>
                <hr/>
                <Form className='mt-2' onSubmit={e => e.preventDefault()}>
                  <Row>
                    <Col md='4' className='mb-2'>
                      <Fragment>
                        <Label className='form-label' for='default-picker'>
                          Date
                        </Label>
                        <Flatpickr className='form-control bg-white text-dark'  value={blogPosted} onChange={date => setBlogPosted(date)} id='default-picker' />
                      </Fragment>
                    </Col>

                    <Col md='4' className='mb-2'>
                      <Label className='form-label' for='blog-edit-title'>
                        Place Name
                      </Label>
                      <Input id='blog-edit-title' value={title} onChange={e => setTitle(e.target.value)} />
                    </Col>

                    <Col md='4' className='mb-2'>
                      <Label className='form-label' for='blog-edit-category'>
                        Select Categories
                      </Label>
                      <Select
                        id='blog-edit-category'
                        isClearable={false}
                        theme={selectThemeColors}
                        value={blogCategories}
                        isMulti
                        name='colors'
                        options={categories}
                        className='react-select'
                        classNamePrefix='select'
                        onChange={data => setBlogCategories(data)}
                      />
                    </Col>


                    <Col sm='12' className='mb-2'>
                      <Label className='form-label'>Content</Label>
                      <Editor editorState={content} onEditorStateChange={data => setContent(data)} />
                    </Col>
                    <Col className='mb-2' sm='12'>
                      <div className='border rounded p-2'>
                        <h4 className='mb-1'>Place Image</h4>
                        <div className='d-flex flex-column flex-md-row'>
                          <img
                            className='rounded me-2 mb-1 mb-md-0'
                            src={featuredImg}
                            alt='user img'
                            width='170'
                            height='110'
                          />
                          <div>
                            <small className='text-muted'>Required image resolution 800x400, image size 10mb.</small>
                            <br/>
                            <div className='d-inline-block'>
                              <div className='mb-0'>
                                <Input
                                  type='file'
                                  id='exampleCustomFileBrowser'
                                  name='customFile'
                                  onChange={onChange}
                                  accept='.jpg, .png, .gif'
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Col>
                    <Col className='mt-50'>
                      <Button color='primary' className='me-1'>
                        Save Changes
                      </Button>
                      <Button color='secondary' outline>
                        Cancel
                      </Button>
                    </Col>
                  </Row>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
    </div>
  )
}

export default AddNewPlace
