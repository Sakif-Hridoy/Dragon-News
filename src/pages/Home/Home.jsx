import React from "react";
import PropTypes from "prop-types";
import Header from "../shared/Header/Header";
import Navbar from "../shared/Navbar/Navbar";
import LeftSideNav from "../shared/LeftSIdeNav/LeftSideNav";
import RightSideNav from "../shared/RightSideNav/RightSideNav";
import BreakingNews from "./BreakingNews";
import { useLoaderData } from "react-router-dom";
import { useState } from "react";
import NewsCard from "./NewsCard";

const Home = (props) => {
  const news = useLoaderData();

  return (
    <div>
      <Header></Header>
      <BreakingNews></BreakingNews>
      <Navbar></Navbar>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="text-center">
          <LeftSideNav></LeftSideNav>
        </div>
        <div className="col-span-2 border text-center">
          {/* <h2>News Coming Soon</h2> */}
          {news.map((news) => (
            <NewsCard key={news.id} news={news} > </NewsCard>
          ))}
        </div>
        <div className="text-center">
          <RightSideNav></RightSideNav>
        </div>
      </div>
    </div>
  );
};

Home.propTypes = {};

export default Home;
