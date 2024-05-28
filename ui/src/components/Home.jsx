import { Container, Title, Space, Table, ScrollArea } from "@mantine/core";
import { elements } from "../lib";
import Predict from "./Predict";

const Home = () => {
  const rows = elements.map((element) => (
    <Table.Tr key={element.attribute}>
      <Table.Td>{element.attribute}</Table.Td>
      <Table.Td>{element.values}</Table.Td>
    </Table.Tr>
  ));
  return (
    <Container
      size={"lg"}
      style={{
        padding: "2.5rem 1.5rem",
      }}
    >
      <Title order={2} mb={"15px"} style={{ textAlign: "center" }}>
        Select the appropriate values to detect whether the mushroom is EDIBLE
        or POISONOUS.
      </Title>

      <Predict />
      <Space h={"xl"} />
      <Title order={4} px={"xs"} mb={"md"}>
        Full form of the values above listed below
      </Title>
      <ScrollArea w={300} h={400}>
        <Table style={{ overflowX: "scroll" }}>
          <Table.Thead>
            <Table.Tr>
              <Table.Th>Attribute</Table.Th>
              <Table.Th>Values</Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>{rows}</Table.Tbody>
        </Table>
      </ScrollArea>
    </Container>
  );
};

export default Home;
