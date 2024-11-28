import { useQuery, useMutation } from "@tanstack/react-query";
import axiosInstance from "@/api";
import { API_PATH } from "@/api/api-path";
import useAuth from "../stores/auth.store";

type UserInfoResponse = {
  success: boolean;
  data: {
    nickname: string;
    icon: string | null;
    tag: string;
  };
};

type UpdateNicknameRequest = {
  nickname: string;
};

type UpdateNicknameResponse = {
  success: boolean;
  message?: string;
};

type UpdateProfileIconResponse = {
  success: boolean;
  message?: string;
  profileIcon?: string;
};

const fetchUserInfo = async (): Promise<UserInfoResponse> => {
  const { accessToken } = useAuth.getState();
  if (!accessToken) {
    throw new Error("토큰 없음");
  }

  const url = `${API_PATH.user}/info`;
  const response = await axiosInstance.get(url);
  return response.data;
};

const updateNickname = async (
  data: UpdateNicknameRequest
): Promise<UpdateNicknameResponse> => {
  const { accessToken } = useAuth.getState();
  if (!accessToken) {
    throw new Error("토큰 없음");
  }

  const url = `${API_PATH.user}/nickname`;
  const response = await axiosInstance.put(url, data);
  console.log("닉네임 변경 요청 완료");
  return response.data;
};

const updateProfileIcon = async (
  file: File
): Promise<UpdateProfileIconResponse> => {
  const { accessToken } = useAuth.getState();
  if (!accessToken) {
    throw new Error("토큰 없음");
  }

  const url = `${API_PATH.user}/profile-icon`;
  const formData = new FormData();
  formData.append("profileIcon", file);

  const response = await axiosInstance.put(url, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  console.log("프로필 아이콘 수정 요청 완료");
  return response.data;
};

export const useGetUserInfo = () => {
  return useQuery<UserInfoResponse>({
    queryKey: ["userInfo"],
    queryFn: fetchUserInfo,
    staleTime: 5000,
  });
};

export const useUpdateNickname = () => {
  return useMutation<UpdateNicknameResponse, Error, UpdateNicknameRequest>({
    mutationFn: (data: UpdateNicknameRequest) => updateNickname(data),
    onSuccess: (response) => {
      if (response.success) {
        console.log("닉네임 변경 성공");
      } else {
        console.error("닉네임 변경 실패:", response.message);
      }
    },
    onError: (error) => {
      console.error("닉네임 변경 요청 중 오류 발생:", error);
    },
  });
};

export const useUpdateProfileIcon = () => {
  return useMutation<UpdateProfileIconResponse, Error, File>({
    mutationFn: updateProfileIcon,
    onSuccess: () => {
      console.log("프로필 아이콘 수정 성공:");
    },
    onError: (error) => {
      console.error("프로필 아이콘 수정 실패:", error);
    },
  });
};
