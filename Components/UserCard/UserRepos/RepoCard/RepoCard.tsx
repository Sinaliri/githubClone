import { IrepoDetail } from "@/src/t";
import Link from "next/link";
import styles from "./RepoCard.module.scss";

const RepoCard = (props: { Repo: IrepoDetail }) => {
  const { Repo } = props;
  return (
    <div className={`${styles.Container}`}>
      <div>
        <Link href={Repo.url}>{Repo.name}</Link>
        <span>{Repo.visibility}</span>
      </div>
      <div>
        <span>{Repo.language}</span>
        <span>{Repo.updated_at}</span>
        <span>{Repo.stargazers_count}</span>
        <span>{Repo.forks_count}</span>
      </div>
    </div>
  );
};

export default RepoCard;
