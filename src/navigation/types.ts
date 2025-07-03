import { DrawerNavigationProp } from '@react-navigation/drawer';

export type RootDrawerParamList = {
  Home: undefined;
  About: undefined;
};

export type DrawerNavProps<T extends keyof RootDrawerParamList> = {
  navigation: DrawerNavigationProp<RootDrawerParamList, T>;
};
