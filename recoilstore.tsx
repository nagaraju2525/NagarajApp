import { atom, selector } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();
interface types {
  text: string;
}

export const userData = atom({
  key: "userData",
  default: {} as any,
  effects_UNSTABLE: [persistAtom],
});

export const seceltorValue = selector({
  key: "seceltorValue",
  get: ({ get }) => ({
    userName: get(userData).userName,
    userPassword: get(userData).userPassword,
  }),
});
