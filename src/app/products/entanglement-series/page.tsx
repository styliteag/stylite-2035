// src/app/products/entanglement-series/page.tsx
export default function EntanglementSeriesPage() {
    return (
      <div className="container mx-auto px-6 py-24 sm:py-32 lg:px-8">
        <h1 className="text-4xl font-bold tracking-tight text-teal-400 sm:text-5xl mb-12">
          Q-NAS: Entanglement Series
        </h1>
  
        <div className="prose prose-invert lg:prose-xl max-w-none text-zinc-300">
          <p>
            The Entanglement Series redefines data resilience and availability. Designed for global organizations, critical infrastructure, and long-term archival, this series ensures your data is always accessible and protected, no matter what happens.
          </p>
  
          <h2 className="text-teal-300">Geo-Entangled Redundancy</h2>
          <p>
            Using a proprietary protocol inspired by quantum entanglement, this series links multiple storage nodes across the globe into a single, cohesive unit. Your data is not just backed up; it is simultaneously present in multiple locations, offering instantaneous failover and unparalleled disaster resistance. An outage in one hemisphere will not affect your data&apos;s availability.
          </p>
  
          <h2 className="text-teal-300">Built for Eternity</h2>
          <p>
            The Entanglement Series is engineered for the long-term preservation of critical data. It combines PQC encryption with our immutable ledger system to create a "write-once, read-forever" environment, perfect for legal archives, cultural heritage data, and scientific research.
          </p>
  
          <h2 className="text-teal-300">Specifications</h2>
          <ul>
            <li><strong>Redundancy:</strong> Geo-entangled, multi-node data distribution.</li>
            <li><strong>Failover:</strong> Instantaneous, automatic failover with zero data loss.</li>
            <li><strong>Use Cases:</strong> Global enterprises, national archives, critical infrastructure management, long-term scientific data storage.</li>
            <li><strong>Compliance:</strong> Meets and exceeds all known data residency and preservation regulations.</li>
          </ul>
        </div>
      </div>
    );
  }
  