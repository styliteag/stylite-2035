// src/app/products/page.tsx
export default function Products() {
  return (
    <div className="container mx-auto px-6 py-24 sm:py-32 lg:px-8">
      <h1 className="text-4xl font-bold tracking-tight text-teal-400 sm:text-5xl mb-12">
        Our Visionary Solutions for 2035
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {/* Product 1: Quantum-Secure Data Hubs */}
        <div className="bg-zinc-800 p-8 rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300">
          <h2 className="text-2xl font-semibold text-teal-300 mb-4">
            Quantum-Secure Data Hubs
          </h2>
          <p className="text-zinc-300 mb-4">
            Safeguard your most critical data with our next-generation quantum-resistant encryption.
            Stylite's Data Hubs provide immutable storage and real-time threat neutralization,
            ensuring your digital assets are impenetrable in the post-quantum computing era.
          </p>
          <ul className="list-disc list-inside text-zinc-400">
            <li>Post-Quantum Cryptography (PQC) Integration</li>
            <li>Immutable Ledger Storage</li>
            <li>AI-Powered Anomaly Detection</li>
            <li>Global Geo-Redundant Architecture</li>
          </ul>
        </div>

        {/* Product 2: Neural-Net Orchestration Platform */}
        <div className="bg-zinc-800 p-8 rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300">
          <h2 className="text-2xl font-semibold text-teal-300 mb-4">
            Neural-Net Orchestration Platform
          </h2>
          <p className="text-zinc-300 mb-4">
            Experience true infrastructure autonomy. Our Neural-Net Orchestration Platform
            learns, adapts, and optimizes your entire IT landscape in real-time.
            Predictive maintenance, self-healing networks, and dynamic resource allocation,
            all managed by a sentient AI.
          </p>
          <ul className="list-disc list-inside text-zinc-400">
            <li>Self-Optimizing Resource Management</li>
            <li>Predictive Failure Prevention</li>
            <li>Zero-Touch Deployment & Scaling</li>
            <li>Multi-Cloud & Edge Integration</li>
          </ul>
        </div>

        {/* Product 3: Eco-Harmonic Compute Clusters */}
        <div className="bg-zinc-800 p-8 rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300">
          <h2 className="text-2xl font-semibold text-teal-300 mb-4">
            Eco-Harmonic Compute Clusters
          </h2>
          <p className="text-zinc-300 mb-4">
            Sustainable computing without compromise. Our Eco-Harmonic Clusters harness
            fusion and advanced renewable energy sources to deliver unparalleled compute
            power with a net-positive environmental impact.
            Your operations thrive, and the planet benefits.
          </p>
          <ul className="list-disc list-inside text-zinc-400">
            <li>Fusion & Renewable Energy Integration</li>
            <li>Carbon-Negative Cooling Systems</li>
            <li>Waste Heat Recycling</li>
            <li>Modular & Scalable Design</li>
          </ul>
        </div>

        {/* Product 4: Hyper-Personalized AI Services */}
        <div className="bg-zinc-800 p-8 rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300">
          <h2 className="text-2xl font-semibold text-teal-300 mb-4">
            Hyper-Personalized AI Services
          </h2>
          <p className="text-zinc-300 mb-4">
            Transform your business with AI tailored to your unique needs. From bespoke
            predictive analytics to intelligent automation agents, our AI services
            integrate seamlessly, learning and growing with your enterprise.
          </p>
          <ul className="list-disc list-inside text-zinc-400">
            <li>Custom AI Model Development</li>
            <li>Real-time Data Synthesis & Insights</li>
            <li>Autonomous Business Process Automation</li>
            <li>Ethical AI Governance & Compliance</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
