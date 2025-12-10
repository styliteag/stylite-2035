// src/app/services/faq/page.tsx
export default function FaqPage() {
    return (
      <div className="container mx-auto px-6 py-24 sm:py-32 lg:px-8">
        <h1 className="text-4xl font-bold tracking-tight text-teal-400 sm:text-5xl mb-12">
          Future-Proofing FAQ
        </h1>
  
        <div className="space-y-8">
          <div>
            <h2 className="text-2xl font-semibold text-teal-300">What is Post-Quantum Cryptography (PQC)?</h2>
            <p className="text-zinc-300 mt-2">
              Post-Quantum Cryptography refers to cryptographic algorithms that are thought to be secure against an attack by a quantum computer. As quantum computers become more powerful, they will be able to break many of the encryption methods we use today. PQC is essential for long-term data security.
            </p>
          </div>
  
          <div>
            <h2 className="text-2xl font-semibold text-teal-300">What is a Sovereign Cloud?</h2>
            <p className="text-zinc-300 mt-2">
              A Sovereign Cloud is a cloud computing environment that is hosted within a specific country&apos;s borders and is subject to that country&apos;s laws and regulations. It gives you complete control over your data, ensuring it is not subject to foreign laws or access requests.
            </p>
          </div>
  
          <div>
            <h2 className="text-2xl font-semibold text-teal-300">How does AI-Driven Operations (AIOps) work?</h2>
            <p className="text-zinc-300 mt-2">
              AIOps uses artificial intelligence and machine learning to automate IT operations. It collects vast amounts of data from your IT systems, analyzes it to find patterns and predict problems, and can even take corrective actions automatically. It helps to improve reliability and efficiency while reducing the workload on your IT team.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-teal-300">What is Decentralized Autonomous Continuity (DAC)?</h2>
            <p className="text-zinc-300 mt-2">
            DAC is our next-generation approach to business continuity. Instead of just recovering from disasters, it uses AI to predict them and pre-emptively move your applications and data to safe locations within our global decentralized network. This provides a level of resilience that traditional backup and disaster recovery cannot match.
            </p>
          </div>
        </div>
      </div>
    );
  }
  