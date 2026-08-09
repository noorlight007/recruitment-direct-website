"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import { Newspaper } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingElements from "@/components/FloatingElements";

export default function NewsPage() {
  useEffect(() => {
    const scriptId = "soro-blog-script";
    let script = document.getElementById(scriptId) as HTMLScriptElement | null;
    
    if (!script) {
      script = document.createElement("script");
      script.id = scriptId;
      script.src = "https://app.trysoro.com/api/embed/c9ed8402-55ef-4760-b165-0096c36917ea";
      script.defer = true;
      document.body.appendChild(script);
    } else {
      script.remove();
      script = document.createElement("script");
      script.id = scriptId;
      script.src = "https://app.trysoro.com/api/embed/c9ed8402-55ef-4760-b165-0096c36917ea";
      script.defer = true;
      document.body.appendChild(script);
    }

    return () => {
      const scriptToRemove = document.getElementById(scriptId);
      if (scriptToRemove) {
        scriptToRemove.remove();
      }
    };
  }, []);

  return (
    <div className="min-h-screen news-page">
      <style jsx global>{`
        .news-page {
          background-color: #ffffff !important;
          background-image: none !important;
          font-family: 'Inter', 'Poppins', sans-serif;
        }
        
        .news-page-content h1,
        .news-page-content h2,
        .news-page-content h3,
        .news-page-content h4,
        .news-page-content p,
        .news-page-content li,
        .news-page-content span {
          color: #0c0f19 !important;
        }

        .news-page-content .text-muted-dark {
          color: #475569 !important;
        }
      `}</style>

      <Navbar />

      <div className="news-page-content">
        {/* Header */}
        <header className="pt-32 pb-12 bg-white border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              {/* Category & Meta */}
              <div className="flex flex-wrap items-center gap-4 mb-6 text-sm text-muted-dark">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 font-semibold uppercase tracking-wider text-xs">
                  <Newspaper className="w-3.5 h-3.5" /> News & Insights
                </span>
              </div>

              {/* Title */}
              <h1 className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl tracking-tight mb-6 leading-tight">
                News & Insights
              </h1>

              {/* Subtitle */}
              <p className="text-xl text-muted-dark leading-relaxed font-normal mb-4 max-w-3xl">
                Stay updated with the latest news, recruitment trends, industry insights, and updates from Recruitment Direct.
              </p>
              <div className="text-base text-muted-dark leading-relaxed max-w-3xl space-y-4">
                <p>
                  Welcome to our industry insights hub. We publish weekly articles and reports covering employment law, HMRC tax compliance (such as CIS, VAT, and IR35), candidate sourcing methods, and hiring advice.
                </p>
                <p>
                  Our articles draw on our experience supplying temporary, contract, and permanent staff across Scotland and the UK since 2006. Whether you are a business looking for staffing trends in Construction, Logistics, and Engineering, or a candidate seeking compliance updates, our articles keep you informed.
                </p>
              </div>
            </motion.div>
          </div>
        </header>

        {/* Blog Feed Container */}
        <main className="py-16 bg-[#f8fafc]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-2xl p-6 sm:p-8 md:p-12 shadow-sm border border-gray-100 min-h-[400px]"
            >
              <h2 className="text-2xl font-bold font-heading text-black mb-6 border-b border-gray-100 pb-4">
                Our Latest Articles & Updates
              </h2>
              <div id="soro-blog"></div>
            </motion.div>
          </div>
        </main>
      </div>

      <Footer />
      <FloatingElements />
    </div>
  );
}
