import React from "react";
import "./Blogs.css";

const Blogs = () => {
  return (
    <div className="blog-container">
      <div>
        <h2>Question 1 : How does react Works?</h2>
        <p>
          Answers : The user interface is broken up into discrete, reusable code
          chunks called components by ReactJS. Since React components accept
          arbitrary inputs called properties or props, they operate similarly to
          JavaScript functions. As many components as need can exist without
          making your code clumsy.
        </p>
      </div>
      <div>
        <h2>Question 2 : Difference between props and state in react?</h2>
        <p>
          Answers : State is the component's internal state, which cannot be
          accessed from outside the component or changed. It is the functional
          equivalent of local variables. Contrarily, props enable components to
          accept data from their parent component in the form of props, making
          them reusable.
        </p>
      </div>
      <div>
        <h2>Question 2 : What is the use of useeffect in react?</h2>
        <p>
          Answers : To get rid of the negative impacts of employing class-based
          components, useEffect Hook was introduced. Examples of operations that
          can result in unwanted side effects include updating the DOM,
          obtaining data from API endpoints, setting up subscriptions or timers,
          etc.
        </p>
      </div>
    </div>
  );
};

export default Blogs;
