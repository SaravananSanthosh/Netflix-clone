import NavBar from "../components/Navbar";

const PageWrapper = ({ children }) => {
  return (
    <div>
      <NavBar />
      {children}
    </div>
  );
};

export default PageWrapper;
