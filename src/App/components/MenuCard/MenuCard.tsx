import styles from './MenuCard.module.css';

type MenuCardProps = {
  text: string;
  imgSrc: string;
  href: string;
  alt: string;
};

export default function MenuCard({
  text,
  imgSrc,
  href,
  alt,
}: MenuCardProps): JSX.Element {
  return (
    <a className={styles.cardbig} href={href}>
      <img src={imgSrc} alt={alt} className={styles.picture} />
      <span className={styles.text}>{text}</span>
    </a>
  );
}
