import { Link } from "react-router";

export default function Home() {
  return (
    <div className="flex flex-col h-full bg-white rounded-xl">
      <section className="p-4 text-6xl xl:text-9xl font-extrabold text-gray-800 ">
        <p className="text-gray-500">
          <span>Hi, I'm</span>
        </p>
        <span className="tracking-tight text-gray-500">Jahye Hwang,</span>
        <hr />
        <p className="break-normal whitespace-break-spaces relative leading-none ">
          <span className="text-red-600">An Enthusiast </span>
          of Making
          <span className="text-red-600"> Positive </span>
          Changes
          <span className="bg-red-600 right-0 bottom-0 w-6 h-6 block rounded-full absolute animate-bounce cursor-pointer"></span>
        </p>
      </section>
      <hr />
      <ul className="p-4 flex gap-2 flex-wrap">
        <li className="py-2 px-4 rounded-full border w-fit">
          {" "}
          <Link to="https://github.com/jj5u/">Github</Link>
        </li>
        <li className="py-2 px-4 rounded-full border w-fit">
          <Link to="https://www.linkedin.com/in/jahye-hwang-a42307244">LinkedIn</Link>
        </li>
        <li className="py-2 px-4 rounded-full border w-fit">Product Designer</li>
        <li className="py-2 px-4 rounded-full border w-fit">Frontend Developer</li>
      </ul>
    </div>
  );
}
