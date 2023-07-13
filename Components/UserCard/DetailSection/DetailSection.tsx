import { Idetail } from "@/src/t";
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
        <span>Name: {detail?.name}</span>
        <span>ID: {detail?.login}</span>
        <Link href={"#"} target="_blank">
          Profile: {detail?.html_url}
        </Link>
        <span>public Repositry: {detail?.public_repos}</span>
      </div>
    </div>
  );
};

export default DetailSection;
