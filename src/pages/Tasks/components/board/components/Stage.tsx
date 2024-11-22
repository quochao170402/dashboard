import { Card } from "@/custom-components/card";
import { IdCard } from "lucide-react";

const Stage = () => {
  const card = (
    <div>
      <div>
        <IdCard />
      </div>
      <h1>asdfasdf</h1>
      <div>
        <IdCard />
      </div>
      <h1>asdfasdf</h1>
    </div>
  );
  return (
    <div className="w-60 bg-slate-500 max-h-full min-h-60 flex flex-col items-center justify-center gap-4 p-4 rounded-md">
      <Card title={"Item"} isShowTitle={false} children={card} />
      <Card title={"Item"} isShowTitle={false} children={card} />
      <Card title={"Item"} isShowTitle={false} children={card} />
      <Card title={"Item"} isShowTitle={false} children={card} />
      <Card title={"Item"} isShowTitle={false} children={card} />
    </div>
  );
};

export default Stage;
