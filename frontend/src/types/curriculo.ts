export type item = {
  label: string;
  placeholder: string;
  currentValue: any;
  setCurrentValue: React.Dispatch<React.SetStateAction<string>>;
};

export type ItensList = {
  firstItem: string;
  secondItem: string;
  thirdItem?: string;
  fourItem?: string;
};

export type PropsSection = {
  title: string;
  firstItem: item;
  secondItem: item;
  thirdItem?: item;
  fourItem?: item;
  onPressAdd: () => void;
  array: Array<any>;
};
