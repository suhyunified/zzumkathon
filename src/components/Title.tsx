import Text from "./Text";

const Title = ({
  title,
  subTitle,
}: {
  title: React.ReactNode;
  subTitle?: React.ReactNode;
}) => {
  return (
    <div className="px-[24px] py-[16px] pb-[40px]">
      <Text px={26} weight={700} align="center" className="mb-[12px]">
        {title}
      </Text>
      {subTitle && (
        <Text
          px={16}
          weight={500}
          align="center"
          color="#B9C0C6"
          className="mt-[12px]"
        >
          {subTitle}
        </Text>
      )}
    </div>
  );
};

export default Title;
