import React from "react";
import { NextPage } from "next";

interface initialProps {
  greeting: string;
}

interface Props extends initialProps {
  // gets all the props from the parent and also more
}

const index: NextPage<Props, initialProps> = (props: Props) => {
  return <div>Hello {props.greeting}</div>;
};

index.getInitialProps = async () => ({
  greeting: "bitch",
});

export default index;
