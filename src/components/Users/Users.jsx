import React from "react";

import { Paginator } from "../Commosn/Paginator/Paginator";
import { User } from "./User";

import style from "./Users.module.css";

const Users = ({
  currentPage,
  totalUsersCount,
  pageSize,
  onPageChanged,
  users,
  ...props
}) => {
  return (
    <div>
      <Paginator
        currentPage={currentPage}
        totalItemCount={totalUsersCount}
        onPageChanged={onPageChanged}
        pageSize={pageSize}
      />
      {users.map((us) => (
        <User
          key={us.id}
          user={us}
          followingInProgress={props.followingInProgress}
          unfollow={props.unfollow}
          follow={props.follow}
        />
      ))}
    </div>
  );
};

export default Users;
