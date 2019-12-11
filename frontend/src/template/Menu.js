import React from 'react';
import {Link} from 'react-router-dom';

const Menu = ()=>(
    <section className="col-12 pr-0 pl-0 bg-dark">

        <section className="container">

            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <Link className="navbar-brand" to="/"><i className="fa fa-calendar-check-o"></i> TodoApp</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="/todos">Tarefas <span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">Sobre</Link>
                        </li>

                    </ul>

                </div>
            </nav>

        </section>

    </section>
);

export default Menu;