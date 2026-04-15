import styles from './YouTubeEmbed.module.css';

interface YouTubeEmbedProps {
  videoUrl: string;
  title: string;
  entryLabel?: string;
  caption?: string;
}

function extractVideoId(videoUrl: string) {
  if (/^[A-Za-z0-9_-]{11}$/.test(videoUrl)) {
    return videoUrl;
  }

  try {
    const url = new URL(videoUrl);
    const host = url.hostname.replace(/^www\./, '');

    if (host === 'youtu.be') {
      return url.pathname.split('/').filter(Boolean)[0];
    }

    if (host === 'youtube.com' || host === 'm.youtube.com') {
      if (url.pathname === '/watch') {
        return url.searchParams.get('v') ?? undefined;
      }

      if (url.pathname.startsWith('/embed/') || url.pathname.startsWith('/shorts/')) {
        return url.pathname.split('/').filter(Boolean)[1];
      }
    }
  } catch {
    return undefined;
  }

  return undefined;
}

function toWatchUrl(videoId: string) {
  return `https://www.youtube.com/watch?v=${videoId}`;
}

function toEmbedUrl(videoId: string) {
  return `https://www.youtube.com/embed/${videoId}`;
}

export function YouTubeEmbed({
  videoUrl,
  title,
  entryLabel = 'YouTube で開く',
  caption,
}: YouTubeEmbedProps) {
  const videoId = extractVideoId(videoUrl);

  if (!videoId) {
    return (
      <p className={styles.meta}>
        {caption ? (
          <>
            <span>{caption}</span>
            <span className={styles.separator}> / </span>
          </>
        ) : null}
        <a href={videoUrl} target="_blank" rel="noreferrer">
          {entryLabel}
        </a>
      </p>
    );
  }

  return (
    <div className={styles.embed}>
      <div className={styles.frameWrap}>
        <iframe
          className={styles.frame}
          title={title}
          src={toEmbedUrl(videoId)}
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          referrerPolicy="strict-origin-when-cross-origin"
        />
      </div>
      <p className={styles.meta}>
        {caption ? (
          <>
            <span>{caption}</span>
            <span className={styles.separator}> / </span>
          </>
        ) : null}
        <a href={toWatchUrl(videoId)} target="_blank" rel="noreferrer">
          {entryLabel}
        </a>
      </p>
    </div>
  );
}
