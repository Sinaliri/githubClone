import { IrepoDetail } from "@/src/t";
import Link from "next/link";
import styles from "./RepoCard.module.scss";

const RepoCard = (props: { Repo: IrepoDetail }) => {
  const { Repo } = props;
  const lastupdate = Repo.updated_at.split("T");
  return (
    <div className={`${styles.Container}`}>
      <div className={`${styles.name}`}>
        <Link href={Repo.html_url} target="_blank">
          {Repo.name}
        </Link>
        <span className={`${styles.visibility}`}>{Repo.visibility}</span>
      </div>
      <p>{Repo.description}</p>
      <div className={`${styles.subinfo}`}>
        {Repo.language && <span>{Repo.language}</span>}
        <span>updated at: {lastupdate[0]}</span>
        <span> satrs: {Repo.stargazers_count}</span>
        <span>forks: {Repo.forks_count}</span>
      </div>
    </div>
  );
};

export default RepoCard;
