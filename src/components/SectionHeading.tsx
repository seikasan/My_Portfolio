import styles from './SectionHeading.module.css';

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
}: SectionHeadingProps) {
  const shouldShowEyebrow =
    eyebrow.trim().toLowerCase() !== title.trim().toLowerCase();

  return (
    <div className={styles.heading}>
      {shouldShowEyebrow ? <p className={styles.eyebrow}>{eyebrow}</p> : null}
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.description}>{description}</p>
    </div>
  );
}
