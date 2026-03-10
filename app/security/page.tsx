"use client";

import { motion } from "framer-motion";
import {
  ShieldCheck,
  Lock,
  KeyRound,
  Server,
  Fingerprint,
  Globe
} from "lucide-react";

import Header from "@/src/components/Header";

export default function SecurityPage() {
  const features = [
    {
      icon: Lock,
      title: "End-to-End Encryption",
      desc: "All data is encrypted using modern cryptographic standards."
    },
    {
      icon: KeyRound,
      title: "Secure Authentication",
      desc: "Multi-layer authentication protects every account."
    },
    {
      icon: Server,
      title: "Protected Infrastructure",
      desc: "Enterprise-grade cloud infrastructure with advanced protection."
    },
    {
      icon: Fingerprint,
      title: "Identity Protection",
      desc: "Advanced identity verification and fraud prevention."
    },
    {
      icon: Globe,
      title: "Global Security Network",
      desc: "Distributed security monitoring across global systems."
    },
    {
      icon: ShieldCheck,
      title: "Real-Time Monitoring",
      desc: "Threat detection with continuous monitoring."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white px-4 md:px-6 pt-24 pb-24">

      <Header />

      <div className="max-w-6xl mx-auto">

        {/* Page Title */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <ShieldCheck className="mx-auto mb-6 text-green-400" size={70} />

          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            Pantamart Security
          </h1>

          <p className="text-gray-400 max-w-2xl mx-auto">
            Security is at the core of Pantamart. We use advanced encryption,
            modern infrastructure, and intelligent monitoring to keep users safe.
          </p>
        </motion.div>

        {/* Security Features */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">

          {features.map((item, i) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="bg-white/5 border border-white/10 rounded-xl p-5 backdrop-blur-lg"
              >
                <Icon className="text-green-400 mb-3" size={26} />

                <h3 className="font-semibold text-sm md:text-base mb-2">
                  {item.title}
                </h3>

                <p className="text-gray-400 text-xs md:text-sm">
                  {item.desc}
                </p>
              </motion.div>
            );
          })}

        </div>

        {/* Security Stats */}
        <div className="mt-20 grid grid-cols-3 text-center gap-6">

          <div>
            <p className="text-2xl md:text-4xl font-bold text-green-400">
              256-bit
            </p>
            <p className="text-gray-400 text-sm">Encryption</p>
          </div>

          <div>
            <p className="text-2xl md:text-4xl font-bold text-green-400">
              24/7
            </p>
            <p className="text-gray-400 text-sm">Monitoring</p>
          </div>

          <div>
            <p className="text-2xl md:text-4xl font-bold text-green-400">
              99.99%
            </p>
            <p className="text-gray-400 text-sm">System Reliability</p>
          </div>

        </div>

      </div>
    </div>
  );
}