// components/CopyText.js
"use client";
import { useState } from "react";
// import { Button } from "@nextui-org/button";
// import { Button, Tooltip, Container, Text } from "@nextui-org/";
import { Tooltip } from "@nextui-org/tooltip";
import CopyIcon from "../icons/copy.svg";
import Image from "next/image";

const imageStyle = {
  display: "inline",
};

const CopyButton = ({ textToCopy }) => {
  const [copied, setCopied] = useState(false);
  // const textToCopy = "This is the text to be copied!";

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(textToCopy);
      setCopied(true);
      // setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  return (
    // <Container>
    // <Text>{textToCopy}</Text>
    <>
      <button onClick={handleCopy}>
        {/* <CopyIcon /> */}

        <Image
          style={imageStyle}
          src={CopyIcon}
          alt="Copy"
          width={20}
          height={20}
        />
      </button>
      <span className="pl-1 text-xs">{copied ? "Copied!" : "Copy"} </span>
    </>
    // </Container>
  );
};

export default CopyButton;
