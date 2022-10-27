import React from 'react';

const BlogPage = () => {
    return (
        <div>
            <div tabIndex={0} className=" mt-[100px] collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                    what is cors?
                </div>
                <div className="collapse-content">
                    <p>CORS is a node. js package.It will give you permission to access server data from anywhere</p>
                </div>
            </div>


            <div tabIndex={0} className=" mt-3 collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                    Why are you using firebase?
                </div>
                <div className="collapse-content">
                    <p>Firebase helps you develop high-quality apps, grow your user base.it's features works independently, and they work even better together.</p>
                </div>
            </div>

            <div tabIndex={0} className=" mt-3 collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                    What other options do you have to implement authentication?
                </div>
                <div className="collapse-content">
                    <p>On this page.
                        Add and initialize the Authentication SDK.
                        Prototype and test with Firebase Local Emulator Suite.
                        Sign up new users.
                        Sign in existing users.
                        Set an authentication state observer and get user data.
                        Next steps.</p>
                </div>
            </div>

            <div tabIndex={0} className=" mt-3 collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                How does the private route work?
                </div>
                <div className="collapse-content">
                    <p>it enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL.</p>
                </div>
            </div>

            <div tabIndex={0} className=" mt-3 collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                What is Node?
                </div>
                <div className="collapse-content">
                    <p>A node is a basic unit of a data structure, such as a linked list or tree data structure.</p>
                </div>
            </div>

            <div tabIndex={0} className=" mt-3 collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                How does Node work?
                </div>
                <div className="collapse-content">
                    <p>Node. js takes a different approach. It runs a single-threaded event loop registered with the system to handle connections, and each new connection causes a JavaScript callback function to fire.</p>
                </div>
            </div>



        </div>

    );
};

export default BlogPage;