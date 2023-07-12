import DetailSection from "./DetailSection/DetailSection";
import styles from "./UserCard.module.scss";
import UserRepos from "./UserRepos/UserRepos";
import { Idetail, IrepoDetail } from "../../src/t";
const UserCard = (props: { detail: Idetail; repo: IrepoDetail }) => {
  return (
    <div className={`${styles.Container}`}>
      <DetailSection detail={props.detail} />
      <UserRepos repo={props.repo} />
    </div>
  );
};

export default UserCard;
