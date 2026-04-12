import styles from './WorkRichContent.module.css';

interface SpoilerTableData {
  headers: string[];
  rows: string[][];
}

export interface SpoilerSectionData {
  summary: string;
  paragraphs: string[];
  table?: SpoilerTableData;
}

interface WorkSpoilerSectionProps {
  data: SpoilerSectionData;
}

export function WorkSpoilerSection({ data }: WorkSpoilerSectionProps) {
  return (
    <details className={styles.details}>
      <summary className={styles.detailsSummary}>{data.summary}</summary>
      <div className={styles.detailsBody}>
        {data.paragraphs.map((paragraph, index) => (
          <p key={`${paragraph.slice(0, 16)}-${index}`} className={styles.paragraph}>
            {paragraph}
          </p>
        ))}
        {data.table ? (
          <div className={styles.tableWrap}>
            <table className={styles.table}>
              <thead>
                <tr>
                  {data.table.headers.map((header) => (
                    <th key={header}>{header}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {data.table.rows.map((row) => (
                  <tr key={row[0]}>
                    {row.map((cell, cellIndex) => (
                      <td key={`${row[0]}-${cellIndex}`}>{cell}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : null}
      </div>
    </details>
  );
}
