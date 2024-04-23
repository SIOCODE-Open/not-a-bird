export function Group(props: { children: React.ReactNode }) {
  return (
    <div className="flex row wrap justify-start align-center">
      {props.children}
    </div>
  );
}
