// src/components/Header.tsx
import Link from 'next/link';
import Dropdown from './Dropdown';

const quantumStorageItems = [
  { href: '/products/q-nas', title: 'Q-NAS Systems', description: 'Quantum-Network Attached Storage for the new era.' },
  { href: '/products/singularity-series', title: 'Singularity Series', description: 'Top-tier performance for AI and complex computations.' },
  { href: '/products/entanglement-series', title: 'Entanglement Series', description: 'Hyper-redundant, distributed storage solutions.' },
  { href: '/products/community-editions', title: 'Community Editions', description: 'Open-source, community-driven quantum storage.' },
];

const sovereignCloudItems = [
  { href: '/products/neural-nextcloud', title: 'Neural-Nextcloud', description: 'AI-enhanced, secure file sharing and collaboration.' },
  { href: '/products/holo-bigbluebutton', title: 'Holo-BigBlueButton', description: 'Immersive holographic video conferencing.' },
  { href: '/products/sentient-mattermost', title: 'Sentient-Mattermost', description: 'AI-driven team communication and workflow automation.' },
  { href: '/products/agile-openproject', title: 'Agile-OpenProject', description: 'Predictive project management for complex missions.' },
];

const partnershipItems = [
  { href: '/services/project-support', title: 'Strategic Project Guidance', description: 'Expert support for your most ambitious tech initiatives.' },
  { href: '/services/autonomous-platforms', title: 'Autonomous Platform Service', description: 'Self-managing platforms that scale and heal on their own.' },
  { href: '/services/ai-operations', title: 'AI-Driven Operations (AIOps)', description: 'Let our AI manage your infrastructure with hyper-efficiency.' },
  { href: '/services/faq', title: 'Future-Proofing FAQ', description: 'Answers to your questions about tomorrow\'s technology.' },
];

const securityItems = [
    { href: '/security/quantum-firewall', title: 'Quantum Firewall', description: 'Next-gen threat prevention for the quantum age.' },
    { href: '/security/sentinel-soc', title: 'Sentinel SOC', description: 'AI-powered Security Operations Center.' },
];

const infocenterItems = [
    { href: '/about', title: 'About Us', description: 'Our journey to 2035 and beyond.' },
    { href: '/careers', title: 'Careers', description: 'Join the architects of the future.' },
    { href: '/blog', title: 'Blog', description: 'Insights from the digital frontier.' },
    { href: '/downloads', title: 'Downloads', description: 'Whitepapers, specs, and more.' },
];


export default function Header() {
  return (
    <header className="bg-zinc-900 text-zinc-50 p-6 shadow-lg fixed w-full z-10 top-0">
      <nav className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-teal-400 hover:text-teal-300 transition-colors">
          Stylite 2035
        </Link>
        <ul className="hidden lg:flex items-center space-x-6">
            <li><Dropdown title="Quantum Storage" items={quantumStorageItems} /></li>
            <li><Dropdown title="Sovereign Cloud" items={sovereignCloudItems} /></li>
            <li><Dropdown title="Strategic Partnership" items={partnershipItems} /></li>
            <li><Dropdown title="IT Security" items={securityItems} /></li>
            <li><Link href="/continuity" className="hover:text-teal-400 transition-colors">Continuity</Link></li>
            <li><Dropdown title="Infocenter" items={infocenterItems} /></li>
        </ul>
      </nav>
    </header>
  );
}