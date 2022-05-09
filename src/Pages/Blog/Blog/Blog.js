import React from 'react';
import './Blog.css';

const Blog = () => {
    return (
        <div className='container my-5'>
            <div className="blog">
                <h1>My Blog</h1>
                <div className="question-answer">
                    <img src="images/ques-ans/ques1.jpg" alt="" />
                    <div>
                        <h3><span>Q1:</span> What are the difference between js and node js?</h3>
                        <h6><span style={{ textDecoration: "underline" }}>Ans: </span>
                            Here are the difference between js and node js:
                            <ul>
                                <li>Javascript is a programming language. And NodeJS is a Javascript runtime environment.</li>
                                <li>Javascript can only be run in the browsers. And Node JS  can run Javascript outside the browser.</li>
                                <li>Javascript basically used on the client-side. Besides Node js is mostly used on the server-side.</li>
                                <li>Javascript is used in frontend development. And Nodejs is used in server-side or backend development.</li>
                                <li>Javascript is the upgraded version of ECMA script. On the other hand Nodejs is written in C, C++ and Javascript.</li>
                            </ul>
                        </h6>
                    </div>
                </div>
                <div className="question-answer">
                    <img src="images/ques-ans/ques2.jpg" alt="" />
                    <div>
                        <h3><span>Q2:</span> When should you use nodejs and when should you use mongodb?</h3>
                        <h6><span style={{ textDecoration: "underline" }}>Ans: </span> <br />
                            NodeJs: Node.js's single-threading nature makes it ideal for non-blocking, event-driven servers. It can be used for traditional websites and back-end API services but was designed for real-time, push-based architectures. The reason Node.js is so popular is not only because it is effective at what it does, but also because it has a large, active, open-source, JavaScript-based ecosystem. Additionally, it does not tend to cause compatibility issues between versions. But because Node.js is single-threaded, it may be a bad choice for servers that are also computational servers, since heavy computation will cause the server to slow down. <br /> <br />
                            MongoDB: MongoDB can be use in many different industries like: telecommunications, gaming, finances, healthcare, and many more. Its very popular in many industries because of:
                            <ul>
                                <li>Integrating large amounts of diverse data</li>
                                <li>Describing complex data structures that evolve</li>
                                <li>Supporting hybrid and multi-cloud applications</li>
                                <li>Supporting agile development and collaboration</li>
                                <li>Delivering data in high-performance applications</li>
                            </ul>
                        </h6>
                    </div>
                </div>
                <div className="question-answer">
                    <img src="images/ques-ans/ques3.jpg" alt="" />
                    <div>
                        <h3><span>Q3:</span> What are the difference between SQL and noSQL databases?</h3>
                        <h6><span style={{ textDecoration: "underline" }}>Ans:</span>
                            <ul>
                                <li>SQL is a Relational Database Management System. And In noSQL, Database system that is not relational or distributed.</li>
                                <li>In SQL databases, the schema is fixed, static, or predefined. And noSQL database have dynamic schema.</li>
                                <li>SQL databases are not suited for hierarchical data storage. Besides, noSQL databases are best suited for hierarchical data storage.</li>
                                <li>SQL databases are best suited for complex queries. And noSQL databases are not so good for complex queries.</li>
                                <li>SQL databases are vertically scalable. And noSQL databases horizontally scalable.</li>
                            </ul>
                        </h6>
                    </div>
                </div>
                <div className="question-answer">
                    <img src="images/ques-ans/ques4.jpg" alt="" />
                    <div>
                        <h3><span>Q4:</span> What is the purpose of jwt and how does it work?</h3>
                        <p><span style={{ textDecoration: "underline" }}>Ans:</span>
                            In untrusted environments like the Web, JSON Web Tokens are fantastic. It is my intention to explain the significance of JWTs in this article. The classical and modern stateful authentication methods will be compared. The fundamental difference between both approaches will also be discussed. <br />
                            The JWT differs from other web tokens in that it contains a set of claims. These claims enable two parties to communicate with each other. For future revocation and check of issued tokens, they are stored in a single service.
                            Resource servers and clients share a single point of truth for token verification and information gathering.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;