// src/app/products/neural-nextcloud/page.tsx
export default function NeuralNextcloudPage() {
    return (
      <div className="container mx-auto px-6 py-24 sm:py-32 lg:px-8">
        <h1 className="text-4xl font-bold tracking-tight text-teal-400 sm:text-5xl mb-12">
          Sovereign Cloud: Neural-Nextcloud
        </h1>
  
        <div className="prose prose-invert lg:prose-xl max-w-none text-zinc-300">
          <p>
            Neural-Nextcloud is the evolution of file sharing and collaboration. Hosted in your own sovereign cloud environment, it combines the flexibility and open-source ethos of Nextcloud with powerful AI enhancements to create a truly intelligent and secure collaboration platform.
          </p>
  
          <h2 className="text-teal-300">AI-Powered Organization</h2>
          <p>
            Say goodbye to messy folders and lost files. Neural-Nextcloud&apos;s integrated AI automatically tags, categorizes, and organizes your files based on their content and context. Its semantic search capabilities allow you to find any file, even if you don&apos;t remember its name or location.
          </p>
  
          <h2 className="text-teal-300">Proactive Security</h2>
          <p>
            Our AI engine continuously monitors for anomalous activity, such as unusual download patterns or unauthorized access attempts. It can automatically lock down compromised accounts and alert security personnel, providing an active defense for your data.
          </p>
  
          <h2 className="text-teal-300">Key Features</h2>
          <ul>
            <li><strong>Intelligent Search:</strong> Find files based on their meaning and content, not just keywords.</li>
            <li><strong>Automated Tagging & Sorting:</strong> AI-driven organization keeps your files neat and tidy.</li>
            <li><strong>Real-time Threat Detection:</strong> Proactive security that identifies and neutralizes threats.</li>
            <li><strong>Sovereign Hosting:</strong> Your data remains under your control, in your chosen jurisdiction.</li>
            <li><strong>Familiar Interface:</strong> All the features you love from Nextcloud, enhanced with AI.</li>
          </ul>
        </div>
      </div>
    );
  }
  