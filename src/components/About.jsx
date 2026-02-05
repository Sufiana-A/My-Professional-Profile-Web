import React from "react";
import { useTranslation } from "../hooks/useTranslation";

const About = () => {
  const { t } = useTranslation();
  
  // Function to render text with highlights
  const renderTextWithHighlights = (text, highlights = []) => {
    if (!text) return null;
    
    // Sort highlights by position in text (longest first to avoid overlap issues)
    const sortedHighlights = [...highlights].sort((a, b) => b.text.length - a.text.length);
    
    let parts = [{ text, highlighted: false }];
    
    sortedHighlights.forEach(highlight => {
      const newParts = [];
      
      parts.forEach(part => {
        if (part.highlighted) {
          newParts.push(part);
          return;
        }
        
        const text = part.text;
        const highlightText = highlight.text;
        const index = text.indexOf(highlightText);
        
        if (index !== -1) {
          // Split the text into before, highlight, and after
          const before = text.substring(0, index);
          const after = text.substring(index + highlightText.length);
          
          if (before) {
            newParts.push({ text: before, highlighted: false });
          }
          
          newParts.push({ 
            text: highlightText, 
            highlighted: true,
            type: highlight.type 
          });
          
          if (after) {
            newParts.push({ text: after, highlighted: false });
          }
        } else {
          newParts.push(part);
        }
      });
      
      parts = newParts;
    });
    
    // Merge adjacent non-highlighted parts
    const mergedParts = [];
    let currentPart = { text: '', highlighted: false };
    
    parts.forEach(part => {
      if (part.highlighted) {
        if (currentPart.text) {
          mergedParts.push({ ...currentPart });
          currentPart = { text: '', highlighted: false };
        }
        mergedParts.push(part);
      } else {
        currentPart.text += part.text;
      }
    });
    
    if (currentPart.text) {
      mergedParts.push(currentPart);
    }
    
    // Render the parts
    return mergedParts.map((part, index) => {
      if (part.highlighted) {
        if (part.type === 'green') {
          return (
            <span key={index} className="text-green-400 font-semibold">
              {part.text}
            </span>
          );
        } else {
          return (
            <span key={index} className="font-semibold">
              {part.text}
            </span>
          );
        }
      }
      return part.text;
    });
  };

  const aboutData = t('about') || {};
  const paragraphs = aboutData.paragraphs || [];

  return (
    <section
      id="about"
      className="py-20 flex items-center justify-center px-6 md:px-20 relative z-10"
    >
      {/* Glassmorphism Container */}
      <div className="max-w-5xl bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-[0_0_25px_rgba(34,197,94,0.2)] p-10 md:p-14 text-center">
        
        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-green-400 drop-shadow-[0_0_10px_#22c55e]">
          {aboutData.title || 'About Me'}
        </h2>

        {/* Content */}
        <div className="text-gray-100 text-lg leading-relaxed space-y-5 text-justify">
          {paragraphs.map((paragraph, index) => (
            <p key={index}>
              {renderTextWithHighlights(paragraph.text, paragraph.highlights)}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;