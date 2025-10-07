import React from 'react';
import {  Link } from 'react-router-dom';
import "./main.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faCircleQuestion, faClipboardList, faRocket, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";

function Home() {
    return (
        <div className="home-container">
            <div className="icon-menu-wrapper">

                <div className="icon-row main-features">

                    {/* Icon 1: Quiz (Tận dụng màu chủ đạo) */}
                    <Link to="/quiz" className="icon-item primary">
                        <div className="icon-circle">
                            <FontAwesomeIcon icon={faCircleQuestion}></FontAwesomeIcon>
                        </div>
                        <span className="icon-label">Quiz</span>
                    </Link>

                    {/* Icon 2: Space Race (Sử dụng màu xanh/tím) */}
                    <div className="icon-item secondary-1">
                        <div className="icon-circle">
                            <FontAwesomeIcon icon={faClipboardList}></FontAwesomeIcon>
                        </div>
                        <span className="icon-label">Space Race</span>
                    </div>

                    {/* Icon 3: Exit Ticket (Sử dụng màu cam/đỏ) */}
                    <div className="icon-item secondary-2">
                        <div className="icon-circle">
                            <FontAwesomeIcon icon={faRocket}></FontAwesomeIcon>
                        </div>
                        <span className="icon-label">Exit Ticket</span>
                    </div>
                </div>

                {/* Đường phân cách */}
                <h3 className="section-title">QUICK QUESTION</h3>


                <div className="icon-row question-types">
                    <FontAwesomeIcon icon={faSignOutAlt}></FontAwesomeIcon>

                    <div className="icon-item type-mc">
                        <div className="icon-circle">MC</div>
                        <span className="icon-label">Multiple Choice</span>
                    </div>

                    <div className="icon-item type-tf">
                        <div className="icon-circle">TF</div>
                        <span className="icon-label">True / False</span>
                    </div>


                    <div className="icon-item type-sa">
                        <div className="icon-circle">SA</div>
                        <span className="icon-label">Short Answer</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;