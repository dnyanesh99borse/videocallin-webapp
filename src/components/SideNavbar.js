import React, { useEffect } from "react";
import '../App.css';

function Sidebar() {
    useEffect(() => {
        const listItems = document.querySelectorAll('.list');

        function activelink() {
            listItems.forEach(item => item.classList.remove('active'));
            this.classList.add('active');
        }

        listItems.forEach(item => item.addEventListener('click', activelink));

        // Cleanup to remove event listeners when the component unmounts
        return () => {
            listItems.forEach(item => item.removeEventListener('click', activelink));
        };
    }, []);

    return (
        <>
            <meta charSet="UTF-8" />
            <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>Header</title>
            <link
                rel="stylesheet"
                href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css"
            />
            <link
                rel="stylesheet"
                href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
            />
            <link
                rel="stylesheet"
                href="https://unicons.iconscout.com/release/v3.0.6/css/line.css"
            />
            <link
                rel="stylesheet"
                href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css"
            />

            <div className="navigation">
                <ul>
                    <li className="list active">
                        <a href="#">
                            <span className="icon">
                                <i className="bx bx-user-circle"></i>
                            </span>
                            <span className="text">Profile</span>
                        </a>
                    </li>
                    <li className="list">
                        <a href="#">
                            <span className="icon">
                                <i className="bx bx-basket"></i>
                            </span>
                            <span className="text">Order</span>
                        </a>
                    </li>
                    <li className="list">
                        <a href="#">
                            <span className="icon">
                                <i className="bx bx-video-recording"></i>
                            </span>
                            <span className="text">Meet</span>
                        </a>
                    </li>
                    <li className="list">
                        <a href="#">
                            <span className="icon">
                                <i className="bx bx-message-dots"></i>
                            </span>
                            <span className="text">Chat</span>
                        </a>
                    </li>
                    <li className="list">
                        <a href="#">
                            <span className="icon">
                                <i className="bx bxs-backpack"></i>
                            </span>
                            <span className="text">MyBag</span>
                        </a>
                    </li>
                    <li className="list">
                        <a href="#">
                            <span className="icon">
                                <i className="bx bx-cog"></i>
                            </span>
                            <span className="text">Setting</span>
                        </a>
                    </li>
                    <div className="indicator"></div>
                </ul>
            </div>
        </>
    );
}

export default Sidebar;
