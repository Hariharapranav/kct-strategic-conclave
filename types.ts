import React from 'react';

export interface Speaker {
  id: number;
  name: string;
  role: string;
  description: string;
  image: string;
}

export interface ScheduleItem {
  time?: string;
  title: string;
  description: string;
  speaker?: string;
  isBreak?: boolean;
}

export interface SponsorshipTier {
  name: string;
  amount: string;
  benefits: string[];
  highlight?: boolean;
}

export interface StatItem {
  label: string;
  value: string;
  icon: React.ElementType;
}

export interface VideoItem {
  title: string;
  url: string;
}