import type { ComponentType } from 'react';
import { AccessToYour5GirlsContent } from './access-to-your-5-girls';
import { ChocoMapMakerContent } from './choco-map-maker';
import { ChocoTabiContent } from './choco-tabi';
import { ReturnFalseContent } from './return-false';
import { LostOfMusicContent } from "./lost-of-music";
import { MyArchitectureContent } from './my-architecture';
import { LylaContent } from './lyla';
import { SuperBallContent } from './super-ball';
import { EntitiesEventStreamContent } from './entities-event-stream';
import { MyExtensionsContent } from './my-extensions';
import { CleanFoundationContent } from './clean-foundation';

const workContentRegistry: Record<string, ComponentType | undefined> = {
  'super-ball': SuperBallContent,
  'entities-event-stream': EntitiesEventStreamContent,
  'my-extensions': MyExtensionsContent,
  'clean-foundation': CleanFoundationContent,
  'choco-map-maker': ChocoMapMakerContent,
  'choco-tabi': ChocoTabiContent,
  'my-architecture': MyArchitectureContent,
  lyla: LylaContent,
  'access-to-your-5-girls': AccessToYour5GirlsContent,
  'return-false': ReturnFalseContent,
  'lost-of-music': LostOfMusicContent,
};

export function getWorkContent(slug: string) {
  return workContentRegistry[slug];
}
