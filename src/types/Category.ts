'use client'
import React from "react";

export type CategoryButton = {
  name: string;
}

export type Category = {
  selectedCategory: string;
  setSelectedCategory: React.Dispatch<React.SetStateAction<string>>;
}