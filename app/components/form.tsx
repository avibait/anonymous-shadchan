"use client";
import { v4 as uuidv4 } from "uuid";
import { Tooltip } from "@nextui-org/tooltip";
import { Card, CardBody, CardFooter } from "@nextui-org/card";
import { Divider } from "@nextui-org/divider";
import CopyButton from "./copyButton";
import Image from "next/image";
import CopyIcon from "../icons/copy.svg";
import { useEffect, useState } from "react";

export default function Form() {
  const [id, setId] = useState(uuidv4());
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setId(uuidv4());
  }, []);

  return (
    <div className="content-center ">
      <div>
        <Card className="form-animation form-delay">
          {/* <CardHeader className=""></CardHeader> */}

          <CardBody>
            {/* <div className="text-center p-2">Shidduch Id:</div>
            <div className=  "bg-purple-100 p-4 rounded-lg text-center">
              <span className="text-lg  text-gray-800 m-30">{id}</span>
            </div> */}
            <div suppressHydrationWarning className="text-center pt-4">
              <b>Shidduch ID:</b> {id}
              {/* <Image src={CopyIcon} alt="My SVG" width={20} height={20} /> */}
              <div className="p-2">
                <CopyButton textToCopy={id} />{" "}
              </div>
            </div>

            <div></div>
          </CardBody>
          <Divider />
          {/* <CardFooter className="grid text-center text-xs"> */}
          {/* <Tooltip
        showArrow
        classNames={{
          base: [
            // arrow color
            // "before:bg-neutral-400 dark:before:bg-white",
          ],
          content: [
            "py-2 px-4 shadow-xl",
            // "text-black bg-gradient-to-br from-white to-neutral-400",
          ],
        }}
        radius="full"
        color="secondary"
        size="sm"
        placement="bottom-end"
        content=" "
      > */}
          {/* Copy and paste your shidduch id into the form
      <br />
      save in a secure location to redeem your reward */}
          {/* </Tooltip> */}
          {/* </CardFooter> */}
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSc62fyicocTCVWYbFASn0MyulDvQ8TfX4WPoW5pzO2VgvK5KQ/viewform?embedded=true"
            // width="640"
            // height="m"
            className="md:w-full h-screen"
            onLoad={() => setLoading(false)}
          ></iframe>
          {loading && <div className="align-content text-center">Loading</div>}
        </Card>
      </div>
      <div className=""></div>
      {/* <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
  Get f started by editing&nbsp;
  <code className="font-mono font-bold">app/page.tsx</code>
</p>
<div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:size-auto lg:bg-none">
  <a
    className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
    href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
    target="_blank"
    rel="noopener noreferrer"
  >
    By{" "}
    <Image
      src="/vercel.svg"
      alt="Vercel Logo"
      className="dark:invert"
      width={100}
      height={24}
      priority
    />
  </a>
</div>
</div>

<div className="relative z-[-1] flex place-items-center before:absolute before:h-[300px] before:w-full before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px]">
<Image
  className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
  src="/next.svg"
  alt="Next.js Logo"
  width={180}
  height={37}
  priority
/>
</div>

<div className="mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-4 lg:text-left">
<a
  href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
  className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
  target="_blank"
  rel="noopener noreferrer"
>
  <h2 className="mb-3 text-2xl font-semibold">
    Docs{" "}
    <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
      -&gt;
    </span>
  </h2>
  <p className="m-0 max-w-[30ch] text-sm opacity-50">
    Find in-depth information about Next.js features and API.
  </p>
</a>

<a
  href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
  className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
  target="_blank"
  rel="noopener noreferrer"
>
  <h2 className="mb-3 text-2xl font-semibold">
    Learn{" "}
    <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
      -&gt;
    </span>
  </h2>
  <p className="m-0 max-w-[30ch] text-sm opacity-50">
    Learn about Next.js in an interactive course with&nbsp;quizzes!
  </p>
</a>

<a
  href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
  className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
  target="_blank"
  rel="noopener noreferrer"
>
  <h2 className="mb-3 text-2xl font-semibold">
    Templates{" "}
    <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
      -&gt;
    </span>
  </h2>
  <p className="m-0 max-w-[30ch] text-sm opacity-50">
    Explore starter templates for Next.js.
  </p>
</a>

<a
  href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
  className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
  target="_blank"
  rel="noopener noreferrer"
>
  <h2 className="mb-3 text-2xl font-semibold">
    Deploy{" "}
    <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
      -&gt;
    </span>
  </h2>
  <p className="m-0 max-w-[30ch] text-balance text-sm opacity-50">
    Instantly deploy your Next.js site to a shareable URL with Vercel.
  </p>
</a> */}
    </div>
  );
}
