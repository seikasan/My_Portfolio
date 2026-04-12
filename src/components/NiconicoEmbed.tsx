import styles from './NiconicoEmbed.module.css';

interface NiconicoEmbedProps {
  embedSrc: string;
  title: string;
}

export function NiconicoEmbed({ embedSrc, title }: NiconicoEmbedProps) {
  return (
    <div className={styles.embed}>
      <iframe
        className={styles.frame}
        src={embedSrc}
        title={title}
        loading="lazy"
        scrolling="no"
        allowFullScreen
        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
      />
    </div>
  );
}
