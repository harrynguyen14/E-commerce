'use client'
import React, { useEffect } from 'react'

const DynamicTitle = () => {
    useEffect(() => {
        const words = [
          "Buy your dream",
          "Live your style"
        ];
        let currentIndex = 0;
        let charIndex = 0;
        let isDeleting = false;
        let currentText = "";
    
        const interval = setInterval(() => {
          const targetWord = words[currentIndex];
    
          if (!isDeleting) {
            currentText = targetWord.substring(0, charIndex + 1);
            charIndex++;
            
            if (charIndex === targetWord.length) {
              isDeleting = true;
              setTimeout(() => {}, 2000); 
            }
          } else {
            currentText = targetWord.substring(0, charIndex);
            charIndex--;
            
            if (charIndex === 0) {
              isDeleting = false;
              currentIndex = (currentIndex + 1) % words.length;
            }
          }
    
          document.title = currentText || words[0];
        }, isDeleting ? 50 : 100);
    
        return () => clearInterval(interval);
      }, []);
    
      return null;
}

export default DynamicTitle