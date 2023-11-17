"use client";

import LoadingSpinner from "@/components/LoadingSpinner";
import { useEffect, useState } from "react";
import ProductCard from "@/components/ProductCard/ProductCard";
import { products } from "@/data";

export default function CheckoutPage() {
  const [showSpinner, setShowSpinner] = useState(true);

  useEffect(() => {
    // Fake loading time
    setTimeout(() => {
      setShowSpinner(false);
    }, 800);
  }, []);

  return (
    <div className="flex min-h-[60vh] items-center justify-center">
      {showSpinner && <LoadingSpinner />}
      {!showSpinner && (
        <div className="grid animate-fadeUp grid-cols-[2fr_1fr] gap-8">
          <div className="rounded bg-gray-100 p-8">
            <div className="grid gap-4">
              <div className="rounded-full bg-gray-200 p-4"></div>
              <div className="w-3/4 rounded-full bg-gray-200 p-3"></div>
            </div>
          </div>
          <div className="rounded bg-gray-100 p-4">
            <ProductCard product={products[0]} />
          </div>
        </div>
      )}
    </div>
  );
}
