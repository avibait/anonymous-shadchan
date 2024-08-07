import Form from "./components/form";

export default function Home() {
  // const id = uuidv4();
  // console.log("ID?", id);
  return (
    <main className="grid grid-cols-1 gap-[80px] lg:gap-[120px] md:grid-cols-2 gap-[32px] pt-[20px] px-[40px] sm:pt-[20px] sm:px-[20px] md:pt-[40px] md:px-[40px] lg:pt-[50px] lg:px-[80px]">
      <div className="content-start lg:pt-[12rem]">
        <h1 className="lg:text-[60px] text-[30px] leading-none md:leading-loos tracking-tight text-center lg:text-left">
          Suggest a Shidduch
        </h1>
        <ul className="list-disc pt-6 list-inside lg:text-justify md:pb-[120px]  ld:pb-[120px] pb-[20px]">
          <li>Submit a form</li>
          <li>We reach out</li>
          <li>You get money</li>
        </ul>
        <button className="px-[20px] py-[10px] purple">Learn More</button>
      </div>
      <div className="">
        <Form />
      </div>
    </main>
  );
}
