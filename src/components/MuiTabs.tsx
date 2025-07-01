import { Tabs, Tab, Box, Typography } from "@mui/material";
import { useState } from "react";

// Reusable TabPanel agar bersih
interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel({ children, value, index }: TabPanelProps) {
  return (
    <div hidden={value !== index} role="tabpanel">
      {value === index && (
        <Box p={2}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

export default function MuiTabs() {
  const [value, setValue] = useState(0);

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%", typography: "body1" }}>
      <Tabs
        value={value}
        onChange={handleChange}
        centered
        textColor="primary"
        indicatorColor="primary"
      >
        <Tab label="Tab 1" />
        <Tab label="Tab 2" />
        <Tab label="Tab 3" />
      </Tabs>

      <TabPanel value={value} index={0}>
        Konten untuk Tab 1
      </TabPanel>
      <TabPanel value={value} index={1}>
        Konten untuk Tab 2
      </TabPanel>
      <TabPanel value={value} index={2}>
        Konten untuk Tab 3
      </TabPanel>
    </Box>
  );
}
