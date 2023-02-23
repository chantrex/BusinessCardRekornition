import { Row, Card } from "antd";

function ListCards() {
  return (
    <>
      <Card
        title="Card one"
        bordered={false}
        style={{
          width: 300,
        }}
      >
        <p>Card content</p>
        <p>Card content</p>
        <p>Card content</p>
      </Card>
      <Card
        title="Card two"
        bordered={false}
        style={{
          width: 300,
        }}
      >
        <p>Card content</p>
        <p>Card content</p>
        <p>Card content</p>
      </Card>
    </>
  );
}
export default ListCards;
