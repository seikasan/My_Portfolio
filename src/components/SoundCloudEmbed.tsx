import styles from './SoundCloudEmbed.module.css';

interface SoundCloudEmbedProps {
  embedSrc: string;
  title: string;
  entryUrl: string;
  entryLabel: string;
  profileUrl?: string;
  profileLabel?: string;
  height?: number;
}

export function SoundCloudEmbed({
  embedSrc,
  title,
  entryUrl,
  entryLabel,
  profileUrl,
  profileLabel,
  height = 166,
}: SoundCloudEmbedProps) {
  return (
    <div className={styles.embed}>
      <iframe
        className={styles.frame}
        title={title}
        width="100%"
        height={String(height)}
        scrolling="no"
        frameBorder={0}
        allow="autoplay"
        loading="lazy"
        src={embedSrc}
      />
      <p className={styles.meta}>
        {profileUrl && profileLabel ? (
          <>
            <a href={profileUrl} target="_blank" rel="noreferrer">
              {profileLabel}
            </a>
            <span className={styles.separator}> / </span>
          </>
        ) : null}
        <a href={entryUrl} target="_blank" rel="noreferrer">
          {entryLabel}
        </a>
      </p>
    </div>
  );
}
