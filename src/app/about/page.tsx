// src/app/about/page.tsx
export default function About() {
  return (
    <div className="container mx-auto px-6 py-24 sm:py-32 lg:px-8">
      <h1 className="text-4xl font-bold tracking-tight text-teal-400 sm:text-5xl mb-12">
        Our Journey to 2035: Pioneering the Digital Frontier
      </h1>

      <div className="space-y-12 text-zinc-300">
        <section>
          <h2 className="text-3xl font-semibold text-teal-300 mb-4">
            The Foundation (2025 - 2028): From Rhein-Main to Global Reach
          </h2>
          <p className="mb-4">
            Stylite AG began its transformation in 2025, building upon its strong foundation
            in IT infrastructure for the Rhein-Main-Neckar region. Recognizing the accelerating pace
            of digital evolution, we invested heavily in advanced R&D, particularly in
            decentralized cloud architectures and early-stage AI integration for network optimization.
            Our commitment to open-source technologies deepened, fostering a collaborative ecosystem
            that would soon propel us onto the international stage.
          </p>
          <p>
            Key milestones included the launch of our first AI-assisted network management solutions
            and the establishment of secure, high-performance hybrid cloud offerings that
            served as a bridge for enterprises navigating complex digital transitions.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-semibold text-teal-300 mb-4">
            Exponential Growth (2029 - 2032): Quantum Leaps and Ethical AI
          </h2>
          <p className="mb-4">
            The turn of the decade marked a period of exponential growth for Stylite. As quantum
            computing threats emerged, we pioneered quantum-secured communication protocols and
            developed our first Quantum-Secure Data Hubs, setting a new industry standard for
            data protection. Our AI initiatives matured into the Neural-Net Orchestration Platform,
            an autonomous system capable of managing vast, complex global infrastructures with
            unprecedented efficiency and resilience.
          </p>
          <p>
            Crucially, we integrated ethical AI principles into every layer of our technology stack,
            ensuring transparency, fairness, and accountability. Stylite became a trusted advisor
            for governments and multinational corporations seeking to build responsible and
            robust digital ecosystems.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-semibold text-teal-300 mb-4">
            Stylite 2035: The Future, Today
          </h2>
          <p className="mb-4">
            Today, in 2035, Stylite is a global leader in hyper-converged, sustainable, and
            intelligent IT infrastructure. Our Eco-Harmonic Compute Clusters, powered by
            fusion technology and advanced renewables, deliver net-positive environmental
            impact while providing immense computational power. We operate a decentralized,
            self-healing global network that supports everything from interplanetary data transfers
            to localized smart city grids.
          </p>
          <p>
            Our team, now comprising AI Ethicists, Quantum Cryptographers, and
            Bio-Integrated Systems Architects, continues to push the boundaries of what's possible.
            Stylite is not just building infrastructure; we are shaping the digital future,
            ensuring it is secure, efficient, and sustainable for generations to come.
          </p>
        </section>
      </div>
    </div>
  );
}
