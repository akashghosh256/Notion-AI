"use client";
import React from "react";
import Typewriter from "typewriter-effect";

type Props = {};

const TypewriterTitle = (props: Props) => {
  return (
    <Typewriter
      options={{
        loop: true,
      }}
      onInit={(typewriter) => {
        typewriter
          .typeString("Privacy? We speak fluent sarcasm here")
          .pauseFor(1000)
          .deleteAll()
          .typeString("Don't be shy with it")
          .pauseFor(1000)
          .start();
      }}
    />
  );
};

export default TypewriterTitle;
