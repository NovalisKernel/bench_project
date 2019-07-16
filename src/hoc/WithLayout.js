import React from "react";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import "../App.css";

export const withLayout = Component => props => {
  return (
    <React.Fragment>
      <Header />
      <main className="main">
        <Component {...props} />
      </main>
      <Footer />
    </React.Fragment>
  );
};
