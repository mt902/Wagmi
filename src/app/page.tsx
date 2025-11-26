"use client";

import React, { useState, useCallback, useMemo } from "react";
import { IntroScreen, QuestionScreen, ResultScreen } from "@/components";
import { questions } from "@/data/questions";
import { profiles, categoryOrder } from "@/data/profiles";
import { CategoryKey, Option, Scores, Profile } from "@/types";

type AppScreen = "intro" | "questions" | "result";

const initialScores: Scores = {
  meme: 0,
  l2: 0,
  ai: 0,
  macro: 0,
  elections: 0,
  sports: 0,
};

export default function Home() {
  const [currentScreen, setCurrentScreen] = useState<AppScreen>("intro");
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [scores, setScores] = useState<Scores>(initialScores);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Calculate the winning profile based on scores
  const winningProfile: Profile = useMemo(() => {
    let maxScore = -1;
    let winningCategory: CategoryKey = "meme";

    // Use categoryOrder for tie-breaking (first category with max score wins)
    for (const category of categoryOrder) {
      if (scores[category] > maxScore) {
        maxScore = scores[category];
        winningCategory = category;
      }
    }

    return profiles[winningCategory];
  }, [scores]);

  const handleStart = useCallback(() => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentScreen("questions");
      setIsTransitioning(false);
    }, 300);
  }, []);

  const handleAnswer = useCallback(
    (option: Option) => {
      // Update scores based on option weights
      setScores((prevScores) => {
        const newScores = { ...prevScores };
        Object.entries(option.weights).forEach(([category, weight]) => {
          if (weight !== undefined) {
            newScores[category as CategoryKey] += weight;
          }
        });
        return newScores;
      });

      // Transition to next question or results
      setIsTransitioning(true);
      setTimeout(() => {
        if (currentQuestionIndex < questions.length - 1) {
          setCurrentQuestionIndex((prev) => prev + 1);
        } else {
          setCurrentScreen("result");
        }
        setIsTransitioning(false);
      }, 300);
    },
    [currentQuestionIndex]
  );

  const handleRestart = useCallback(() => {
    setIsTransitioning(true);
    setTimeout(() => {
      setScores(initialScores);
      setCurrentQuestionIndex(0);
      setCurrentScreen("intro");
      setIsTransitioning(false);
    }, 300);
  }, []);

  return (
    <main
      className={`min-h-screen transition-opacity duration-300 ${
        isTransitioning ? "opacity-0" : "opacity-100"
      }`}
    >
      {currentScreen === "intro" && <IntroScreen onStart={handleStart} />}

      {currentScreen === "questions" && (
        <QuestionScreen
          key={currentQuestionIndex}
          question={questions[currentQuestionIndex]}
          currentIndex={currentQuestionIndex}
          totalQuestions={questions.length}
          onAnswer={handleAnswer}
        />
      )}

      {currentScreen === "result" && (
        <ResultScreen profile={winningProfile} onRestart={handleRestart} />
      )}
    </main>
  );
}

