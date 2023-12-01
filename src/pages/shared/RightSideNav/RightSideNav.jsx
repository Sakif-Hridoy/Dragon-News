import React from "react";
import PropTypes from "prop-types";
import qZone1 from '../../../assets/qZone1.png'
import qZone2 from '../../../assets/qZone2.png'
import qZone3 from '../../../assets/qZone3.png'


import {
  FaGoogle,
  FaGithub,
  FaFacebook,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";

const RightSideNav = (props) => {
  return (
    <div>
      <div className="p-4 mb-6">
        <h2 className="text-3xl">Login With</h2>
        <button className="btn btn-outline">
          <FaGoogle></FaGoogle>
          Login with Google
        </button>

        <button className="btn btn-outline">
          <FaGithub></FaGithub>
          Login with Github
        </button>
      </div>

      <div className="p-4 mb-6">
        <h2 className="text-3xl">Find Us On</h2>
        <a
          className="p-4 flex text-lg items-center border rounded-t-lg"
          href=""
        >
          <FaFacebook className="mr-3"></FaFacebook>
          Facebook
        </a>
        <a className="p-4 flex text-lg items-center border rounded-lg" href="">
          <FaTwitter className="mr-3"></FaTwitter>
          Twitter
        </a>
        <a
          className="p-4 flex text-lg items-center border rounded-b-lg"
          href=""
        >
          <FaInstagram className="mr-3"></FaInstagram>
          Instagram
        </a>
      </div>

      {/* q-zone */}
      <div className="p-4 mb-6 bg-[#F3F3F3]">
        <h2 className="text-3xl">Q Zone</h2>

        <img src={qZone1} alt="" />
        <img src={qZone2} alt="" />
        <img src={qZone3} alt="" />
        
      </div>
    </div>
  );
};

RightSideNav.propTypes = {};

export default RightSideNav;
