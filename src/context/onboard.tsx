import { createContext, useState } from "react";

interface Form {
  name: string;
  itemType: number;
  message: string;
}
interface onboardContextInterface {
  form: Form;
  setForm?: React.Dispatch<React.SetStateAction<Form>>;
}

export const OnboardContext = createContext<onboardContextInterface>({
  form: { name: "", itemType: 0, message: "" },
});

export const OnboardContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [form, setForm] = useState<Form>({
    name: "",
    itemType: 0,
    message: "",
  });

  return (
    <OnboardContext.Provider value={{ form, setForm }}>
      {children}
    </OnboardContext.Provider>
  );
};
