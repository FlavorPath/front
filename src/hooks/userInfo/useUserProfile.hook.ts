import {
  useGetUserInfo,
  useUpdateNickname,
  useUpdateProfileIcon,
} from "../../store/queries/uerInfo.query";

export const useSelectedUser = () => {
  const {
    data: userInfo,
    isLoading: isUserLoading,
    error: userError,
    refetch: refetchUserInfo,
  } = useGetUserInfo();

  const {
    mutate: updateNicknameMutate,
    isPending: isNicknameUpdating,
    error: nicknameError,
  } = useUpdateNickname();

  const {
    mutate: updateProfileIconMutate,
    isPending: isProfileIconUpdating,
    error: profileIconError,
  } = useUpdateProfileIcon();

  return {
    userInfo,
    isUserLoading,
    userError,
    refetchUserInfo,

    updateNickname: updateNicknameMutate,
    isNicknameUpdating,
    nicknameError,

    updateProfileIcon: updateProfileIconMutate,
    isProfileIconUpdating,
    profileIconError,
  };
};
