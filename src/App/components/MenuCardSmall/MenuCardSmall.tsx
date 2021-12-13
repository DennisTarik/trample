import styles from './MenuCardSmall.module.css';

type MenuCardSmallProps = {
  text: string;
  imgSrc: string;
  href: string;
  alt: string;
};

export default function MenuCardSmall({
  text,
  imgSrc,
  href,
  alt,
}: MenuCardSmallProps): JSX.Element {
  return (
    <a className={styles.cardsmall} href={href}>
      <img src={imgSrc} alt={alt} className={styles.picture} />
      <span className={styles.text}>{text}</span>
    </a>
  );
}
