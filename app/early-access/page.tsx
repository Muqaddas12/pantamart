"use client";

import { motion } from "framer-motion";
import {
  ShieldCheck,
  Fingerprint,
  Camera,
  DoorOpen,
  Bell,
  Wifi,
  Network,
  Code
} from "lucide-react";

import Header from "@/src/components/Header";

export default function EarlyAccessPage() {

  const categories = [
    {
      icon: Fingerprint,
      title: "Biometric & Access Control",
      items: [
        "Fingerprint attendance machines",
        "Face recognition devices",
        "RFID card readers",
        "Door access controllers",
        "Time attendance systems"
      ]
    },
    {
      icon: DoorOpen,
      title: "Smart Door Security",
      items: [
        "Smart door locks",
        "Video door phones",
        "Smart doorbells",
        "Electric magnetic locks",
        "Door exit buttons"
      ]
    },
    {
      icon: Camera,
      title: "CCTV & Surveillance",
      items: [
        "CCTV cameras",
        "PTZ cameras",
        "IP cameras",
        "CCTV DVR / NVR",
        "CCTV kits"
      ]
    },
    {
      icon: ShieldCheck,
      title: "CCTV Accessories",
      items: [
        "CCTV cables",
        "Power supplies",
        "BNC connectors",
        "Hard disks for DVR/NVR",
        "Camera stands & mounts"
      ]
    },
    {
      icon: Bell,
      title: "Alarm & Safety Systems",
      items: [
        "Fire alarm systems",
        "Smoke detectors",
        "Motion sensors",
        "Burglar alarm systems",
        "Panic buttons"
      ]
    },
    {
      icon: Wifi,
      title: "Smart Home Security",
      items: [
        "Smart plugs",
        "Smart switches",
        "Home automation hubs",
        "WiFi security devices"
      ]
    },
    {
      icon: Network,
      title: "Networking Equipment",
      items: [
        "Routers",
        "Network switches",
        "PoE switches",
        "LAN cables",
        "Wireless access points"
      ]
    },
    {
      icon: Code,
      title: "Integration & Software",
      items: [
        "Biometric device APIs",
        "Access control software",
        "Visitor management systems",
        "Attendance software"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white px-4 md:px-6 pt-24 pb-24">

      <Header />

      <div className="max-w-6xl mx-auto">

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >

          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            Early Access Products
          </h1>

          <p className="text-gray-400 max-w-2xl mx-auto">
            Pantamart will provide a complete range of security, surveillance,
            smart automation and networking products for businesses and homes.
          </p>

        </motion.div>

        {/* Categories */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">

          {categories.map((category, i) => {

            const Icon = category.icon;

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="bg-white/5 border border-white/10 rounded-xl p-6 backdrop-blur-lg"
              >

                <Icon className="text-green-400 mb-4" size={28} />

                <h3 className="font-semibold mb-3">
                  {category.title}
                </h3>

                <ul className="text-sm text-gray-400 space-y-1">
                  {category.items.map((item, index) => (
                    <li key={index}>• {item}</li>
                  ))}
                </ul>

              </motion.div>
            );
          })}

        </div>

        {/* Bottom Message */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-center mt-16 text-gray-500"
        >
          More security products and integrations will be added soon.
        </motion.div>

      </div>
    </div>
  );
}