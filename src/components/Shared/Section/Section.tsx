const Section = ({
  children,
  classN,
}: {
  children: React.ReactNode;
  classN?: string;
}) => {
  return <section className={`py-16 ${classN}`}>{children}</section>;
};

export default Section;
