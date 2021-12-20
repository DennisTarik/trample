import styles from './MenuCard.module.css';

type MenuCardProps = {
  text: string;
  imgSrc: string;
  href: string;
  alt: string;
  size: 'small' | 'big';
};

export default function MenuCard({
  text,
  imgSrc,
  href,
  alt,
  size,
}: MenuCardProps): JSX.Element {
  return (
    <a
      className={size === 'big' ? styles.cardbig : styles.cardsmall}
      href={href}
    >
      <img src={imgSrc} alt={alt} className={styles.picture} />
      <span className={styles.text}>{text}</span>
    </a>
  );
}
