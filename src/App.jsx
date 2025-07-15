import { useState } from "react";

function App() {
  const [email, setEmail] = useState("");
  const [display, setDisplay] = useState(true);
  if (display === true) {
    return (
      <>
        <div className="container mt-3 card">
          <div className="card-body">
            <h2>Newsletter Subscription</h2>
            <form
              onSubmit={(event) => {
                event.preventDefault();
              }}
            >
              <div class="mb-3">
                <input
                  id="name"
                  type="text"
                  class="form-control"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div class="mb-3">
                <input
                  id="myemail"
                  type="email"
                  class="form-control"
                  placeholder="Your Email"
                  required
                />
              </div>
              <button
                className="btn btn-sm btn-primary"
                onClick={() => {
                  setEmail(myemail.value);
                  if (myemail.value === "" || name.value === "") {
                    null;
                  } else {
                    setDisplay(false);
                  }
                }}
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="container mt-5">
          <div class="alert alert-success" role="alert">
            Please check your email ({email}) for confirmation.
          </div>
          <a
            className="text-primary link-underline"
            onClick={() => {
              setDisplay(true);
            }}
          >
            Subscribe to another email
          </a>
        </div>
      </>
    );
  }
}

export default App;
