// src/app/services/ai-operations/page.tsx
export default function AiOperationsPage() {
    return (
      <div className="container mx-auto px-6 py-24 sm:py-32 lg:px-8">
        <h1 className="text-4xl font-bold tracking-tight text-teal-400 sm:text-5xl mb-12">
          AI-Driven Operations (AIOps)
        </h1>
  
        <div className="prose prose-invert lg:prose-xl max-w-none text-zinc-300">
          <p>
            Entrust the management of your IT infrastructure to our advanced AIOps engine. Our AI-Driven Operations service takes the human guesswork out of IT management, resulting in a system that is more reliable, more secure, and more efficient than ever before.
          </p>
  
          <h2 className="text-teal-300">The End of Manual IT Management</h2>
          <p>
            Our AIOps platform continuously monitors every aspect of your infrastructure, from individual servers to the entire network. It learns the normal operating parameters of your system and can instantly detect any deviations. When a problem is detected, the AI can either take corrective action automatically or provide your team with a detailed analysis and recommended solution.
          </p>
  
          <h2 className="text-teal-300">From Reactive to Predictive</h2>
          <p>
            Traditional IT management is reactive; you wait for something to break, and then you fix it. AIOps is predictive. By analyzing subtle trends and patterns, our AI can predict future failures and address them before they can impact your services. This results in dramatically improved uptime and reliability.
          </p>
  
          <h2 className="text-teal-300">A Partnership Between Human and Machine</h2>
          <ul>
            <li><strong>24/7/365 Monitoring:</strong> The AI never sleeps, providing constant vigilance over your systems.</li>
            <li><strong>Root Cause Analysis:</strong> When problems occur, the AI provides a deep analysis of the root cause, not just the symptoms.</li>
            <li><strong>Capacity Planning:</strong> The AI can predict your future capacity needs based on growth trends.</li>
            <li><strong>Actionable Insights:</strong> We provide your team with clear, data-driven insights to improve your infrastructure.</li>
          </ul>
        </div>
      </div>
    );
  }
  