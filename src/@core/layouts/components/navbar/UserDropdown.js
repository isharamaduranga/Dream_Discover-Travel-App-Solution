// ** React Imports
import { Link, useNavigate } from "react-router-dom"

// ** Custom Components
import Avatar from "@components/avatar"

// ** Third Party Components
import { Mail, Power, User } from "react-feather"

// ** Reactstrap Imports
import { Button, DropdownItem, DropdownMenu, DropdownToggle, UncontrolledDropdown } from "reactstrap"

// ** Default Avatar Image
import defaultAvatar from "@src/assets/images/portrait/small/avatar-s-11.jpg"
import { IS_LOGIN, LOGIN_PATH, USER_LOGIN_DETAILS } from "@src/router/RouteConstant";
import { HOME_PATH } from "@src/router/routes/route-constant"

const UserDropdown = () => {
  const navigate = useNavigate()
  const handleLogOut = () => {
    localStorage.removeItem(IS_LOGIN)
    localStorage.removeItem(USER_LOGIN_DETAILS)
     navigate(LOGIN_PATH)
  }
  return (
    <UncontrolledDropdown tag="li" className="dropdown-user nav-item">
      <DropdownToggle
        href="/"
        tag="a"
        className="nav-link dropdown-user-link"
        onClick={(e) => e.preventDefault()}
      >
        <div className="user-nav d-sm-flex d-none">
          <span className="user-name fw-bold">John Doe</span>
          <span className="user-status">Admin</span>
        </div>
        <Avatar
          img={defaultAvatar}
          imgHeight="40"
          imgWidth="40"
          status="online"
        />
      </DropdownToggle>
      <DropdownMenu end>
        <DropdownItem tag={Link} to="/" onClick={(e) => e.preventDefault()}>
          <User size={14} className="me-75" />
          <span className="align-middle">Profile</span>
        </DropdownItem>
        <DropdownItem tag={Link} to="/" onClick={(e) => e.preventDefault()}>
          <Mail size={14} className="me-75" />
          <span className="align-middle">Inbox</span>
        </DropdownItem>
        <DropdownItem divider />
        <Button color={"primary"} onClick={handleLogOut} className={"ms-1 btn-sm"}>
          <Power size={14} className="me-75" />
          <span className="align-middle">Logout</span>
        </Button>
      </DropdownMenu>
    </UncontrolledDropdown>
  )
}

export default UserDropdown
