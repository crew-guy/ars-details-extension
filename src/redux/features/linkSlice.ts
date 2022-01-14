import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface LinkI {
  id:string,
  text: string,
  imgSrc: string,
  address:string
}

interface LinksState{
  links: LinkI[];
}

interface UpdateLinkI{
  id: string,
  text?: string,
  imgSrc?: string,
  address?:string
}

const initialState: LinksState = {
  links:[]
}
export const LinkSlice = createSlice({
  name: "Link",
  initialState,
  reducers: {
    addLink: (state: LinksState, action: PayloadAction<LinkI>) => {
      state.links.push(action.payload);
    },
    updateLink: (state: LinksState, action: PayloadAction<UpdateLinkI>) => {
      state.links = state.links.map(link => link.id === action.payload.id ? {...link, ...action.payload} : link);
    },
    deleteLink: (state: LinksState, action: PayloadAction<string>) => {
      state.links = state.links.filter(link => link.id !== action.payload);
    }
  },
});

export const {
  addLink,
  updateLink,
  deleteLink
} = LinkSlice.actions;

export default LinkSlice.reducer;
