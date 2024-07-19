import React from "react";

const Header = ({title}) => {
    return (
        <header>
            <div className="container">
                <div className="content">
                    <div className="columns">
                        <div className="column is-3">
                        <h1 className="title">{title}</h1>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;