import type { ComponentType } from 'react';
import { AccessToYour5GirlsContent } from './access-to-your-5-girls';

const workContentRegistry: Record<string, ComponentType | undefined> = {
  'access-to-your-5-girls': AccessToYour5GirlsContent,
};

export function getWorkContent(slug: string) {
  return workContentRegistry[slug];
}
