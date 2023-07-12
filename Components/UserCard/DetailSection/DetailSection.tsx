import { Idetail } from "@/src/t";
import styles from "./DetailSection.module.scss";

const DetailSection = (props: { detail: Idetail }) => {
  const { detail } = props;
  return (
    <div className={`${styles.Container}`}>
      <div className={`${styles.imgWrapper}`}>
        <img src={detail.avatar_url} alt="image" />
      </div>
      <div className={`${styles.profileDetail}`}>
        <span>{detail.login}</span>
        <span>{detail.url}</span>
        <span>{detail.public_repos}</span>
        <span>{detail.login}</span>
      </div>
    </div>
  );
};

export default DetailSection;
