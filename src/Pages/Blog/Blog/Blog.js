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
                        <p><span style={{ textDecoration: "underline" }}>Ans:</span></p>
                    </div>
                </div>
                <div className="question-answer">
                    <img src="images/ques-ans/ques2.jpg" alt="" />
                    <div>
                        <h3><span>Q2:</span> When should you use nodejs and when should you use mongodb?</h3>
                        <p><span style={{ textDecoration: "underline" }}>Ans:</span></p>
                    </div>
                </div>
                <div className="question-answer">
                    <img src="images/ques-ans/ques3.jpg" alt="" />
                    <div>
                        <h3><span>Q3:</span> What are the difference between sql and nosql databases?</h3>
                        <p><span style={{ textDecoration: "underline" }}>Ans:</span></p>
                    </div>
                </div>
                <div className="question-answer">
                    <img src="images/ques-ans/ques4.jpg" alt="" />
                    <div>
                        <h3><span>Q4:</span> What is the purpose of jwt and how does it work?</h3>
                        <p><span style={{ textDecoration: "underline" }}>Ans:</span></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;