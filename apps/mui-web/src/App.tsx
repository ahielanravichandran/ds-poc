import { CustomDialog } from "@ds/mui-dialog";
import { Button } from "@ds/mui-button";
import { useState } from "react";

function App() {
  const [open, setOpen] = useState(false);

  return (
    <div style={{ padding: "1rem" }}>
      <Button variant="contained" onClick={() => setOpen(true)}>
        Open Dialog
      </Button>

      <CustomDialog
        open={open}
        onClose={() => setOpen(false)}
        title="MUI Dialog"
        actions={<Button onClick={() => setOpen(false)}>Close</Button>}
      >
        This is a dialog built with MUI + Emotion.
      </CustomDialog>
    </div>
  );
}

export default App;
