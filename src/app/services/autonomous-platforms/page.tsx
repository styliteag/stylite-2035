// src/app/services/autonomous-platforms/page.tsx
export default function AutonomousPlatformsPage() {
    return (
      <div className="container mx-auto px-6 py-24 sm:py-32 lg:px-8">
        <h1 className="text-4xl font-bold tracking-tight text-teal-400 sm:text-5xl mb-12">
          Autonomous Platform Service
        </h1>
  
        <div className="prose prose-invert lg:prose-xl max-w-none text-zinc-300">
          <p>
            The complexity of modern IT infrastructure has surpassed human capacity for efficient management. Stylite&apos;s Autonomous Platform Service is the answer. We provide self-managing, self-healing, and self-optimizing platforms that run your applications with unparalleled reliability and efficiency, freeing your team to focus on innovation.
          </p>
  
          <h2 className="text-teal-300">The Power of AIOps</h2>
          <p>
            Our platforms are governed by a sophisticated AIOps (AI for IT Operations) engine. This AI constantly monitors the health of your applications and infrastructure, predicts potential issues, and automatically takes corrective action before they can impact your services. From scaling resources to meet demand to rerouting traffic around network congestion, the platform handles it all.
          </p>
  
          <h2 className="text-teal-300">Zero-Touch Management</h2>
          <p>
            Imagine deploying a complex application with a single command and having the platform handle everything else. That&apos;s the reality of our Autonomous Platform Service. We provide a zero-touch environment where updates, security patches, and backups are all managed by the platform, ensuring your applications are always up-to-date and secure.
          </p>
  
          <h2 className="text-teal-300">Key Benefits</h2>
          <ul>
            <li><strong>Predictive Maintenance:</strong> The platform identifies and resolves potential hardware and software failures before they happen.</li>
            <li><strong>Dynamic Resource Optimization:</strong> AI-driven resource allocation ensures you only pay for the compute power you need.</li>
            <li><strong>Automated Security & Compliance:</strong> The platform continuously scans for vulnerabilities and ensures your applications meet regulatory requirements.</li>
            <li><strong>Multi-Cloud & Edge Ready:</strong> Deploy your applications seamlessly across multiple cloud providers and edge locations.</li>
          </ul>
        </div>
      </div>
    );
  }
  