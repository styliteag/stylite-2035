// src/app/products/q-nas/page.tsx
export default function QNasPage() {
    return (
      <div className="container mx-auto px-6 py-24 sm:py-32 lg:px-8">
        <h1 className="text-4xl font-bold tracking-tight text-teal-400 sm:text-5xl mb-12">
          Q-NAS Systems: Quantum-Network Attached Storage
        </h1>
  
        <div className="prose prose-invert lg:prose-xl max-w-none text-zinc-300">
          <p>
            In an era where data is the most valuable asset and quantum computers threaten traditional encryption, Q-NAS represents the next evolutionary step in data storage. Stylite&apos;s Quantum-Network Attached Storage systems are engineered to provide uncompromising security, performance, and resilience for the post-quantum world.
          </p>
  
          <h2 className="text-teal-300">Unbreakable Security with Post-Quantum Cryptography</h2>
          <p>
            At the core of every Q-NAS system is a cryptographic engine built on lattice-based and hash-based algorithms, making it resistant to attacks from both classical and quantum computers. Your data is secure not just for today, but for the decades to come.
          </p>
  
          <h2 className="text-teal-300">AI-Optimized Performance</h2>
          <p>
            Our integrated AI processor continuously analyzes I/O patterns, predicts data access needs, and optimizes caching and data placement in real-time. This results in unprecedented speed and efficiency, whether you&apos;re running large-scale AI training models or accessing mission-critical databases.
          </p>
  
          <h2 className="text-teal-300">Features at a Glance</h2>
          <ul>
            <li><strong>Post-Quantum Cryptography (PQC):</strong> End-to-end encryption secured against future threats.</li>
            <li><strong>Immutable Data Ledger:</strong> ZFS-based immutable ledgering ensures data integrity and provides a complete audit trail.</li>
            <li><strong>AI-Powered Predictive Caching:</strong> Intelligent caching algorithms anticipate your data needs for faster access.</li>
            <li><strong>Decentralized Redundancy:</strong> Data is distributed and replicated across a decentralized network for ultimate resilience.</li>
            <li><strong>Energy-Efficient Operation:</strong> Powered by our Eco-Harmonic technology, Q-NAS systems have a minimal energy footprint.</li>
          </ul>
        </div>
      </div>
    );
  }
  