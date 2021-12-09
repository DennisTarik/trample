import styles from './MenuCard.module.css';

type MenuCardProps = {
  text: string;
  imgSrc: string;
  href: string;
};

export default function MenuCard({
  text,
  imgSrc,
  href,
}: MenuCardProps): JSX.Element {
  return (
    <a className={styles.profile} href={href}>
      <img src={imgSrc} alt="Profile picture" className={styles.picture} />
      <span className={styles.text}>{text}</span>
    </a>
  );
}
