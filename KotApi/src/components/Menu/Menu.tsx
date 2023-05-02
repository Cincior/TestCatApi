import 'bootstrap/dist/css/bootstrap.css';
import style from './Menu.module.css';

interface menuProps {
    name: string;
    path: string;
}

function Menu({ name, path }: menuProps) {
    return (
        <nav className="navbar">
            <div className="container-fluid">
                <div className={`navbar-nav h2 ${style.h4}`}>
                    <a className=" nav-link active bg-success rounded-pill ps-4 pe-4" href={path}>{name}</a>
                </div>
            </div>
        </nav>
    );
}

export default Menu;
