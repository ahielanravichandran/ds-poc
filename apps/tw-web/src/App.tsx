import { Button } from "@ds/tw-button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@ds/tw-dialog";
import { Slider } from "@ds/tw-slider";
import { Slider as SliderV1 } from "@ds/tw-slider/v1";
import { useState } from "react";
import "@ds/tw-slider/dist/index.css";

function App() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState([50]);
  const [valueV1, setValueV1] = useState([50]);

  return (
    <div>
      <Dialog open={open} onOpenChange={setOpen}>
        <Button onClick={() => setOpen(true)}>Open Dialog</Button>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Tailwind Dialog</DialogTitle>
          </DialogHeader>
          <p>This is a dialog built with Tailwind + Radix.</p>
          <div>
            <Button onClick={() => setOpen(false)}>Close</Button>
          </div>
        </DialogContent>
      </Dialog>

      <div>
        <div
          style={{
            display: "flex",
            gap: "20px",
            alignItems: "center",
            WebkitUserSelect: "none",
            userSelect: "none",
            touchAction: "none",
            width: "200px",
            height: "20px",
          }}
        >
          <Slider value={value} onValueChange={setValue} max={100} step={1} />
          <SliderV1
            value={valueV1}
            onValueChange={setValueV1}
            max={100}
            step={1}
          />
        </div>
        <p>Value: {value}</p>
      </div>
    </div>
  );
}

export default App;
