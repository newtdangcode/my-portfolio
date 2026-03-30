"use client";

import { Profile } from "@/types";
import { motion } from "framer-motion";

interface AboutSectionProps {
  profile: Profile;
}

export function AboutSection({ profile }: AboutSectionProps) {
  return (
    <section className="py-24 px-6 relative z-10" id="about">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative group"
          >
            <div className="absolute -inset-4 bg-gradient-to-br from-primary-container/20 to-secondary/20 blur-2xl group-hover:blur-3xl transition-all opacity-50"></div>
            <div className="relative aspect-square rounded-3xl overflow-hidden border border-outline-variant/20 hover:scale-[1.02] transition-transform duration-500">
              <img
                alt="Tran Ngoc Tan Portrait"
                className="w-full h-full object-cover"
                src="/me.jpg"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            <h2 className="text-label text-sm font-bold tracking-[0.3em] uppercase text-primary mb-4">
              Technical Background
            </h2>
            <h3 className="text-4xl font-headline font-bold mb-6">
              Bridging <span className="text-secondary">Security</span> &amp; Development
            </h3>
            <p className="text-on-surface-variant text-lg leading-relaxed mb-8">
              {profile.about}
            </p>

            <div className="grid grid-cols-2 gap-6">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="p-6 rounded-2xl bg-surface-container-low border-l-4 border-primary shadow-xl"
              >
                <div className="text-3xl font-bold font-headline mb-1">2+</div>
                <div className="text-label text-xs uppercase text-on-surface-variant">Years Experience</div>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="p-6 rounded-2xl bg-surface-container-low border-l-4 border-secondary shadow-xl"
              >
                <div className="text-3xl font-bold font-headline mb-1">10+</div>
                <div className="text-label text-xs uppercase text-on-surface-variant">Projects Delivered</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
