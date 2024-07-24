import { createSlice } from "@reduxjs/toolkit";

export const sidebarTabs = [
  {
    id: 1,
    label: "Dashboard",
    icon: "dashboard",
    href: "/admin",
    subTabs: [
      {
        id: 1,
        label: "Overview",
        href: "/admin",
      },
    ],
  },
  {
    id: 2,
    label: "User Management",
    icon: "users",
    href: "/admin/users",
    subTabs: [
      {
        id: 1,
        label: "Users",
        href: "/admin/users",
      },
      {
        id: 2,
        label: "Reports",
        href: "/admin/reports",
      },
      {
        id: 3,
        label: "Feedbacks",
        href: "/admin/feedbacks",
      },
    ],
  },
  {
    id: 3,
    label: "Subscription",
    icon: "subscription",
    href: "/admin/subscription",
    subTabs: [
      {
        id: 1,
        label: "Subscription",
        href: "/admin/subscription",
      },
    ],
  },
];

interface SidebarTab {
  id: number;
  label: string;
  icon: string;
  href: string;
  subTabs: {
    id: number;
    label: string;
    href: string;
  }[];
}

interface SharedSliceState {
  sidebarData: SidebarTab[];
  selectedTab: {
    id: number;
    subTabId: number;
  };
}

interface sharedSliceInterface {
  sharedSlice: SharedSliceState;
}

const initialState = {
  sidebarData: sidebarTabs,
  selectedTab: {
    id: 1,
    subTabId: 1,
  },
};

const sharedSlice = createSlice({
  name: "sharedSlice",
  initialState,
  reducers: {
    setSidebarData: (state, action) => {
      state.sidebarData = action.payload;
    },
    setSelectedTab: (state, action) => {
      state.selectedTab = action.payload;
    },
  },
});

export const { setSidebarData } = sharedSlice.actions;

export const getSidebarData = (state: sharedSliceInterface) =>
  state.sharedSlice.sidebarData;
export const getSelectedTab = (state: sharedSliceInterface) =>
  state.sharedSlice.selectedTab;

export default sharedSlice.reducer;
