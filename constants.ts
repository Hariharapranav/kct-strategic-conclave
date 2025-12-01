import { Mic, Users, Globe, Award, TrendingUp, Shield, Handshake, Lightbulb } from 'lucide-react';
import { Speaker, ScheduleItem, SponsorshipTier, StatItem } from './types';

export const NAV_LINKS = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Schedule', href: '#schedule' },
  { name: 'Experts', href: '#experts' },
  { name: 'Register', href: '#register' },
  { name: 'Sponsorship', href: '#sponsorship' },
  { name: 'Contact', href: '#contact' },
];

export const STATS: StatItem[] = [
  { label: 'Conclave Participants', value: '40+', icon: Mic },
  { label: 'Workshop Attendees', value: '450+', icon: Users },
  { label: 'Online Reach', value: '2,000+', icon: Globe },
  { label: 'Media Outreach', value: 'National', icon: Award },
];

export const SPEAKERS: Speaker[] = [
  {
    id: 1,
    name: 'Lt Gen (Retd) Vinod G. Khandare',
    role: 'Former Principal Adviser, MoD',
    description: 'Former officer of the Indian Army & Former Principal Adviser in the Ministry of Defence.',
    image: '/speakers/Lieutenant_General_Vinod_G_Khandare.jpg'
  },
  {
    id: 2,
    name: 'Amb (Retd) Riva Ganguly Das',
    role: 'Former Secretary, MEA',
    description: 'Former High Commissioner to Bangladesh & Former Ambassador to Romania, Albania and Moldova.',
    image: '/speakers/Riva_Ganguly_Das_with_President_Kovind_(cropped).jpg'
  },
  {
    id: 3,
    name: 'Mr. Shiv Murari Sahai',
    role: 'Distinguished Fellow CSDR',
    description: 'Retired JK cadre IPS officer, Former Addl Secy National Security Council Secretariat.',
    image: '/speakers/shiv.jfif'
  },
  {
    id: 4,
    name: 'Ms. Meera Singh Rawat',
    role: 'ICF-MCC Executive Coach',
    description: 'Former COO, Barclays; Independent Director & Corporate Training Facilitator.',
    image: '/speakers/meera.jpg'
  },
  {
    id: 5,
    name: 'Mr. Sanjay Chadha',
    role: 'IRSME (Retd)',
    description: 'Former Additional Secretary, Ministry of Commerce.',
    image: '/speakers/Sanjay Chadha.jfif'
  }
  // {
  //   id: 6,
  //   name: 'Ms. Aparna Ray, IFS',
  //   role: 'Joint Secy, MEA',
  //   description: 'Joint Secretary, Public Policy and Research, Ministry of External Affairs.',
  //   image: 'https://picsum.photos/seed/aparna/400/400'
  // }
];

export const SCHEDULE_CONCLAVE: ScheduleItem[] = [
  {
    title: 'Closed-Door Expert Sessions',
    description: 'Thematic discussions on India\'s external security, economic resilience, and technology frontiers.',
    speaker: 'National Policy Leadership',
    time: '18-19 Dec'
  },
  {
    title: 'Diplomatic Strategy',
    description: 'Senior diplomats and retired service chiefs discussing global geopolitics.',
    speaker: 'Panel Experts',
    time: '18-19 Dec'
  }
];

export const SCHEDULE_WORKSHOP: ScheduleItem[] = [
  {
    time: "09:00 - 10:30",
    title: "Emerging National Security Environment: Challenges and Opportunities",
    description: "Interactive Session One",
    speaker: "Mr. SM Sahai, IPS (Retd)"
  },
  {
    time: "10:30 - 10:45",
    title: "Tea/Coffee Refreshments",
    description: "Networking Break",
    isBreak: true
  },
  {
    time: "10:45 - 12:15",
    title: "Evolving Global Geopolitics and India’s National Interests",
    description: "Interactive Session Two",
    speaker: "Amb Riva Ganguly Das, IFS (Retd)"
  },
  {
    time: "12:20 - 13:00",
    title: "Shaping the Discourse on Public Policy and Research in India",
    description: "Informative Session",
    speaker: "Mrs. Aparna Ray, IFS"
  },
  {
    time: "13:30 - 15:00",
    title: "Increased Tariffs and Recent Regional Conflicts: What Next for Indian Industry",
    description: "Interactive Session Three",
    speaker: "Mr. Sanjay Chadha, IRSME (Retd)"
  },
  {
    time: "15:00 - 15:10",
    title: "Tea/Coffee Refreshments",
    description: "Networking Break",
    isBreak: true
  },
  {
    time: "15:10 - 16:40",
    title: "Media and India’s Public Communication Initiatives",
    description: "Interactive Session Four",
    speaker: "Amb Riva Ganguly Das, IFS (Retd)"
  },
  {
    time: "16:45 - 18:15",
    title: "Technology and Innovation: Opportunities for Next-Gen in Defense and Fintech Domains",
    description: "Interactive Session Five",
    speaker: "Lt Gen VG Khandare & Ms. Meera S Rawat"
  }
];

export const SPONSORSHIPS: SponsorshipTier[] = [
  {
    name: 'Title Partner',
    amount: '₹ 5,00,000',
    benefits: [
      'Exclusive co-branding on all materials',
      'Stage backdrop branding',
      'Media mentions',
      '2 stalls at SKT'
    ],
    highlight: true
  },
  {
    name: 'Session Partner',
    amount: '₹ 2,00,000',
    benefits: [
      'Branding in session visuals',
      'Mentions in digital & print comms'
    ]
  },
  {
    name: 'Workshop Partner',
    amount: '₹ 1,00,000',
    benefits: [
      'Branding in 20th Dec Workshop materials',
      'Certificate Branding'
    ]
  },
  {
    name: 'Institutional Partner',
    amount: '₹ 50,000',
    benefits: [
      'Recognition in brochures',
      'Social media recognition'
    ]
  },
  {
    name: 'Knowledge Partner (In-Kind)',
    amount: '—',
    benefits: [
      'Collaboration acknowledgement',
      'Logo visibility'
    ]
  }
];

export const BRANDING_AVENUES = [
  "Logo presence on event posters, certificates, and backdrops",
  "Recognition on official website, social media, and press releases",
  "Stall spaces outside SKT (premium locations for brand display, recruitment, or product demos)",
  "Access to networking sessions with speakers and delegates",
  "Opportunity to contribute to Knowledge Partner Compendium"
];

export const REGISTRATION_TIERS = [
  {
    category: "Students",
    price: "₹ 500",
    per: "Per Head",
    features: [
      "Access to All Workshop Sessions",
      "Certificate of Participation",
      "Tea/Coffee Refreshments"
    ]
  },
  {
    category: "Professionals",
    price: "₹ 2,500",
    per: "Per Head",
    features: [
      "Access to All Workshop Sessions",
      "Certificate of Participation",
      "Networking Opportunities",
      "Tea/Coffee Refreshments"
    ],
    highlight: true
  }
];

export const WHY_PARTNER = [
  {
    title: "Expert Engagement",
    description: "Engage with India’s most respected strategic and policy experts.",
    icon: TrendingUp
  },
  {
    title: "National Reach",
    description: "Reach a national audience of academics, professionals, and students.",
    icon: Globe
  },
  {
    title: "Credible Alignment",
    description: "Align with a credible, non-partisan academic–policy initiative.",
    icon: Shield
  },
  {
    title: "Social Impact",
    description: "Contribute to a thought leadership platform with tangible social impact.",
    icon: Handshake
  }
];

export const ABOUT_TEXT = {
  ki: "Kumaraguru Institutions (KI), with more than four-decade legacy of academic excellence, span disciplines such as engineering, technology, management, science, agriculture, innovation, entrepreneurship, liberal arts, and humanities. Established by Padma Bhushan Arutchelvar Dr. N. Mahalingam, KI is spread across 292 acres in 3 campuses and includes Kumaraguru College of Technology (1984), KCT Business School (2005), Kumaraguru Institute of Agriculture (2014) and Kumaraguru College of Liberal Arts and Science (2018).",
  riset: "Established in July 2025, RISET Foundation is envisioned by a team of experienced experts with diverse domain specialisation, having former and present association with the Government, Industry and Academia. It aims to bridge national ambition with actionable intelligence in three important domains - Security, Economy, and Technology – for nation building."
};