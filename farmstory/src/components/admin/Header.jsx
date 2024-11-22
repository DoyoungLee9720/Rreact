import { Link } from "react-router-dom";

export default function Header(){
    return (
        <header>
            <Link to="/admin" className="logo"><img src="/images/admin_logo.jpg" alt="로고"/></Link>
            <p>
                <Link to="/">HOME |</Link>
                <a href="#">로그아웃 |</a>
                <a href="#">고객센터</a>
            </p>
        </header>
    );
}