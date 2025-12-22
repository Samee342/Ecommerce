import React from "react";

import config from "../config";

const Logo = () => {
  const { appName } = config;
  const appNameparts = appName.split(" ");
  return (
    <div>
      <div className="flex items-center hover:font-bold w-40">
        <span className="text-primary">{appNameparts[0]}</span>
        <span className="text-secondary">{appNameparts[1]}</span>
      </div>
    </div>
  );
};

export default Logo;
