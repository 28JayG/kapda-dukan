import React from "react";

import "./homepage.styles.scss";
import { HomepageContainer } from "./homepage.styles";


import Directory from "../../componets/directory/directory.component";

const Homepage = () => (
  <HomepageContainer>
    <Directory />
  </HomepageContainer>
);

export default Homepage;
