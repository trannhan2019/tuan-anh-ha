import {
  Card,
  CardContent,
  CardHeader,
  IconButton,
  Typography,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

export default function CustomerCard({ cus }) {
  return (
    <Card>
      <CardHeader
        title={cus.name}
        action={
          <IconButton>
            <DeleteIcon />
          </IconButton>
        }
      />
      <CardContent>
        <Typography paragraph align="justify">
          {cus.details}
        </Typography>
      </CardContent>
    </Card>
  );
}
