import { Button, Flex, Grid, NativeSelect, Modal, Alert } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { API_URL, elements } from "../lib";
import { useForm, Controller } from "react-hook-form";
import { useState } from "react";

const AlertModal = (props) => {
  return (
    <Modal opened={props?.opened} onClose={props?.close} title="Result">
      <Alert
        variant="light"
        color="blue"
        title=""
        style={{ textAlign: "center", border: "1px solid navy" }}
      >
        {"Selected Mushroom is "}
        <strong>{props?.result}!</strong>
      </Alert>
    </Modal>
  );
};

const Predict = () => {
  const [loading, setLoading] = useState(false);
  const [resultText, setResultText] = useState("");
  const [opened, { open, close }] = useDisclosure(false);

  const methods = useForm({
    defaultValues: {
      cap_shape: "x",
      cap_surface: "s",
      cap_color: "y",
      bruises: "t",
      odor: "a",
      gill_attachment: "f",
      gill_spacing: "c",
      gill_size: "b",
      gill_color: "k",
      stalk_shape: "e",
      stalk_root: "c",
      stalk_surface_above_ring: "s",
      stalk_surface_below_ring: "s",
      stalk_color_above_ring: "w",
      stalk_color_below_ring: "w",
      veil_color: "w",
      ring_number: "o",
      ring_type: "p",
      spore_print_color: "n",
      population: "n",
      habitat: "g",
    },
  });
  const { control, handleSubmit } = methods;

  const onSubmit = async (data) => {
    const controller = new AbortController();
    setLoading(true);
    try {
      const response = await fetch(API_URL, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
        signal: controller?.signal,
      });

      const responseData = await response?.json();
      if (!!responseData?.result) {
        setResultText(responseData?.result === "e" ? "EDIBLE" : "POISONOUS");
        open?.();
      }
    } catch (err) {
      alert("OOps!! Something went wrong!");
    } finally {
      setLoading(false);
      controller.abort();
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid gutter={{ base: 10, xs: "md", md: "xl", xl: 20 }}>
          {elements?.map?.((el) => (
            <Grid.Col key={el?.attribute} span={4}>
              <Controller
                name={el?.name}
                control={control}
                render={({ field: { onChange, onBlur, value } }) => (
                  <NativeSelect
                    withAsterisk
                    label={el?.attribute}
                    data={el?.options}
                    value={value}
                    onChange={onChange}
                    onBlur={onBlur}
                    required
                  />
                )}
              />
            </Grid.Col>
          ))}
        </Grid>
        <Flex justify={"flex-end"} style={{ marginTop: "1rem" }}>
          <Button
            type="submit"
            variant="filled"
            color="orange"
            style={{ color: "#fff" }}
            loading={loading}
          >
            Submit
          </Button>
        </Flex>
      </form>
      {resultText && opened && (
        <AlertModal opened={opened} close={close} result={resultText} />
      )}
    </>
  );
};

export default Predict;
