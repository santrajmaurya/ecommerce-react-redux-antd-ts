import React from "react";

import Directory from '../../components/directory/Directory';

import './HomePage.scss';

type HomePageProps = {
}

const HomePage: React.FC<HomePageProps> = () => (
  <div className="homepage">
        <Directory />
  </div>
);

export default HomePage;
