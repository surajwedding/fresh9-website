"use client";
import { useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import {
  ArrowRight,
  Leaf,
  Clock3,
  Menu,
  ChevronDown,
} from "lucide-react";

const products = [
  {
    name: "Green Detox",
    price: "₹89",
    desc: "Cucumber + Mint + Lemon",
    image: "/images/green-detox.png",
  },
  {
    name: "Morning Energy",
    price: "₹99",
    desc: "Orange + Carrot + Honey",
    image: "/images/morning-energy.png",
  },
  {
    name: "Fresh Fruit Bowl",
    price: "₹119",
    desc: "350g Fresh Seasonal Fruits",
    image: "/images/fresh-fruit-bowl.png",
  },
  {
    name: "Overnight Oats",
    price: "₹119",
    desc: "300g Healthy Breakfast Bowl",
    image: "/images/overnight-oats.png",
  },
];

export default function Home() {
  useEffect(() => {
  const nextBadge = document.querySelector(
    "nextjs-portal"
  ) as HTMLElement | null;

  if (nextBadge) {
    nextBadge.style.display = "none";
  }
}, []);
  return (
    <main className="bg-gradient-to-b from-[#F4FFF4] to-white min-h-screen">
      
      {/* Navbar */}
      {/* Premium Navbar */}
<header className="fixed top-5 left-1/2 z-50 w-[92%] max-w-7xl -translate-x-1/2">
  
  <div className="flex items-center justify-between rounded-full border border-white/30 bg-white/70 px-5 py-2 shadow-xl backdrop-blur-xl md:px-6">

    {/* Logo */}
    <div className="flex items-center">
      <Image
        src="/logo.png"
        alt="Fresh 9"
        width={180}
        height={80}
        priority
        className="h-auto w-[135px] md:w-[165px]"
      />
    </div>

    {/* Desktop Navigation */}
    <nav className="flex items-center rounded-full bg-white/90 px-2 py-2 shadow-inner">

      <a
        href="#menu"
        className="rounded-full px-6 py-2.5 text-base font-medium text-gray-700 transition hover:bg-green-100 hover:text-green-700 hover:scale-105"
      >
        Menu
      </a>

      <a
        href="#subscription"
        className="rounded-full px-7 py-3 text-base font-medium text-gray-700 transition hover:bg-green-100 hover:text-green-700 hover:scale-105"
      >
        Plans
      </a>

      <a
        href="#faq"
        className="rounded-full px-7 py-3 text-base font-medium text-gray-700 transition hover:bg-green-100 hover:text-green-700 hover:scale-105"
      >
        FAQ
      </a>
    </nav>

    {/* WhatsApp CTA */}
    <a
      href="https://wa.me/916002026780?text=Hi%20Fresh%209%20🌿%20I%20would%20like%20to%20know%20more%20about%20healthy%20breakfast%20plans."
      target="_blank"
      className="rounded-full bg-green-700 px-4 py-3 text-sm text-white"
    >
      Start Your Morning 🌿
    </a>

    {/* Mobile Menu Placeholder */}
    
  </div>
</header>

      {/* Hero */}
      {/* Premium Hero */}
<section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pt-36">

  {/* Animated Glow */}
  <motion.div
    animate={{
      scale: [1, 1.15, 1],
      opacity: [0.4, 0.7, 0.4],
    }}
    transition={{
      duration: 8,
      repeat: Infinity,
    }}
    className="absolute left-[-100px] top-[-100px] h-[450px] w-[450px] rounded-full bg-green-200 blur-[120px]"
  />

  <motion.div
    animate={{
      scale: [1, 1.2, 1],
      opacity: [0.3, 0.5, 0.3],
    }}
    transition={{
      duration: 10,
      repeat: Infinity,
    }}
    className="absolute bottom-[-100px] right-[-100px] h-[400px] w-[400px] rounded-full bg-lime-100 blur-[120px]"
  />

  {/* Floating Leaves */}
  <motion.div
    animate={{ y: [0, -12, 0] }}
    transition={{ repeat: Infinity, duration: 4 }}
    className="absolute left-[8%] top-[25%] hidden text-5xl opacity-20 lg:block"
  >
    🍃
  </motion.div>

  <motion.div
    animate={{ y: [0, -10, 0] }}
    transition={{ repeat: Infinity, duration: 5 }}
    className="absolute right-[12%] top-[30%] hidden text-4xl opacity-20 lg:block"
  >
    🌿
  </motion.div>

  <div className="relative z-10 max-w-5xl text-center">

    {/* Launch badge */}
    <motion.div
      initial={{ opacity: 0, y: -15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="inline-flex items-center gap-2 rounded-full border border-green-200 bg-white/80 px-6 py-3 shadow-lg backdrop-blur-xl"
    >
      <Leaf className="h-5 w-5 text-green-700" />
      <span className="font-medium text-green-700">
        Launching Soon in Guwahati
      </span>
    </motion.div>

    {/* Heading */}
    <motion.h1
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9 }}
      className="mt-10 text-4xl font-bold leading-tight text-gray-900 md:text-7xl"
    >
      Healthy Mornings, <br />
      Delivered Before{" "}
      <span className="bg-gradient-to-r from-green-700 to-lime-500 bg-clip-text text-transparent">
        9 AM 🌿
      </span>
    </motion.h1>

    {/* Subheading */}
    <motion.p
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3, duration: 0.8 }}
      className="mx-auto mt-6 max-w-2xl px-2 text-base leading-8 text-gray-600 md:text-xl"
    >
      Fresh juices, fruit bowls & healthy breakfasts
      delivered fresh every morning in Guwahati.
    </motion.p>

    {/* CTA */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 0.8 }}
      className="mt-10 flex flex-col justify-center gap-4 sm:flex-row"
    >
      <a
        href="https://wa.me/916002026780?text=Hi%20Fresh%209%20🌿%20I%20would%20like%20to%20know%20more%20about%20healthy%20breakfast%20plans."
        target="_blank"
        className="rounded-full bg-green-700 px-8 py-4 text-lg font-medium text-white shadow-xl transition hover:scale-105 hover:bg-green-800"
      >
        Order on WhatsApp
      </a>

      <a
        href="#menu"
        className="rounded-full border border-gray-300 bg-white px-8 py-4 text-lg font-medium text-gray-800 shadow-md transition hover:scale-105 hover:bg-gray-50"
      >
        Explore Menu
      </a>
    </motion.div>

    {/* Scroll Hint */}
    <motion.div
      animate={{ y: [0, 10, 0] }}
      transition={{ repeat: Infinity, duration: 2 }}
      className="mt-16 flex justify-center"
    >
      <ChevronDown className="h-8 w-8 text-green-700 opacity-60" />
    </motion.div>
  </div>
</section>

      {/* Menu */}
      {/* Trust Strip */}
<section className="relative z-20 -mt-12 px-6">
  <div className="mx-auto max-w-6xl rounded-[40px] border border-white/30 bg-white/80 p-5 shadow-2xl backdrop-blur-xl">

    <div className="grid gap-4 md:grid-cols-4">

      {/* Item 1 */}
      <motion.div
        whileHover={{ y: -5 }}
        className="flex items-center justify-center gap-3 rounded-[24px] bg-[#F8FFF8] px-5 py-5 transition"
      >
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-2xl">
          🌿
        </div>

        <div className="text-left">
          <h4 className="font-semibold text-gray-900">
            No Refined Sugar
          </h4>

          <p className="text-sm text-gray-500">
            Cleaner mornings
          </p>
        </div>
      </motion.div>

      {/* Item 2 */}
      <motion.div
        whileHover={{ y: -5 }}
        className="flex items-center justify-center gap-3 rounded-[24px] bg-[#F8FFF8] px-5 py-5 transition"
      >
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-2xl">
          ⏰
        </div>

        <div className="text-left">
          <h4 className="font-semibold text-gray-900">
            Before 9 AM
          </h4>

          <p className="text-sm text-gray-500">
            Morning delivery
          </p>
        </div>
      </motion.div>

      {/* Item 3 */}
      <motion.div
        whileHover={{ y: -5 }}
        className="flex items-center justify-center gap-3 rounded-[24px] bg-[#F8FFF8] px-5 py-5 transition"
      >
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-2xl">
          🥗
        </div>

        <div className="text-left">
          <h4 className="font-semibold text-gray-900">
            Daily Fresh
          </h4>

          <p className="text-sm text-gray-500">
            Prepared every morning
          </p>
        </div>
      </motion.div>

      {/* Item 4 */}
      <motion.div
        whileHover={{ y: -5 }}
        className="flex items-center justify-center gap-3 rounded-[24px] bg-[#F8FFF8] px-5 py-5 transition"
      >
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-2xl">
          💚
        </div>

        <div className="text-left">
          <h4 className="font-semibold text-gray-900">
            Rotating Menu
          </h4>

          <p className="text-sm text-gray-500">
            Healthy variety
          </p>
        </div>
      </motion.div>

    </div>
  </div>
</section>
      {/* Premium Menu */}
<section
  id="menu"
  className="mx-auto max-w-7xl px-6 py-24"
>
  <div className="text-center">
    <span className="rounded-full bg-green-100 px-5 py-2 text-sm font-medium text-green-700">
      Fresh Menu 🌿
    </span>

    <h2 className="mt-5 text-4xl font-bold text-gray-900 md:text-5xl">
      Healthy Choices For Your Morning
    </h2>

    <p className="mx-auto mt-4 max-w-2xl text-gray-500">
      Freshly prepared every morning & delivered before 9 AM.
    </p>
  </div>

  <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
    {products.map((item, i) => (
      <motion.div
        key={i}
        whileHover={{ y: -12 }}
        transition={{ duration: 0.3 }}
        className="group overflow-hidden rounded-[32px] border border-gray-100 bg-white shadow-sm hover:shadow-2xl transition-all"
      >
        <div className="overflow-hidden bg-gradient-to-b from-green-50 to-white p-5">
          <Image
            src={item.image}
            alt={item.name}
            width={500}
            height={500}
            className="mx-auto h-[220px] md:h-[260px] w-auto object-contain transition-transform duration-500 group-hover:scale-110"
          />
        </div>

        <div className="p-6 text-center">
          <h3 className="text-2xl font-semibold text-gray-900">
            {item.name}
          </h3>

          <p className="mt-2 text-sm text-gray-500">
            {item.desc}
          </p>

          <div className="mt-5 flex items-center justify-center">
            <span className="rounded-full bg-green-700 px-5 py-2 text-lg font-semibold text-white">
              {item.price}
            </span>
          </div>
        </div>
      </motion.div>
    ))}
  </div>
</section>
{/* Fresh Combos */}
<section className="bg-[#F8FFF8] px-6 py-24">
  <div className="mx-auto max-w-7xl text-center">

    <span className="rounded-full bg-green-100 px-5 py-2 text-sm font-medium text-green-700">
      Fresh Combos 🌿
    </span>

    <h2 className="mt-5 text-4xl font-bold text-gray-900 md:text-5xl">
      Better Together, Better Mornings
    </h2>

    <p className="mx-auto mt-4 max-w-2xl text-gray-500">
      Thoughtfully crafted healthy combos for busy mornings.
    </p>

    <div className="mt-16 grid gap-8 lg:grid-cols-2">

      {/* Fresh Start Combo */}
      <motion.div
        whileHover={{ y: -10 }}
        transition={{ duration: 0.3 }}
        className="group overflow-hidden rounded-[36px] border border-gray-100 bg-white p-8 shadow-sm hover:shadow-2xl transition"
      >
        <div className="mb-5 inline-flex rounded-full bg-green-100 px-4 py-2 text-sm font-medium text-green-700">
          Light & Refreshing 🌿
        </div>

        <div className="grid items-center gap-8 md:grid-cols-2">
          
          <div className="text-left">
            <h3 className="text-3xl font-bold text-gray-900">
              Fresh Start Combo
            </h3>

            <p className="mt-3 text-gray-500">
              Perfect light breakfast to refresh your morning.
            </p>

            <div className="mt-6 space-y-2 text-gray-700">
              <p>✔ Green Detox</p>
              <p>✔ Mini Fruit Bowl</p>
            </div>

            <div className="mt-8 text-4xl font-bold text-green-700">
              ₹149
            </div>
          </div>

          <div className="flex justify-center">
            <Image
              src="/images/fresh-start-combo.png"
              alt="Fresh Start Combo"
              width={450}
              height={450}
              className="h-[250px] w-auto object-contain transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        </div>
      </motion.div>

      {/* Power Morning Combo */}
      <motion.div
        whileHover={{ y: -10 }}
        transition={{ duration: 0.3 }}
        className="group relative overflow-hidden rounded-[36px] border-2 border-green-700 bg-white p-8 shadow-xl"
      >
        <div className="absolute right-4 top-4 rounded-full bg-green-700 px-3 py-2 text-xs font-medium text-white md:right-5 md:top-5 md:px-4 md:text-sm">
          Most Popular ⭐
        </div>

        <div className="mb-8 mt-10 inline-flex rounded-full bg-orange-100 px-4 py-2 text-sm font-medium text-orange-700 md:mt-0">
          Filling & Energizing ⚡
        </div>

        <div className="grid items-center gap-8 md:grid-cols-2">

          <div className="text-left">
            <h3 className="text-3xl font-bold text-gray-900">
              Power Morning Combo
            </h3>

            <p className="mt-3 text-gray-500">
              A filling breakfast combo to power your morning.
            </p>

            <div className="mt-6 space-y-2 text-gray-700">
              <p>✔ Morning Energy</p>
              <p>✔ Overnight Oats</p>
            </div>

            <div className="mt-8 text-4xl font-bold text-green-700">
              ₹189
            </div>
          </div>

          <div className="flex justify-center">
            <Image
              src="/images/power-morning-combo.png"
              alt="Power Morning Combo"
              width={450}
              height={450}
              className="h-[250px] w-auto object-contain transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        </div>
      </motion.div>

    </div>
  </div>
</section>
{/* Why Fresh 9 */}
<section className="bg-white px-6 py-24">
  <div className="mx-auto max-w-7xl text-center">

    <span className="rounded-full bg-green-100 px-5 py-2 text-sm font-medium text-green-700">
      Why Fresh 9? 🌿
    </span>

    <h2 className="mt-5 text-4xl font-bold text-gray-900 md:text-5xl">
      Built For Better Mornings
    </h2>

    <p className="mx-auto mt-4 max-w-2xl text-gray-500">
      Healthy mornings should be simple, fresh & stress-free.
    </p>

    <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">

      {/* Card 1 */}
      <motion.div
        whileHover={{ y: -10 }}
        className="rounded-[32px] border border-gray-100 bg-[#F8FFF8] p-8 shadow-sm hover:shadow-xl transition"
      >
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-3xl">
          🌿
        </div>

        <h3 className="mt-6 text-2xl font-semibold text-gray-900">
          No Refined Sugar
        </h3>

        <p className="mt-3 text-gray-500">
          Naturally healthier ingredients for a better start.
        </p>
      </motion.div>

      {/* Card 2 */}
      <motion.div
        whileHover={{ y: -10 }}
        className="rounded-[32px] border border-gray-100 bg-[#F8FFF8] p-8 shadow-sm hover:shadow-xl transition"
      >
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-3xl">
          ⏰
        </div>

        <h3 className="mt-6 text-2xl font-semibold text-gray-900">
          Before 9 AM
        </h3>

        <p className="mt-3 text-gray-500">
          Fresh breakfast delivered on time every morning.
        </p>
      </motion.div>

      {/* Card 3 */}
      <motion.div
        whileHover={{ y: -10 }}
        className="rounded-[32px] border border-gray-100 bg-[#F8FFF8] p-8 shadow-sm hover:shadow-xl transition"
      >
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-3xl">
          🥗
        </div>

        <h3 className="mt-6 text-2xl font-semibold text-gray-900">
          Daily Fresh
        </h3>

        <p className="mt-3 text-gray-500">
          Prepared fresh every morning for maximum freshness.
        </p>
      </motion.div>

      {/* Card 4 */}
      <motion.div
        whileHover={{ y: -10 }}
        className="rounded-[32px] border border-gray-100 bg-[#F8FFF8] p-8 shadow-sm hover:shadow-xl transition"
      >
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-3xl">
          💚
        </div>

        <h3 className="mt-6 text-2xl font-semibold text-gray-900">
          Rotating Menu
        </h3>

        <p className="mt-3 text-gray-500">
          Variety with healthy rotating breakfast options.
        </p>
      </motion.div>

    </div>
  </div>
</section>
{/* How Fresh 9 Works */}
<section className="bg-[#F9FFF9] px-6 py-24">
  <div className="mx-auto max-w-7xl text-center">

    <span className="rounded-full bg-green-100 px-5 py-2 text-sm font-medium text-green-700">
      How Fresh 9 Works 🌿
    </span>

    <h2 className="mt-5 text-4xl font-bold text-gray-900 md:text-5xl">
      Healthy Mornings Made Simple
    </h2>

    <p className="mx-auto mt-4 max-w-2xl text-gray-500">
      Fresh breakfasts delivered before 9 AM in just 3 simple steps.
    </p>

    <div className="mt-16 grid gap-8 md:grid-cols-3">

      {/* Step 1 */}
      <motion.div
        whileHover={{ y: -10 }}
        className="relative rounded-[32px] border border-gray-100 bg-white p-8 shadow-sm hover:shadow-xl transition"
      >
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-green-100 text-4xl font-bold text-green-700">
          1
        </div>

        <h3 className="mt-6 text-2xl font-semibold text-gray-900">
          Choose Your Breakfast
        </h3>

        <p className="mt-3 text-gray-500">
          Pick from healthy drinks, bowls or subscription plans.
        </p>
      </motion.div>

      {/* Step 2 */}
      <motion.div
        whileHover={{ y: -10 }}
        className="relative rounded-[32px] border border-gray-100 bg-white p-8 shadow-sm hover:shadow-xl transition"
      >
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-green-100 text-4xl font-bold text-green-700">
          2
        </div>

        <h3 className="mt-6 text-2xl font-semibold text-gray-900">
          Freshly Prepared
        </h3>

        <p className="mt-3 text-gray-500">
          We prepare everything fresh in the morning for quality & freshness.
        </p>
      </motion.div>

      {/* Step 3 */}
      <motion.div
        whileHover={{ y: -10 }}
        className="relative rounded-[32px] border border-gray-100 bg-white p-8 shadow-sm hover:shadow-xl transition"
      >
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-green-100 text-4xl font-bold text-green-700">
          3
        </div>

        <h3 className="mt-6 text-2xl font-semibold text-gray-900">
          Delivered Before 9 AM
        </h3>

        <p className="mt-3 text-gray-500">
          Fresh breakfast delivered to your doorstep before your day starts.
        </p>
      </motion.div>

    </div>
  </div>
</section>
{/* Subscription Section */}
{/* FAQ Section */}
<section
  id="faq"
  className="bg-white px-6 py-24"
>
  <div className="mx-auto max-w-4xl text-center">

    <span className="rounded-full bg-green-100 px-5 py-2 text-sm font-medium text-green-700">
      FAQ 🌿
    </span>

    <h2 className="mt-5 text-4xl font-bold text-gray-900 md:text-5xl">
      Frequently Asked Questions
    </h2>

    <p className="mx-auto mt-4 max-w-2xl text-gray-500">
      Everything you need to know about Fresh 9.
    </p>

    <div className="mt-14 space-y-5 text-left">

      <details className="group rounded-[28px] border border-gray-200 bg-[#F9FFF9] p-6 shadow-sm transition">
        <summary className="flex cursor-pointer list-none items-center justify-between text-lg font-semibold text-gray-900">
          Do you deliver every day?
          <span className="transition group-open:rotate-180">
            ▼
          </span>
        </summary>

        <p className="mt-4 text-gray-500">
          We deliver 6 days a week. Sunday remains off to maintain freshness & quality.
        </p>
      </details>

      <details className="group rounded-[28px] border border-gray-200 bg-[#F9FFF9] p-6 shadow-sm transition">
        <summary className="flex cursor-pointer list-none items-center justify-between text-lg font-semibold text-gray-900">
          What time will I receive my order?
          <span className="transition group-open:rotate-180">
            ▼
          </span>
        </summary>

        <p className="mt-4 text-gray-500">
          All deliveries are completed before 9 AM so your morning starts fresh.
        </p>
      </details>

      <details className="group rounded-[28px] border border-gray-200 bg-[#F9FFF9] p-6 shadow-sm transition">
        <summary className="flex cursor-pointer list-none items-center justify-between text-lg font-semibold text-gray-900">
          Do you use refined sugar?
          <span className="transition group-open:rotate-180">
            ▼
          </span>
        </summary>

        <p className="mt-4 text-gray-500">
          No. Fresh 9 focuses on healthier ingredients with no refined sugar.
        </p>
      </details>

      <details className="group rounded-[28px] border border-gray-200 bg-[#F9FFF9] p-6 shadow-sm transition">
        <summary className="flex cursor-pointer list-none items-center justify-between text-lg font-semibold text-gray-900">
          Can I order without subscription?
          <span className="transition group-open:rotate-180">
            ▼
          </span>
        </summary>

        <p className="mt-4 text-gray-500">
          Yes. Single orders are available with a minimum order value.
        </p>
      </details>

    </div>
  </div>
</section>
<section
  id="subscription"
  className="bg-[#F7FFF7] px-6 py-24"
>
  <div className="mx-auto max-w-7xl text-center">
    
    <span className="rounded-full bg-green-100 px-5 py-2 text-sm font-medium text-green-700">
      Subscription Plans 🌿
    </span>

    <h2 className="mt-5 text-4xl font-bold text-gray-900 md:text-5xl">
      Healthy Mornings Made Easy
    </h2>

    <p className="mx-auto mt-4 max-w-2xl text-gray-500">
      Fresh breakfasts delivered before 9 AM.
      Sunday Off for freshness & quality.
    </p>

    <div className="mt-16 grid gap-8 md:grid-cols-3">

      {/* 7 Day */}
      <motion.div
        whileHover={{ y: -10 }}
        className="rounded-[32px] border bg-white p-8 shadow-sm hover:shadow-2xl transition"
      >
        <h3 className="text-2xl font-bold text-gray-900">
          7 Day Trial
        </h3>

        <div className="mt-5 text-5xl font-bold text-green-700">
          ₹699
        </div>

        <p className="mt-3 text-gray-500">
          6 Fresh Deliveries
        </p>

        <p className="text-sm text-gray-400">
          Sunday Off
        </p>

        <a
  href="https://wa.me/916002026780?text=Hi%20Fresh%209%20🌿%20I%20am%20interested%20in%20the%207%20Day%20Trial%20Plan."
  target="_blank"
  className="mt-8 block w-full rounded-full bg-green-700 py-3 text-center text-white transition hover:bg-green-800"
>
  Choose Plan
</a>
      </motion.div>

      {/* 15 Day */}
      <motion.div
        whileHover={{ y: -10 }}
        className="rounded-[32px] border-2 border-green-700 bg-white p-8 shadow-xl"
      >
        <div className="mb-4 inline-block rounded-full bg-green-700 px-4 py-1 text-sm text-white">
          Most Popular
        </div>

        <h3 className="text-2xl font-bold text-gray-900">
          15 Day Plan
        </h3>

        <div className="mt-5 text-5xl font-bold text-green-700">
          ₹1499
        </div>

        <p className="mt-3 text-gray-500">
          13 Fresh Deliveries
        </p>

        <p className="text-sm text-gray-400">
          Sunday Off
        </p>

        <a
  href="https://wa.me/916002026780?text=Hi%20Fresh%209%20🌿%20I%20am%20interested%20in%20the%2015%20Day%20Plan."
  target="_blank"
  className="mt-8 block w-full rounded-full bg-green-700 py-3 text-center text-white transition hover:bg-green-800"
>
  Choose Plan
</a>
      </motion.div>

      {/* 30 Day */}
      <motion.div
        whileHover={{ y: -10 }}
        className="rounded-[32px] border bg-white p-8 shadow-sm hover:shadow-2xl transition"
      >
        <h3 className="text-2xl font-bold text-gray-900">
          30 Day Plan
        </h3>

        <div className="mt-5 text-5xl font-bold text-green-700">
          ₹2699
        </div>

        <p className="mt-3 text-gray-500">
          26 Fresh Deliveries
        </p>

        <p className="text-sm text-gray-400">
          Sunday Off
        </p>

        <a
  href="https://wa.me/916002026780?text=Hi%20Fresh%209%20🌿%20I%20am%20interested%20in%20the%2030%20Day%20Plan."
  target="_blank"
  className="mt-8 block w-full rounded-full bg-green-700 py-3 text-center text-white transition hover:bg-green-800"
>
  Choose Plan
</a>
      </motion.div>
    </div>
  </div>
</section>

{/* Floating WhatsApp Button */}
<a
  href="https://wa.me/916002026780?text=Hi%20Fresh%209%20🌿%20I%20would%20like%20to%20know%20more%20about%20healthy%20breakfast%20plans."
  target="_blank"
  className="fixed bottom-6 right-6 z-50 rounded-full bg-[#25D366] p-5 shadow-2xl hover:scale-110 transition"
>
  <FaWhatsapp className="text-white text-[34px]" />
</a>
{/* Footer */}
<footer className="bg-[#0F172A] text-white px-6 py-16">
  <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-3">

    {/* Brand */}
    <div>
      <Image
        src="/logo.png"
        alt="Fresh 9"
        width={160}
height={70}
      />

      <p className="mt-5 text-gray-300 leading-7">
        Healthy juices, fruit bowls & breakfasts
        delivered fresh before 9 AM in Guwahati.
      </p>

      <p className="mt-5 text-green-400 font-medium">
        Fresh Before 9 🌿
      </p>
    </div>

    {/* Quick Links */}
    <div>
      <h3 className="text-xl font-semibold">
        Quick Links
      </h3>

      <div className="mt-5 flex flex-col gap-3 text-gray-300">
        <a href="#menu" className="hover:text-green-400 transition">
          Menu
        </a>

        <a href="#subscription" className="hover:text-green-400 transition">
          Subscription
        </a>

        <a href="#faq" className="hover:text-green-400 transition">
          FAQ
        </a>
      </div>
    </div>

    {/* Contact */}
    <div>
      <h3 className="text-xl font-semibold">
        Connect
      </h3>

      <div className="mt-5 flex flex-col gap-3 text-gray-300">
        <p>📍 Guwahati, Assam</p>

        <a
  href="https://wa.me/916002026780?text=Hi%20Fresh%209%20🌿%20I%20would%20like%20to%20know%20more%20about%20healthy%20breakfast%20plans."
  target="_blank"
  className="flex items-center gap-2 hover:text-green-400 transition"
>
  <FaWhatsapp className="text-[20px] text-[#25D366]" />
  WhatsApp
</a>

        <a
  href="https://instagram.com/fresh9.in"
  target="_blank"
  className="flex items-center gap-2 hover:text-green-400 transition"
>
  <FaInstagram className="text-[20px]" />
  @fresh9.in
</a>
      </div>
    </div>
  </div>

  <div className="mt-14 border-t border-white/10 pt-6 text-center text-sm text-gray-400">
    © 2026 Fresh 9. All rights reserved.
  </div>
</footer>
    </main>
  );
}