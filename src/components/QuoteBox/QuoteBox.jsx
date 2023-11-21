import Quote from "../Quote/Quote";
import "./QuoteBox.css";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

export default function BasicCard() {
  return (
    <Card className="quotebox center">
      <CardContent>
        <Typography variant="body2">
          <Quote />
        </Typography>
      </CardContent>
    </Card>
  );
}
