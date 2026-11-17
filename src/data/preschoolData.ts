export interface Program {
  id: string;
  name: string;
  slug: string;
  ageRange: string;
  ratio: string;
  hours: string;
  shortDescription: string;
  fullDescription: string;
  image: string;
  features: string[];
  schedule: { time: string; activity: string }[];
  milestones: string[];
  monthlyTuition: number;
}

export interface FacultyMember {
  id: string;
  name: string;
  role: string;
  credentials: string;
  experience: string;
  bio: string;
  image: string;
  tag: string;
}

export interface Testimonial {
  id: string;
  parentName: string;
  childInfo: string;
  rating: number;
  quote: string;
  avatar: string;
  date: string;
}

export const SCHOOL_INFO = {
  brandName: "Stackly",
  name: "Little Sprouts Academy",
  shortName: "Little Sprouts",
  tagline: "Where Little Curiosity Grows Into Confident Learners",
  description: "Cultivating joyful discovery, academic readiness, and emotional security through evidence-based, play-centered early childhood care.",
  phone: "(555) 019-2801",
  nursePhone: "(555) 019-2809",
  officePhone: "(555) 019-2800",
  email: "admissions@littlesprouts.edu",
  address: "742 Evergreen Meadow Way, Springfield, OR 97477",
  hours: "Mon – Fri: 7:30 AM – 5:30 PM CST",
  licenseNumber: "State License #345701928",
  accreditation: "NAEYC Accredited • State Licensed Quality Rated Center",
};

export const PROGRAMS: Program[] = [
  {
    id: "infant-nest",
    name: "Infant Sensory & Bonding Haven",
    slug: "infant-care",
    ageRange: "6 Weeks – 18 Months",
    ratio: "1:3 Low Infant Ratio",
    hours: "Full Day (7:30 AM – 5:30 PM) / Part-Time",
    shortDescription: "A calm sensory sanctuary featuring responsive feeding, soothing tummy time, primary attachment caregivers, and individualized sleep rhythms.",
    fullDescription: "Our Infant Sensory & Bonding Haven is tailored for our youngest explorers. Designed with soft natural daylight, acoustic dampening, and chemical-free wooden materials, babies explore the world with primary attachment caregivers who tune into each child's natural rhythm.",
    image: "https://images.unsplash.com/photo-1544126592-807ade215a0b?auto=format&fit=crop&w=800&q=80",
    features: [
      "1:3 Infant-Educator Low Ratio",
      "Primary Attachment Caregiver System",
      "Pure Organic Purees & Formula Preparation",
      "HEPA Filtered Napping Sanctuary"
    ],
    schedule: [
      { time: "7:30 AM – 8:30 AM", activity: "Gentle Welcome & Warm Morning Check-in" },
      { time: "8:30 AM – 9:30 AM", activity: "Individual Feeding & Diaper Care Routine" },
      { time: "9:30 AM – 10:30 AM", activity: "Sensory Tummy Time & Mirror Exploration" },
      { time: "10:30 AM – 12:00 PM", activity: "Morning Nap in Private Dimmed Crib Nook" },
      { time: "12:00 PM – 1:30 PM", activity: "Organic Chef Puree Lunch & Finger Food" },
      { time: "1:30 PM – 3:00 PM", activity: "Stroller Garden Stroll & Classical Melodies" },
      { time: "3:00 PM – 4:30 PM", activity: "Gentle Motor Exercises & Sensory Fabrics" },
      { time: "4:30 PM – 5:30 PM", activity: "Lullabies, Storytime & Warm Family Reunion" },
    ],
    milestones: [
      "Holds head steady, reaches for colorful textured toys",
      "Rolls over, sits independently, cruises along soft bars",
      "Responds to own name, mimics gentle sounds and laughter",
      "Recognizes familiar faces and communicates comfort needs"
    ],
    monthlyTuition: 1650
  },
  {
    id: "toddler-explorer",
    name: "Toddler Explorer Labs",
    slug: "toddler-program",
    ageRange: "18 Months – 3 Years",
    ratio: "1:4 Nurturing Ratio",
    hours: "Full Day & Half Day Options",
    shortDescription: "Boundless curiosity unleashed through messy art ateliers, water tables, early vocabulary explosion, and supportive potty-learning partnership.",
    fullDescription: "Toddlers are eager scientists. In our Explorer Labs, toddlers manipulate natural textures, climb soft turf obstacle courses, build balance confidence, and learn emotional naming with empathetic teachers.",
    image: "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&w=800&q=80",
    features: [
      "1:4 Toddler Low Ratio Care",
      "Messy Art & Sensory Play Tables",
      "Supportive Potty-Training Partnership",
      "Daily Nature & Gross Motor Play"
    ],
    schedule: [
      { time: "7:30 AM – 8:30 AM", activity: "Arrival & Free Discovery Bins" },
      { time: "8:30 AM – 9:15 AM", activity: "Morning Circle & Welcome Song" },
      { time: "9:15 AM – 10:15 AM", activity: "STEAM & Sensory Centers: Water & Kinetic Sand" },
      { time: "10:15 AM – 11:00 AM", activity: "Outdoor Yard Exploration & Tricycle Track" },
      { time: "11:00 AM – 12:00 PM", activity: "Family-Style Organic Hot Lunch" },
      { time: "12:00 PM – 2:00 PM", activity: "Rest & Nap Sanctuary with Nature Sounds" },
      { time: "2:00 PM – 3:00 PM", activity: "Art Atelier & Loose Parts Building" },
      { time: "3:00 PM – 5:30 PM", activity: "Outdoor Play & Departure" },
    ],
    milestones: [
      "Builds towers with 6+ blocks, completes basic shape sorters",
      "Expresses needs with 2-4 word sentences, recognizes colors",
      "Climbs stairs with coordination and kicks balls forward",
      "Practices taking turns and initiates cooperative play"
    ],
    monthlyTuition: 1480
  },
  {
    id: "preschool-discovery",
    name: "Preschool Discovery",
    slug: "preschool-discovery",
    ageRange: "2.5 – 4 Years",
    ratio: "1:6 Active Ratio",
    hours: "Full Day (7:30 AM – 5:30 PM)",
    shortDescription: "Where wonder takes shape! Early numeracy games, phonemic awareness, bilingual song immersion, and scientific garden inquiries.",
    fullDescription: "Preschool bridges playful discovery with intentional foundational skills. Children investigate life cycles, build elaborate train and block architectures, and master peer collaboration.",
    image: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=800&q=80",
    features: [
      "Reggio Emilia Child-Led Inquiries",
      "Bilingual Spanish & Music Immersion",
      "Conscious Discipline & Calm Corners",
      "Living Garden & Seedling Discovery"
    ],
    schedule: [
      { time: "7:30 AM – 8:45 AM", activity: "Morning Brain Warmups & Tabletop Puzzles" },
      { time: "8:45 AM – 9:30 AM", activity: "Interactive Circle Time: Calendar & Emotions Chart" },
      { time: "9:30 AM – 10:30 AM", activity: "STEAM Learning Centers: Math Blocks & Art" },
      { time: "10:30 AM – 11:45 AM", activity: "Outdoor Adventure: Climbing Wall & Garden Beds" },
      { time: "11:45 AM – 12:30 PM", activity: "Organic Farm Lunch & Table Etiquette" },
      { time: "12:30 PM – 2:00 PM", activity: "Quiet Nap / Independent Book Looking" },
      { time: "2:00 PM – 3:15 PM", activity: "Orff Music, Movement & Rhythm Sticks" },
      { time: "3:15 PM – 5:30 PM", activity: "Discovery Stations & Family Pick-Up" },
    ],
    milestones: [
      "Follows 2-3 step directions enthusiastically",
      "Counts up to 15 objects with 1-to-1 correspondence",
      "Holds crayons with three-finger tripod grasp",
      "Shows empathy and negotiates solutions in minor conflicts"
    ],
    monthlyTuition: 1350
  },
  {
    id: "kindergarten-bridge",
    name: "Kindergarten Readiness Bridge",
    slug: "kindergarten-readiness",
    ageRange: "4 – 6 Years",
    ratio: "1:7 Focus Ratio",
    hours: "Full Day (8:00 AM – 3:30 PM / Extended Care)",
    shortDescription: "Rigorous yet joyful Kindergarten readiness with Heggerty phonics, Singapore math manipulatives, and collaborative scientific investigations.",
    fullDescription: "Our Kindergarten Readiness Bridge prepares children academically, socially, and emotionally for elementary school success. Students build reading fluency, solve concrete math bonds, and present weekly show-and-tell inquiries.",
    image: "https://images.unsplash.com/photo-1587654780291-39c9404d746b?auto=format&fit=crop&w=800&q=80",
    features: [
      "Heggerty Phonics & Early Literacy",
      "Concrete-Pictorial Math Foundations",
      "Screen-Free STEAM Engineering",
      "Social Collaboration & Conflict Resolution"
    ],
    schedule: [
      { time: "8:00 AM – 8:45 AM", activity: "Morning Math Riddles & Journaling" },
      { time: "8:45 AM – 9:45 AM", activity: "Literacy Workshop: Decodable Reading Groups" },
      { time: "9:45 AM – 10:45 AM", activity: "Singapore Math: Number Bonds & Geometry" },
      { time: "10:45 AM – 11:30 AM", activity: "Active Playground Recess & Team Sports" },
      { time: "11:30 AM – 12:30 PM", activity: "Organic Hot Chef Lunch & Nature Stroll" },
      { time: "12:30 PM – 1:45 PM", activity: "STEAM Project Lab: Building Bridges & Simple Machines" },
      { time: "1:45 PM – 2:45 PM", activity: "Fine Arts, Clay Pottery & Musical Performance" },
      { time: "2:45 PM – 5:30 PM", activity: "Enrichment Clubs & Extended Care" },
    ],
    milestones: [
      "Recognizes all uppercase & lowercase letters and phonemes",
      "Writes first and last name legibly and draws sequenced stories",
      "Understands addition and subtraction facts within 20",
      "Demonstrates sustained focus, resilience, and collaborative teamwork"
    ],
    monthlyTuition: 1250
  }
];

export const FACULTY: FacultyMember[] = [
  {
    id: "elena-vance",
    name: "Elena Vance, Ed.D.",
    role: "Head of School & Founder",
    credentials: "Doctorate in Early Childhood Education (Columbia Univ.)",
    experience: "18+ Years",
    bio: "Founded Little Sprouts in 2006 on the belief that children thrive when given unhurried time to wonder, explore nature, and form secure emotional attachments.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80",
    tag: "Columbia Univ."
  },
  {
    id: "marcus-rivera",
    name: "Marcus Rivera, M.Ed.",
    role: "Pedagogical Director",
    credentials: "M.Ed. in Child Development, Reggio Emilia Certified",
    experience: "12+ Years",
    bio: "Specializes in hands-on STEAM inquiry environments where children solve open-ended design problems through teamwork and material exploration.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=600&q=80",
    tag: "Reggio Certified"
  },
  {
    id: "clara-reyes",
    name: "Clara Reyes",
    role: "Infant Sanctuary Lead",
    credentials: "Pediatric Sleep & Sensory Integration Specialist",
    experience: "9+ Years",
    bio: "Brings calm, radiant gentleness to our Infant Haven, ensuring each baby's unique natural rhythm is honored, held, and cherished.",
    image: "https://images.unsplash.com/photo-1580894732444-8ecded7900cd?auto=format&fit=crop&w=600&q=80",
    tag: "Sensory Specialist"
  },
  {
    id: "sarah-jenkins",
    name: "Ms. Sarah Jenkins, M.Ed.",
    role: "Pre-K Lead Educator",
    credentials: "State Certified Elementary Educator & Orton-Gillingham Phonics",
    experience: "11+ Years",
    bio: "Passionate about early emergent literacy, nature journals, and building children's confidence before they graduate into elementary school.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=600&q=80",
    tag: "Orton-Gillingham"
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "test-1",
    parentName: "Samantha & Brian Collins",
    childInfo: "Parents of Leo (Pre-K Room)",
    rating: 5,
    quote: "Finding Little Sprouts was a true blessing. Leo was so shy at first, but within weeks he was running into class excited to build waterwheels and inspect ladybugs. The daily photo updates on the portal give us so much peace of mind.",
    avatar: "https://images.unsplash.com/photo-1548142813-c348350df52b?auto=format&fit=crop&w=200&q=80",
    date: "Enrolled 2 Years"
  },
  {
    id: "test-2",
    parentName: "Dr. Jonathan Reyes",
    childInfo: "Father of Maya (Toddler Room)",
    rating: 5,
    quote: "As a physician, safety, nutrition, and hygiene were my top criteria. Little Sprouts exceeds every benchmark: HEPA filtration, 100% organic meals, and the most loving, certified educators you could ever ask for.",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
    date: "Enrolled 1 Year"
  },
  {
    id: "test-3",
    parentName: "Priya & Rohan Mehta",
    childInfo: "Parents of Arjun (Kindergarten Grad)",
    rating: 5,
    quote: "Arjun transitioned to elementary school this fall and his teacher noted how remarkably ahead he was in reading, math, and empathy. We credit this entire foundation to Little Sprouts Academy.",
    avatar: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&w=200&q=80",
    date: "Class of 2024"
  }
];

export const FAQS = [
  {
    question: "What are your student-to-teacher ratios?",
    answer: "We maintain industry-leading low ratios: Infants (1:3), Toddlers (1:4), Preschool (1:6), and Pre-K/Kindergarten (1:7). This guarantees individualized emotional attunement and safety."
  },
  {
    question: "Does my toddler need to be potty trained before enrolling?",
    answer: "No, potty training is NOT required for our Infant, Toddler, or Preschool programs. Our educators partner with families to support potty learning in a calm, encouraging, pressure-free manner."
  },
  {
    question: "What safety and security protocols are active on campus?",
    answer: "Our entire campus is secured with biometric access gates, 24/7 video monitoring, fully fenced yards, and photo-verified pick-up lists. All staff members are thoroughly background checked, CPR, First Aid, and EpiPen certified."
  },
  {
    question: "What meals are provided during the school day?",
    answer: "We provide morning snack, a hot chef-cooked organic lunch, and an afternoon nutritious snack. All meals are prepared from scratch on campus using non-GMO, USDA organic ingredients. We are a 100% nut-free facility."
  },
  {
    question: "How do teachers share daily updates with parents?",
    answer: "Through our proprietary Stackly Parent Portal! Guardians receive real-time updates including photos, nap duration, meal consumption, diaper/potty logs, and direct messaging with the lead teacher."
  }
];
