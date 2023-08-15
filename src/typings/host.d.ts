/// <reference types="react" />
/// <reference types="react-router-dom" />

declare module 'host/StoreMessages' {
  const storeMessages: HostStoreMessage;
  export default storeMessages;
}

type Nullable<T> = T | null;

type DataItem = {
  id: string;
  name: string;
};

type ItemList = {
  label: string;
  id: string;
};

type DatePeriod = 'day' | 'dayTime' | 'workDay' | 'month' | 'custom'; // | 'three' | 'half' | 'year'

type Status = "normal" | "system" | "success" | "warning" | "alert";

type WellParamsName = "field" | "workChar" | "workRegime" | "explMethod" | "layers" | "shop" | "tlName" | "dnsName" | "knsName" | "cluster" | "zu";

type SetMessageFn = (message: string, status: Status) => void;

interface HostStore {
  storeHost: InterfaceStoreHost;
}

type Well = {
  field: DataItem[];
  workChar: DataItem[];
  workRegime: DataItem[];
  explMethod: DataItem[];
  layers: DataItem[];
  shop: DataItem[];
  tlName: DataItem[];
  dnsName: DataItem[];
  cluster: DataItem[];
  zu: DataItem[];
  id: number;
  name: string;
};

// MASTER FILTER

type FilterParams = Record<string, ItemList[]>;

type FilterBody = {
  companyId: string,
  dataRange: [Date, Date],
  datePeriodType: DatePeriod;
  params: Nullable<FilterParams>,
  items: Nullable<Well[]>,
  dateFrom?: Date,
  dateTo?: Date,
}

type FilterOption = {
  controls: WellParamsName[],
  isWells: boolean,
}

type FilterEventCallback = (FilterBody) => void;

type FilterEvent = (eventName: string, cb: FilterEventCallback, option?: FilterOption) => void;


// HOST STORE

type HostOption = {
  filterOption?: FilterOption,
  datePeriods?: DatePeriod[],
}

type HostOptionEventHandler = (props?: HostOption) => void;

interface InterfaceStoreHost {
  setMessage: Nullable<((message: string, status: Status) => void)>;
  filterUnSubscribe: Nullable<FilterEvent>;
  filterSubscribe: Nullable<FilterEvent>;
  setOption: Nullable<HostOptionEventHandler>;
}

// ROUTE-MAP

type ParentSectionName = 'dashboards' | 'deviations' | 'eventsOTM' | 'eventsOP' | 'reports' | 'settings' | 'system';

type ComponentHost = React.FunctionComponent<HostStore>

type RouteMap = {
  [key in ParentSectionName]?: RouteMapSection
};

interface RouteMapSection {
  title?: string;
  sections: RouteMapItem[];
}

type RouteMapItem = {
  path: string,
  Component:  ComponentHost,
  section: ParentSectionName,
  filterDisabled?: true,
  title?: string,
  children?: RouteMapItem,
  remoteName?: string,
}
