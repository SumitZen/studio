"use client";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  UploadCloud,
  FolderKanban,
  Share2,
  Lock,
  BadgeCheck,
  ShieldCheck,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { motion } from "framer-motion";


type Feature = {
  icon: LucideIcon;
  title: string;
  description: string;
};

const features: Feature[] = [
  {
    icon: UploadCloud,
    title: "Secure Document Upload",
    description: "Easily upload and store your credentials with end-to-end encryption, ensuring your data is always safe.",
  },
  {
    icon: FolderKanban,
    title: "Categorized Certificates",
    description: "Automatically organize your documents into categories like Education, Work, and Skills for easy access.",
  },
  {
    icon: Share2,
    title: "Shareable Professional Portfolio",
    description: "Generate a unique, professional portfolio link to showcase your verified credentials to employers.",
  },
  {
    icon: Lock,
    title: "Granular Privacy Controls",
    description: "You decide who sees what. Manage permissions and control access to your sensitive documents.",
  },
  {
    icon: BadgeCheck,
    title: "Institution Verification",
    description: "Our integrated system allows educational and professional institutions to verify your credentials' authenticity.",
  },
  {
    icon: ShieldCheck,
    title: "Data Encryption",
    description: "We use state-of-the-art encryption for data at rest and in transit, providing bank-level security for your information.",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" }
  },
};

export function Features() {
  return (
    <section id="features" className="py-20 sm:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Everything You Need to Succeed
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            CredentialHub provides a comprehensive suite of tools to manage and present your professional achievements.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="flex flex-col h-full bg-card/50 backdrop-blur-lg border-border/20 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 hover:shadow-primary/20">
                <CardHeader className="flex flex-row items-center gap-4 pb-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                     <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>{feature.title}</CardTitle>
                </CardHeader>
                <CardDescription className="p-6 pt-0">{feature.description}</CardDescription>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
