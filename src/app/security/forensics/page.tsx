// src/app/security/forensics/page.tsx
export default function ForensicsPage() {
    return (
      <div className="container mx-auto px-6 py-24 sm:py-32 lg:px-8">
        <h1 className="text-4xl font-bold tracking-tight text-teal-400 sm:text-5xl mb-12">
          Digital Forensics & Crisis Mitigation
        </h1>
  
        <div className="prose prose-invert lg:prose-xl max-w-none text-zinc-300">
          <p>
            In the unfortunate event of a security breach, a rapid and effective response is critical. Our Digital Forensics and Crisis Mitigation service helps you understand what happened, contain the damage, and recover as quickly as possible, all while preserving crucial evidence for any subsequent investigation.
          </p>
  
          <h2 className="text-teal-300">Rapid System Virtualization for Evidence Preservation</h2>
          <p>
            Our first priority is to preserve the state of the compromised systems for forensic analysis. We use rapid virtualization technology to take a complete, bit-for-bit snapshot of the affected systems. This allows us to conduct a thorough investigation on a copy of the data, while the original evidence remains untouched and admissible in legal proceedings.
          </p>
  
          <h2 className="text-teal-300">Advanced Threat Analysis</h2>
          <p>
            Our team of forensic experts uses a combination of AI-powered tools and deep manual analysis to reconstruct the attack timeline. We identify the attacker&apos;s methods, determine the extent of the breach, and provide a detailed report of our findings.
          </p>
  
          <h2 className="text-teal-300">Our Crisis Mitigation Process</h2>
          <ul>
            <li><strong>Containment:</strong> We immediately work to isolate the affected systems and prevent the breach from spreading.</li>
            <li><strong>Preservation:</strong> We capture a forensically sound image of the compromised systems.</li>
            <li><strong>Investigation:</strong> Our experts analyze the evidence to understand the full scope of the attack.</li>
            <li><strong>Eradication:</strong> We ensure the attacker is completely removed from your environment.</li>
            <li><strong>Recovery:</strong> We help you safely restore your systems and data.</li>
            <li><strong>Post-Mortem:</strong> We provide a detailed report and recommendations to prevent similar incidents in the future.</li>
          </ul>
        </div>
      </div>
    );
  }
  