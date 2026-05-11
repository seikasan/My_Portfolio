import type { ComponentType } from 'react';
import { AccessToYour5GirlsContent } from './access-to-your-5-girls';
import { ChocoMapMakerContent } from './choco-map-maker';
import { ChocoTabiContent } from './choco-tabi';
import { ReturnFalseContent } from './return-false';
import { LostOfMusicContent } from "./lost-of-music";
import { MyArchitectureContent } from './my-architecture';

const workContentRegistry: Record<string, ComponentType | undefined> = {
  'choco-map-maker': ChocoMapMakerContent,
  'choco-tabi': ChocoTabiContent,
  'my-architecture': MyArchitectureContent,
  'access-to-your-5-girls': AccessToYour5GirlsContent,
  'return-false': ReturnFalseContent,
  'lost-of-music': LostOfMusicContent,
};

export function getWorkContent(slug: string) {
  return workContentRegistry[slug];
}
