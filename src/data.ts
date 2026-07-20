export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
  items: string[];
}

export interface AMCPackage {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  isPopular?: boolean;
  ctaText: string;
}

export interface FeatureItem {
  title: string;
  description: string;
  iconName: string;
}

export interface IndustryItem {
  name: string;
  iconName: string;
}

export interface WorkflowStep {
  stepNumber: string;
  title: string;
  description: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  designation: string;
  company: string;
  rating: number;
}

export interface StatItem {
  value: string;
  label: string;
  description: string;
}

export const companyDetails = {
  name: "Rajshree Systems and Technology",
  tagline: "Your Trusted Corporate IT Infrastructure & Technology Partner Since 2017",
  establishedYear: 2017,
  shortAbout: "Established in 2017, Rajshree Systems and Technology is a premium IT hardware sales and services company. We specialize in providing complete, reliable, and enterprise-grade IT infrastructure solutions for modern corporate businesses, rising startups, high-growth SMEs, and large enterprises.",
  longAbout: "Our expertise goes far beyond selling high-quality hardware. We provide complete, end-to-end IT setup, structured network deployment, proactive security, diligent maintenance, and long-term tech support. We strongly believe that world-class after-sales service is the absolute foundation of long-term customer relationships. By aligning your business goals with the right technology stack, we help organizations streamline operations, ensure zero downtime, and build future-proof infrastructure.",
  contactPersons: [
    {
      name: "Sanjay Jain",
      role: "Proprietor",
      phone: "9820854078",
      phoneFormatted: "+91 98208 54078"
    },
    {
      name: "Janish Jain",
      role: "Partner",
      phone: "7506774649",
      phoneFormatted: "+91 75067 74649"
    }
  ],
  address: {
    line1: "9B, Africa House, 1st Floor,",
    line2: "Topiwala Lane, Lamington Road,",
    cityZip: "Mumbai – 400007",
    full: "9B, Africa House, 1st Floor, Topiwala Lane, Lamington Road, Mumbai - 400007"
  },
  email: "info@rajshreesystems.com", // Professional placeholder email
  mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m12!1m3!1d3773.74811802111!2d72.81313388705096!3d18.95655768846931!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7ce17d23d854d%3A0x600b3e648f57f495!2sLamington%20Rd%2C%20Mumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
};

export const brands = [
  { name: "Dell", logoUrl: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=150&q=80" },
  { name: "Lenovo", logoUrl: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=150&q=80" },
  { name: "HP", logoUrl: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=150&q=80" },
  { name: "Apple", logoUrl: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=150&q=80" },
  { name: "ASUS", logoUrl: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=150&q=80" },
  { name: "MSI", logoUrl: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=150&q=80" },
  { name: "Intel", logoUrl: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=150&q=80" },
  { name: "Gigabyte", logoUrl: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=150&q=80" }
];

export const services: ServiceItem[] = [
  {
    id: "procurement",
    title: "Corporate IT Procurement",
    description: "Supply and procurement of genuine, enterprise-ready IT hardware and systems for organizations.",
    iconName: "Laptop",
    items: ["Laptops", "Desktops", "Workstations", "Mini PCs", "Servers", "Storage", "Monitors", "Accessories"]
  },
  {
    id: "office-setup",
    title: "Complete Office IT Setup",
    description: "End-to-end IT setup for new corporate offices, scaling co-working spaces, and rising startups.",
    iconName: "Briefcase",
    items: ["Computer Installation", "Network Infrastructure", "LAN Cabling", "WiFi Setup", "Rack Installation", "Server Setup", "User Configuration"]
  },
  {
    id: "networking",
    title: "Networking Solutions",
    description: "Comprehensive structured network design, routing, firewall security, and highly stable connectivity.",
    iconName: "Network",
    items: ["Router Installation", "Managed Switches", "Firewall Setup", "Structured Cabling", "VPN Configuration", "Enterprise WiFi"]
  },
  {
    id: "cctv-security",
    title: "CCTV & Security Solutions",
    description: "Advanced physical security, access controls, surveillance systems, and employee attendance logs.",
    iconName: "Shield",
    items: ["CCTV Installation", "IP Cameras", "DVR / NVR", "Access Control", "Biometric Attendance", "Video Surveillance"]
  },
  {
    id: "audio-conference",
    title: "Audio & Conference Setup",
    description: "Seamless meeting setups, digital interactive displays, and robust acoustics for boardrooms.",
    iconName: "Tv",
    items: ["Conference Room Audio", "PA Systems", "Video Conferencing", "Meeting Room Solutions", "Display Screens", "Interactive Panels"]
  },
  {
    id: "printers",
    title: "Printer Solutions",
    description: "High-quality corporate printer supply, customized workflow installation, and on-demand cartridge maintenance.",
    iconName: "Printer",
    items: ["Printer Sales", "Installation", "Networking", "Maintenance", "Cartridge Support"]
  },
  {
    id: "upgrades",
    title: "Hardware Upgrades",
    description: "Prolong the lifecycle of your hardware investments with top-tier, genuine performance upgrades.",
    iconName: "Cpu",
    items: ["RAM Upgrade", "SSD Upgrade", "Storage Expansion", "Processor Upgrade", "Workstation Enhancement"]
  },
  {
    id: "software",
    title: "Software Installation",
    description: "Authorized licensing deployment, backup solutions, business productivity tools, and operating system configurations.",
    iconName: "FolderCode",
    items: ["Windows OS Setup", "Microsoft Office Licensing", "Enterprise Antivirus", "Automated Backup Solutions", "Productivity Software", "Driver Installation", "Custom Business Applications"]
  },
  {
    id: "repairs",
    title: "Repairs & Troubleshooting",
    description: "Critical hardware repairs, diagnosing performance issues, component-level motherboard servicing, and secure data recovery.",
    iconName: "Wrench",
    items: ["Laptop Repair", "Desktop Repair", "Motherboard Issues", "Printer Repair", "Networking Issues", "Data Recovery Assistance"]
  }
];

export const amcPackages: AMCPackage[] = [
  {
    name: "Standard AMC",
    price: "Custom Quote",
    period: "per year",
    description: "Perfect for growing startups and small office environments requiring on-demand support and hardware maintenance.",
    features: [
      "Annual Maintenance Contract",
      "Preventive Maintenance (Quarterly)",
      "Remote Tech Support",
      "Next Business Day On-Site Service",
      "Hardware Upgrades Assistance",
      "Standard Software & Driver Configuration",
      "Email & Call Support"
    ],
    ctaText: "Get Free Assessment"
  },
  {
    name: "Enterprise IT Support",
    price: "Custom Quote",
    period: "monthly / annual",
    description: "Comprehensive end-to-end IT support, dedicated technical teams, and high-priority uptime SLAs for large operations.",
    features: [
      "24/7 Priority Emergency Support",
      "Dedicated Technical Team Allocation",
      "Comprehensive & Non-Comprehensive Contracts",
      "Active Network and Firewall Monitoring",
      "On-site Engineers (Full-Time or Dedicated visits)",
      "Daily Automatic Server & Data Backup Audit",
      "Immediate Remote Troubleshooting (Under 15 mins SLA)",
      "Biometric & Access Control Maintenance"
    ],
    isPopular: true,
    ctaText: "Request Enterprise Consultation"
  }
];

export const whyChooseUs: FeatureItem[] = [
  {
    title: "Established in 2017",
    description: "Nearly a decade of flawless record, helping organizations set up stable and secure tech foundations.",
    iconName: "CalendarDays"
  },
  {
    title: "Corporate IT Specialists",
    description: "Deep expertise in custom engineering solutions that perfectly align with business administrative targets.",
    iconName: "Building"
  },
  {
    title: "End-to-End Infrastructure",
    description: "Single point of contact for cabling, WiFi, servers, workstations, printers, surveillance, and AMC.",
    iconName: "Layers"
  },
  {
    title: "Genuine Products Only",
    description: "Fully certified direct dealer sourcing. Zero compromise on equipment authenticity, warranty, and licenses.",
    iconName: "CheckCircle"
  },
  {
    title: "Multi-Brand Expertise",
    description: "Certified to install and service top-tier brands like Dell, HP, Lenovo, Apple, and Cisco equipment.",
    iconName: "Boxes"
  },
  {
    title: "Dedicated After-Sales Support",
    description: "Our philosophy is built on relationships. We provide relentless post-deployment support and assistance.",
    iconName: "Users"
  },
  {
    title: "Fast Response Time",
    description: "Rapid SLAs for emergency remote diagnostic sessions or immediate dispatch of on-site field engineers.",
    iconName: "Clock"
  },
  {
    title: "Experienced Technical Team",
    description: "Seasoned network architects, system admins, hardware engineers, and physical security experts.",
    iconName: "UserCheck"
  },
  {
    title: "Customized Business Solutions",
    description: "We design tailored network and storage capacities based on your current workforce size and dynamic projections.",
    iconName: "Settings"
  },
  {
    title: "Long-Term Technology Partner",
    description: "We scale as you scale, serving as a trusted advisor to guide your digital transformation journey.",
    iconName: "Handshake"
  }
];

export const industriesServed: IndustryItem[] = [
  { name: "Corporate Offices", iconName: "Building2" },
  { name: "SMEs & Medium Enterprises", iconName: "TrendingUp" },
  { name: "High-Growth Startups", iconName: "Rocket" },
  { name: "Educational Institutions", iconName: "GraduationCap" },
  { name: "Hospitals & Healthcare", iconName: "HeartPulse" },
  { name: "Retail Outlets & Showrooms", iconName: "ShoppingBag" },
  { name: "Manufacturing Units", iconName: "Factory" },
  { name: "Financial Services", iconName: "Coins" },
  { name: "Professional Firms (CA, Law, etc.)", iconName: "Scale" }
];

export const workflowSteps: WorkflowStep[] = [
  {
    stepNumber: "01",
    title: "Requirement Analysis",
    description: "Our engineering consultants evaluate your active office layout, headcount, application stack, and future scalability needs."
  },
  {
    stepNumber: "02",
    title: "Solution Design",
    description: "We blueprint optimized configurations for systems, server capacities, structured network maps, and physical security layouts."
  },
  {
    stepNumber: "03",
    title: "Product Procurement",
    description: "We source authentic, warranty-backed enterprise equipment directly from authorized distributors at competitive wholesale pricing."
  },
  {
    stepNumber: "04",
    title: "Installation & Cabling",
    description: "Certified technicians lay structured cables, fit servers, set up mounting brackets, and install high-density WiFi access points."
  },
  {
    stepNumber: "05",
    title: "Rigorous Testing",
    description: "We simulate heavy data loads, run diagnostics on cabling packets, verify router bandwidth distribution, and audit camera angles."
  },
  {
    stepNumber: "06",
    title: "Strategic Deployment",
    description: "Systems go live in coordinated phases with zero interruption to your active operational workflow."
  },
  {
    stepNumber: "07",
    title: "User Onboarding & Training",
    description: "We host visual system overviews, configure printer network mappings, and guide administrators on easy portal operations."
  },
  {
    stepNumber: "08",
    title: "Ongoing Support & AMC",
    description: "Our dedicated helpdesk takes charge, providing preventive health checkups and remote troubleshooting."
  }
];

export const testimonials: Testimonial[] = [
  {
    quote: "Rajshree Systems helped us set up our new office seamlessly. From structured LAN cabling to biometric access and Dell workstations, they executed the entire IT blueprint ahead of our launch date. Excellent, responsive support.",
    author: "Amit Mehra",
    designation: "VP of Operations",
    company: "Sygma Logistics Pvt Ltd",
    rating: 5
  },
  {
    quote: "Their after-sales service is outstanding. When our main office router failed on a critical weekday, they dispatched a senior certified network administrator within an hour. They set up a hot standby and got us up immediately.",
    author: "Dr. Sandeep Chawla",
    designation: "Founder & CEO",
    company: "Apex Tech Labs",
    rating: 5
  },
  {
    quote: "A truly reliable partner for all our IT infrastructure needs. We have trusted them with our Annual Maintenance Contract (AMC) since 2019. Highly professional engineers, authentic components, and very transparent billing.",
    author: "Meenakshi Desai",
    designation: "Managing Director",
    company: "Desai Financial Consultants",
    rating: 5
  }
];

export const stats: StatItem[] = [
  { value: "2017", label: "Established Since", description: "Providing high-integrity IT corporate sales & services" },
  { value: "1000+", label: "Products Delivered", description: "Laptops, high-performance servers, active routers & displays" },
  { value: "500+", label: "Happy Clients", description: "SMEs, corporate headquarters, professional firms & startups" },
  { value: "8+", label: "Major Brands Offered", description: "Authorized deal channels for Dell, HP, Lenovo, Apple & ASUS" },
  { value: "IT Experts", label: "Corporate Specialists", description: "Tailored structures built for multi-user modern workloads" },
  { value: "End-to-End", label: "Enterprise Solutions", description: "No scattered vendors—we construct, certify & maintain it all" }
];
