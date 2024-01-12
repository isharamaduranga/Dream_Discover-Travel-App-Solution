import React, { Fragment, useEffect } from "react"
import NavbarUser from "./NavbarUser"
import { Activity, Grid, Home, MapPin, Menu, PlusCircle, Radio } from "react-feather";
import { Col, NavItem, NavLink, Row } from "reactstrap";
import themeConfig from "@configs/themeConfig"
import {
  ADD_NEW_PLACE_PATH, CATEGORIES_PATH,
  HOME_PATH,
  PLACES_PATH,
} from "@src/router/routes/route-constant";
import { Link } from "react-router-dom"
import "../../../../main.scss"
import { routePathHandler } from "@store/routePath"
import { useDispatch, useSelector } from "react-redux"

const ThemeNavbar = (props) => {
  const {  } = props
  const dispatch = useDispatch()
  const routePathStore = useSelector((state) => state.routePath)
  let windowPath = routePathStore.pathName

  const setWindowPathHandler = (path) => {
    dispatch(routePathHandler(path))
  }

  useEffect(() => {
    windowPath = routePathStore.pathName
  }, [routePathStore.pathName])

  return (
    <Fragment>
      <Row className="bookmark-wrapper d-flex align-items-center " style={{width:'95vw'}}>
   {/*     <Col className="navbar-nav d-xl-none">
          <NavItem className="mobile-menu me-auto">
            <NavLink className="nav-menu-main menu-toggle hidden-xs is-active" onClick={() => setMenuVisibility(true)}>
              <Menu className="ficon" />
            </NavLink>
          </NavItem>
        </Col>*/}
        <Col md={3}  className={"nav-logo-wrapper d-flex justify-content-start align-items-center"}>
          <Row>
            <Col md={3}>
              <Link to={HOME_PATH} className="navbar-brand">
              <span className="brand-logo">
                <img src={themeConfig.app.appLogoImage} alt="logo" />
              </span>
              </Link>
            </Col >
            <Col md={9} style={{marginTop:'8px'}}>
              <h3 className="brand-text text-primary m-0 p-0">{themeConfig.app.appName}</h3>
              <h4 className={"m-0 p-0"}>Sri Lanka</h4>
            </Col>
          </Row>
        </Col>

        <Col md={7} className="navbar-nav d-none_ d-lg-block_ navbar_main d-flex justify-content-center align-items-center ">

          <div className={"top-navigate-btns"}>
            <Link
              to={HOME_PATH}
              className={`top-wrapper ${windowPath === HOME_PATH ? "top-wrapper-active" : ""}`}
              onClick={() => setWindowPathHandler(HOME_PATH)}
            >
              <div className={"nav_itm"}>
                <Home />
                <p>Home</p>
              </div>
            </Link>

            <Link
              to={PLACES_PATH}
              className={`top-wrapper ${windowPath === PLACES_PATH ? "top-wrapper-active" : ""}`}
              onClick={() => setWindowPathHandler(PLACES_PATH)}
            >
              <div className={"nav_itm"}>
                <MapPin />
                <p>Places</p>
              </div>
            </Link>

            <Link
              to={CATEGORIES_PATH}
              className={`top-wrapper ${windowPath === CATEGORIES_PATH ? "top-wrapper-active" : ""}`}
              onClick={() => setWindowPathHandler(CATEGORIES_PATH)}
            >
              <div className={"nav_itm"}>
                <Grid />
                <p>Category</p>
              </div>
            </Link>

            <Link
              to={ADD_NEW_PLACE_PATH}
              className={`top-wrapper ${windowPath === ADD_NEW_PLACE_PATH ? "top-wrapper-active" : ""}`}
              onClick={() => setWindowPathHandler(ADD_NEW_PLACE_PATH)}
            >
              <div className={"nav_itm"}>
                <PlusCircle />
                <p>Add New Place</p>
              </div>
            </Link>
          </div>
        </Col>

        <Col md={2} className={'d-flex justify-content-end align-items-center'}>
          <NavbarUser {...props} />
        </Col>
      </Row>

    </Fragment>
  )
}

export default ThemeNavbar
