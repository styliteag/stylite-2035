// src/app/products/singularity-series/page.tsx
export default function SingularitySeriesPage() {
    return (
      <div className="container mx-auto px-6 py-24 sm:py-32 lg:px-8">
        <h1 className="text-4xl font-bold tracking-tight text-teal-400 sm:text-5xl mb-12">
          Q-NAS: Singularity Series
        </h1>
  
        <div className="prose prose-invert lg:prose-xl max-w-none text-zinc-300">
          <p>
            The Singularity Series is the apex of our Q-NAS lineup, engineered for the most demanding computational and data-intensive tasks. It is the preferred solution for AI research institutions, financial modeling firms, and organizations working with complex simulations that require instantaneous data access and processing.
          </p>
  
          <h2 className="text-teal-300">Unmatched Performance</h2>
          <p>
            Leveraging a dedicated optical co-processor and a direct, low-latency connection to our AI-optimization engine, the Singularity Series offers I/O speeds that are orders of magnitude faster than traditional storage. This allows you to feed data to your processing units without any bottlenecks, maximizing the efficiency of your operations.
          </p>
  
          <h2 className="text-teal-300">Designed for AI and Beyond</h2>
          <p>
            The Singularity Series was co-designed with leading AI developers to meet the unique demands of training large language models and other advanced AI systems. Its architecture is optimized for the massive, parallel data streams required by these applications, reducing training times and accelerating innovation.
          </p>
  
          <h2 className="text-teal-300">Specifications</h2>
          <ul>
            <li><strong>I/O Subsystem:</strong> Direct optical link with predictive data streaming.</li>
            <li><strong>Co-Processor:</strong> Dedicated AI co-processor for real-time I/O optimization.</li>
            <li><strong>Use Cases:</strong> Large-scale AI training, high-frequency trading, quantum computing simulations, real-time genomic sequencing.</li>
            <li><strong>Security:</strong> Full PQC encryption and immutable ledgering.</li>
          </ul>
        </div>
      </div>
    );
  }
  