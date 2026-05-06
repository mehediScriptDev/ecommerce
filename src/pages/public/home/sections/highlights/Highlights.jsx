import { BiLeaf } from "react-icons/bi";
import Container from "../../../../../layout/Container";

const features = [
  {
    id: 1,
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Genuine Devices",
    description: "No hidden repairs or third-party parts. Guaranteed.",
  },
  {
    id: 2,
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21a48.25 48.25 0 01-8.135-.687c-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
      </svg>
    ),
    title: "Thorough Testing",
    description: "Hardware and software tested to factory standards.",
  },
  {
    id: 3,
    icon: (
      <BiLeaf />
    ),
    title: "Eco-Friendly",
    description: "Sustainable sourcing and recycled packaging.",
  },
];

export default function Highlights() {
  return (
    <section className="bg-white py-10 lg:py-16">
      <Container>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {features.map((f) => (
          <div
            key={f.id}
            className="card border border-[#EBECF0] bg-white rounded-2xl p-8
              transition-all duration-300 ease-out
              hover:-translate-y-1 hover:shadow-md cursor-default"
          >
            <div className="text-custom text-2xl mb-4">{f.icon}</div>
            <h3 className="text-base font-semibold text-[#171C1E] mb-2">{f.title}</h3>
            <p className="text-base max-w-62.5 text-[#6D797C] leading-relaxed">{f.description}</p>
          </div>
        ))}
      </div>
      </Container>
    </section>
  );
}