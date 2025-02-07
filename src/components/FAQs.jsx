import { useState } from "react";
import { motion } from "framer-motion";

const faqs = [
  { question: "What payment methods do you accept?", answer: "We accept credit/debit cards, PayPal, Apple Pay, Google Pay, and cryptocurrency." },
  { question: "Do you offer international shipping?", answer: "Yes! We ship worldwide with reliable courier services. Shipping fees may vary." },
  { question: "How can I track my order?", answer: "Once your order is shipped, you'll receive a tracking number via email." },
  { question: "What is your return policy?", answer: "You can return items within 30 days for a full refund. Conditions apply." },
  { question: "How do I reset my password?", answer: "Go to the login page, click 'Forgot Password,' and follow the instructions." },
  { question: "Do you offer discounts or promotions?", answer: "Yes! Subscribe to our newsletter to receive exclusive discounts." },
  { question: "Is my payment information secure?", answer: "Yes! We use industry-standard encryption to protect your data." },
  { question: "How can I contact customer support?", answer: "You can reach us via live chat, email, or phone support 24/7." },
  { question: "Do you have a mobile app?", answer: "Yes! Our mobile app is available on iOS and Android." },
  { question: "Can I change my shipping address after placing an order?", answer: "If the order isn’t shipped yet, you can update it from your account." },
  { question: "How long does delivery take?", answer: "Delivery time varies by location but usually takes 3-7 business days." },
  { question: "What happens if I receive a damaged item?", answer: "Contact our support team immediately, and we'll replace it for free." },
  { question: "Do you offer gift wrapping?", answer: "Yes! You can add gift wrapping and a custom message at checkout." },
  { question: "Can I cancel my order?", answer: "You can cancel your order within 24 hours before it's processed." },
  { question: "Are your products eco-friendly?", answer: "Many of our products are sustainable and eco-friendly. Check product details for more info." },
  { question: "Do you have a loyalty program?", answer: "Yes! Earn points for every purchase and redeem them for discounts." },
  { question: "How do I leave a product review?", answer: "Go to the product page and click 'Write a Review' after purchase." },
  { question: "Can I buy items in bulk?", answer: "Yes! Contact us for bulk pricing and wholesale orders." },
  { question: "Do you restock sold-out items?", answer: "Yes, we restock popular items frequently. Join the waitlist for notifications." },
  { question: "How do I sign up for newsletters?", answer: "Enter your email at the bottom of our website to receive updates and deals." }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white flex justify-center items-center p-6">
      <div className="w-full max-w-4xl">
        <h1 className="text-4xl font-bold text-center text-blue-400 mb-8">Frequently Asked Questions</h1>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div 
              key={index} 
              className="bg-gray-800 rounded-2xl p-4 shadow-lg border border-gray-700"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <button 
                onClick={() => toggleFAQ(index)} 
                className="flex justify-between items-center w-full text-lg font-medium"
              >
                <span>{faq.question}</span>
                <span className="text-blue-400 text-xl">
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>

              {openIndex === index && (
                <motion.p 
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -5 }}
                  className="mt-2 text-gray-400"
                >
                  {faq.answer}
                </motion.p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
