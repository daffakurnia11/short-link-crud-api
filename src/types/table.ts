/**
 * Define the type of column object for general table
 */
export type ColumnObjectType = {
  title: string;
  dataIndex: string;
  key: string;
};

/**
 * Define the short link interface object
 */
export interface ShortLinkItem {
  key: string;
  name: string;
  origin: number;
  custom: string;
}

/**
 * Define the editable cell props
 */
export interface EditableCellProps extends React.HTMLAttributes<HTMLElement> {
  editing: boolean;
  dataIndex: string;
  title: any;
  inputType: 'custom' | 'origin';
  record: ShortLinkItem;
  index: number;
  children: React.ReactNode;
}