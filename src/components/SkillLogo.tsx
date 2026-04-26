import {
  siBlender,
  siC,
  siCplusplus,
  siCss,
  siGithub,
  siHtml5,
  siJavascript,
  siUnity,
  type SimpleIcon,
} from 'simple-icons';
import csharpIcon from '../assets/skill-icons/csharp.svg';
import javaIcon from '../assets/skill-icons/java.svg';
import studioOneIcon from '../assets/skill-icons/studio-one.svg';
import visualBasicIcon from '../assets/skill-icons/visualbasic.svg';
import type { SkillLogoId } from '../types/content';
import styles from './SkillLogo.module.css';

interface SkillLogoProps {
  logoId: SkillLogoId;
  label: string;
}

const simpleIconMap: Partial<Record<SkillLogoId, SimpleIcon>> = {
  c: siC,
  cplusplus: siCplusplus,
  html5: siHtml5,
  css: siCss,
  javascript: siJavascript,
  blender: siBlender,
  unity: siUnity,
  github: siGithub,
};

const assetIconMap: Partial<Record<SkillLogoId, string>> = {
  csharp: csharpIcon,
  vba: visualBasicIcon,
  java: javaIcon,
  studioOne: studioOneIcon,
};

export function SkillLogo({ logoId, label }: SkillLogoProps) {
  const simpleIcon = simpleIconMap[logoId];
  const assetIcon = assetIconMap[logoId];

  if (simpleIcon) {
    return (
      <span className={styles.logo} aria-hidden="true">
        <svg className={styles.icon} viewBox="0 0 24 24" focusable="false">
          <path fill={`#${simpleIcon.hex}`} d={simpleIcon.path} />
        </svg>
      </span>
    );
  }

  if (assetIcon) {
    return (
      <span className={styles.logo} aria-hidden="true">
        <img className={styles.image} src={assetIcon} alt="" aria-hidden="true" />
      </span>
    );
  }

  return (
    <span className={styles.logo} aria-hidden="true">
      <span className={styles.fallback}>{label.trim().slice(0, 1)}</span>
    </span>
  );
}
