import Link from 'next/link';
import { notFound } from 'next/navigation';

const services: Record<string, {title: string; problem: string; solution: string; outcomes: string[]}> = {
  'workflow-automation': {
    title: 'Workflow Automation',
    problem: 'Teams lose hours on repetitive tasks and manual data entry.',
    solution: 'Automate routine processes so your team can focus on growth.',
    outcomes: ['Save 15-30 hours per week', 'Up to 95% error reduction'],
  },
  'ai-agents': {
    title: 'AI Agents',
    problem: 'Leads and customers wait for replies when your team is offline.',
    solution: 'Deploy always-on AI agents to handle requests instantly.',
    outcomes: ['24/7 availability', 'Instant response times'],
  },
  'chatbots': {
    title: 'Chatbots',
    problem: 'Visitors drop off without getting the answers they need.',
    solution: 'Engage users with conversational bots that guide and capture leads.',
    outcomes: ['Increase conversion rates', 'Reduce support workload'],
  },
  'ecommerce-automation': {
    title: 'Ecommerce Automation',
    problem: 'Manual store management limits growth and causes errors.',
    solution: 'Automate inventory, follow-ups and pricing for scalable sales.',
    outcomes: ['Up to 25% more sales', 'Lower operational costs'],
  },
};

export default function ServicePage({ params }: { params: { slug: string } }) {
  const service = services[params.slug];
  if (!service) return notFound();
  return (
    <section className="section-padding">
      <div className="container-custom space-y-8">
        <h1 className="text-4xl font-bold text-dark">{service.title}</h1>
        <div>
          <h2 className="text-xl font-semibold text-dark mb-2">Problem</h2>
          <p className="text-gray-700">{service.problem}</p>
        </div>
        <div>
          <h2 className="text-xl font-semibold text-dark mb-2">Solution</h2>
          <p className="text-gray-700">{service.solution}</p>
        </div>
        <div>
          <h2 className="text-xl font-semibold text-dark mb-2">Outcomes</h2>
          <ul className="list-disc pl-6 text-gray-700">
            {service.outcomes.map((o, i) => (
              <li key={i}>{o}</li>
            ))}
          </ul>
        </div>
        <Link href="https://calendar.app.google/uYHrdAiAqTZCC6qv9" target="_blank" className="btn-primary inline-block">
          Get Your Free Automation Assessment
        </Link>
      </div>
    </section>
  );
}
