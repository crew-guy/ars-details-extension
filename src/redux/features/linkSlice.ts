import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from 'uuid';

export interface LinkI {
  id:string,
  text: string,
  imgSrc: string,
  address:string
}

interface LinksState{
  links: LinkI[];
}

interface CreateLinkI{
  text: string,
  imgSrc: string,
  address:string
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
    addLink: (state: LinksState, action: PayloadAction<CreateLinkI>) => {
      state.links.push({id:uuidv4(), ...action.payload});
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
