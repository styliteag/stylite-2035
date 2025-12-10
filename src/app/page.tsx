// src/app/page.tsx
import Image from "next/image";
import Link from 'next/link';
import { ArrowRightIcon } from '@heroicons/react/24/solid';

const services = [
  {
    id: '01',
    title: 'Autonomous Operating Platforms',
    description: 'Self-healing platforms for your business-critical systems, both on-premise and in our quantum-secured data centers. Featuring AIOps, ZFS-based quantum storage, and predictive data recovery.',
    href: '/services/autonomous-platforms',
  },
  {
    id: '02',
    title: 'Strategic Tech-Coordination',
    description: 'Guiding your enterprise through system upgrades, interplanetary network expansions, and AI-driven operational shifts. We handle everything from concept to execution.',
    href: '/services/project-support',
  },
  {
    id: '03',
    title: 'Digital Forensics & Crisis Mitigation',
    description: 'In the face of quantum threats, we provide rapid system virtualization for evidence preservation and deploy advanced countermeasures to neutralize hostile actors.',
    href: '/security/forensics',
  },
  {
    id: '04',
    title: 'Quantum Network & Firewalling',
    description: 'Secure your entire digital ecosystem, from local networks to global satellite links, with our quantum-resistant firewalls and proactive threat-hunting AI.',
    href: '/security/quantum-firewall',
  },
  {
    id: '05',
    title: 'Sovereign Communication Suite',
    description: 'Post-GDPR compliant and fully open-source: holographic conferencing, neural-chat, decentralized file sharing, and more, all within your sovereign cloud.',
    href: '/products/sovereign-cloud',
  },
  {
    id: '06',
    title: 'Predictive Security & Monitoring',
    description: 'Our Sentinel SOC continuously monitors your infrastructure, predicting and neutralizing threats before they materialize. We also offer advanced security seminars.',
    href: '/security/sentinel-soc',
  },
];

export default function Home() {
  return (
    <div className="bg-zinc-950 text-zinc-50">
      {/* Hero Section */}
      <div className="relative isolate overflow-hidden min-h-screen flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/stylite-bg.svg"
            alt="Futuristic background"
            layout="fill"
            objectFit="cover"
            quality={100}
            className="opacity-20"
          />
        </div>
        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <h1 className="text-5xl font-bold tracking-tight text-teal-400 sm:text-7xl">
            Building the Digital Future. Today.
          </h1>
          <p className="mt-6 text-xl leading-8 text-zinc-300">
            Stylite 2035 is your partner in engineering the next generation of secure, intelligent, and sustainable digital infrastructure.
          </p>
        </div>
      </div>

      {/* Services Section */}
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-teal-400">Everything at a Glance</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Our Visionary Services for 2035
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              {services.map((service) => (
                <div key={service.id} className="flex flex-col">
                  <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-white">
                    <span className="text-teal-400 text-2xl">{service.id}</span>
                    {service.title}
                  </dt>
                  <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-zinc-400">
                    <p className="flex-auto">{service.description}</p>
                    <p className="mt-6">
                      <Link href={service.href} className="text-sm font-semibold leading-6 text-teal-400 hover:text-teal-300 flex items-center gap-x-1">
                        Learn more <ArrowRightIcon className="h-4 w-4" />
                      </Link>
                    </p>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>

      {/* Self-Conception Section */}
      <div className="bg-zinc-900 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div>
              <h2 className="text-base font-semibold leading-7 text-teal-400">Our Self-Conception</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">System Design, Software Integration, and AI-Driven Operations from a Single Source.</p>
              <p className="mt-6 text-lg leading-8 text-zinc-300">
                We specialize in the design, implementation, and autonomous operation of advanced IT infrastructures—from on-premise quantum clusters to decentralized cloud architectures. We provide enterprise-grade quantum storage, hyper-efficient virtualization, AI-driven network management, and proactive threat neutralization for the business-critical applications of forward-thinking enterprises, social institutions, and interplanetary agencies.
              </p>
            </div>
            <div className="text-zinc-400 space-y-4">
              <p>As pioneers in strategic technology partnerships with a focus on the Earth-Mars communication channel, we champion technological sovereignty and long-term, sustainable relationships. We believe in demystifying complex concepts, especially in quantum security and AI ethics.</p>
              <p>We guide leadership teams, coordinate complex multi-planetary projects, and develop concepts around sustainable IT operations, technology selection, security, and inter-system compliance.</p>
              <p>For partners requiring partial or complete outsourcing of their technology stack, we operate sovereign cloud platforms and AI-driven systems both locally and in our globally distributed data center network.</p>
            </div>
          </div>
        </div>
      </div>

      {/* CEO Section */}
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-teal-400">Our Leadership</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              The Visionaries Behind Stylite 2035
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-lg grid-cols-1 gap-x-8 gap-y-16 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div className="flex flex-col items-center">
              {/* Placeholder for CEO image */}
              <div className="h-48 w-48 bg-zinc-800 rounded-full mb-4"></div>
              <h3 className="text-xl font-semibold text-white">Wim Bonis</h3>
              <p className="text-teal-400">Chief Technology Officer</p>
              <p className="mt-2 text-center text-zinc-400">With over 40 years of IT experience, Wim is a luminary in operating mission-critical applications. His expertise in quantum infrastructure and AI-driven systems has shaped the industry.</p>
            </div>
            <div className="flex flex-col items-center">
              {/* Placeholder for CEO image */}
              <div className="h-48 w-48 bg-zinc-800 rounded-full mb-4"></div>
              <h3 className="text-xl font-semibold text-white">Andre Keller</h3>
              <p className="text-teal-400">Chief Executive Officer</p>
              <p className="mt-2 text-center text-zinc-400">For over three decades, André has been the trusted technology partner for social and medical institutions, enterprises, and associations, guiding them through profound digital transformations.</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
