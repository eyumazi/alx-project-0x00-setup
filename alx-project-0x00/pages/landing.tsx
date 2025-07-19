import Card from "@/components/Card";
import Button from "../components/Button";

const Landing: React.FC = () => {
  return (
    <div>
      <h1 className="text-xl font-extralight mb-4">Landing Page</h1>
      <div className="space-y-4">
        <div className="space-x-2">
          <Button
            title="Small / rounded-sm"
            size="small"
            shape="rounded-sm"
            styles="bg-blue-100 text-blue-700"
          />
          <Button
            title="Small / rounded-md"
            size="small"
            shape="rounded-md"
            styles="bg-green-100 text-green-700"
          />
          <Button
            title="Small / rounded-full"
            size="small"
            shape="rounded-full"
            styles="bg-red-100 text-red-700"
          />
        </div>
        <div className="space-x-2">
          <Button
            title="Medium / rounded-sm"
            size="medium"
            shape="rounded-sm"
            styles="bg-blue-200 text-blue-800"
          />
          <Button
            title="Medium / rounded-md"
            size="medium"
            shape="rounded-md"
            styles="bg-green-200 text-green-800"
          />
          <Button
            title="Medium / rounded-full"
            size="medium"
            shape="rounded-full"
            styles="bg-red-200 text-red-800"
          />
        </div>
        <div className="space-x-2">
          <Button
            title="Large / rounded-sm"
            size="large"
            shape="rounded-sm"
            styles="bg-blue-300 text-blue-900"
          />
          <Button
            title="Large / rounded-md"
            size="large"
            shape="rounded-md"
            styles="bg-green-300 text-green-900"
          />
          <Button
            title="Large / rounded-full"
            size="large"
            shape="rounded-full"
            styles="bg-red-300 text-red-900"
          />
        </div>
      </div>
      <div className="mt-8">
        <Card />
      </div>
    </div>
  );
};
export default Landing;
