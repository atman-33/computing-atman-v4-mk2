/* eslint-disable @next/next/no-img-element */
const Greet = () => {
  return (
    <div>
      <form>
        <h1>Good Afternoon</h1>
        <input type="radio" />
        <label htmlFor="fullname">Full Name</label>
        <input id="fullname" type="text" placeholder="Enter Full Name" />
        <button>Button1</button>
        <button>Button2</button>
        <img src="https://reactjs.org/logo-og.png" alt="React Logo" />
        <h2>Hello</h2>
      </form>
    </div>
  );
};

export default Greet;
