"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Building,
  Users,
  TrendingUp,
  Globe,
  Shield,
  Zap,
  Cloud,
  Database,
  Lock,
  ArrowRight,
  Filter,
  ExternalLink,
  Calendar,
  Target,
  Award,
  BarChart,
  CheckCircle,
  Sparkles,
  ArrowUpRight,
  Clock,
  DollarSign,
  Code,
  Server,
  Network,
  Cpu,
  Layers,
  ChevronRight,
  X,
  Search,
  Brain,
  Pause,
  RotateCcw,
  ChevronLeft,
  Play, // Added missing import for Play icon
} from "lucide-react";

// Case study data
const caseStudies = [
  {
    id: 1,
    title: "Enterprise E-commerce Platform Migration",
    client: "Global Retail Corp",
    industry: "Retail & E-commerce",
    challenge: "Legacy monolithic system causing slow performance and limited scalability during peak seasons",
    solution: "Modern microservices architecture with cloud-native technologies",
    results: [
      "300% increase in peak transaction capacity",
      "99.99% uptime during Black Friday sales",
      "40% reduction in infrastructure costs",
      "2-second page load time improvement",
    ],
    technologies: ["AWS", "Kubernetes", "React", "Node.js", "PostgreSQL", "Redis"],
    duration: "6 months",
    teamSize: "15 engineers",
    category: ["cloud", "scalability"],
    impact: "high",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&auto=format&fit=crop",
    logo: "🏢",
    featured: true,
  },
  {
    id: 2,
    title: "Real-time Financial Analytics Platform",
    client: "FinTech Innovations Inc",
    industry: "Finance & Banking",
    challenge: "Inability to process real-time data for trading decisions",
    solution: "Event-driven architecture with streaming data pipeline",
    results: [
      "Millisecond latency for real-time analytics",
      "5x increase in data processing capacity",
      "99.9% data accuracy rate",
      "Zero downtime in 12 months",
    ],
    technologies: ["Apache Kafka", "Python", "React", "MongoDB", "Docker", "Redis"],
    duration: "8 months",
    teamSize: "12 engineers",
    category: ["data", "real-time"],
    impact: "high",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w-800&auto=format&fit=crop",
    logo: "💰",
    featured: true,
  },
  {
    id: 3,
    title: "Healthcare Data Security Overhaul",
    client: "HealthFirst Medical Group",
    industry: "Healthcare",
    challenge: "HIPAA compliance issues with existing patient data system",
    solution: "Secure, compliant architecture with end-to-end encryption",
    results: [
      "100% HIPAA compliance achieved",
      "Zero security breaches in 18 months",
      "50% faster patient data retrieval",
      "24/7 audit trail implementation",
    ],
    technologies: [".NET Core", "Azure", "React", "SQL Server", "Terraform", "Key Vault"],
    duration: "9 months",
    teamSize: "10 engineers",
    category: ["security", "compliance"],
    impact: "medium",
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&auto=format&fit=crop",
    logo: "🏥",
    featured: false,
  },
  {
    id: 4,
    title: "Mobile-First Social Platform",
    client: "Connect Social Media",
    industry: "Social Media",
    challenge: "Poor mobile performance limiting user engagement",
    solution: "Progressive Web App with native-like performance",
    results: [
      "3x increase in user engagement",
      "85% reduction in app crashes",
      "1.5-second average page load time",
      "1M+ active users in 6 months",
    ],
    technologies: ["React Native", "GraphQL", "Node.js", "AWS", "DynamoDB", "CloudFront"],
    duration: "7 months",
    teamSize: "8 engineers",
    category: ["mobile", "performance"],
    impact: "medium",
    image: "https://images.unsplash.com/photo-1611605698335-8b1569810432?w=800&auto=format&fit=crop",
    logo: "📱",
    featured: false,
  },
  {
    id: 5,
    title: "AI-Powered Supply Chain Optimization",
    client: "Global Logistics Ltd",
    industry: "Logistics",
    challenge: "Inefficient routing and inventory management",
    solution: "Machine learning algorithms integrated with existing ERP",
    results: ["25% reduction in delivery times", "15% decrease in fuel consumption", "99% inventory accuracy", "$2M annual cost savings"],
    technologies: ["Python", "TensorFlow", "AWS SageMaker", "React", "PostgreSQL", "Kafka"],
    duration: "10 months",
    teamSize: "14 engineers",
    category: ["ai", "optimization"],
    impact: "high",
    image: "https://images.unsplash.com/photo-1600980761415-eab3c8e1d2c1?w=800&auto=format&fit=crop",
    logo: "🚚",
    featured: true,
  },
  {
    id: 6,
    title: "Government Document Processing System",
    client: "State Government Services",
    industry: "Government",
    challenge: "Manual document processing causing delays",
    solution: "Automated workflow with OCR and digital signatures",
    results: ["90% reduction in processing time", "100,000+ documents processed monthly", "Zero manual errors", "24/7 system availability"],
    technologies: ["Java", "Spring Boot", "Vue.js", "Azure", "MongoDB", "OCR API"],
    duration: "12 months",
    teamSize: "20 engineers",
    category: ["automation", "government"],
    impact: "medium",
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=800&auto=format&fit=crop",
    logo: "🏛️",
    featured: false,
  },
];

// Categories for filtering
const categories = [
  { id: "all", label: "All Projects", icon: Layers, count: 6 },
  { id: "cloud", label: "Cloud Migration", icon: Cloud, count: 2 },
  { id: "data", label: "Data & Analytics", icon: Database, count: 3 },
  { id: "security", label: "Security", icon: Lock, count: 1 },
  { id: "mobile", label: "Mobile", icon: Zap, count: 1 },
  { id: "ai", label: "AI/ML", icon: Cpu, count: 1 },
  { id: "scalability", label: "Scalability", icon: TrendingUp, count: 2 },
  { id: "real-time", label: "Real-time", icon: Clock, count: 1 },
];

// Impact levels
const impactLevels = [
  { id: "all", label: "All Impact Levels" },
  { id: "high", label: "High Impact", color: "from-green-500 to-emerald-500" },
  { id: "medium", label: "Medium Impact", color: "from-yellow-500 to-orange-500" },
  { id: "low", label: "Low Impact", color: "from-blue-500 to-cyan-500" },
];

// Case study data for hero
const featuredCaseStudies = [
  {
    id: 1,
    title: "Enterprise E-commerce Platform Migration",
    client: "Global Retail Corp",
    industry: "Retail & E-commerce",
    challenge: "Legacy monolithic system causing slow performance and limited scalability",
    result: "300% increase in peak transaction capacity",
    metrics: {
      performance: "+300%",
      uptime: "99.99%",
      costReduction: "40%",
      loadTime: "2s",
    },
    technologies: ["AWS", "Kubernetes", "React", "Node.js"],
    color: "from-blue-700 to-cyan-900",
    icon: Globe,
  },
  {
    id: 2,
    title: "Real-time Financial Analytics Platform",
    client: "FinTech Innovations Inc",
    industry: "Finance & Banking",
    challenge: "Inability to process real-time data for trading decisions",
    result: "Millisecond latency for real-time analytics",
    metrics: {
      performance: "5x",
      accuracy: "99.9%",
      latency: "<10ms",
      uptime: "100%",
    },
    technologies: ["Apache Kafka", "Python", "React", "MongoDB"],
    color: "from-purple-700 to-pink-900",
    icon: TrendingUp,
  },
  {
    id: 3,
    title: "Healthcare Data Security Overhaul",
    client: "HealthFirst Medical Group",
    industry: "Healthcare",
    challenge: "HIPAA compliance issues with existing patient data system",
    result: "100% HIPAA compliance with zero breaches",
    metrics: {
      compliance: "100%",
      breaches: "0",
      speed: "+50%",
      audit: "24/7",
    },
    technologies: [".NET Core", "Azure", "React", "SQL Server"],
    color: "from-green-700 to-emerald-900",
    icon: Shield,
  },
  {
    id: 4,
    title: "AI-Powered Supply Chain Optimization",
    client: "Global Logistics Ltd",
    industry: "Logistics",
    challenge: "Inefficient routing and inventory management",
    result: "25% reduction in delivery times and $2M annual savings",
    metrics: {
      efficiency: "+25%",
      savings: "$2M",
      accuracy: "99%",
      fuel: "-15%",
    },
    technologies: ["Python", "TensorFlow", "AWS SageMaker", "React"],
    color: "from-orange-700 to-red-900",
    icon: Brain,
  },
  {
    id: 5,
    title: "Mobile-First Social Platform",
    client: "Connect Social Media",
    industry: "Social Media",
    challenge: "Poor mobile performance limiting user engagement",
    result: "3x increase in user engagement and 1M+ active users",
    metrics: {
      engagement: "3x",
      crashes: "-85%",
      loadTime: "1.5s",
      users: "1M+",
    },
    technologies: ["React Native", "GraphQL", "Node.js", "AWS"],
    color: "from-indigo-700 to-violet-900",
    icon: Users,
  },
];

export default function CaseStudiesPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedImpact, setSelectedImpact] = useState("all");
  const [selectedCaseStudy, setSelectedCaseStudy] = useState(null);
  const [activeCase, setActiveCase] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [hoveredStat, setHoveredStat] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [viewMode, setViewMode] = useState("carousel");
  const [backgroundShapes, setBackgroundShapes] = useState([]); // FIX: State for random shapes
  const intervalRef = useRef(null);

  // FIX: Generate random shapes only on client side to avoid hydration mismatch
  useEffect(() => {
    const shapes = Array.from({ length: 12 }).map(() => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      targetX: Math.random() * 100,
      targetY: Math.random() * 100,
      duration: Math.random() * 20 + 20,
      width: Math.floor(Math.random() * 4 + 2),
      height: Math.floor(Math.random() * 4 + 2),
      opacity: Math.floor(Math.random() * 5 + 5),
    }));
    setBackgroundShapes(shapes);
  }, []);

  // Auto-rotate carousel
  useEffect(() => {
    if (isPlaying) {
      intervalRef.current = setInterval(() => {
        setActiveCase((prev) => (prev + 1) % featuredCaseStudies.length);
      }, 24000);
    }
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isPlaying]);

  const handleNext = () => {
    setActiveCase((prev) => (prev + 1) % featuredCaseStudies.length);
  };

  const handlePrev = () => {
    setActiveCase((prev) => (prev - 1 + featuredCaseStudies.length) % featuredCaseStudies.length);
  };

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleReset = () => {
    setActiveCase(0);
    setIsPlaying(true);
  };

  const activeStudy = featuredCaseStudies[activeCase];
  const Icon = activeStudy.icon;

  // Filter case studies
  const filteredCaseStudies = caseStudies.filter((study) => {
    const matchesCategory = selectedCategory === "all" || study.category.includes(selectedCategory);

    const matchesImpact = selectedImpact === "all" || study.impact === selectedImpact;

    const matchesSearch =
      searchQuery === "" ||
      study.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      study.client.toLowerCase().includes(searchQuery.toLowerCase()) ||
      study.industry.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategory && matchesImpact && matchesSearch;
  });

  // Get category icon
  const getCategoryIcon = (category) => {
    const cat = categories.find((c) => c.id === category);
    if (cat) {
      const Icon = cat.icon;
      return <Icon className="w-4 h-4" />;
    }
    return null;
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-950">
      <section className="min-h-screen relative overflow-hidden pt-32 pb-20">
        {/* Animated Background */}
        <div className="absolute inset-0">
          {/* Dynamic gradient background based on active case */}
          <motion.div
            key={activeCase}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className={`absolute inset-0 bg-gradient-to-br ${activeStudy.color} opacity-10`}
          />

          {/* FIX: Floating geometric shapes (rendered from state) */}
          {backgroundShapes.map((shape, i) => (
            <motion.div
              key={i}
              className="absolute"
              initial={{
                x: `${shape.x}%`,
                y: `${shape.y}%`,
                rotate: 0,
              }}
              animate={{
                x: [null, `${shape.targetX}%`],
                y: [null, `${shape.targetY}%`],
                rotate: 360,
              }}
              transition={{
                duration: shape.duration,
                repeat: Infinity,
                ease: "linear",
              }}>
              <div className={`w-${shape.width} h-${shape.height} opacity-${shape.opacity}`}>
                <div className="w-full h-full border border-current rounded-full" />
              </div>
            </motion.div>
          ))}

          {/* Network grid background */}
          <div className="absolute inset-0 opacity-5">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="network" width="80" height="80" patternUnits="userSpaceOnUse">
                  <circle cx="10" cy="10" r="1" fill="currentColor" />
                  <circle cx="40" cy="10" r="1" fill="currentColor" />
                  <circle cx="70" cy="10" r="1" fill="currentColor" />
                  <circle cx="10" cy="40" r="1" fill="currentColor" />
                  <circle cx="40" cy="40" r="2" fill="currentColor" />
                  <circle cx="70" cy="40" r="1" fill="currentColor" />
                  <circle cx="10" cy="70" r="1" fill="currentColor" />
                  <circle cx="40" cy="70" r="1" fill="currentColor" />
                  <circle cx="70" cy="70" r="1" fill="currentColor" />
                  <path
                    d="M10 10 L40 10 M40 10 L70 10 M10 40 L40 40 M40 40 L70 40 M10 70 L40 70 M40 70 L70 70 M10 10 L10 40 M40 10 L40 40 M70 10 L70 40 M10 40 L10 70 M40 40 L40 70 M70 40 L70 70"
                    stroke="currentColor"
                    strokeWidth="0.3"
                    fill="none"
                  />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#network)" className="text-blue-500" />
            </svg>
          </div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 px-4 py-2 rounded-full mb-8 backdrop-blur-sm">
                <Sparkles className="w-4 h-4 text-blue-400" />
                <span className="text-sm font-medium text-blue-300">Success Stories</span>
              </motion.div>

              <h1 className="text-6xl md:text-8xl font-bold mb-8">
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Case Studies
                </span>
              </h1>

              <p className="text-2xl text-gray-400 max-w-3xl mx-auto mb-12">
                Interactive showcase of how we transform challenges into{" "}
                <span className="text-white font-semibold">remarkable results</span>
              </p>
            </motion.div>

            {/* Interactive Controls */}
            {/* <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex flex-col lg:flex-row gap-8 mb-12">
             
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
                  <input
                    type="text"
                    placeholder="Search case studies by industry, technology, or results..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl pl-12 pr-4 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500"
                  />
                </div>
              </div>

              
              <div className="flex items-center gap-4">
                <div className="flex bg-gray-900/50 border border-gray-800 rounded-xl p-1">
                  <button
                    onClick={() => setViewMode("carousel")}
                    className={`px-6 py-3 rounded-lg transition-all ${
                      viewMode === "carousel"
                        ? "bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-white"
                        : "text-gray-400 hover:text-white"
                    }`}>
                    Interactive View
                  </button>
                  <button
                    onClick={() => setViewMode("grid")}
                    className={`px-6 py-3 rounded-lg transition-all ${
                      viewMode === "grid"
                        ? "bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-white"
                        : "text-gray-400 hover:text-white"
                    }`}>
                    Grid View
                  </button>
                </div>

                <button className="flex items-center space-x-2 px-6 py-3 bg-gray-900/50 border border-gray-800 rounded-xl text-gray-300 hover:text-white hover:border-gray-700 transition-all">
                  <Filter className="w-5 h-5" />
                  <span>Filters</span>
                </button>
              </div>
            </motion.div> */}

            {/* Main Interactive Section */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
              {/* Left Column - Active Case Study */}
              <motion.div key={activeCase} initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} className="lg:col-span-2">
                <div className="relative h-full">
                  {/* Case Study Card */}
                  <div className="relative bg-gradient-to-br from-gray-900/80 to-gray-950/80 backdrop-blur-xl border border-gray-800 rounded-3xl overflow-hidden">
                    {/* Background Glow */}
                    <div className={`absolute inset-0 bg-gradient-to-r ${activeStudy.color} opacity-5 blur-3xl`} />

                    {/* Content */}
                    <div className="relative p-8 md:p-12">
                      {/* Header */}
                      <div className="flex items-start justify-between mb-8">
                        <div className="flex items-center space-x-4">
                          <div className={`p-4 rounded-2xl bg-gradient-to-r ${activeStudy.color}`}>
                            <Icon className="w-8 h-8 text-white" />
                          </div>
                          <div>
                            <div className="text-sm text-gray-400">{activeStudy.industry}</div>
                            <h3 className="text-3xl font-bold text-white">{activeStudy.client}</h3>
                          </div>
                        </div>
                        <div className="px-4 py-2 bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-full">
                          <span className="text-sm font-bold text-green-400">FEATURED</span>
                        </div>
                      </div>

                      {/* Title */}
                      <h2 className="text-4xl font-bold text-white mb-6 leading-tight">{activeStudy.title}</h2>

                      {/* Challenge & Result */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
                        <div>
                          <div className="flex items-center space-x-2 mb-4">
                            <div className="w-2 h-8 bg-gradient-to-b from-red-500 to-orange-500 rounded-full" />
                            <h4 className="text-lg font-bold text-white">The Challenge</h4>
                          </div>
                          <p className="text-gray-300 text-lg">{activeStudy.challenge}</p>
                        </div>
                        <div>
                          <div className="flex items-center space-x-2 mb-4">
                            <div className="w-2 h-8 bg-gradient-to-b from-green-500 to-emerald-500 rounded-full" />
                            <h4 className="text-lg font-bold text-white">The Result</h4>
                          </div>
                          <p className="text-gray-300 text-lg">{activeStudy.result}</p>
                        </div>
                      </div>

                      {/* Metrics Grid */}
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
                        {Object.entries(activeStudy.metrics).map(([key, value], index) => (
                          <motion.div
                            key={key}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.1 }}
                            className="text-center p-4 bg-gray-900/50 border border-gray-800 rounded-2xl">
                            <div className="text-2xl font-bold text-white mb-2">{value}</div>
                            <div className="text-xs text-gray-400 uppercase tracking-wider">{key.replace(/([A-Z])/g, " $1").trim()}</div>
                          </motion.div>
                        ))}
                      </div>

                      {/* Technologies */}
                      <div>
                        <h4 className="text-lg font-bold text-white mb-4">Technologies Used</h4>
                        <div className="flex flex-wrap gap-3">
                          {activeStudy.technologies.map((tech, index) => (
                            <motion.span
                              key={tech}
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: index * 0.05 }}
                              className="px-4 py-2 bg-gray-800 text-gray-300 rounded-xl hover:bg-gray-700 transition-colors cursor-pointer">
                              {tech}
                            </motion.span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Interactive Bottom Bar */}
                    <div className="border-t border-gray-800 p-6 bg-gray-900/50">
                      <div className="flex items-center justify-between">
                        {/* <div className="flex items-center space-x-4">
                          <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={handlePlayPause}
                            className="p-3 bg-gray-800 rounded-xl hover:bg-gray-700 transition-colors">
                            {isPlaying ? <Pause className="w-5 h-5 text-blue-400" /> : <Play className="w-5 h-5 text-green-400" />}
                          </motion.button>
                          <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={handleReset}
                            className="p-3 bg-gray-800 rounded-xl hover:bg-gray-700 transition-colors">
                            <RotateCcw className="w-5 h-5 text-gray-400" />
                          </motion.button>
                          <div className="text-sm text-gray-400">Auto-rotate: {isPlaying ? "ON" : "OFF"}</div>
                        </div> */}

                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="flex items-center space-x-3 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-bold hover:shadow-lg hover:shadow-blue-500/30 transition-all">
                          <span>View Full Case Study</span>
                          <ExternalLink className="w-5 h-5" />
                        </motion.button>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Right Column - Interactive Elements */}
              <div className="space-y-8">
                {/* Case Study Carousel Navigation */}
                <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-6">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-xl font-bold text-white">Explore Case Studies</h3>
                    <div className="text-sm text-gray-400">
                      {activeCase + 1} / {featuredCaseStudies.length}
                    </div>
                  </div>

                  {/* Navigation Controls */}
                  <div className="flex items-center justify-center space-x-4 mb-6">
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={handlePrev}
                      className="p-3 bg-gray-800 rounded-xl hover:bg-gray-700 transition-colors">
                      <ChevronLeft className="w-5 h-5 text-gray-300" />
                    </motion.button>

                    <div className="flex-1 h-2 bg-gray-800 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-blue-500 to-purple-500"
                        initial={{ width: "0%" }}
                        animate={{ width: `${((activeCase + 1) / featuredCaseStudies.length) * 100}%` }}
                        transition={{ duration: 0.3 }}
                      />
                    </div>

                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={handleNext}
                      className="p-3 bg-gray-800 rounded-xl hover:bg-gray-700 transition-colors">
                      <ChevronRight className="w-5 h-5 text-gray-300" />
                    </motion.button>
                  </div>

                  {/* Case Study Thumbnails */}
                  <div className="space-y-3">
                    {featuredCaseStudies.map((study, index) => {
                      const Icon = study.icon;
                      return (
                        <motion.button
                          key={study.id}
                          whileHover={{ x: 10 }}
                          onClick={() => setActiveCase(index)}
                          className={`w-full flex items-center space-x-4 p-4 rounded-xl border transition-all ${
                            index === activeCase
                              ? `bg-gradient-to-r ${study.color} bg-opacity-10 border-gray-700`
                              : "bg-gray-900/30 border-gray-800 hover:border-gray-700"
                          }`}>
                          <div className={`p-3 rounded-lg ${index === activeCase ? "bg-white/10" : "bg-gray-800"}`}>
                            <Icon className="w-5 h-5 text-gray-300" />
                          </div>
                          <div className="text-left flex-1">
                            <div className="text-sm font-medium text-white truncate">{study.client}</div>
                            <div className="text-xs text-gray-400 truncate">{study.industry}</div>
                          </div>
                          {index === activeCase && (
                            <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 animate-pulse" />
                          )}
                        </motion.button>
                      );
                    })}
                  </div>
                </div>

                {/* Stats Panel */}
                {/* <div className="bg-gradient-to-br from-gray-900/80 to-gray-950/80 backdrop-blur-xl border border-gray-800 rounded-2xl p-6">
                  <h3 className="text-xl font-bold text-white mb-6">Impact Metrics</h3>
                  <div className="space-y-4">
                    {heroStats.map((stat, index) => {
                      const Icon = stat.icon;
                      return (
                        <motion.div
                          key={stat.label}
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.5 + index * 0.1 }}
                          onMouseEnter={() => setHoveredStat(index)}
                          onMouseLeave={() => setHoveredStat(null)}
                          className={`p-4 rounded-xl border transition-all cursor-pointer ${
                            hoveredStat === index
                              ? "bg-gradient-to-r from-blue-500/10 to-purple-500/10 border-gray-700"
                              : "bg-gray-900/30 border-gray-800"
                          }`}>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-3">
                              <div
                                className={`p-2 rounded-lg ${
                                  hoveredStat === index ? "bg-gradient-to-r from-blue-500 to-purple-500" : "bg-gray-800"
                                }`}>
                                <Icon className={`w-5 h-5 ${hoveredStat === index ? "text-white" : "text-gray-400"}`} />
                              </div>
                              <div>
                                <div className="text-2xl font-bold text-white">{stat.value}</div>
                                <div className="text-sm text-gray-400">{stat.label}</div>
                              </div>
                            </div>
                            {hoveredStat === index && <ChevronRight className="w-5 h-5 text-blue-400" />}
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>
                </div> */}

                {/* Quick Filter Tags */}
                {/* <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-6">
                  <h3 className="text-xl font-bold text-white mb-4">Browse by Category</h3>
                  <div className="flex flex-wrap gap-2">
                    {[
                      { label: "Cloud Migration", icon: Cloud, color: "bg-blue-500/10 text-blue-400" },
                      { label: "AI/ML", icon: Brain, color: "bg-purple-500/10 text-purple-400" },
                      { label: "Data Analytics", icon: Database, color: "bg-green-500/10 text-green-400" },
                      { label: "Security", icon: Shield, color: "bg-yellow-500/10 text-yellow-400" },
                      { label: "Scalability", icon: TrendingUp, color: "bg-orange-500/10 text-orange-400" },
                      { label: "Real-time", icon: Zap, color: "bg-cyan-500/10 text-cyan-400" },
                    ].map((tag, index) => (
                      <motion.button
                        key={tag.label}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className={`flex items-center space-x-2 px-3 py-2 rounded-lg border border-gray-800 hover:border-gray-700 transition-all ${tag.color}`}>
                        <tag.icon className="w-4 h-4" />
                        <span className="text-sm font-medium">{tag.label}</span>
                      </motion.button>
                    ))}
                  </div>
                </div> */}
              </div>
            </div>

            {/* Case Study Progress Indicators */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex items-center justify-center space-x-4">
              {featuredCaseStudies.map((_, index) => (
                <motion.button key={index} onClick={() => setActiveCase(index)} className="relative" whileHover={{ scale: 1.2 }}>
                  <div
                    className={`w-3 h-3 rounded-full transition-all ${
                      index === activeCase ? "bg-gradient-to-r from-blue-500 to-purple-500 scale-125" : "bg-gray-700 hover:bg-gray-600"
                    }`}
                  />
                  {index === activeCase && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="absolute inset-0 w-5 h-5 border-2 border-blue-500/30 rounded-full -top-1 -left-1"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                    />
                  )}
                </motion.button>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Floating Action Buttons */}
        {/* <div className="fixed right-8 bottom-8 flex flex-col space-y-4">
          <motion.button
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="p-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full shadow-lg shadow-blue-500/30">
            <ArrowRight className="w-6 h-6" />
          </motion.button>

          <motion.button
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.7 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="p-4 bg-gray-900 border border-gray-800 text-gray-300 rounded-full shadow-lg hover:border-gray-700">
            <Search className="w-6 h-6" />
          </motion.button>
        </div> */}
      </section>

      {/* Filters Section */}
      <section className="py-8 border-t border-b border-gray-800">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
            {/* Search */}
            <div className="relative w-full lg:w-auto">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
              <input
                type="text"
                placeholder="Search case studies..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full lg:w-80 bg-gray-900/50 border border-gray-800 rounded-xl pl-12 pr-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500"
              />
            </div>

            {/* Filter Controls */}
            <div className="flex flex-wrap gap-4 items-center">
              <div className="flex items-center space-x-2">
                <Filter className="w-5 h-5 text-gray-400" />
                <span className="text-gray-300">Filter by:</span>
              </div>

              {/* Category Filter */}
              <div className="flex flex-wrap gap-2">
                {categories.slice(0, 4).map((category) => {
                  const Icon = category.icon;
                  const isActive = selectedCategory === category.id;
                  return (
                    <motion.button
                      key={category.id}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setSelectedCategory(category.id)}
                      className={`flex items-center space-x-2 px-4 py-2 rounded-lg border transition-all ${
                        isActive
                          ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white border-transparent"
                          : "bg-gray-900/50 border-gray-800 text-gray-300 hover:border-gray-700"
                      }`}>
                      <Icon className="w-4 h-4" />
                      <span className="text-sm font-medium">{category.label}</span>
                      <span className="text-xs opacity-75">{category.count}</span>
                    </motion.button>
                  );
                })}
              </div>

              {/* Impact Filter */}
              <select
                value={selectedImpact}
                onChange={(e) => setSelectedImpact(e.target.value)}
                className="bg-gray-900/50 border border-gray-800 rounded-lg px-4 py-2 text-gray-300 focus:outline-none focus:border-blue-500">
                {impactLevels.map((level) => (
                  <option key={level.id} value={level.id}>
                    {level.label}
                  </option>
                ))}
              </select>

              {/* View Mode Toggle */}
              <div className="flex bg-gray-900/50 border border-gray-800 rounded-lg p-1">
                <button
                  onClick={() => setViewMode("grid")}
                  className={`px-4 py-2 rounded-md transition-all ${
                    viewMode === "grid" ? "bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-white" : "text-gray-400 hover:text-white"
                  }`}>
                  Grid
                </button>
                <button
                  onClick={() => setViewMode("detailed")}
                  className={`px-4 py-2 rounded-md transition-all ${
                    viewMode === "detailed"
                      ? "bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-white"
                      : "text-gray-400 hover:text-white"
                  }`}>
                  Detailed
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <AnimatePresence mode="wait">
            {filteredCaseStudies.length === 0 ? (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="text-center py-20">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 mb-6">
                  <Search className="w-10 h-10 text-blue-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">No case studies found</h3>
                <p className="text-gray-400 max-w-md mx-auto">
                  Try adjusting your filters or search terms to find what you're looking for.
                </p>
              </motion.div>
            ) : (
              <motion.div
                key={viewMode}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className={viewMode === "grid" ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" : "space-y-8"}>
                {filteredCaseStudies.map((study, index) => (
                  <CaseStudyCard
                    key={study.id}
                    study={study}
                    index={index}
                    viewMode={viewMode}
                    onSelect={() => setSelectedCaseStudy(study)}
                  />
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* Featured Case Studies */}
      <section className="py-20 bg-gradient-to-b from-gray-900/50 to-transparent">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Featured <span className="text-blue-400">Success Stories</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Dive deeper into our most impactful projects and see the transformation in action.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {caseStudies
              .filter((s) => s.featured)
              .slice(0, 2)
              .map((study, index) => (
                <motion.div
                  key={study.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />

                  <div className="relative bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-3xl overflow-hidden">
                    {/* Header */}
                    <div className="p-8 border-b border-gray-800">
                      <div className="flex items-start justify-between mb-6">
                        <div>
                          <div className="flex items-center space-x-3 mb-4">
                            <div className="text-3xl">{study.logo}</div>
                            <div>
                              <div className="text-sm text-gray-400">{study.industry}</div>
                              <h3 className="text-2xl font-bold text-white">{study.client}</h3>
                            </div>
                          </div>
                          <h4 className="text-xl font-bold text-white mb-3">{study.title}</h4>
                          <p className="text-gray-400">{study.challenge}</p>
                        </div>
                        <div
                          className={`px-3 py-1 rounded-full text-xs font-bold ${
                            study.impact === "high"
                              ? "bg-green-500/20 text-green-400"
                              : study.impact === "medium"
                              ? "bg-yellow-500/20 text-yellow-400"
                              : "bg-blue-500/20 text-blue-400"
                          }`}>
                          {study.impact.toUpperCase()} IMPACT
                        </div>
                      </div>

                      {/* Tech Stack */}
                      <div className="flex flex-wrap gap-2">
                        {study.technologies.slice(0, 4).map((tech) => (
                          <span key={tech} className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Results */}
                    <div className="p-8">
                      <h5 className="text-lg font-bold text-white mb-4">Key Results</h5>
                      <div className="grid grid-cols-2 gap-4">
                        {study.results.slice(0, 4).map((result, i) => (
                          <div key={i} className="flex items-start space-x-3">
                            <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-300 text-sm">{result}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Footer */}
                    <div className="p-8 border-t border-gray-800">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-6 text-sm text-gray-400">
                          <div className="flex items-center space-x-2">
                            <Calendar className="w-4 h-4" />
                            <span>{study.duration}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Users className="w-4 h-4" />
                            <span>{study.teamSize}</span>
                          </div>
                        </div>
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => setSelectedCaseStudy(study)}
                          className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-bold hover:shadow-lg hover:shadow-blue-500/30 transition-all">
                          <span>View Full Case Study</span>
                          <ArrowRight className="w-5 h-5" />
                        </motion.button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Our <span className="text-purple-400">Process</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              From discovery to delivery, our proven methodology ensures success at every stage.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Discovery & Analysis",
                description: "Deep dive into challenges and requirements",
                icon: Search,
                color: "from-blue-500 to-cyan-500",
              },
              {
                step: "02",
                title: "Architecture Design",
                description: "Crafting scalable and efficient solutions",
                icon: Layers,
                color: "from-purple-500 to-pink-500",
              },
              {
                step: "03",
                title: "Implementation",
                description: "Agile development with continuous delivery",
                icon: Code,
                color: "from-green-500 to-emerald-500",
              },
              {
                step: "04",
                title: "Optimization & Support",
                description: "Performance tuning and ongoing maintenance",
                icon: Zap,
                color: "from-yellow-500 to-orange-500",
              },
            ].map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="relative group">
                {/* Connecting Line */}
                {index < 3 && (
                  <div className="hidden lg:block absolute top-1/2 right-0 w-8 h-px bg-gradient-to-r from-gray-800 to-transparent translate-x-full" />
                )}

                <div className="relative bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 text-center">
                  {/* Step Number */}
                  <div className={`inline-flex w-16 h-16 rounded-2xl bg-gradient-to-r ${step.color} items-center justify-center mb-6`}>
                    <span className="text-2xl font-bold text-white">{step.step}</span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                  <p className="text-gray-400">{step.description}</p>

                  {/* Icon */}
                  <div className="mt-6">
                    <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${step.color} bg-opacity-20`}>
                      <step.icon className="w-8 h-8 text-white" />
                    </div>
                  </div>

                  {/* Hover Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 rounded-3xl p-8 md:p-12 border border-gray-800">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-bold text-white mb-6">Ready to Write Your Success Story?</h2>
              <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
                Let's discuss how we can help you achieve similar results with your next project.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-bold hover:shadow-lg hover:shadow-blue-500/30 transition-all flex items-center justify-center space-x-3">
                  <span>Schedule a Consultation</span>
                  <ArrowRight className="w-5 h-5" />
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gray-900 border border-gray-800 text-gray-300 rounded-xl font-bold hover:bg-gray-800 transition-all">
                  Download Case Study PDF
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Case Study Modal */}
      <AnimatePresence>
        {selectedCaseStudy && <CaseStudyModal study={selectedCaseStudy} onClose={() => setSelectedCaseStudy(null)} />}
      </AnimatePresence>
    </div>
  );
}

// Case Study Card Component
function CaseStudyCard({ study, index, viewMode, onSelect }) {
  if (viewMode === "detailed") {
    return (
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }} className="group">
        <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 hover:border-gray-700 transition-colors">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column */}
            <div className="lg:col-span-2">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="text-2xl">{study.logo}</div>
                    <div>
                      <div className="text-sm text-gray-400">{study.industry}</div>
                      <h3 className="text-xl font-bold text-white">{study.client}</h3>
                    </div>
                  </div>
                  <h4 className="text-2xl font-bold text-white mb-4">{study.title}</h4>
                </div>
                <div
                  className={`px-3 py-1 rounded-full text-xs font-bold ${
                    study.impact === "high"
                      ? "bg-green-500/20 text-green-400"
                      : study.impact === "medium"
                      ? "bg-yellow-500/20 text-yellow-400"
                      : "bg-blue-500/20 text-blue-400"
                  }`}>
                  {study.impact.toUpperCase()} IMPACT
                </div>
              </div>

              <p className="text-gray-400 mb-6">{study.challenge}</p>

              <div className="mb-6">
                <h5 className="text-sm font-bold text-gray-300 mb-3">Technologies Used</h5>
                <div className="flex flex-wrap gap-2">
                  {study.technologies.map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {study.results.slice(0, 2).map((result, i) => (
                  <div key={i} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300 text-sm">{result}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-6">
              <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
                <h5 className="text-sm font-bold text-gray-300 mb-4">Project Details</h5>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400">Duration</span>
                    <span className="text-white font-medium">{study.duration}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400">Team Size</span>
                    <span className="text-white font-medium">{study.teamSize}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400">Categories</span>
                    <div className="flex gap-2">
                      {study.category.map((cat) => (
                        <span key={cat} className="px-2 py-1 bg-blue-500/10 text-blue-400 rounded text-xs">
                          {cat}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={onSelect}
                className="w-full py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-bold hover:shadow-lg hover:shadow-blue-500/30 transition-all flex items-center justify-center space-x-2">
                <span>View Case Study</span>
                <ArrowUpRight className="w-5 h-5" />
              </motion.button>
            </div>
          </div>
        </div>
      </motion.div>
    );
  }

  // Grid View
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -10 }}
      className="group">
      <div className="relative bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl overflow-hidden hover:border-gray-700 transition-colors">
        {/* Header */}
        <div className="p-6">
          <div className="flex items-start justify-between mb-4">
            <div className="text-3xl">{study.logo}</div>
            <div
              className={`px-2 py-1 rounded text-xs font-bold ${
                study.impact === "high"
                  ? "bg-green-500/20 text-green-400"
                  : study.impact === "medium"
                  ? "bg-yellow-500/20 text-yellow-400"
                  : "bg-blue-500/20 text-blue-400"
              }`}>
              {study.impact.toUpperCase()}
            </div>
          </div>

          <h3 className="text-xl font-bold text-white mb-2 line-clamp-2">{study.title}</h3>
          <p className="text-gray-400 text-sm mb-4 line-clamp-2">{study.challenge}</p>

          <div className="flex items-center space-x-4 text-sm text-gray-500">
            <div className="flex items-center space-x-1">
              <Calendar className="w-4 h-4" />
              <span>{study.duration}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Users className="w-4 h-4" />
              <span>{study.teamSize}</span>
            </div>
          </div>
        </div>

        {/* Categories */}
        <div className="px-6 pb-6">
          <div className="flex flex-wrap gap-2 mb-6">
            {study.category.map((cat) => (
              <span key={cat} className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-xs">
                {cat}
              </span>
            ))}
          </div>

          {/* Results Preview */}
          <div className="space-y-2 mb-6">
            {study.results.slice(0, 2).map((result, i) => (
              <div key={i} className="flex items-center space-x-2">
                <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-blue-500 to-purple-500" />
                <span className="text-gray-300 text-sm line-clamp-1">{result}</span>
              </div>
            ))}
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onSelect}
            className="w-full py-3 bg-gray-800 text-gray-300 rounded-xl font-bold hover:bg-gray-700 hover:text-white transition-all flex items-center justify-center space-x-2 group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:text-white">
            <span>Learn More</span>
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </div>

        {/* Hover Effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
      </div>
    </motion.div>
  );
}

// Case Study Modal Component
function CaseStudyModal({ study, onClose }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/80 backdrop-blur-sm"
      onClick={onClose}>
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-6xl max-h-[90vh] overflow-y-auto bg-gray-900 rounded-3xl border border-gray-800">
        {/* Close Button */}
        <button onClick={onClose} className="absolute top-6 right-6 z-10 p-3 bg-gray-800 rounded-xl hover:bg-gray-700 transition-colors">
          <X className="w-6 h-6 text-gray-300" />
        </button>

        {/* Hero Section */}
        <div className="relative h-64 md:h-80 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-6xl">{study.logo}</div>
          </div>
        </div>

        {/* Content */}
        <div className="p-8 md:p-12">
          {/* Header */}
          <div className="mb-12">
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-8">
              <div>
                <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 px-4 py-2 rounded-full mb-4">
                  <Building className="w-4 h-4 text-blue-400" />
                  <span className="text-sm font-medium text-blue-300">{study.industry}</span>
                </div>
                <h2 className="text-4xl font-bold text-white mb-4">{study.title}</h2>
                <div className="flex items-center space-x-4 text-gray-400">
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-5 h-5" />
                    <span>Duration: {study.duration}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Users className="w-5 h-5" />
                    <span>Team: {study.teamSize}</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-3">
                {study.category.map((cat) => (
                  <span key={cat} className="px-4 py-2 bg-gray-800 text-gray-300 rounded-full font-medium">
                    {cat}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* Challenge */}
              <div>
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center space-x-3">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-red-500/10 to-orange-500/10 border border-red-500/20 flex items-center justify-center">
                    <Target className="w-6 h-6 text-red-400" />
                  </div>
                  <span>The Challenge</span>
                </h3>
                <p className="text-gray-300 text-lg leading-relaxed">{study.challenge}</p>
              </div>

              {/* Solution */}
              <div>
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center space-x-3">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 flex items-center justify-center">
                    <CheckCircle className="w-6 h-6 text-green-400" />
                  </div>
                  <span>Our Solution</span>
                </h3>
                <p className="text-gray-300 text-lg leading-relaxed">{study.solution}</p>
              </div>

              {/* Results */}
              <div>
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center space-x-3">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/20 flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-blue-400" />
                  </div>
                  <span>Key Results</span>
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {study.results.map((result, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="bg-gray-900/50 border border-gray-800 rounded-2xl p-6">
                      <div className="flex items-center space-x-3 mb-4">
                        <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-green-500/20 to-emerald-500/20 flex items-center justify-center">
                          <CheckCircle className="w-5 h-5 text-green-400" />
                        </div>
                        <div className="text-2xl font-bold text-white">{index + 1}</div>
                      </div>
                      <p className="text-gray-300">{result}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Technologies */}
              <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-8">
                <h4 className="text-xl font-bold text-white mb-6">Technologies Used</h4>
                <div className="space-y-3">
                  {study.technologies.map((tech, index) => (
                    <div key={tech} className="flex items-center justify-between p-3 bg-gray-800/50 rounded-xl">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-blue-500/10 to-purple-500/10 flex items-center justify-center">
                          <Code className="w-4 h-4 text-blue-400" />
                        </div>
                        <span className="text-gray-300">{tech}</span>
                      </div>
                      <div className="text-xs text-gray-500">#{index + 1}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Metrics */}
              <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-8">
                <h4 className="text-xl font-bold text-white mb-6">Project Metrics</h4>
                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between text-sm text-gray-400 mb-2">
                      <span>Impact Level</span>
                      <span
                        className={`font-bold ${
                          study.impact === "high" ? "text-green-400" : study.impact === "medium" ? "text-yellow-400" : "text-blue-400"
                        }`}>
                        {study.impact.toUpperCase()}
                      </span>
                    </div>
                    <div className="w-full bg-gray-800 rounded-full h-2">
                      <div
                        className={`h-2 rounded-full ${
                          study.impact === "high"
                            ? "bg-gradient-to-r from-green-500 to-emerald-500 w-full"
                            : study.impact === "medium"
                            ? "bg-gradient-to-r from-yellow-500 to-orange-500 w-2/3"
                            : "bg-gradient-to-r from-blue-500 to-cyan-500 w-1/3"
                        }`}
                      />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-sm text-gray-400 mb-2">
                      <span>Complexity</span>
                      <span className="text-white font-bold">High</span>
                    </div>
                    <div className="w-full bg-gray-800 rounded-full h-2">
                      <div className="h-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 w-4/5" />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-sm text-gray-400 mb-2">
                      <span>Success Rate</span>
                      <span className="text-white font-bold">100%</span>
                    </div>
                    <div className="w-full bg-gray-800 rounded-full h-2">
                      <div className="h-2 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 w-full" />
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-bold hover:shadow-lg hover:shadow-blue-500/30 transition-all flex items-center justify-center space-x-3">
                <span>Get Similar Solution</span>
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
