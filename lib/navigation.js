import {
  BookmarkSquareIcon,
  CalendarIcon,
  ChartBarIcon,
  CursorArrowRaysIcon,
  EnvelopeIcon,
  LifebuoyIcon,
  PhoneIcon,
  ShieldCheckIcon,
  Squares2X2Icon,
} from '@heroicons/react/24/outline';

export const services = [
  {
    name: 'Local Moving',
    description: 'Hourly based full moving servcies',
    href: '#',
    icon: ChartBarIcon,
  },
  {
    name: 'Interstate Moving',
    description:
      'Flat rate moving. Gas, mileage, tolls and insurance are included',
    href: '#',
    icon: CursorArrowRaysIcon,
  },
  {
    name: 'Packing Services',
    description: 'Top-notch packing services to reduce the stress of moving',
    href: '#',
    icon: ShieldCheckIcon,
  },
  {
    name: 'Storage services',
    description: 'Temperature-controlled storage for up to 6 months',
    href: '#',
    icon: Squares2X2Icon,
  },
];
export const callsToAction = [
  {
    name: 'Email us',
    href: 'mailto:info@gophoenixmoving.com',
    icon: EnvelopeIcon,
  },
  { name: 'Contact us', href: 'tel:(508) 315-9458', icon: PhoneIcon },
];
export const resources = [
  {
    name: 'Help Center',
    description:
      'Get all of your questions answered in our forums or contact support.',
    href: '#',
    icon: LifebuoyIcon,
  },
  {
    name: 'Guides',
    description:
      'Learn how to maximize our platform to get the most out of it.',
    href: '#',
    icon: BookmarkSquareIcon,
  },
  {
    name: 'Events',
    description:
      'See what meet-ups and other events we might be planning near you.',
    href: '#',
    icon: CalendarIcon,
  },
  {
    name: 'Security',
    description: 'Understand how we take your privacy seriously.',
    href: '#',
    icon: ShieldCheckIcon,
  },
];
export const recentPosts = [
  { id: 1, name: 'Boost your conversion rate', href: '#' },
  {
    id: 2,
    name: 'How to use search engine optimization to drive traffic to your site',
    href: '#',
  },
  { id: 3, name: 'Improve your customer experience', href: '#' },
];
