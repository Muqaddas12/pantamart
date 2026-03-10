"use client";

import { motion } from "framer-motion";
import {
  ShieldCheck,
  Lock,
  Sparkles,
  Fingerprint,
  Camera,
  DoorOpen,
  Bell,
  Wifi,
  Network,
  Code
} from "lucide-react";

import Header from "@/src/components/Header";

export default function LandingPage() {

  const products = [
    { icon: Fingerprint, title: "Biometric Systems", desc: "Fingerprint & face recognition attendance devices." },
    { icon: DoorOpen, title: "Smart Door Security", desc: "Smart locks, video door phones and doorbells." },
    { icon: Camera, title: "CCTV Surveillance", desc: "IP cameras, PTZ cameras, DVR and NVR systems." },
    { icon: ShieldCheck, title: "Security Accessories", desc: "Cables, connectors, power supplies and mounts." },
    { icon: Bell, title: "Alarm Systems", desc: "Fire alarms, motion sensors and burglar alarms." },
    { icon: Wifi, title: "Smart Home Devices", desc: "Smart switches, plugs and home automation hubs." },
    { icon: Network, title: "Networking Equipment", desc: "Routers, PoE switches, LAN cables and access points." },
    { icon: Code, title: "Security Software", desc: "Biometric APIs, attendance software and integrations." }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white px-4 md:px-6 pt-24 pb-24">

      <Header />

      {/* HERO SECTION */}
      <div className="max-w-5xl mx-auto text-center mb-24">

        {/* Icon */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center mb-6 md:mb-8"
        >
          <div className="p-5 md:p-6 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl">
            <ShieldCheck size={70} className="text-green-400 md:w-[80px] md:h-[80px]" />
          </div>
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 md:mb-6"
        >
          Pantamart Security
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-gray-300 text-sm sm:text-base md:text-xl mb-8 md:mb-10 max-w-2xl mx-auto"
        >
          A complete platform for security, surveillance and smart automation
          products for businesses and homes.
        </motion.p>

        {/* Mini Features */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-8 mb-10"
        >

          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="bg-white/5 border border-white/10 rounded-xl p-4 md:p-5 backdrop-blur-lg"
          >
            <Lock className="mx-auto mb-2 text-blue-400" size={24} />
            <p className="text-xs md:text-sm text-gray-300">
              End-to-End Encryption
            </p>
          </motion.div>

          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
            className="bg-white/5 border border-white/10 rounded-xl p-4 md:p-5 backdrop-blur-lg"
          >
            <ShieldCheck className="mx-auto mb-2 text-green-400" size={24} />
            <p className="text-xs md:text-sm text-gray-300">
              Advanced Protection
            </p>
          </motion.div>

          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity, delay: 0.6 }}
            className="bg-white/5 border border-white/10 rounded-xl p-4 md:p-5 backdrop-blur-lg col-span-2 md:col-span-1 mx-auto max-w-[180px]"
          >
            <Sparkles className="mx-auto mb-2 text-purple-400" size={24} />
            <p className="text-xs md:text-sm text-gray-300 text-center">
              Premium Experience
            </p>
          </motion.div>

        </motion.div>

        <div className="text-xl md:text-3xl font-semibold tracking-widest">
          Coming Soon
        </div>

      </div>

      {/* PRODUCTS SECTION */}
      <div className="max-w-6xl mx-auto">

        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-center text-2xl md:text-4xl font-bold mb-14"
        >
          Security Products We Offer
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">

          {products.map((item, i) => {

            const Icon = item.icon;

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="bg-white/5 border border-white/10 rounded-xl p-5 backdrop-blur-lg"
              >

                <Icon className="text-green-400 mb-3" size={28} />

                <h3 className="text-sm md:text-base font-semibold mb-2">
                  {item.title}
                </h3>

                <p className="text-xs md:text-sm text-gray-400">
                  {item.desc}
                </p>

              </motion.div>
            );

          })}

        </div>

      </div>

    </div>
  );
}