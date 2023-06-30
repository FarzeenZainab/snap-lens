import Card from "../components/base/Card";
import ImageArea from "../components/base/ImageArea";

export default function Index() {
  return (
    <div className="container mx-auto p-4">
      <div className="main-layout">
        <Card>
          <ImageArea />
        </Card>
      </div>
    </div>
  );
}
