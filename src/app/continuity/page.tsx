// src/app/continuity/page.tsx
export default function ContinuityPage() {
    return (
      <div className="container mx-auto px-6 py-24 sm:py-32 lg:px-8">
        <h1 className="text-4xl font-bold tracking-tight text-teal-400 sm:text-5xl mb-12">
          Decentralized Autonomous Continuity (DAC)
        </h1>
  
        <div className="prose prose-invert lg:prose-xl max-w-none text-zinc-300">
          <p>
            In a world of unpredictable threats—from natural disasters to sophisticated cyberattacks—traditional business continuity and disaster recovery plans are no longer sufficient. Stylite&apos;s Decentralized Autonomous Continuity (DAC) is a revolutionary approach that ensures your operations continue uninterrupted, no matter what.
          </p>
  
          <h2 className="text-teal-300">Beyond Recovery to Pre-emptive Resilience</h2>
          <p>
            DAC doesn&apos;t just help you recover from a disaster; it prevents the disaster from impacting your business in the first place. Our AI-driven platform continuously monitors for potential disruptions and pre-emptively shifts your workloads to unaffected regions in our decentralized global network. Your customers will never know there was a problem.
          </p>
  
          <h2 className="text-teal-300">A Self-Healing Global Network</h2>
          <p>
            Our DAC service is built on a globally distributed network of data centers, all connected by a high-speed, quantum-secured backbone. If one data center goes offline, the network automatically reroutes traffic and spins up new instances of your applications in other locations. The result is a self-healing infrastructure that is resilient by design.
          </p>
  
          <h2 className="text-teal-300">Key Elements of DAC</h2>
          <ul>
            <li><strong>AI-Powered Threat Prediction:</strong> The system predicts potential disruptions, from geopolitical events to hardware failures.</li>
            <li><strong>Automated Workload Migration:</strong> Applications and data are automatically moved to safe locations before a disaster strikes.</li>
            <li><strong>Geo-Distributed Data Vaults:</strong> Your critical data is stored in multiple, geographically isolated locations.</li>
            <li><strong>Real-Time Replication:</strong> Continuous data replication ensures that you never lose a single transaction.</li>
            <li><strong>Regular, Automated Drills:</strong> The system constantly runs drills to ensure it is ready for any scenario.</li>
          </ul>
        </div>
      </div>
    );
  }
  