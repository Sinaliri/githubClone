import { Idetail } from "../../../assets/t";
import styles from "./DetailSection.module.scss";
import Link from "next/link";

const DetailSection = (props: { detail: Idetail }) => {
  const { detail } = props;
  return (
    <div className={`${styles.Container}`}>
      <div className={`${styles.imgWrapper}`}>
        <img src={detail?.avatar_url} alt="image" />
      </div>
      <div className={`${styles.profileDetail}`}>
        <span>{detail?.name}</span>
        <span>{detail?.login}</span>
        <span>
          <Link href={`${detail?.html_url}`} target="_blank">
            {detail?.html_url}
          </Link>
        </span>
        <span>public Repositry: {detail?.public_repos}</span>
      </div>
    </div>
  );
};

export default DetailSection;
