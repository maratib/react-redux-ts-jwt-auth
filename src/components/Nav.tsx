import { history } from "@/helper";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { logout, toggleTheme } from "@/store";
import React, { FC, useEffect } from "react";

type Props = {
  name?: string;
};

export const Nav: FC<Props> = ({ name }) => {
  const dark = useAppSelector((state) => state.theme.dark);
  const dispatch = useAppDispatch();

  const handleOnClick = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    dispatch(toggleTheme());
  };
  const doLogout = () => {
    dispatch(logout());
    history.navigate("/");
  };

  return (
    <div className="flex justify-between ">
      <h1>Nav</h1>

      <div className="flex">
        <div className="dark:text-white" onClick={doLogout}>
          Logout
        </div>
        <div className="text-2xl" onClick={handleOnClick}>
          {dark ? "🌙" : "🌞"}
        </div>
      </div>
    </div>
  );
};
