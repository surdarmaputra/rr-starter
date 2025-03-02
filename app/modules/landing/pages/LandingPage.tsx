import {
  AlertCircle,
  CheckCircle2,
  ChevronRight,
  Globe2,
  MessageSquare,
  Users2,
} from 'lucide-react';
import { Link } from 'react-router';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '~/modules/core/components/Accordion/Accordion';
import {
  Alert,
  AlertDescription,
  AlertTitle,
} from '~/modules/core/components/Alert/Alert';
import { Badge } from '~/modules/core/components/Badge/Badge';
import { Button } from '~/modules/core/components/Button/Button';

export function LandingPage() {
  return (
    <div className="flex flex-col items-center">
      {/* Hero Section */}
      <section className="relative flex min-h-[90vh] w-full flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-accent to-white px-4 pb-32 pt-10 text-center md:pt-28">
        {/* Decorative elements */}
        <div className="bg-primary/20 absolute left-0 top-0 -z-10 h-96 w-96 animate-blob rounded-full blur-3xl filter" />
        <div className="animation-delay-2000 bg-secondary/20 absolute right-0 top-0 -z-10 h-96 w-96 animate-blob rounded-full blur-3xl filter" />
        <div className="animation-delay-4000 bg-success/20 absolute bottom-0 left-1/2 -z-10 h-96 w-96 animate-blob rounded-full blur-3xl filter" />

        <Badge
          className="mb-6 animate-fade-in text-xs font-normal md:mb-8 md:text-base"
          variant="primary-outlined"
        >
          Now in Beta • Limited Time Offer
        </Badge>
        <h1 className="mb-8 animate-fade-in-up text-center text-5xl font-extrabold leading-none text-letter-title md:text-7xl md:leading-tight lg:text-8xl">
          Transform
          <span className="bg-gradient-to-r from-primary to-success bg-clip-text text-transparent">
            {' '}
            Workflow
          </span>
          <br />
          with Our Solution
        </h1>
        <p className="mb-12 max-w-3xl animate-fade-in-up px-4 text-lg font-light text-letter-body md:mb-28 md:text-xl">
          Boost productivity and efficiency with our all-in-one platform
          designed for modern teams.
          <span className="font-semibold text-letter-title">
            {' '}
            Join 10,000+ companies
          </span>{' '}
          already using our platform.
        </p>
        <div className="flex flex-col gap-4 md:flex-row">
          <Button
            className="animation-delay-200 animate-fade-in-up px-12 text-lg"
            size="lg"
            variant="primary"
          >
            Get Started Free
            <ChevronRight className="ml-2" />
          </Button>
          <Button
            className="animation-delay-400 animate-fade-in-up px-12 text-lg"
            size="lg"
            variant="secondary-outlined"
          >
            Book a Demo
          </Button>
        </div>

        {/* Stats */}
        <div className="animation-delay-600 mt-28 grid animate-fade-in-up grid-cols-1 gap-4 md:grid-cols-3">
          {stats.map((stat, index) => (
            <div
              className="rounded-2xl bg-white/80 px-12 py-6 shadow-lg shadow-primary-disabled backdrop-blur-sm"
              key={index}
            >
              <p className="mb-2 text-4xl font-extrabold text-black">
                {stat.value}
              </p>
              <p className="font-light text-letter-body">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full bg-accent px-4 py-32">
        <div className="mx-auto max-w-7xl">
          <div className="mb-28 text-center">
            <Badge className="mb-4" variant="primary">
              Features
            </Badge>
            <h2 className="mb-4 text-4xl font-extrabold text-letter-title md:text-5xl">
              Everything you need to{' '}
              <span className="bg-gradient-to-r from-primary to-success bg-clip-text text-transparent">
                scale
              </span>
            </h2>
            <p className="mx-auto max-w-2xl text-xl font-light text-letter-body">
              Powerful features to help you manage, scale, and succeed
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <div
                className="group flex flex-col items-start rounded-2xl bg-white p-8 shadow-lg shadow-accent transition-all hover:-translate-y-1 hover:shadow-primary-disabled"
                key={index}
              >
                <div className="mb-6 rounded-2xl bg-primary-disabled p-4 text-primary transition-all group-hover:bg-primary group-hover:text-white">
                  {feature.icon}
                </div>
                <h3 className="mb-2 text-2xl font-extrabold text-letter-title">
                  {feature.title}
                </h3>
                <p className="text-lg font-light text-letter-body">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="w-full bg-gradient-to-b from-white to-accent px-4 py-32">
        <div className="mx-auto max-w-7xl text-center">
          <Badge className="mb-4" variant="primary">
            Testimonials
          </Badge>
          <h2 className="mb-4 text-4xl font-extrabold text-letter-title md:text-5xl">
            <span className="bg-gradient-to-r from-primary to-success bg-clip-text text-transparent">
              Trusted
            </span>{' '}
            by Industry Leaders
          </h2>
          <p className="mb-16 text-xl font-light text-letter-body">
            Join thousands of companies already using our platform
          </p>

          <div className="mx-auto grid w-3/5 gap-4 md:grid-cols-2">
            <Alert
              className="transform transition-all hover:-translate-y-1"
              variant="primary"
            >
              <Users2 className="h-6 w-6" />
              <AlertTitle className="pr-8 text-xl font-bold">
                10,000+ Users
              </AlertTitle>
              <AlertDescription className="pr-8 text-lg font-light">
                Trusted by thousands of teams worldwide
              </AlertDescription>
            </Alert>

            <Alert
              className="transform transition-all hover:-translate-y-1"
              variant="success"
            >
              <CheckCircle2 className="h-6 w-6" />
              <AlertTitle className="pr-8 text-xl font-bold">
                99.9% Uptime
              </AlertTitle>
              <AlertDescription className="pr-8 text-lg font-light">
                Our platform maintained 99.9% uptime over the last 12 months
              </AlertDescription>
            </Alert>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="w-full bg-white px-4 py-32">
        <div className="mx-auto max-w-4xl">
          <div className="mb-16 text-center">
            <Badge className="mb-4" variant="primary">
              FAQ
            </Badge>
            <h2 className="mb-4 text-4xl font-extrabold text-letter-title md:text-5xl">
              Frequently Asked Questions
            </h2>
            <p className="text-xl font-light text-letter-body">
              Everything you need to know about our platform
            </p>
          </div>

          <Accordion className="w-full" collapsible type="single">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-lg">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-lg">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA Section */}
      <section className="from-primary/10 to-secondary/10 w-full bg-gradient-to-r px-4 py-32">
        <div className="mx-auto max-w-4xl text-center">
          <Badge className="mb-5" variant="danger">
            Limited Time Offer
          </Badge>
          <h2 className="mb-6 text-4xl font-extrabold text-letter-title md:text-6xl">
            Ready to Transform Your Workflow?
          </h2>
          <p className="mb-20 text-xl font-light text-letter-body md:text-2xl">
            Start your 14-day free trial today. No credit card required.
          </p>
          <div className="flex flex-col justify-center gap-4 md:flex-row">
            <Button
              asChild
              className="px-12 text-lg"
              size="lg"
              variant="primary"
            >
              <Link to="/signup">Start Free Trial</Link>
            </Button>
            <Button
              asChild
              className="px-12 text-lg"
              size="lg"
              variant="secondary-outlined"
            >
              <Link to="/contact">Contact Sales</Link>
            </Button>
          </div>
          <Alert
            className="mx-auto mt-12 max-w-2xl transform transition-all hover:-translate-y-1"
            variant="primary"
          >
            <AlertCircle className="h-6 w-6" />
            <AlertTitle className="pr-8 text-xl font-extrabold">
              Special Launch Pricing
            </AlertTitle>
            <AlertDescription className="pr-8 text-lg font-light">
              Get 50% off your first 3 months when you sign up now
            </AlertDescription>
          </Alert>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full bg-accent px-4 py-20">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-4">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-center text-2xl font-extrabold text-letter-title md:text-left">
              Company Name
            </h3>
            <p className="text-center font-light text-letter-body md:text-left">
              Transforming workflows for modern teams worldwide.
            </p>
          </div>

          {/* Navigation Columns */}
          {footerLinks.map((column, index) => (
            <div
              className="space-y-4 text-center md:pl-16 md:text-left"
              key={index}
            >
              <h4 className="text-lg font-extrabold text-letter-title">
                {column.title}
              </h4>
              <ul className="space-y-2">
                {column.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      className="font-light text-letter-body transition-colors hover:text-primary"
                      to={link.href}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="mx-auto mt-12 max-w-7xl border-t border-divider pt-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="font-light text-letter-body">
              © 2024 Company Name. All rights reserved.
            </p>
            <div className="flex gap-6 font-light">
              <Link
                className="text-letter-body hover:text-letter-title"
                to="/privacy"
              >
                Privacy Policy
              </Link>
              <Link
                className="text-letter-body hover:text-letter-title"
                to="/terms"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

const stats = [
  { value: '10K+', label: 'Active Users' },
  { value: '99.9%', label: 'Uptime' },
  { value: '24/7', label: 'Support' },
];

const features = [
  {
    icon: <Globe2 className="h-8 w-8" />,
    title: 'Global Scale',
    description: 'Deploy worldwide with our enterprise-grade infrastructure.',
  },
  {
    icon: <MessageSquare className="h-8 w-8" />,
    title: 'Team Chat',
    description: 'Real-time communication and collaboration tools.',
  },
  {
    icon: <CheckCircle2 className="h-8 w-8" />,
    title: 'Task Management',
    description: 'Organize and track projects with powerful tools.',
  },
  {
    icon: <CheckCircle2 className="h-6 w-6" />,
    title: 'Automated Workflows',
    description:
      'Save time with intelligent automation and streamlined processes.',
  },
  {
    icon: <CheckCircle2 className="h-6 w-6" />,
    title: 'Real-time Analytics',
    description:
      'Get instant insights with powerful analytics and reporting tools.',
  },
  {
    icon: <CheckCircle2 className="h-6 w-6" />,
    title: 'Team Collaboration',
    description:
      'Work together seamlessly with built-in collaboration features.',
  },
];

const footerLinks = [
  {
    title: 'Product',
    links: [
      { label: 'Features', href: '/features' },
      { label: 'Pricing', href: '/pricing' },
      { label: 'Security', href: '/security' },
      { label: 'Roadmap', href: '/roadmap' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About', href: '/about' },
      { label: 'Careers', href: '/careers' },
      { label: 'Blog', href: '/blog' },
      { label: 'Press', href: '/press' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'Documentation', href: '/docs' },
      { label: 'Help Center', href: '/help' },
      { label: 'Contact', href: '/contact' },
      { label: 'Partners', href: '/partners' },
    ],
  },
];

const faqs = [
  {
    question: 'How does the free trial work?',
    answer:
      'Our 14-day free trial gives you full access to all features. No credit card required.',
  },
  {
    question: 'What payment methods do you accept?',
    answer:
      'We accept all major credit cards, PayPal, and wire transfers for enterprise customers.',
  },
  {
    question: 'Can I cancel my subscription?',
    answer:
      'Yes, you can cancel your subscription at any time. No long-term contracts required.',
  },
  {
    question: 'Do you offer customer support?',
    answer:
      "24/7 customer support is included with all plans. We're here to help!",
  },
];

export default LandingPage;
