
"use client";
import React from 'react';

function handleSpeech(text) {
  try {
    const utterance = new SpeechSynthesisUtterance();
    utterance.text = text;

    // Optional: Customize voice and other properties
    // utterance.voice = speechSynthesis.getVoices()[0]; // Select a voice
    // utterance.rate = 1; // Adjust speech rate
    // utterance.pitch = 1; // Adjust pitch

    utterance.onend = () => {
      console.log('Speech synthesis has finished.');
    };

    utterance.onerror = (error) => {
      console.error('Speech synthesis error:', error);
      alert('Speech synthesis encountered an error. Please try again.'); 
    };

    speechSynthesis.speak(utterance);
  } catch (error) {
    console.error('An unexpected error occurred:', error);
    alert('An unexpected error occurred during speech synthesis.');
  }
}

export default handleSpeech;