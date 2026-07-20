/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Header from "./components/Header";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import About from "./components/About";
import Services from "./components/Services";
import Brands from "./components/Brands";
import Industries from "./components/Industries";
import WhyChooseUs from "./components/WhyChooseUs";
import Workflow from "./components/Workflow";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col justify-between selection:bg-accent-orange/30 selection:text-navy">
      <Header />
      
      <main className="grow">
        <Hero />
        <Stats />
        <About />
        <Services />
        <Brands />
        <Industries />
        <WhyChooseUs />
        <Workflow />
        <Testimonials />
        <Contact />
      </main>

      <Footer />
      <BackToTop />
    </div>
  );
}

