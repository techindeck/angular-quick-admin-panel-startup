export enum eFilterOption {
  DEPARTMENT = 'department',
  CLASSIFICATION = 'classification',
  ARTIST = 'artist',
  DATE = 'date',
  CULTURE = 'culture',
  SORTBY = 'sortBy',
  ORDER = 'order',
}
export interface IDepartment {
  id: number;
  dept: string;
}
export interface IClassification {
  id: number;
  class: string;
}

export interface IArtist {
  id: number;
  name: string;
  bio: string;
}

export interface IDate {
  id: number;
  date: string;
}

export interface ICulture {
  id: number;
  culture: string;
}
export interface IFilterData {
  department: IDepartment[];
  classification: IClassification[];
  artist: IArtist[];
  date: IDate[];
  culture: ICulture[];
}

export interface IFilter {
  department: number | string | null;
  classification: number | string | null;
  artist: number | string | null;
  date: string | null;
  culture: string | null;
}

export interface IQueryStatistics {
  current_page: number;
  from: number;
  last_page: number;
  per_page: number;
  to: number;
  total: number;
}

export interface ISort {
  sortBy: string;
  sortOrder: string;
}

export interface ICollection {
  key: string;
  name: string;
  avatar: string;
  type: string;
}

export enum eStorage {
  LS, //'localStorage'
  SS, //'sessionStorage'
}

export interface IQuery {
  src: string;
  _qtp: string;
  searchField: string;
  department?: number | null;
  classification?: number | null;
  artist?: number | null;
  date?: string | null;
  culture?: string | null;
  page: number;
  perPage: number;
  offset: number;
  sortBy: string;
  sortOrder: string;
  view: string;
  instanceId: number;
  key: string;
  _aud: string;
  q: string;
}

export interface IMenu {
  name: string;
  path: string;
  hasOptions: boolean;
  params?: any;
}

export interface IMenuWithOption {
  title: string;
  hasOptions: boolean;
  isCollapsed: boolean;
  options: IMenu[]
}
