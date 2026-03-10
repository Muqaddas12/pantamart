"use client";

import { motion } from "framer-motion";
import { Rocket, Calendar, Bell, Sparkles } from "lucide-react";
import Header from "@/src/components/Header";

export default function LaunchPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white px-4 md:px-6 pt-24 pb-24">

      <Header />

      <div className="max-w-5xl mx-auto text-center">

        {/* Rocket Icon */}
        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="flex justify-center mb-8"
        >
          <div className="p-6 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl">
            <Rocket size={70} className="text-green-400" />
          </div>
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-6xl font-bold mb-6"
        >
          Launching Soon
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-gray-400 max-w-2xl mx-auto mb-12"
        >
          Pantamart is preparing for launch. We are building a secure,
          powerful platform designed for the next generation of digital
          services.
        </motion.p>

        {/* Launch Features */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 mb-14"
        >

          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="bg-white/5 border border-white/10 rounded-xl p-6 backdrop-blur-lg"
          >
            <Calendar className="mx-auto text-blue-400 mb-3" size={28} />
            <p className="text-sm text-gray-300">
              Planned Launch Timeline
            </p>
          </motion.div>

          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
            className="bg-white/5 border border-white/10 rounded-xl p-6 backdrop-blur-lg"
          >
            <Bell className="mx-auto text-green-400 mb-3" size={28} />
            <p className="text-sm text-gray-300">
              Get Launch Notifications
            </p>
          </motion.div>

          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity, delay: 0.6 }}
            className="bg-white/5 border border-white/10 rounded-xl p-6 backdrop-blur-lg"
          >
            <Sparkles className="mx-auto text-purple-400 mb-3" size={28} />
            <p className="text-sm text-gray-300">
              Exclusive Early Access
            </p>
          </motion.div>

        </motion.div>

        {/* Countdown Placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-2xl md:text-3xl font-semibold tracking-widest"
        >
          Stay Tuned
        </motion.div>

        <motion.div
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-gray-500 mt-3 text-sm"
        >
          Something big is coming 🚀
        </motion.div>

      </div>
    </div>
  );
}