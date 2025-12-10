// src/app/products/community-editions/page.tsx
export default function CommunityEditionsPage() {
    return (
      <div className="container mx-auto px-6 py-24 sm:py-32 lg:px-8">
        <h1 className="text-4xl font-bold tracking-tight text-teal-400 sm:text-5xl mb-12">
          Q-NAS: Community Editions
        </h1>
  
        <div className="prose prose-invert lg:prose-xl max-w-none text-zinc-300">
          <p>
            At Stylite, we believe in the power of open source. The Community Editions of our Q-NAS software embody our commitment to collaboration and innovation. We provide the core of our revolutionary storage technology to the community to build upon, adapt, and improve.
          </p>
  
          <h2 className="text-teal-300">Open-Source Quantum Storage</h2>
          <p>
            The Community Edition is a free, open-source version of our Q-NAS operating system. It includes our foundational ZFS-based data management and the core components of our PQC encryption suite. It’s the perfect platform for developers, researchers, and enthusiasts who want to experiment with next-generation storage technology.
          </p>
  
          <h2 className="text-teal-300">A Thriving Ecosystem</h2>
          <p>
            When you use the Community Edition, you join a vibrant ecosystem of developers and users from around the world. Share your projects, get support, and contribute to the future of quantum-resistant storage. Stylite actively participates in the community, and many innovations from the community find their way into our enterprise products.
          </p>
  
          <h2 className="text-teal-300">Get Involved</h2>
          <ul>
            <li><strong>Free to Download:</strong> Get the latest version from our public GitHub repository.</li>
            <li><strong>Community Support:</strong> Join our forums and chat channels to connect with other users.</li>
            <li><strong>Contribute:</strong> We welcome contributions, from documentation to code.</li>
            <li><strong>Commercial Licensing:</strong> For enterprise use with professional support, please see our enterprise Q-NAS offerings.</li>
          </ul>
        </div>
      </div>
    );
  }
  