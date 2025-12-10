// src/app/security/sentinel-soc/page.tsx
export default function SentinelSocPage() {
    return (
      <div className="container mx-auto px-6 py-24 sm:py-32 lg:px-8">
        <h1 className="text-4xl font-bold tracking-tight text-teal-400 sm:text-5xl mb-12">
          Sentinel SOC: AI-Powered Security Operations
        </h1>
  
        <div className="prose prose-invert lg:prose-xl max-w-none text-zinc-300">
          <p>
            The Sentinel Security Operations Center (SOC) is the vigilant, AI-powered guardian of your digital infrastructure. It operates 24/7/365, actively hunting for threats, analyzing vulnerabilities, and providing a rapid, intelligent response to any security incident.
          </p>
  
          <h2 className="text-teal-300">Proactive Threat Hunting</h2>
          <p>
            Our Sentinel AI doesn&apos;t wait for alarms to ring. It continuously scours your network for signs of compromise, using behavioral analysis and advanced heuristics to identify threats that would be invisible to traditional security tools. It hunts for the unknown, not just the known.
          </p>
  
          <h2 className="text-teal-300">Automated Incident Response</h2>
          <p>
            When a credible threat is identified, the Sentinel SOC can initiate an automated response in milliseconds. This can include isolating affected systems from the network, deploying countermeasures, and collecting forensic data for analysis. This speed and automation are critical to containing a breach before it can spread.
          </p>
  
          <h2 className="text-teal-300">A Symbiotic Relationship with our Quantum Firewall</h2>
          <ul>
            <li><strong>Global Threat Intelligence:</strong> The SOC is connected to a global network, receiving real-time updates on new threats and attack vectors.</li>
            <li><strong>Real-Time Correlation:</strong> The AI correlates data from across your entire infrastructure to identify complex, multi-stage attacks.</li>
            <li><strong>Vulnerability Assessment:</strong> The SOC continuously scans your systems for vulnerabilities and provides actionable recommendations for remediation.</li>
            <li><strong>Expert Human Oversight:</strong> Our team of elite security analysts works with the AI, investigating the most complex threats and constantly improving the system&apos;s capabilities.</li>
          </ul>
        </div>
      </div>
    );
  }
  