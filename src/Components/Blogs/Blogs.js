import React from 'react';
import './Blogs.css';

const Blogs = () => {
    return (
        <div className='blogs-div'>

            <h4>1. What is cors?</h4>
            <p><b>Ans:</b> CORS is an HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources.</p>
            <br />



            <h4>2. What are the reasons of using firebase? What other options have to implement authentication?</h4>
            <p><b>Ans:</b> There are some very good advantages of using Firebase:<br />
                <b>a.</b> Fast and Safe Hosting. <br />
                <b>b.</b> Google analytics. <br />
                <b>c.</b> Free multy-platform firebase authentication.<br />
                <b>d.</b> Free use of firebase dynamic links.
                <br />

                <b>Other options to emplement authentication:</b> Auth0, MongoDB, Passport, Okta are the most popular alternatives Firebase Authentication.
            </p>
            <br />


            <h4>3. How does the private route work?</h4>
            <p><b>Ans:</b> The works of Private Route is protect selected pages in a React app from unauthenticated users.</p>
            <br />


            <h4>4. What is Node? How does Node work?</h4>
            <p><b>Ans: Node:</b> Node is an open source server environment actually uses JavaScript on the server.
                <br />
                <b>Node working Process:</b> Node.js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive.
            </p>
        </div>
    );
};

export default Blogs;