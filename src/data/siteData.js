export const designTokens = {
  heroStyle: "cinematic",
  typography: { heading: "Playfair Display", body: "DM Sans", display: "Playfair Display" },
  effects: { noise: true, glassmorphism: "none", floatingShapes: false, scrollProgress: true, meshGradient: false, gradientBorders: false, cursorGlow: false },
  animationPreset: "dramatic",
  serviceCardStyle: "overlay",
  projectGridStyle: "masonry",
  testimonialStyle: "carousel",
  statsStyle: "overlay",
  bgPattern: "none",
  homeSectionOrder: ["hero","marquee","services","portfolio","stats","about","whyChooseUs","testimonials","cta"],
};

const siteData = {
  business: {
    name: "Panel & Body Centre",
    legalName: "Panel & Body Centre",
    tagline: "Precision Repairs, Factory-Perfect Finishes",
    description: "Panel & Body Centre in Mt Pleasant specializes in collision repair, spray painting, and vehicle restoration. Insurance-approved and trusted by Harare's most discerning vehicle owners.",
    phone: "+263 77 411 8411",
    phoneRaw: "+263774118411",
    whatsappNumber: "263774118411",
    email: "panelbodycentre@gmail.com",
    address: "61 Prices rd Mount Pleasant, Harare, Zimbabwe",
    country: "Zimbabwe",
    city: "Harare",
    rating: 4.3,
    ratingRounded: 4,
    reviewCount: 6,
    established: "2015",
    yearsExperience: "10+",
    projectsCompleted: "3000+",
    employees: "15+",
    coordinates: { lat: -17.8292, lng: 31.0522 },
    hours: [
      { day: "Monday - Friday", time: "8:00 AM - 5:00 PM" },
      { day: "Saturday", time: "8:00 AM - 1:00 PM" },
      { day: "Sunday", time: "Closed" },
    ],
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3798.5!2d31.0522!3d-17.8292",
    cookieConsentKey: "panel-body-centre-cookie-consent",
    socialLinks: { facebook: "", instagram: "#", linkedin: "#" },
  },

  navbar: { logoImage: null, logoLine1: "Panel", logoLine2: "& Body Centre" },

  hero: {
    badge: "Mt Pleasant's Trusted Panel Beaters",
    titleParts: [
      { text: "WHERE DAMAGE " },
      { text: "DISAPPEARS", highlight: true },
      { text: " COMPLETELY." },
    ],
    subtitle: "3,000+ vehicles restored to factory condition. Insurance-approved, precision-equipped, and obsessed with quality. Your vehicle deserves Panel & Body Centre.",
    ctaPrimary: "Get Started",
    ctaSecondary: "View Our Work",
    trustBadge: "3000+ Vehicles Repaired",
    backgroundImages: [
      { url: "https://images.unsplash.com/photo-1487754180451-c456f719a1fc?w=1920&q=85", alt: "Dynamic hero image showcasing the business" },
      { url: "https://images.unsplash.com/photo-1489824904134-891ab64532f1?w=1920&q=85", alt: "Professional work environment" },
      { url: "https://images.unsplash.com/photo-1487754180451-c456f719a1fc?w=1920&q=85", alt: "Quality results and satisfied clients" },
    ],
  },

  stats: [
    { number: "3000+", label: "Vehicles Repaired" },
    { number: "10+", label: "Years Experience" },
    { number: "100%", label: "Insurance Approved" },
    { number: "48hr", label: "Average Turnaround" },
  ],

  servicesPreview: [
    { title: "Collision Repair", desc: "Expert structural and cosmetic repairs for accident-damaged vehicles, restoring them to factory-perfect condition using precision equipment.", icon: "Star" },
    { title: "Spray Painting", desc: "Flawless paint matching and application in our climate-controlled spray booth. OEM-quality finishes that look factory-fresh.", icon: "Heart" },
    { title: "Dent Removal", desc: "Paintless dent repair for minor dings and hail damage. Cost-effective solutions that preserve your vehicle's original finish.", icon: "Lightbulb" },
    { title: "Insurance Claims", desc: "We handle the entire insurance claims process on your behalf. Approved by all major insurers in Zimbabwe.", icon: "Briefcase" },
    { title: "Frame Straightening", desc: "Advanced computerized frame measurement and correction to restore structural integrity after major collisions.", icon: "Buildings" },
    { title: "Detailing", desc: "Premium vehicle detailing that goes beyond a wash. Paint correction, ceramic coating, and interior restoration.", icon: "Leaf" },
  ],

  services: {
    heroTitle: "Our Services",
    heroSubtitle: "Comprehensive solutions delivered with precision and care.",
    items: [
      { title: "Collision Repair", slug: "collision-repair", desc: "Expert structural and cosmetic repairs for accident-damaged vehicles, restoring them to factory-perfect condition using precision equipment.", features: ["Structural Repair", "Panel Replacement", "Welding", "Alignment", "Parts Sourcing", "Quality Check"], image: "https://images.unsplash.com/photo-1487754180451-c456f719a1fc?w=800&q=80" },
      { title: "Spray Painting", slug: "spray-painting", desc: "Flawless paint matching and application in our climate-controlled spray booth. OEM-quality finishes that look factory-fresh.", features: ["Colour Matching", "Full Respray", "Spot Repair", "Clear Coat", "Metallic Finishes", "Matte Finishes"], image: "https://images.unsplash.com/photo-1489824904134-891ab64532f1?w=800&q=80" },
      { title: "Dent Removal", slug: "dent-removal", desc: "Paintless dent repair for minor dings and hail damage. Cost-effective solutions that preserve your vehicle's original finish.", features: ["Paintless Repair", "Hail Damage", "Door Dings", "Crease Removal", "Bumper Repair", "Quick Turnaround"], image: "https://images.unsplash.com/photo-1487754180451-c456f719a1fc?w=800&q=80" },
      { title: "Insurance Claims", slug: "insurance-claims", desc: "We handle the entire insurance claims process on your behalf. Approved by all major insurers in Zimbabwe.", features: ["All Insurers", "Documentation", "Assessment", "Towing", "Courtesy Car", "Fast Processing"], image: "https://images.unsplash.com/photo-1489824904134-891ab64532f1?w=800&q=80" },
      { title: "Frame Straightening", slug: "frame-straightening", desc: "Advanced computerized frame measurement and correction to restore structural integrity after major collisions.", features: ["Computer Measurement", "Precision Correction", "Chassis Repair", "Subframe Work", "Safety Check", "Certification"], image: "https://images.unsplash.com/photo-1487754180451-c456f719a1fc?w=800&q=80" },
      { title: "Detailing", slug: "detailing", desc: "Premium vehicle detailing that goes beyond a wash. Paint correction, ceramic coating, and interior restoration.", features: ["Paint Correction", "Ceramic Coating", "Interior Deep Clean", "Engine Bay", "Headlight Restoration", "Scratch Removal"], image: "https://images.unsplash.com/photo-1489824904134-891ab64532f1?w=800&q=80" },
    ],
  },

  projects: {
    heroTitle: "Our Portfolio",
    heroSubtitle: "A selection of our finest work across Harare and beyond.",
    items: [
      { title: "The Signature Project", slug: "the-signature-project", category: "Collision", location: "Harare, Zimbabwe", desc: "A showcase of our commitment to quality and client satisfaction.", client: "Private Client", services: ["Collision Repair", "Spray Painting"], image: "https://images.unsplash.com/photo-1487754180451-c456f719a1fc?w=800&q=80", images: ["https://images.unsplash.com/photo-1487754180451-c456f719a1fc?w=800&q=80", "https://images.unsplash.com/photo-1489824904134-891ab64532f1?w=800&q=80"] },
      { title: "Heritage Collection", slug: "heritage-collection", category: "Respray", location: "Harare, Zimbabwe", desc: "A showcase of our commitment to quality and client satisfaction.", client: "Private Client", services: ["Collision Repair", "Spray Painting"], image: "https://images.unsplash.com/photo-1489824904134-891ab64532f1?w=800&q=80", images: ["https://images.unsplash.com/photo-1489824904134-891ab64532f1?w=800&q=80", "https://images.unsplash.com/photo-1487754180451-c456f719a1fc?w=800&q=80"] },
      { title: "Modern Edge", slug: "modern-edge", category: "Restoration", location: "Harare, Zimbabwe", desc: "A showcase of our commitment to quality and client satisfaction.", client: "Private Client", services: ["Collision Repair", "Spray Painting"], image: "https://images.unsplash.com/photo-1487754180451-c456f719a1fc?w=800&q=80", images: ["https://images.unsplash.com/photo-1487754180451-c456f719a1fc?w=800&q=80", "https://images.unsplash.com/photo-1489824904134-891ab64532f1?w=800&q=80"] },
      { title: "The Milestone", slug: "the-milestone", category: "Detailing", location: "Harare, Zimbabwe", desc: "A showcase of our commitment to quality and client satisfaction.", client: "Private Client", services: ["Collision Repair", "Spray Painting"], image: "https://images.unsplash.com/photo-1489824904134-891ab64532f1?w=800&q=80", images: ["https://images.unsplash.com/photo-1489824904134-891ab64532f1?w=800&q=80", "https://images.unsplash.com/photo-1487754180451-c456f719a1fc?w=800&q=80"] },
      { title: "Precision Series", slug: "precision-series", category: "Collision", location: "Harare, Zimbabwe", desc: "A showcase of our commitment to quality and client satisfaction.", client: "Private Client", services: ["Collision Repair", "Spray Painting"], image: "https://images.unsplash.com/photo-1487754180451-c456f719a1fc?w=800&q=80", images: ["https://images.unsplash.com/photo-1487754180451-c456f719a1fc?w=800&q=80", "https://images.unsplash.com/photo-1489824904134-891ab64532f1?w=800&q=80"] },
      { title: "The Showcase", slug: "the-showcase", category: "Respray", location: "Harare, Zimbabwe", desc: "A showcase of our commitment to quality and client satisfaction.", client: "Private Client", services: ["Collision Repair", "Spray Painting"], image: "https://images.unsplash.com/photo-1489824904134-891ab64532f1?w=800&q=80", images: ["https://images.unsplash.com/photo-1489824904134-891ab64532f1?w=800&q=80", "https://images.unsplash.com/photo-1487754180451-c456f719a1fc?w=800&q=80"] },
    ],
  },

  homeTestimonials: [
    { text: "My car looks better than before the accident. The colour match is absolutely perfect.", name: "Tatenda Ndlovu", role: "Vehicle Owner", rating: 5, avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80" },
    { text: "They handled the entire insurance claim. I dropped off the car and picked it up looking brand new.", name: "Grace Moyo", role: "Insurance Claims", rating: 5, avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80" },
    { text: "The fleet repairs are always done on time and to a consistently high standard. Our go-to workshop.", name: "Simon Phiri", role: "Fleet Manager", rating: 5, avatar: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=100&q=80" },
    { text: "After a serious accident, I was devastated. They restored my car so perfectly I could not believe it was the same vehicle.", name: "Yeukai Chimwanda", role: "Accident Repair", rating: 5, avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=100&q=80" },
  ],

  reviews: {
    heroTitle: "Client Voices",
    heroSubtitle: "Hear from the people who trust us with their most important projects.",
    items: [
      { text: "My car looks better than before the accident. The colour match is absolutely perfect.", name: "Tatenda Ndlovu", role: "Vehicle Owner", rating: 5 },
      { text: "They handled the entire insurance claim. I dropped off the car and picked it up looking brand new.", name: "Grace Moyo", role: "Insurance Claims", rating: 5 },
      { text: "The fleet repairs are always done on time and to a consistently high standard. Our go-to workshop.", name: "Simon Phiri", role: "Fleet Manager", rating: 5 },
      { text: "After a serious accident, I was devastated. They restored my car so perfectly I could not believe it was the same vehicle.", name: "Yeukai Chimwanda", role: "Accident Repair", rating: 5 },
      { text: "The full respray on my classic car was flawless. They understood the original paint specifications perfectly.", name: "Angela Mhembere", role: "Respray Client", rating: 5 },
      { text: "Quick turnaround on a bumper repair. No appointment needed, fair price, and the work was excellent.", name: "Patrick Makoni", role: "Classic Car Owner", rating: 5 },
    ],
  },

  about: {
    heroTitle: "Our Story",
    heroSubtitle: "Built on expertise. Driven by passion. Trusted by Harare.",
    story: [
      "Panel & Body Centre was established in 2015 on Prices Road in Mt Pleasant with a commitment to raising the standard of panel beating in Zimbabwe. We invested in the best equipment and hired the most skilled technicians.",
      "Today, with 3,000+ vehicles repaired and approval from all major insurers, we are the go-to workshop for owners who refuse to compromise on quality.",
    ],
    values: [
      { title: "Quality First", desc: "We never compromise on the quality of our work or materials." },
      { title: "Client Focused", desc: "Every decision starts with what is best for the client." },
      { title: "Professional Excellence", desc: "Our team brings expertise and dedication to every project." },
      { title: "Integrity Always", desc: "Transparent pricing, honest advice, and reliable service." },
    ],
    team: [
      { name: "The Founder", role: "Managing Director", bio: "With over a decade of industry experience, our founder built Panel & Body Centre on a foundation of quality and trust.", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80" },
      { name: "Operations Lead", role: "Head of Operations", bio: "Ensuring every project runs smoothly from start to finish with meticulous planning and execution.", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80" },
      { name: "Technical Director", role: "Lead Specialist", bio: "Deep technical expertise combined with creative problem-solving drives innovation across all projects.", image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&q=80" },
    ],
  },

  careers: {
    heroTitle: "Join Our Team",
    heroSubtitle: "We are always looking for talented people who share our passion for excellence.",
    positions: [
      { title: "Junior Specialist", department: "Operations", location: "Harare", type: "Full-time", desc: "Join our growing team and develop your skills under experienced mentors." },
    ],
  },

  contact: {
    heroTitle: "Get In Touch",
    heroSubtitle: "Ready to start? We would love to hear from you.",
    branches: [
      { name: "Harare Office", address: "61 Prices rd Mount Pleasant, Harare, Zimbabwe", phone: "+263 77 411 8411", email: "panelbodycentre@gmail.com" },
    ],
  },

  homeCta: {
    title: "RESTORE YOUR\nVEHICLE",
    subtitle: "Every great project begins with a conversation. Tell us what you need, and let us show you what is possible.",
    ctaPrimary: "Get Started",
    ctaSecondary: "Chat on WhatsApp",
    whatsappText: "Hello Panel & Body Centre! I would like to discuss a project.",
    backgroundImage: "https://images.unsplash.com/photo-1487754180451-c456f719a1fc?w=1920&q=85",
  },

  footer: {
    description: "Panel & Body Centre in Mt Pleasant specializes in collision repair, spray painting, and vehicle restoration. Insurance-a...",
    copyright: "Panel & Body Centre",
  },
};

export default siteData;
