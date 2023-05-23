import { Link } from "react-router-dom"

function Sidebar(){
    return <div>
        <Link to="/">Dashboard</Link>
        <Link to="calendar">Calendar</Link>
        <Link to="books">Books</Link>
        <Link to="profile">Profile</Link>
        <Link to="settings">Settings</Link>
    </div>
}

export default Sidebar