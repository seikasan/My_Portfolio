import type { ComponentType } from 'react';
import { AccessToYour5GirlsContent } from './access-to-your-5-girls';
import { ReturnFalseContent } from './return-false';

const workContentRegistry: Record<string, ComponentType | undefined> = {
  'access-to-your-5-girls': AccessToYour5GirlsContent,
  'return-false': ReturnFalseContent,
};

export function getWorkContent(slug: string) {
  return workContentRegistry[slug];
}
