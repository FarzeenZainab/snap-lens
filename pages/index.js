import Card from "../components/base/Card";
import ImageArea from "../components/base/ImageArea";
import Button from "../components/base/Button";

export default function Index() {
  return (
    <div className="container mx-auto p-4">
      <div className="main-layout">
        <div className="mb-3 flex justify-end">
          <Button label="Zoom-in" iconClass="icon-zoom-in" />
          <Button label="Zoom-out" iconClass="icon-zoom-out" />
        </div>
        <Card>
          <ImageArea />
        </Card>
      </div>
    </div>
  );
}
