type Props = {
  children?: React.ReactChild | React.ReactChild[];
};
type ItemsProps={
  Logo: any,
  Name: string,
  Description: string,
  OutPort: number,
  bgColor:string
  schema?:object
}

export { Props,ItemsProps };
