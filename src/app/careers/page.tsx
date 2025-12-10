// src/app/careers/page.tsx
export default function Careers() {
  return (
    <div className="container mx-auto px-6 py-24 sm:py-32 lg:px-8">
      <h1 className="text-4xl font-bold tracking-tight text-teal-400 sm:text-5xl mb-12">
        Join Stylite 2035: Shape the Digital Tomorrow
      </h1>

      <p className="text-lg leading-8 text-zinc-300 mb-12">
        At Stylite 2035, we&apos;re not just building careers; we&apos;re forging futures.
        Our team comprises visionaries, innovators, and problem-solvers dedicated to
        pioneering the next generation of IT infrastructure. If you&apos;re passionate
        about quantum computing, ethical AI, sustainable technology, and decentralized
        systems, your place is with us.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Role 1: Quantum Cryptography Engineer */}
        <div className="bg-zinc-800 p-8 rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300">
          <h2 className="text-2xl font-semibold text-teal-300 mb-4">
            Quantum Cryptography Engineer
          </h2>
          <p className="text-zinc-300 mb-4">
            Design and implement cutting-edge quantum-resistant cryptographic solutions.
            Work on securing global data transfers and protecting against future
            quantum threats.
          </p>
          <ul className="list-disc list-inside text-zinc-400">
            <li>Expertise in Post-Quantum Cryptography (PQC) algorithms.</li>
            <li>Experience with quantum key distribution (QKD) systems.</li>
            <li>Proficiency in C++, Rust, or similar high-performance languages.</li>
          </ul>
        </div>

        {/* Role 2: AI Ethics and Governance Specialist */}
        <div className="bg-zinc-800 p-8 rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300">
          <h2 className="text-2xl font-semibold text-teal-300 mb-4">
            AI Ethics and Governance Specialist
          </h2>
          <p className="text-zinc-300 mb-4">
            Ensure our AI systems are developed and deployed responsibly,
            adhering to the highest ethical standards. Shape policies for
            fairness, transparency, and accountability in AI.
          </p>
          <ul className="list-disc list-inside text-zinc-400">
            <li>Background in AI ethics, philosophy, or law.</li>
            <li>Understanding of AI/ML models and their societal impact.</li>
            <li>Strong communication and policy-making skills.</li>
          </ul>
        </div>

        {/* Role 3: Fusion Energy Systems Architect */}
        <div className="bg-zinc-800 p-8 rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300">
          <h2 className="text-2xl font-semibold text-teal-300 mb-4">
            Fusion Energy Systems Architect
          </h2>
          <p className="text-zinc-300 mb-4">
            Innovate and integrate fusion power solutions into our data centers.
            Drive the development of sustainable, net-positive energy infrastructure.
          </p>
          <ul className="list-disc list-inside text-zinc-400">
            <li>Expertise in fusion power, plasma physics, or advanced energy systems.</li>
            <li>Experience with large-scale energy infrastructure design.</li>
            <li>Commitment to environmental sustainability.</li>
          </ul>
        </div>

        {/* Role 4: Decentralized Network Protocol Developer */}
        <div className="bg-zinc-800 p-8 rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300">
          <h2 className="text-2xl font-semibold text-teal-300 mb-4">
            Decentralized Network Protocol Developer
          </h2>
          <p className="text-zinc-300 mb-4">
            Develop and optimize protocols for our global, decentralized
            IT infrastructure. Focus on resilience, speed, and security across
            diverse network topologies.
          </p>
          <ul className="list-disc list-inside text-zinc-400">
            <li>Strong background in distributed systems and networking.</li>
            <li>Proficiency in Go, Rust, or other systems programming languages.</li>
            <li>Experience with blockchain or DLT technologies is a plus.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
