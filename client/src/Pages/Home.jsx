// src/pages/Home.jsx
import React from 'react'
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Brands from "../components/Brands";
import Process from "../components/Process";
import Features from "../components/Features";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Brands />
      <Process />
      <Features />
      <Testimonials />
      <Footer />
    </>
  );
}
