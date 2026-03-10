"use client";

import { motion } from "framer-motion";
import { Mail, Send, ShieldCheck } from "lucide-react";
import Header from "@/src/components/Header";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white px-4 md:px-6 pt-24 pb-24">

      <Header />

      <div className="max-w-4xl mx-auto text-center">

        {/* Icon */}
        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="flex justify-center mb-8"
        >
          <div className="p-6 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl">
            <Mail size={70} className="text-green-400" />
          </div>
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-5xl font-bold mb-6"
        >
          Contact Us
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-gray-400 max-w-xl mx-auto mb-10"
        >
          Have questions or want early access to Pantamart?  
          Feel free to reach out to us anytime.
        </motion.p>

        {/* Contact Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-lg max-w-lg mx-auto"
        >

          <Mail className="mx-auto text-green-400 mb-4" size={30} />

          <p className="text-gray-300 mb-4 text-sm md:text-base">
            Send us an email
          </p>

          <a
            href="mailto:tombshadow112@gmail.com"
            className="text-green-400 text-lg font-semibold hover:underline"
          >
            tombshadow112@gmail.com
          </a>

          <div className="mt-6 text-gray-500 text-xs flex items-center justify-center gap-2">
            <ShieldCheck size={16} />
            Secure communication
          </div>

        </motion.div>

        {/* Extra Message */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-12 text-gray-500 text-sm"
        >
          We usually respond within 24 hours.
        </motion.div>

      </div>
    </div>
  );
}