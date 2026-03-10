"use client";

import { motion } from "framer-motion";
import {
  ShieldCheck,
  Zap,
  Smartphone,
  Globe,
  Lock,
  Database
} from "lucide-react";

import Header from "@/src/components/Header";

export default function FeaturesPage() {

  const features = [
    {
      icon: ShieldCheck,
      title: "Advanced Security",
      desc: "Enterprise-grade protection built to keep your data safe."
    },
    {
      icon: Zap,
      title: "Fast Performance",
      desc: "Optimized infrastructure delivering lightning-fast speed."
    },
    {
      icon: Smartphone,
      title: "Mobile Friendly",
      desc: "Fully responsive design that works perfectly on all devices."
    },
    {
      icon: Globe,
      title: "Global Access",
      desc: "Access the platform securely from anywhere in the world."
    },
    {
      icon: Lock,
      title: "Secure Authentication",
      desc: "Multi-layer authentication to protect user accounts."
    },
    {
      icon: Database,
      title: "Reliable Storage",
      desc: "Highly secure data storage with modern infrastructure."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white px-4 md:px-6 pt-24 pb-24">

      <Header />

      <div className="max-w-6xl mx-auto">

        {/* Title Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >

          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            Pantamart Features
          </h1>

          <p className="text-gray-400 max-w-2xl mx-auto">
            Powerful features designed to provide speed, security, and reliability
            for a next-generation digital platform.
          </p>

        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">

          {features.map((feature, i) => {

            const Icon = feature.icon;

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="bg-white/5 border border-white/10 rounded-xl p-5 backdrop-blur-lg"
              >

                <Icon className="text-green-400 mb-3" size={28} />

                <h3 className="font-semibold text-sm md:text-base mb-2">
                  {feature.title}
                </h3>

                <p className="text-gray-400 text-xs md:text-sm">
                  {feature.desc}
                </p>

              </motion.div>
            );
          })}

        </div>

      </div>
    </div>
  );
}