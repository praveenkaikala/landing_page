"use client";

import {
  Users,
  Contact,
  ShoppingCart,
  Package,
  CheckSquare,
  Phone,
  Calendar,
  Workflow,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function CrmSection() {
  const features = [
    {
      icon: <Users className="w-6 h-6 text-theme" />,
      title: "Leads",
      desc: "Manage and track your leads efficiently.",
    },
    {
      icon: <Contact className="w-6 h-6 text-theme" />,
      title: "Contacts",
      desc: "Store and organize all your contacts.",
    },
    {
      icon: <ShoppingCart className="w-6 h-6 text-theme" />,
      title: "Sales",
      desc: "Monitor your sales pipeline and deals.",
    },
    {
      icon: <Package className="w-6 h-6 text-theme" />,
      title: "Products",
      desc: "Keep track of products and inventory.",
    },
    {
      icon: <CheckSquare className="w-6 h-6 text-theme" />,
      title: "Tasks",
      desc: "Assign and manage team tasks easily.",
    },
    {
      icon: <Phone className="w-6 h-6 text-theme" />,
      title: "Calls",
      desc: "Log and track customer calls seamlessly.",
    },
    {
      icon: <Calendar className="w-6 h-6 text-theme" />,
      title: "Meetings",
      desc: "Schedule and manage meetings with ease.",
    },
    {
      icon: <Workflow className="w-6 h-6 text-theme" />,
      title: "Workflow",
      desc: "Automate processes and save time.",
    },
  ];

  return (
    <section className="w-full bg-black text-white py-20 px-6 md:px-12">
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          All-in-One <span className="text-theme">CRM</span> Platform
        </h2>
        <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-12">
          Manage your entire customer journey in one place — from leads to
          workflows, designed to keep your business moving forward.
        </p>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-zinc-900 hover:bg-zinc-800 rounded-2xl p-6 text-left shadow-lg transition"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-400 text-sm">{feature.desc}</p>
            </div>
          ))}
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button className="bg-theme  px-8 py-3 rounded-full text-lg font-medium hover:scale-105 transition">
            Book a Demo
          </Button>
          <Button className="bg-white text-black px-8 py-3 rounded-full text-lg font-medium hover:scale-105 transition">
            Sign Up
          </Button>
        </div>
      </div>
    </section>
  );
}
