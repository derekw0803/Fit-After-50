// pages/index.js
import React from "react";
import { Button } from "@/components/ui/Button";
import { Card, CardContent } from "@/components/ui/Card";
import { Input } from "@/components/ui/Input";
import { motion } from "framer-motion";

export default function FitAfter50() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <header className="text-center mb-10">
        <h1 className="text-4xl font-bold text-gray-800">Fit After 50</h1>
        <p className="text-lg text-gray-600 mt-2">
          Lose Fat. Build Muscle. Live Stronger.
        </p>
      </header>

      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12"
      >
        <Card className="rounded-2xl shadow-lg">
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Why Strength Matters
            </h2>
            <p className="text-gray-600">
              As we age, muscle mass naturally declines. Strength training not only boosts
              metabolism and burns fat, but also enhances mobility, balance, and confidence.
            </p>
          </CardContent>
        </Card>
        <Card className="rounded-2xl shadow-lg">
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Nutrition for Fat Loss
            </h2>
            <p className="text-gray-600">
              Eating smart is key. Learn how to fuel your body with protein-rich meals
              and simple strategies to reduce body fat without extreme diets.
            </p>
          </CardContent>
        </Card>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mb-16"
      >
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Workouts for Muscle Growth & Bone Density
        </h2>
        <div className="grid gap-8">
          <Card className="rounded-2xl shadow-lg">
            <CardContent className="p-6">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">3-Day Routine</h3>
              <ul className="list-disc pl-5 text-gray-700 space-y-2">
                <li>
                  <strong>Day 1 – Push (Chest, Shoulders, Triceps):</strong> Bench Press, Dumbbell Shoulder Press, Incline Dumbbell Press, Triceps Rope Pushdown, Plank.
                </li>
                <li>
                  <strong>Day 2 – Pull (Back, Biceps):</strong> Lat Pulldown, Dumbbell Row, Face Pulls, Hammer Curls, Farmer's Carry.
                </li>
                <li>
                  <strong>Day 3 – Legs + Core:</strong> Goblet Squats, Romanian Deadlift, Step-Ups, Calf Raises, Russian Twists.
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="rounded-2xl shadow-lg">
            <CardContent className="p-6">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">5-Day Routine</h3>
              <ul className="list-disc pl-5 text-gray-700 space-y-2">
                <li>
                  <strong>Day 1 – Chest & Triceps:</strong> Flat Bench Press, Incline Dumbbell Press, Cable Crossover, Skull Crushers, Overhead Dumbbell Extension.
                </li>
                <li>
                  <strong>Day 2 – Back & Biceps:</strong> Pull-Ups, Barbell Rows, Seated Cable Row, EZ-Bar Curls, Concentration Curls.
                </li>
                <li>
                  <strong>Day 3 – Legs (Strength + Bone Density):</strong> Leg Press, Romanian Deadlift, Walking Lunges, Leg Curl Machine, Standing Calf Raises.
                </li>
                <li>
                  <strong>Day 4 – Shoulders & Core:</strong> Overhead Press, Lateral Raises, Front Plate Raise, Cable Face Pulls, Hanging Leg Raises.
                </li>
                <li>
                  <strong>Day 5 – Functional Full Body & Balance:</strong> Kettlebell Swings, Sled Push/Battle Ropes, Farmer’s Carries, Box Step Ups, Bird Dog Hold.
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="text-center"
      >
        <h3 className="text-2xl font-bold text-gray-800 mb-4">
          Ready to Get Started?
        </h3>
        <p className="text-gray-600 mb-6">
          Sign up for our free guide and jumpstart your transformation today.
        </p>
        <form className="max-w-md mx-auto flex flex-col gap-4">
          <Input type="email" placeholder="Your email" className="p-4" />
          <Button className="bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-xl">
            Get the Free Guide
          </Button>
        </form>
      </motion.section>
    </div>
  );
}

