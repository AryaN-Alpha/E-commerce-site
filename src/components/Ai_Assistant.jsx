import React, { useState } from 'react';
import { GoogleGenerativeAI } from '@google/generative-ai';

function Ai_Assistant() {
  const [inputText, setInputText] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    try {
      const genAI = new GoogleGenerativeAI("AIzaSyAsc1EHjL_DOKuH4qm-yrWd1iUIPJBrA6U");
      const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
      const result = await model.generateContent(inputText);
      setResponse(await result.response.text());
    } catch (error) {
      console.error("Error fetching response:", error);
      setResponse("🚨 Error: Unable to process your request. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-pink-900 to-slate-900 flex items-center justify-center p-4 animate-gradient-x">
      <div className="w-full max-w-2xl bg-white/5 backdrop-blur-xl rounded-3xl shadow-2xl p-8 transition-all duration-500 hover:shadow-3xl border border-white/10 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-20 -left-20 w-96 h-96 bg-teal-500/10 rounded-full mix-blend-screen filter blur-3xl animate-float"></div>
          <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-pink-500/10 rounded-full mix-blend-screen filter blur-3xl animate-float-delayed"></div>
        </div>

        <h2 className="text-5xl font-bold text-center mb-10 bg-gradient-to-r from-teal-400 via-pink-400 to-teal-400 bg-clip-text text-transparent animate-text-gradient">
          AI Assistant
        </h2>

        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="space-y-4">
            <label className="block text-xl font-medium text-transparent bg-gradient-to-r from-teal-300 to-pink-300 bg-clip-text">
              Ask Me Anything
            </label>
            <div className="relative group">
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder="Type your question here..."
                className="w-full px-8 py-6 bg-black/20 border-2 border-white/10 rounded-2xl text-xl text-white placeholder-gray-400 focus:outline-none focus:border-teal-400 focus:ring-4 focus:ring-teal-500/30 transition-all duration-300 group-hover:border-white/30 pr-20"
                required
              />
              <div className="absolute right-4 top-1/2 -translate-y-1/2">
                <span className="text-gray-400 text-2xl">🚀</span>
              </div>
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-5 bg-gradient-to-r from-teal-500 to-pink-600 hover:from-teal-600 hover:to-pink-700 text-white font-bold text-xl rounded-2xl transition-all duration-500 transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-white/10 group-hover:bg-white/5 transition-all duration-300"></div>
            {loading ? (
              <div className="flex items-center justify-center space-x-3">
                <div className="w-8 h-8 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
                <span className="animate-pulse">Generating Answers...</span>
              </div>
            ) : (
              <>
                <span className="relative z-10">🌌 Ask the AI</span>
                <div className="absolute inset-0 flex items-center justify-center space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-2 h-2 bg-white rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                </div>
              </>
            )}
          </button>
        </form>

        {response && (
          <div className="mt-10 animate-slide-up">
            <div className="p-8 bg-black/20 backdrop-blur-lg rounded-2xl border-l-4 border-teal-400 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-teal-500/10 to-pink-500/10"></div>
              <div className="relative">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-xl font-semibold bg-gradient-to-r from-teal-300 to-pink-300 bg-clip-text text-transparent">
                    AI Response 🌠
                  </h3>
                  <button 
                    onClick={() => navigator.clipboard.writeText(response)}
                    className="p-2 hover:bg-white/10 rounded-lg transition-colors duration-300"
                    title="Copy response"
                  >
                    📋
                  </button>
                </div>
                <p className="text-gray-200 leading-relaxed whitespace-pre-line transition-all duration-500">
                  {response.split('').map((char, index) => (
                    <span 
                      key={index} 
                      className="animate-typing"
                      style={{ animationDelay: `${index * 0.02}s` }}
                    >
                      {char}
                    </span>
                  ))}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Ai_Assistant;