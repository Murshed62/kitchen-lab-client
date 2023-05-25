import React, {useRef} from "react";
import Pdf from "react-to-pdf";
import { FaFilePdf } from "react-icons/fa";
import useTitle from "../../hooks/useTitle";


const Blog = () => {
  useTitle('Blog');
  const ref = React.createRef();
  const options = {
    orientation: "portrait",
    unit: "in",
    format: [9, 16],
  };

  return (
    <div>

    <div>
    <Pdf targetRef={ref} filename="Blog.pdf" 
        options={options}
                x={0.5}
                y={0.5}
                scale={0.8}>
          {({ toPdf }) => (
            <div className=" text-center">
              <p>PDF</p>{" "}
              <button x={0.5}
              y={0.8}
              scale={0.6}
                onClick={toPdf}
                
              >
                <FaFilePdf className="text-red-700 h-12 w-12 mx-auto" ></FaFilePdf>
              </button>
            </div>
          )}
        </Pdf>
    </div>

      <h1 className="font-bold text-3xl text-amber-600 text-center pt-10 pb-5">
        Learn more about <span className="text-blue-400">ReactJS</span> and{" "}
        <span className="text-green-500">NodeJS</span>
      </h1>

      <div ref={ref} className="grid lg:grid-cols-3">
      <div className=" bg-yellow-300 m-5 p-5 rounded-3xl">
        <h2 className="text-3xl font-bold">
          Tell us the differences between uncontrolled and controlled
          components.
        </h2>
        <p>
          Ans. Uncontrolled components are those where the form state is handled by
          the browser rather than the React application. With uncontrolled
          components, the values of the form inputs are not stored in the
          component state, but instead are read from the DOM when needed. This
          can make it simpler to write the code, but also means that it can be
          harder to keep track of the current state of the form, especially if
          the user interacts with it in unexpected ways. Controlled components,
          on the other hand, are those where the component state is responsible
          for handling form values. With controlled components, the values of
          the form inputs are stored in the component state, and are updated
          with each change to the input. This allows for more precise control
          over the form state, making it easier to validate user input, and can
          help avoid bugs that can occur with uncontrolled components.
        </p>
      </div>
      <div className=" bg-yellow-300 m-5 p-5 rounded-3xl">
        <h2 className="text-2xl font-bold">
          How to validate React props using PropTypes?
        </h2>
        <p>
          Ans. To validate React props using PropTypes, you can use the PropTypes
          package, which is included with React. PropTypes is a library that
          provides a way to specify the expected types for props that are passed
          to a React component. It is used to ensure that the data being passed
          as props is of the expected type. If a prop is passed to the component
          that does not match its expected type, a warning will be logged in the
          console. This can be very helpful for catching bugs early on in the
          development process. It's important to note that PropTypes are not
          enforced in production mode, so it's still important to handle
          unexpected prop types gracefully in your code.
        </p>
      </div>
      <div className=" bg-yellow-300 m-5 p-5 rounded-3xl">
        <h2 className="text-2xl font-bold">
          Tell us the difference between nodejs and express js.
        </h2>
        <p>
          Ans. Node js: Node.js is a JavaScript runtime that allows you to run
          JavaScript code outside of a web browser. It provides a platform for
          building server-side applications in JavaScript. Node.js is built on
          top of the V8 JavaScript engine used in Google Chrome and provides an
          event-driven, non-blocking I/O model that makes it efficient and
          scalable. Express js: Express.js is a popular web framework for
          Node.js. It provides a set of features for building web applications
          and APIs in Node.js. Express.js is built on top of Node.js and
          provides a simpler and more convenient way to handle web requests and
          responses, manage routes, and work with templates and views. Some key
          difference: Node.js provides a runtime environment for running
          JavaScript code, whereas Express.js provides a framework for building
          web applications and APIs. Node.js is a low-level platform, providing
          only basic functionality such as file system and network I/O, while
          Express.js adds higher-level features such as middleware, routing, and
          templating. Node.js can be used to build a wide variety of
          applications, while Express.js is primarily focused on building web
          applications and APIs. Node.js has a steeper learning curve and
          requires more low-level programming, while Express.js provides a
          simpler and more convenient way to work with HTTP requests and
          responses.
        </p>
      </div>
      <div className=" bg-yellow-300 m-5 p-5 rounded-3xl">
        <h2 className="text-2xl font-bold">
          What is a custom hook, and why will you create a custom hook?
        </h2>
        <p>
          Ans. In React, a custom hook is a reusable function that contains stateful
          logic and can be shared across multiple components. Custom hooks allow
          you to abstract away complex logic into a separate function, making it
          easier to reuse and maintain your code. You might create a custom hook
          for a variety of reasons, such as: Reusing code: If you find yourself
          writing similar logic in multiple components, you can create a custom
          hook to abstract away that logic and reuse it across those components.
          Encapsulating stateful logic: Sometimes, you might have complex
          stateful logic that you want to encapsulate into a separate function.
          A custom hook allows you to do this, making your code more organized
          and easier to maintain. Improving readability: If you have complex
          code that is hard to read and understand, a custom hook can help
          improve readability by abstracting away the complexity into a separate
          function with a descriptive name.
        </p>
      </div>
      </div>
    </div>
  );
};

export default Blog;
