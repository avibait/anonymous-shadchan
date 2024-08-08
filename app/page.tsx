"use client";
import Link from "next/link";
import Form from "./components/form";
import About from "./components/about";

export default function Home() {
  // const id = uuidv4();
  // console.log("ID?", id);

  // const words = text.split(' ');

  const handleScroll = (e: any, targetId: string) => {
    e.preventDefault();
    document.getElementById(targetId)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="grid grid-cols-1 gap-[80px] lg:gap-[120px] md:grid-cols-2 gap-[32px] pt-[20px] px-[40px] sm:pt-[20px] sm:px-[20px] md:pt-[40px] md:px-[40px] lg:pt-[50px] lg:px-[80px]">
      <div className="content-start lg:pt-[12rem pt-[3rem]">
        <h1 className="lg:text-[60px] text-[30px] leading-tight md:leading-loos text-center lg:text-left">
          <p className=" word-animation word-delay-1">Suggest a Shidduch, </p>
          <br />
          <p className="word-animation word-delay-1">
            receive <span className="purple-text">$500</span>
          </p>
        </h1>
        <ol className="lg:text-[18px]  pt-6 list-inside lg:text-justify md:pb-[120px]  ld:pb-[120px] pb-[20px] word-animation word-delay-2">
          <li>
            1. Fill in the names (and optionally add additonal information).
          </li>
          {/* <li>2.(Optional)</li> */}
          <li>
            2. Copy your Shidduch ID from the top of the form and paste in the
            form.
          </li>
          <li>
            3. Before submitting, copy and save your Shidduch ID in a secure
            location.
          </li>
          {/* <li>
            3. Before submitting, copy and save your Shidduch ID in a secure
            location.
          </li> */}
        </ol>
        <div className="py-[20px]">
          <Link href="#about" passHref>
            <button
              onClick={(e) => handleScroll(e, "about")}
              className="px-[20px] py-[10px] purple  word-animation word-delay-2"
            >
              How it works
            </button>
          </Link>
        </div>
      </div>
      <div className="">
        <Form />
      </div>
      <div id="about">
        <About />
      </div>
    </main>
  );
}
