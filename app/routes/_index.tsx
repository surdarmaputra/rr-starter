import LandingPage from '~/modules/landing/pages/LandingPage';

export function meta() {
  return [
    { title: 'React Router Starter' },
    { name: 'description', content: 'React Router Starter' },
  ];
}

export default function Index() {
  return <LandingPage />;
}
