import styles from './SpotifyEmbed.module.css';

interface SpotifyEmbedProps {
  embedSrc: string;
  title: string;
}

export function SpotifyEmbed({ embedSrc, title }: SpotifyEmbedProps) {
  return (
    <div className={styles.embed}>
      <iframe
        className={styles.frame}
        src={embedSrc}
        title={title}
        loading="lazy"
        allowFullScreen
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      />
    </div>
  );
}
