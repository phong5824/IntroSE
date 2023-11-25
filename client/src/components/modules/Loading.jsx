import { Flex, Spin } from "antd";
import React from "react";

export default function Loading() {
  const loadingStyle = {
    padding: 50,
    borderRadius: 4,
  };

  return (
    <Flex gap="small">
      <Spin tip="Loading" size="large">
        <div className="content" style={loadingStyle} />
      </Spin>
    </Flex>
  );

  // const defaultOptions = {
  //   loop: true,
  //   autoplay: true,
  //   animationData: data,
  //   rendererSettings: {
  //     preserveAspectRatio: "xMidYMid slice",
  //   },
  // };

  // const eventListeners = [
  //   {
  //     eventName: "loopComplete",
  //     callback: () => console.log("a loop complete"),
  //   },
  // ];

  // return (
  //   <div>
  //     <div className="flex justify-center">Hello</div>
  //     <Lottie
  //       options={defaultOptions}
  //       eventListeners={eventListeners}
  //       width={200}
  //       height={200}
  //     />
  //     <div className="flex justify-center">Bye</div>
  //   </div>
  // );
}
