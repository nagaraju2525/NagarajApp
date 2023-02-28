import BlankPage from "components/demo/BlankPage";
import React from "react";
import { RecoilRoot } from "recoil";

const index = () => {
  return (
    <div>
      <RecoilRoot>
        <BlankPage />
      </RecoilRoot>
    </div>
  );
};

export default index;
